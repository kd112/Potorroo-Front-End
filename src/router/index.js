import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/Index.vue'
import UsersList from '@/components/users.vue'
import Invite from '@/components/invite.vue'
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
    {
      path: '/users',
      name: 'users',
      component: UsersList
    },
    {
      path: '/invite/:id',
      name: 'invite',
      component: Invite,
      props: true
    }

    // {
    //   path: '/app',
    //   name: 'MainApp',
    //   component: MainApp
    // }
  ],
  mode: 'history'
});
