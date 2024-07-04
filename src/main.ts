import { createApp } from 'vue'
import router from './router/index'
import pinia from './store'
import App from './App.vue'

import './style.less'
import './theme.less'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
