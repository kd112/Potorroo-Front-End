import maps from '../mapbuilder';

const Mapsmodule = {
  state: {
    id:null,
    mapLoaded:null,
    map_data:[],
    map:null
  },
  mutations: {
    buildMap(state,map,rootState){
      // console.log("buildmap",map)
      state.map = map

    }
  },
  getters: {
    getMapId: (state, getters, rootState) => {
      // console.log(state)
      return rootState.token
    },
    getMap:(state,getters)=>{
      return state.map
    }
    
  },
  actions: {
    buildMap({commit},id){
      // Make an async call to the express database to fetch map data
      let data = {
        _id:"dghjfkljkgteerrdfklkhgsztwryetrhtfjhgb.",
        layers:[{
          source:"http://localhost:8080/geoserver/wfs?request=GetFeature&outputFormat=JSON&version=1.1.0&typeName=India:Country",
          type:"vector",
          tiled:false
        }],
        view:{
          zoom: 5,
          center: [132.802734,-25.244696],
          rotation: 0,
          projection:'EPSG:4326'
      }

      }
      if(!data)data={};
      data.target = 'map'
      let map  = maps.init(data)
      return map
      // console.log(map)
      // commit('buildMap',map)
    }
  }
}
export default Mapsmodule
