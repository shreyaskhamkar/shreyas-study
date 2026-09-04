<script setup lang="ts">
import { onMounted, ref } from 'vue'

const settingsKey = 'shreyas-study.ollama-settings'
const geminiKeyStorageKey = 'shreyas-study.gemini-api-key'
const endpoint = ref('http://localhost:11434')
const model = ref('llama3.2')
const geminiKey = ref('')
const draftEndpoint = ref(endpoint.value)
const draftModel = ref(model.value)
const draftGeminiKey = ref('')
const question = ref('')
const answer = ref('')
const error = ref('')
const loading = ref(false)
const showSettings = ref(false)

function pageText() {
  const doc = document.querySelector('.vp-doc')
  if (!doc) return ''
  const clone = doc.cloneNode(true) as HTMLElement
  clone.querySelectorAll('pre, code, button, svg, img, .header-anchor').forEach((node) => node.remove())
  return (clone.innerText || clone.textContent || '').replace(/\s+/g, ' ').trim().slice(0, 14000)
}

function saveSettings() {
  endpoint.value = draftEndpoint.value.trim().replace(/\/$/, '') || 'http://localhost:11434'
  model.value = draftModel.value.trim() || 'llama3.2'
  localStorage.setItem(settingsKey, JSON.stringify({ endpoint: endpoint.value, model: model.value }))
  geminiKey.value = draftGeminiKey.value.trim()
  if (geminiKey.value) localStorage.setItem(geminiKeyStorageKey, geminiKey.value)
  else localStorage.removeItem(geminiKeyStorageKey)
  showSettings.value = false
  error.value = ''
}

function loadSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(settingsKey) || '{}') as { endpoint?: string; model?: string }
    if (saved.endpoint) endpoint.value = saved.endpoint
    if (saved.model) model.value = saved.model
    draftEndpoint.value = endpoint.value
    draftModel.value = model.value
    geminiKey.value = localStorage.getItem(geminiKeyStorageKey) || ''
    draftGeminiKey.value = geminiKey.value
  } catch {
    localStorage.removeItem(settingsKey)
  }
}

async function askGemini(prompt: string) {
  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/interactions?key=${encodeURIComponent(geminiKey.value)}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: 'gemini-3.6-flash',
      store: false,
      input: `Module text:\n${pageText()}\n\nLearner request:\n${prompt}`,
      system_instruction: 'You are a patient MCA study tutor. Use only the supplied module text. Explain clearly, define technical terms, and say when the module does not contain enough information.',
    }),
  })
  const data = await response.json()
  if (!response.ok) throw new Error(data.error?.message || `Gemini request failed (${response.status})`)
  const output = data.output_text || data.steps?.flatMap((step: { content?: Array<{ type?: string; text?: string }> }) => step.content || [])
    .filter((part: { type?: string }) => part.type === 'text')
    .map((part: { text?: string }) => part.text || '').join('')
  return output?.trim() || 'Gemini returned no text.'
}

async function askOllama(prompt: string) {
  loading.value = true
  answer.value = ''
  error.value = ''
  try {
    const response = await fetch(`${endpoint.value}/api/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: model.value,
        stream: false,
        messages: [
          { role: 'system', content: 'You are a patient MCA study tutor. Use only the supplied module text. Explain clearly, define technical terms, and say when the module does not contain enough information.' },
          { role: 'user', content: `Module text:\n${pageText()}\n\nLearner request:\n${prompt}` },
        ],
        options: { temperature: 0.3 },
      }),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.error || `Ollama request failed (${response.status})`)
    answer.value = data.message?.content?.trim() || 'Ollama returned no text.'
  } catch (requestError) {
    if (geminiKey.value) {
      try {
        answer.value = await askGemini(prompt)
        error.value = 'Ollama was unavailable, so Gemini provided this answer.'
        return
      } catch (fallbackError) {
        error.value = fallbackError instanceof Error
          ? `Ollama and Gemini failed: ${fallbackError.message}`
          : 'Ollama and Gemini could not be reached.'
      }
    } else {
      error.value = requestError instanceof Error
        ? `${requestError.message}. Start Ollama, or add a Gemini fallback key in settings.`
        : 'Could not connect to Ollama.'
    }
  } finally {
    loading.value = false
  }
}

onMounted(loadSettings)
</script>

<template>
  <section class="gemini-assistant" aria-label="Local Ollama AI study assistant">
    <div class="gemini-assistant__header">
      <div>
        <span class="voice-reader__eyebrow">Local AI study assistant</span>
        <strong>Ask Ollama about this module</strong>
      </div>
      <button class="voice-reader__secondary" type="button" @click="showSettings = !showSettings">
        {{ model }} settings
      </button>
    </div>

    <div v-if="showSettings" class="gemini-assistant__settings">
      <label for="ollama-endpoint">Ollama endpoint</label>
      <input id="ollama-endpoint" v-model="draftEndpoint" type="url" placeholder="http://localhost:11434">
      <label for="ollama-model">Installed model</label>
      <input id="ollama-model" v-model="draftModel" type="text" placeholder="llama3.2">
      <label for="gemini-api-key">Optional Gemini fallback key</label>
      <input id="gemini-api-key" v-model="draftGeminiKey" type="password" autocomplete="off" placeholder="Paste a key from Google AI Studio">
      <div class="gemini-assistant__setting-actions">
        <button class="voice-reader__primary" type="button" @click="saveSettings">Save settings</button>
      </div>
      <small>Ollama is tried first. If it is unavailable and a Gemini key is saved, Gemini 3.6 Flash is used as fallback. Keys stay in this browser and are sent directly to the provider.</small>
    </div>

    <div class="gemini-assistant__actions">
      <button class="voice-reader__secondary" type="button" :disabled="loading" @click="askOllama('Explain the main ideas in this module in simple language, then give one practical example.')">Explain simply</button>
      <button class="voice-reader__secondary" type="button" :disabled="loading" @click="askOllama('Summarize this module as concise exam revision notes with the most important definitions and rules.')">Summarize</button>
      <form class="gemini-assistant__question" @submit.prevent="askOllama(question)">
        <input v-model="question" aria-label="Ask Ollama a question" placeholder="Ask a question about this module...">
        <button class="voice-reader__primary" type="submit" :disabled="loading || !question.trim()">{{ loading ? 'Thinking...' : 'Ask' }}</button>
      </form>
    </div>

    <p v-if="error" class="gemini-assistant__error" role="alert">{{ error }}</p>
    <div v-if="answer" class="gemini-assistant__answer" aria-live="polite">
      <strong>Ollama's answer</strong>
      <p>{{ answer }}</p>
    </div>
  </section>
</template>
