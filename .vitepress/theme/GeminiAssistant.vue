<script setup lang="ts">
import { onMounted, ref } from 'vue'

const storageKey = 'shreyas-study.gemini-api-key'
const apiKey = ref('')
const draftKey = ref('')
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

function saveKey() {
  apiKey.value = draftKey.value.trim()
  if (apiKey.value) localStorage.setItem(storageKey, apiKey.value)
  else localStorage.removeItem(storageKey)
  showSettings.value = false
  error.value = ''
}

function clearKey() {
  apiKey.value = ''
  draftKey.value = ''
  localStorage.removeItem(storageKey)
  showSettings.value = false
}

async function askGemini(prompt: string) {
  if (!apiKey.value) {
    showSettings.value = true
    error.value = 'Enter your Gemini API key to use the AI study assistant.'
    return
  }

  loading.value = true
  answer.value = ''
  error.value = ''
  try {
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${encodeURIComponent(apiKey.value)}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: 'You are a patient MCA study tutor. Use only the supplied module text. Explain clearly, define technical terms, and say when the module does not contain enough information.' }] },
        contents: [{ parts: [{ text: `Module text:\n${pageText()}\n\nLearner request:\n${prompt}` }] }],
        generationConfig: { temperature: 0.3, maxOutputTokens: 1200 },
      }),
    })
    const data = await response.json()
    if (!response.ok) throw new Error(data.error?.message || `Gemini request failed (${response.status})`)
    answer.value = data.candidates?.[0]?.content?.parts?.map((part: { text?: string }) => part.text || '').join('').trim() || 'Gemini returned no text.'
  } catch (requestError) {
    error.value = requestError instanceof Error ? requestError.message : 'Could not connect to Gemini.'
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  apiKey.value = localStorage.getItem(storageKey) || ''
  draftKey.value = apiKey.value
})
</script>

<template>
  <section class="gemini-assistant" aria-label="Gemini AI study assistant">
    <div class="gemini-assistant__header">
      <div>
        <span class="voice-reader__eyebrow">AI study assistant</span>
        <strong>Ask Gemini about this module</strong>
      </div>
      <button class="voice-reader__secondary" type="button" @click="showSettings = !showSettings">
        {{ apiKey ? 'Key saved' : 'Add Gemini key' }}
      </button>
    </div>

    <div v-if="showSettings" class="gemini-assistant__settings">
      <label for="gemini-api-key">Your Gemini API key</label>
      <input id="gemini-api-key" v-model="draftKey" type="password" autocomplete="off" placeholder="Paste your key from Google AI Studio">
      <div class="gemini-assistant__setting-actions">
        <button class="voice-reader__primary" type="button" @click="saveKey">Save on this device</button>
        <button v-if="apiKey" class="voice-reader__secondary" type="button" @click="clearKey">Remove key</button>
      </div>
      <small>Your key stays in this browser and is sent directly to Google. It is never stored in this site’s code.</small>
    </div>

    <div class="gemini-assistant__actions">
      <button class="voice-reader__secondary" type="button" :disabled="loading" @click="askGemini('Explain the main ideas in this module in simple language, then give one practical example.')">Explain simply</button>
      <button class="voice-reader__secondary" type="button" :disabled="loading" @click="askGemini('Summarize this module as concise exam revision notes with the most important definitions and rules.')">Summarize</button>
      <form class="gemini-assistant__question" @submit.prevent="askGemini(question)">
        <input v-model="question" aria-label="Ask Gemini a question" placeholder="Ask a question about this module...">
        <button class="voice-reader__primary" type="submit" :disabled="loading || !question.trim()">{{ loading ? 'Thinking...' : 'Ask' }}</button>
      </form>
    </div>

    <p v-if="error" class="gemini-assistant__error" role="alert">{{ error }}</p>
    <div v-if="answer" class="gemini-assistant__answer" aria-live="polite">
      <strong>Gemini’s answer</strong>
      <p>{{ answer }}</p>
    </div>
  </section>
</template>
