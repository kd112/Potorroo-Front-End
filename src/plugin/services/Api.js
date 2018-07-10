import axios from 'axios'
class Api {
  constructor (token) {
    this.token = token
  }
  setToken (token) {
    this.token = token
  }
  create (custom) {
    let headers = Object.assign({ 'Authorization': `Bearer ${this.token}` }, custom)
    return axios.create({
      baseURL: `http://localhost:5000`,
      headers: headers
    })
  }
}
export default Api
