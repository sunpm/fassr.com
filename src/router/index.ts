import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

import Home from '@/views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/post',
    name: 'post',
    component: () => import("@/views/post/index.vue")
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
