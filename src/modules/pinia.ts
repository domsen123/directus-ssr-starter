import { createPinia } from 'pinia'
import { type UserModule } from '~/types'

export const install: UserModule = ({ isClient, initialState }) => {
  const pinia = createPinia()

  if (isClient)
    pinia.state.value = (initialState.pinia) || {}

  else initialState.pinia = pinia.state.value
}
