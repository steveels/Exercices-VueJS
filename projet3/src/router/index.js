import { createRouter, createWebHistory } from 'vue-router'
import TriviaVue from '@/views/TriviaVue.vue'

const routes = [
  {
    path: '/',
    name: 'trivia',
    component: TriviaVue
  },
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
