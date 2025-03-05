import { defineConfigWithTheme } from 'vitepress'
import type { DefaultTheme } from 'vitepress'



export const shared = defineConfigWithTheme<DefaultTheme.Config>({
  srcDir: './src/pages',
  cleanUrls: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
  ],
  themeConfig: {
    logo: {
      src: '/favicon.svg',
      style: 'height: 36px',
      alt: 'ALT Gnome Logo'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
