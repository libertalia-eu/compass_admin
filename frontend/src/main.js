import './index.css'
import { createApp } from 'vue'
import { FrappeUI, setConfig, frappeRequest } from 'frappe-ui'
import { spritePlugin } from 'frappe-ui/experimental'
import router from './router'
import App from './App.vue'
import { __ } from './translate'

const app = createApp(App)
setConfig('resourceFetcher', frappeRequest)
app.use(FrappeUI)
app.use(spritePlugin)
app.use(router)
app.config.globalProperties.__ = __
app.mount('#app')
