import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'

export const shared = defineConfigWithTheme<DefaultTheme.Config>({
  srcDir: './src/pages',
  cleanUrls: true,
  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
