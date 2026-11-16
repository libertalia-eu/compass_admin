import { ref } from 'vue'
import { call } from 'frappe-ui'

export const languages = [{ label: 'English', value: 'en' }, { label: 'Deutsch', value: 'de' }]

// the message of the last failed call, shown by the page
export function useApi() {
  const error = ref('')
  async function api(method, args) {
    error.value = ''
    try {
      return await call(`compass_admin.api.${method}`, args)
    } catch (e) {
      error.value = e.messages?.[0] || e.message
      return undefined
    }
  }
  return { api, error }
}
