import DefaultTheme from 'vitepress/theme'
import HomeCatalog from './components/HomeCatalog.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('HomeCatalog', HomeCatalog)
  },
}
