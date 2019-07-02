import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './router/routes.js'

Vue.use(Vuetify)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router
})
