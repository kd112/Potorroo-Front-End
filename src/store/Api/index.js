import Api from './Api'
import Map from './Map'
import User from './User'
import Application from './Application'

let _api = new Api()

export default {
  MapService: new Map(_api),
  UserService: new User(_api),
  ApplicationService: new Application(_api)
}
