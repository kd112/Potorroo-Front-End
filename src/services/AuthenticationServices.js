import Api from '@/services/Api'
export default {
  async authenticate (credentials) {
    return Api().post('authenticate', credentials)
  }

}
