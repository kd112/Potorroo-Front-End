import Maps from './bases/_map'
import View from './bases/_views'
import Layers from './bases/_layers'
import Overlay from './bases/_overlayer'

const _maps =  new Maps()
const _view = new View()
const _layer   = new Layers()
const _overlay = new Overlay()

export default {
    
    init:(data)=>{
    _overlay.setelement(data.overlay)
    let map = _maps.init(data.target,_overlay.Overlay)
    map = _view.init(map,data)
    map = _layer.init(map,data)
    map.on('singleclick',_overlay.mapClicked)
    map.on('pointermove',_overlay.mapHover)
    
    // console.log("map",map)
    // map.on('singleclick',mapClicked)
    
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
