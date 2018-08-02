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
    buildMap({commit},id,overlay){
      // Make an async call to the express database to fetch map data
      return new Promise((resolve,reject)=>{
        let data = {
          _id:"dghjfkljkgteerrdfklkhgsztwryetrhtfjhgb.",
          layers:[{
            source:"http://localhost:8080/geoserver/wfs?request=GetFeature&outputFormat=JSON&version=1.1.0&typeName=India:Country",
            // source:"http://corp-per-gis02:8080/geoserver/wfs?request=GetFeature&outputFormat=JSON&version=1.1.0&typeName=vocus:vss_cable_wms_getmap_ppg&styles=vss_cable",
            type:"vector",
            tiled:false,
            info:{
  
            },
            style:{
              /**
               * @param fill takes an rgb or hexcode. If transparency is needed the color has to be rgba
               * @param stroke takes upto two arguments fill (rgb or hexcode) width: number
               */
              fill:'rgba(255,127,80,0.3)',
              stroke:{
                color:'#FF7F50',
                width:1.25
              }
            }
          }],
          view:{
            zoom: 5,
            // center: [132.802734,-25.244696],
            center: [ 77.99,21.99],
            rotation: 0,
            projection:'EPSG:4326'
        }
  
        }





        if(!data)data={};
        data.target = 'map'
        data.overlay=overlay
        let map  = maps.init(data)
        resolve(map)
      })
      // console.log(map)
      // commit('buildMap',map)
    }
  }
}
export default Mapsmodule
