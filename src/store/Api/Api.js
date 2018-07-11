import axios from 'axios'

class Api {
  constructor (token) {
    this.token = token
    return this
  }

  create (customHeader) {
    let headers = Object.assign({},customHeader)
    return axios.create({
      baseURL: 'http://localhost:5000',
      headers: headers
    })
  }
}

export default Api
