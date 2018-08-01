import Maps from './bases/_map'
import View from './bases/_views'
import Layers from './bases/_layers'

const _maps =  new Maps()
const _view = new View()
const _layer   = new Layers()

export default {
    
    init:(data)=>{
    let map = _maps.init(data.target)
    map = _view.init(map,data)
    map = _layer.init(map,data)
    // console.log("map",map)
    map.on('singleclick',mapClicked)

    return map
    },
}

function mapClicked(){
    console.log(arguments)
}

function newlayer (map,layers){
    let Layers = _layer.buildLayers(layers)
}
function view (map){

}
