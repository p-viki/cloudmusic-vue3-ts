import { createApp } from 'vue'
import './style.less'
import router from './router/index'
import pinia from './store'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
