import AuthenticationService from './services/AuthenticationServices'
import UserService from './services/UserServices'
import FlattenJson from './helpers/flatten_json'
import Api from './services/Api'
const Potoroo = {
  install (Vue, options) {
    let _api = new Api()

    Vue.prototype.$services = {
      authenticationService: new AuthenticationService(_api),
      userService: new UserService(_api)
    }
    Vue.prototype.$helpers = {
      FlattenJson: FlattenJson
    }
  }
}
export default Potoroo
