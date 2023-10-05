import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import DirectusSSR from 'directus-extension-ssr/plugin'
import Unocss from 'unocss/vite'
import WebfontDownload from 'vite-plugin-webfont-dl'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import generateSitemap from 'vite-plugin-pages-sitemap'

export default defineConfig({
  server: {
    watch: {
      usePolling: true,
      interval: 100,
    },
  },
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue(),
    DirectusSSR(),
    Unocss(),
    WebfontDownload(),
    Layouts(),
    Pages({
      dirs: ['src/views'],
      onRoutesGenerated: routes => generateSitemap({ routes }),
    }),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/head',
        '@vueuse/core',
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/composables',
        'src/stores',
      ],
      vueTemplate: true,
    }),
    Components({
      extensions: ['vue'],
      include: [/\.vue$/, /\.vue\?vue/],
      dts: 'src/components.d.ts',
    }),
  ],
})
