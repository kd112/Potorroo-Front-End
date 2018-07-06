// import Api from './Api';

class UserService {
  constructor (api) {
    this.api = api
    this.url = 'api/users'
    return this
  }
  getUsersByQuery (filter, options) {
    return this.api.create().get(this.url)
  }
}

export default UserService
