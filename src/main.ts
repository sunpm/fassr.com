import { createApp } from 'vue'
import {router} from '@/router'
import 'element-plus/theme-chalk/dark/css-vars.css'

import './style.css'
import App from './App.vue'


const app = createApp(App)
app.use(router)
app.mount('#app')
