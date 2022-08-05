import { createApp } from 'vue'
import {router} from '@/router'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'element-plus/dist/index.css'

import '@/assets/styles/app.scss'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
