import { useData as useData$ } from 'vitepress'
import type { DefaultTheme } from 'vitepress'

export const useData: typeof useData$<DefaultTheme.Config> = useData$
