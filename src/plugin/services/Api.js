import axios from 'axios'
class Api {
  constructor (token) {
    this.token = token
  }
  setToken (token) {
    this.token = token
  }
  create () {
    return axios.create({
      baseURL: `http://localhost:5000`,
      headers: {'Authorization': `Bearer ${this.token}`}
    })
  }
}
export default Api
