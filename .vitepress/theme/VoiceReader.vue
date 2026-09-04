<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vitepress'
import { getModuleContext, type ModuleEntry } from './moduleCatalog'

const route = useRoute()
const router = useRouter()
const isSupported = ref<boolean | null>(null)
const isPlaying = ref(false)
const isPaused = ref(false)
const currentChunk = ref(0)
const chunks = ref<string[]>([])
const rate = ref(1)
const playlistMode = ref(false)
const status = ref('Ready to read this page')
const moduleContext = computed(() => getModuleContext(route.path))
const previousModule = computed<ModuleEntry | undefined>(() => {
  const context = moduleContext.value
  return context?.subject.modules[context.index - 1]
})
const nextModule = computed<ModuleEntry | undefined>(() => {
  const context = moduleContext.value
  return context?.subject.modules[context.index + 1]
})

let voices: SpeechSynthesisVoice[] = []
let refreshTimer: number | undefined
const shouldAutoStart = ref(false)
const storageKey = 'shreyas-study.voice-reader'

const progress = computed(() => chunks.value.length
  ? Math.round((currentChunk.value / chunks.value.length) * 100)
  : 0)

function getReadableText() {
  const doc = document.querySelector('.vp-doc')
  if (!doc) return ''

  const clone = doc.cloneNode(true) as HTMLElement
  clone.querySelectorAll('pre, code, button, svg, img, .header-anchor').forEach((node) => node.remove())

  return (clone.innerText || clone.textContent || '')
    .replace(/\s+/g, ' ')
    .replace(/\s+([,.;:!?])/g, '$1')
    .trim()
}

function splitIntoChunks(text: string) {
  const sentences = text.match(/[^.!?]+[.!?]+(?:\s|$)|[^.!?]+$/g) || []
  const result: string[] = []
  let buffer = ''

  for (const sentence of sentences) {
    const next = `${buffer} ${sentence}`.trim()
    if (next.length > 220 && buffer) {
      result.push(buffer)
      buffer = sentence.trim()
    } else {
      buffer = next
    }
  }
  if (buffer) result.push(buffer)
  return result
}

function stopReading(message = 'Ready to read this page') {
  window.speechSynthesis.cancel()
  isPlaying.value = false
  isPaused.value = false
  currentChunk.value = 0
  status.value = message
}

function savePreferences() {
  localStorage.setItem(storageKey, JSON.stringify({
    rate: rate.value,
    playlistMode: playlistMode.value,
    path: playlistMode.value ? route.path : null,
  }))
}

function loadPreferences() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey) || '{}') as {
      rate?: number
      playlistMode?: boolean
      path?: string | null
    }
    if (saved.rate && [0.75, 1, 1.25, 1.5, 2].includes(saved.rate)) rate.value = saved.rate
    playlistMode.value = saved.playlistMode === true && saved.path === route.path
  } catch {
    localStorage.removeItem(storageKey)
  }
}

function navigateToModule(module: ModuleEntry, startReading = false) {
  stopReading()
  if (startReading) playlistMode.value = true
  shouldAutoStart.value = startReading
  savePreferences()
  router.go(module.path)
}

function speakChunk(index: number) {
  if (index >= chunks.value.length) {
    const followingModule = playlistMode.value ? nextModule.value : undefined
    stopReading(followingModule ? `Moving to Module ${followingModule.number}` : 'Finished reading this page')
    currentChunk.value = chunks.value.length
    if (followingModule) navigateToModule(followingModule, true)
    return
  }

  currentChunk.value = index
  const utterance = new SpeechSynthesisUtterance(chunks.value[index])
  utterance.rate = rate.value
  utterance.pitch = 1
  const preferredVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith('en'))
  if (preferredVoice) utterance.voice = preferredVoice
  utterance.onstart = () => {
    isPlaying.value = true
    isPaused.value = false
    status.value = `Reading section ${index + 1} of ${chunks.value.length}`
  }
  utterance.onend = () => speakChunk(index + 1)
  utterance.onerror = (event) => {
    if (event.error !== 'canceled' && event.error !== 'interrupted') stopReading('Could not read this page')
  }
  window.speechSynthesis.speak(utterance)
}

