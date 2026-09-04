import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import VoiceReader from './VoiceReader.vue'
import GeminiAssistant from './GeminiAssistant.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-before': () => h('div', { class: 'study-tools' }, [h(VoiceReader), h(GeminiAssistant)]),
  }),
}
