import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '@/components/pages/HomePage.vue'
import GamesPage from '@/components/pages/GamesPage.vue'
import GamePage from '@/components/pages/GamePage.vue'
import AboutPage from '@/components/pages/AboutPage.vue'
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
        path: '',
        component: HomePage
      },
      {
        path: 'games',
        component: GamesPage
      },
      {
        path: 'about',
        component: AboutPage
      },
      {
        path: 'game/:id',
        component: GamePage
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router