
class AuthenticationService {
  constructor (api) {
    this.api = api
    return this
  }
  async authenticate (credentials) {
    return this.api.create().post('authenticate',credentials)
  }
}
export default AuthenticationService
