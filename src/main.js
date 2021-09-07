import Vue from 'vue'
import App from './App'
import router from './router'

// components
import Login from '@/components/Login.vue'
Vue.component(Login)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
