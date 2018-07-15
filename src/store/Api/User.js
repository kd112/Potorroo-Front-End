class UserService {
  constructor (api) {
    this.api = api
    this.url = 'api/users'
    return this
  }
  getUsersByQuery (token,filter, options) {
    let headers = { Authorization: `Bearer ${token}` }
    return this.api.create(headers).get(this.url)
  }
  async invite(token,invite) {
    let headers = { Authorization: `Bearer ${token}` }
    return this.api.create(headers).post(`${this.url}/invite`,invite)
  }
}

export default UserService
