import { handler } from 'directus-extension-ssr'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { UserModule } from './types'
import routes from '~pages'

import '@unocss/reset/tailwind-compat.css'
import 'uno.css'
import './assets/styles/main.css'

export default handler(App, {
  routerOptions: {
    routes: setupLayouts(routes),
  },
}, async (ctx) => {
  // install all modules under `modules/`
  Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
    .forEach(i => i.install?.(ctx))
})
