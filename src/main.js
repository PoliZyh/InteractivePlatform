import { createApp } from 'vue'
import App from './App.vue'

import pinia from './store'
import router from './router'

// import animated from 'animate.css'
import 'animate.css'
import 'animate.css/animate.compat.css'
import './utils/flexible'
import '@/styles/index.scss'


const app = createApp(App)


app.use(pinia).use(router)

app.mount('#app')
