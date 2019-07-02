import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue'
import GamePage from '@/components/pages/GamesPage.vue'
import App from '@/App.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/', 
    component: App,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      {
        path: 'games',
        component: GamePage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router