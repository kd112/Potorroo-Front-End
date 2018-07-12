import services from '../Api/index'
const UsersModule = {
    state: {
        users:[]
    },
    mutations: {
        setUsers(state,users,rootState){
            console.log(users)
            state.users = users
        }
    },
    getters: {
        users(state,getters,rootState){
            let users = state.users
            return users
        }
    },
    actions: {
        async setUsers({state,commit,rootState},filter,options) {

            let res = await services.UserService.getUsersByQuery(rootState.token,filter,options)
            console.log(res.data)
            commit('setUsers',res.data.user)
        }
    }   
  }
  export default UsersModule
  