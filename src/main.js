import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

import router from './router/routes.js'

Vue.use(Vuetify, {
  iconfont: 'md'
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router
})
