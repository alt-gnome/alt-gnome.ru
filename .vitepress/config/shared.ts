import { defineConfigWithTheme } from 'vitepress'
import type { DefaultTheme } from 'vitepress'
import { headTransformer } from './plugins'
import { normalize } from '../support/utils'

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
  },
  transformPageData: (pageData) => {
    if (pageData.filePath.split('/')[0] in Object.keys(headTransformer)) {
      pageData.frontmatter.head ??= []
      headTransformer[pageData.filePath.split('/')[0]].frontmatterHead(
        pageData,
        normalize
      )
      headTransformer[pageData.filePath.split('/')[0]].notHomeFrontmatter(
        pageData,
        normalize
      )
    } else {
      pageData.frontmatter.head ??= []
      headTransformer['root'].frontmatterHead(pageData, normalize)
      headTransformer['root'].notHomeFrontmatter(pageData, normalize)
    }
  }
})
