import services from './Api/index'
import Vue from 'vue'
import Vuex from 'vuex'
import Users from '@/store/modules/User'
import Maps from '@/store/modules/Map'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedIn: false,
    isAdmin: false
  },
  modules:{
    Users:Users,
    Maps:Maps
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
    async login ({ commit }, credentials) {
     let { data } = await services.ApplicationService.authenticate(credentials)

      commit('setToken', data.token)
      commit('setUser', data.user)
    },
    async logout ({ commit }) {
      commit('setToken', null)
        commit('setUser', null)
     },
    async setUser ({ commit }, cookie) {
      try{
        let { data } = await services.ApplicationService.getSession(cookie)
  
        commit('setToken', data.token)
        commit('setUser', data.user)
        
      }catch(error){
        
      }
    }
  }
})
