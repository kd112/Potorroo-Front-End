import axios from 'axios'

class Api {
  constructor (token) {
    this.token = token
    return this
  }

  create (customHeader) {
    let headers = Object.assign({},customHeader)
    return axios.create({
      baseURL: '/',
      headers: headers
    })
  }
}

export default Api
