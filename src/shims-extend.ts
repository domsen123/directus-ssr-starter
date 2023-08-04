import 'directus-extension-ssr/types'
import 'pinia'

declare module 'directus-extension-ssr/types' {
  interface DirectusSchema {
  }
}

declare module 'pinia' {
  export interface PiniaCustomProperties {
    directus: import('directus-extension-ssr/types').AppDirectusClient
  }
}
