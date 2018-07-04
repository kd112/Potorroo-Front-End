import Api from '@/plugin/services/Api'
class AuthenticationService{
  constructor(){

  }
  async authenticate(credentials){
    return await Api().post('authenticate',credentials)
  }
  async getSession(){
    return await Api().get('session',{withCredentials:true})
  }
}
export default AuthenticationService;

// export default {
//   async authenticate (credentials) {
//     return Api().post('authenticate', credentials)
//   }

// }
