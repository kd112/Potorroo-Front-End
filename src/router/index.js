import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import MainApp from '@/components/MainApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/app',
      name: 'MainApp',
      component: MainApp
    }
  ],
  mode: 'history'
})
