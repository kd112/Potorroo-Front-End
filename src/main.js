// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
import router from './router'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'font-awesome/css/font-awesome.css'
import VueLayers from 'vuelayers'
import 'vuelayers/lib/style.css'

Vue.use(VueLayers)
Vue.config.productionTip = false

Vue.use(Vuetify, {
  iconfont: 'mdi' || 'fa' 
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
