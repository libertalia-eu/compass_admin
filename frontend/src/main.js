import './index.css'
import { createApp } from 'vue'
import { FrappeUI, setConfig, frappeRequest } from 'frappe-ui'
import { spritePlugin } from 'frappe-ui/experimental'
import router from './router'
import App from './App.vue'

const app = createApp(App)
setConfig('resourceFetcher', frappeRequest)
app.use(FrappeUI)
app.use(spritePlugin)
app.use(router)
// translated_messages comes from the boot data of www/admin.py
app.config.globalProperties.__ = (text) => (window.translated_messages || {})[text] || text
app.mount('#app')
