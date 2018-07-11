class MapService {
  constructor (api) {
    this.api = api
    this.url = 'api/map'
    return this
  }
  getUsersByQuery (filter, options) {
    return this.api.create().get(this.url)
  }
}

export default MapService