function toggleReading() {
  if (!isSupported.value) return
  if (isPlaying.value && !isPaused.value) {
    window.speechSynthesis.pause()
    isPaused.value = true
    status.value = 'Paused'
    return
  }
  if (isPaused.value) {
    window.speechSynthesis.resume()
    isPaused.value = false
    status.value = `Reading section ${currentChunk.value + 1} of ${chunks.value.length}`
    return
  }
  chunks.value = splitIntoChunks(getReadableText())
  if (!chunks.value.length) {
    status.value = 'There is no readable content on this page'
    return
  }
  speakChunk(0)
}

function togglePlaylist() {
  playlistMode.value = !playlistMode.value
  savePreferences()
  status.value = playlistMode.value ? 'Playlist mode is on' : 'Playlist mode is off'
}

function refreshForPage() {
  stopReading()
  window.clearTimeout(refreshTimer)
  refreshTimer = window.setTimeout(() => {
    chunks.value = splitIntoChunks(getReadableText())
    if (shouldAutoStart.value && chunks.value.length) {
      shouldAutoStart.value = false
      speakChunk(0)
    }
  }, 80)
}

onMounted(() => {
  isSupported.value = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window
  if (isSupported.value) {
    loadPreferences()
    voices = window.speechSynthesis.getVoices()
    window.speechSynthesis.onvoiceschanged = () => { voices = window.speechSynthesis.getVoices() }
    refreshForPage()
  }
})

watch([rate, playlistMode], () => {
  if (isSupported.value) savePreferences()
})

watch(() => route.path, async () => {
  await nextTick()
  refreshForPage()
  if (isSupported.value) savePreferences()
})

onBeforeUnmount(() => {
  window.clearTimeout(refreshTimer)
  window.speechSynthesis?.cancel()
})
</script>

<template>
  <section v-if="isSupported" class="voice-reader" aria-label="Voice read mode">
    <div class="voice-reader__copy">
      <span class="voice-reader__eyebrow">Audio study mode</span>
      <strong>{{ isPlaying && !isPaused ? 'Reading aloud' : isPaused ? 'Paused' : 'Listen to this module' }}</strong>
      <span class="voice-reader__status">{{ status }}</span>
    </div>
    <div class="voice-reader__controls">
      <button class="voice-reader__primary" type="button" @click="toggleReading">
        {{ isPlaying && !isPaused ? 'Pause' : isPaused ? 'Resume' : 'Play' }}
      </button>
      <button class="voice-reader__secondary" type="button" :disabled="!isPlaying && !isPaused" @click="stopReading()">Stop</button>
      <button v-if="moduleContext" class="voice-reader__secondary" type="button" :aria-pressed="playlistMode" @click="togglePlaylist">
        {{ playlistMode ? 'Stop playlist' : 'Start playlist' }}
      </button>
      <button v-if="moduleContext" class="voice-reader__secondary" type="button" :disabled="!previousModule" @click="previousModule && navigateToModule(previousModule)">Previous module</button>
      <button v-if="moduleContext" class="voice-reader__secondary" type="button" :disabled="!nextModule" @click="nextModule && navigateToModule(nextModule)">Next module</button>
      <span v-if="moduleContext" class="voice-reader__position">{{ moduleContext.subject.name }} - Module {{ moduleContext.moduleNumber }} of {{ moduleContext.subject.modules.length }}</span>
      <label class="voice-reader__rate">Speed
        <select v-model.number="rate" :disabled="isPlaying && !isPaused" aria-label="Reading speed">
          <option :value="0.75">0.75x</option>
          <option :value="1">1x</option>
          <option :value="1.25">1.25x</option>
          <option :value="1.5">1.5x</option>
          <option :value="2">2x</option>
        </select>
      </label>
    </div>
    <div class="voice-reader__progress" role="progressbar" :aria-valuenow="progress" aria-valuemin="0" aria-valuemax="100" :aria-label="`${progress}% read`">
      <span :style="{ width: `${progress}%` }" />
    </div>
  </section>
  <p v-else-if="isSupported === false" class="voice-reader__fallback" role="status">
    Voice read mode needs a browser with speech synthesis support.
  </p>
</template>
