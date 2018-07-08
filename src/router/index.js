import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index.vue'
// import Login from '@/components/Login'
// import MainApp from '@/components/MainApp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    // {
    //   path: '/app',
    //   name: 'MainApp',
    //   component: MainApp
    // }
  ],
  mode: 'history'
})
