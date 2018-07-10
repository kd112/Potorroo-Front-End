
class ApplicationServices {
  constructor (api) {
    this.api = api
    return this
  }
  async authenticate (credentials) {
    return this.api.create().post('authenticate', credentials)
  }

  getSession (token) {
    return this.api.create({'cookies': token}).get('session', token)
  }
}
export default ApplicationServices
