
class AuthenticationService {
  constructor (api) {
    this.api = api
    return this
  }
  async authenticate (credentials) {
    console.log("authenticate")
    return this.api.create().post('authenticate',credentials)
  }
}
export default AuthenticationService
