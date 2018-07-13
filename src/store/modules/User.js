import services from '../Api/index'
const UsersModule = {
  state: {
    users: []
  },
  mutations: {
    setUsers (state, users, rootState) {
      state.users = users
    },
    toggleAdmin (state, index, rootState) {
      let user = state.users[index]
      if (user) {
        user.isAdmin = !user.isAdmin
      }
    }
  },
  getters: {
    users (state, getters, rootState) {
      let users = state.users
      return users
    }
  },
  actions: {
    async setUsers ({state, commit, rootState}, filter, options) {
      let res = await services.UserService.getUsersByQuery(rootState.token, filter, options)
      commit('setUsers', res.data.user)
    },
    toggleAdmin ({commit}, index) {
      commit('toggleAdmin', index)
    }
  }
}
export default UsersModule
