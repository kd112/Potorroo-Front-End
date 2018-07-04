import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: `http://localhost:5000`,
    headers:{"Access-Control-Allow-Origin":"http://localhost:8080"}
  })
}
