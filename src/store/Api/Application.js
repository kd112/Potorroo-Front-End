class ApplicationServices {
  constructor (api) {
    this.api = api
    return this
  }
  async authenticate (credentials) {
    return this.api.create().post('authenticate', credentials)
  }

  getSession (token) {
    return this.api.create({ 'cookies': token }).get('session', token)
  }
  async invite(token,invite) {
    let headers = { Authorization: `Bearer ${token}` }
    console.log('invite')
    return await this.api.create(headers).post("invite",invite)
  }
}

export default ApplicationServices
