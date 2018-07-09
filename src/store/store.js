import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isLoggedIn:false,
    isAdmin:false,
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      if(token){
        state.isLoggedIn=true
      }else{
        state.isLoggedIn=false
      }
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    }

  }
})
