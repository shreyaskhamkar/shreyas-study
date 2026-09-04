import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import VoiceReader from './VoiceReader.vue'
import OllamaAssistant from './OllamaAssistant.vue'
import './style.css'

const showStudyTools = false

export default {
  extends: DefaultTheme,
  Layout: () => h(DefaultTheme.Layout, null, {
    'doc-before': () => showStudyTools
      ? h('div', { class: 'study-tools' }, [h(VoiceReader), h(OllamaAssistant)])
      : null,
  }),
}
