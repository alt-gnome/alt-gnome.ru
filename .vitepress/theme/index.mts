// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import './style.css'

import AGHomeSponsors from './components/AGHomeSponsors.vue'
import AGHomeDonations from './components/AGHomeDonations.vue'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      'home-features-after': () => [h(AGHomeSponsors), h(AGHomeDonations)]
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme
