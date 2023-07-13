import { handler } from 'directus-extension-ssr'
import { routes } from 'vue-router/auto/routes'
import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import type { UserModule } from './types'
import '@unocss/reset/tailwind-compat.css'
import 'uno.css'

export default handler(App,
  {
    routes: setupLayouts(routes),
  },
  async (ctx) => {
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
  },
)
