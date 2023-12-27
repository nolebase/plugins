import { cwd } from 'node:process'
import { defineConfig } from 'vitepress'
import { BiDirectionalLinks } from '@nolebase/markdown-it-bi-directional-links'
import type { Options as ElementTransformOptions } from '@nolebase/markdown-it-element-transform'
import { ElementTransform } from '@nolebase/markdown-it-element-transform'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lastUpdated: true,
  themeConfig: {
    outline: 'deep',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/nolebase/integrations' },
    ],
  },
  locales: {
    'root': {
      label: 'English',
      lang: 'en',
      link: '/pages/en/',
      title: 'Nólëbase Integrations',
      description: 'A collection of diverse documentation engineering tools',
      themeConfig: {
        nav: [
          { text: 'Guide', link: '/pages/en/guide/getting-started' },
          { text: 'Integrations', link: '/pages/en/integrations/' },
        ],
        sidebar: [
          {
            text: 'Introduction',
            items: [
              { text: 'Getting Started', link: '/pages/en/guide/getting-started' },
            ],
          },
          {
            text: 'Integrations',
            items: [
              { text: 'Overview', link: '/pages/en/integrations/' },
            ],
          },
          {
            text: 'Obsidian Plugins',
            items: [
              { text: 'UnoCSS', link: '/pages/en/integrations/obsidian-plugin-unocss/' },
            ],
          },
          {
            text: 'Markdown It Plugins',
            items: [
              { text: 'Bi-directional links', link: '/pages/en/integrations/markdown-it-bi-directional-links/' },
              { text: 'Elements Transformation', link: '/pages/en/integrations/markdown-it-element-transform/' },
            ],
          },
          {
            text: 'VitePress Plugins',
            items: [
              { text: 'Enhanced Readabilities', link: '/pages/en/integrations/vitepress-plugin-enhanced-readabilities/' },
              { text: 'Inline Links Previewing', link: '/pages/en/integrations/vitepress-plugin-inline-link-preview/' },
              { text: 'Blinking highlight targeted heading', link: '/pages/en/integrations/vitepress-plugin-highlight-targeted-heading/' },
              { text: 'Changelog & File history', link: '/pages/en/integrations/vitepress-plugin-git-changelog/' },
            ],
          },
        ],
      },
    },
    'zh-CN': {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/pages/zh-CN/',
      title: 'Nólëbase 集成',
      description: '多元化的文档工程工具合集',
      themeConfig: {
        nav: [
          { text: '指南', link: '/pages/zh-CN/guide/getting-started' },
          { text: '集成', link: '/pages/zh-CN/integrations/' },
        ],
        sidebar: [
          {
            text: '指南',
            items: [
              { text: '如何开始', link: '/pages/zh-CN/guide/getting-started' },
            ],
          },
          {
            text: '集成',
            items: [
              { text: '概览', link: '/pages/zh-CN/integrations/' },

            ],
          },
          {
            text: 'Obsidian 插件',
            items: [
              { text: 'UnoCSS', link: '/pages/zh-CN/integrations/obsidian-plugin-unocss/' },
            ],
          },
          {
            text: 'Markdown It 插件',
            items: [
              { text: '双向链接', link: '/pages/zh-CN/integrations/markdown-it-bi-directional-links/' },
              { text: '元素转换', link: '/pages/zh-CN/integrations/markdown-it-element-transform/' },
            ],
          },
          {
            text: 'VitePress 插件',
            items: [
              { text: '阅读增强', link: '/pages/zh-CN/integrations/vitepress-plugin-enhanced-readabilities/' },
              { text: '行内链接预览', link: '/pages/zh-CN/integrations/vitepress-plugin-inline-link-preview/' },
              { text: '闪烁高亮当前的目标标题', link: '/pages/zh-CN/integrations/vitepress-plugin-highlight-targeted-heading/' },
              { text: '变更日志 及 文件历史', link: '/pages/zh-CN/integrations/vitepress-plugin-git-changelog/' },
            ],
          },
        ],
      },
    },
  },
  markdown: {
    config(md) {
      md.use(BiDirectionalLinks({
        dir: cwd(),
      }))

      md.use(ElementTransform, (() => {
        let transformNextLinkCloseToken = false

        return {
          transform(token) {
            switch (token.type) {
              case 'link_open':
                if (token.attrGet('class') !== 'header-anchor') {
                  token.tag = 'VPNolebaseInlineLinkPreview'
                  transformNextLinkCloseToken = true
                }
                break
              case 'link_close':
                if (transformNextLinkCloseToken) {
                  token.tag = 'VPNolebaseInlineLinkPreview'
                  transformNextLinkCloseToken = false
                }

                break
            }
          },
        } as ElementTransformOptions
      })())
    },
  },
})
