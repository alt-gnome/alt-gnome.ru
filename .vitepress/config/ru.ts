import { defineConfigWithTheme, type DefaultTheme } from 'vitepress'

export const nav = (): DefaultTheme.NavItem[] => [
  { text: 'О нас', link: '/' },
  { text: 'База знаний', link: 'https://alt-gnome.wiki/' },
  { text: 'Команды', link: '/markdown-examples' }
]

export const ru = defineConfigWithTheme<DefaultTheme.Config>({
  title: 'ALT Gnome',
  description: 'Свобдные программы для свободных людей',
  lang: 'ru-RU',
  themeConfig: {
    nav: nav(),
    footer: {
      message: '© 2025 ALT Gnome'
    }
  }
})
