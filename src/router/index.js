import Vue from 'vue'
import Router from 'vue-router'

// components
import Login from '@/components/Login'
import Registration from '@/components/Registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    }
  ]
})
