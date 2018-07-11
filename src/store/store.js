import services from './Api/index'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
console.log(services)
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedIn: false,
    isAdmin: false
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isLoggedIn = true
      } else {
        state.isLoggedIn = false
      }
    },
    setUser (state, user) {
      state.user = user
      if (user) {
        state.isAdmin = user.isAdmin
      } else {
        state.isAdmin = false
      }
    }
  },
  actions: {
    setToken ({ commit }, token) {
      commit('setToken', token)
    },
    setUser ({ commit }, user) {
      commit('setUser', user)
    }
  }
})
