import Maps from './bases/_map'
import View from './bases/_views'
import Layers from './bases/_layers'
import Olay from './bases/_overlayer'
import Overlay from "ol/Overlay";

const _maps =  new Maps()
const _view = new View()
const _layer   = new Layers()
const _overlay = new Olay()
var popup_target=null

var current_fill=null
var current_feature = null
export default {
    
    init:(data)=>{
    popup_target = data.overlay
    
    _overlay.setelement(data.overlay)
    // let map = _maps.init(data.target,_overlay.Overlay)
    let map = _maps.init(data.target)
    map = _view.init(map,data)
    map = _layer.init(map,data)
    
    map.on('singleclick',mapClicked)
    // map.on('pointermove',_overlay.mapHover)
    map.on('pointermove', mapHover)
    // console.log("map",map)
    // map.on('singleclick',_overlay.mapClicked)
    
    return map
    }
}

function mapClicked(evt){
    evt.map.removeOverlay(1);
    new Olay().mapClicked(evt);
    // let feature = _layer.findFeature(evt)
    let feature = evt.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        return feature;
    });
    if(feature){
        // console.log(popup_target.innerHTML)
        let prop = feature.getProperties()
        popup_target.innerHTML = `<p>Name:${prop.name_engli}</p>`
        let popup = new Overlay({
            id:1,
            element:popup_target,
        })
        // console.log(popup.getElement().innerHTML)
        popup.setPosition(evt.coordinate)
        evt.map.addOverlay(popup)

    }
    // _overlay.mapClicked(evt)
}
function mapHover(evt){
    evt.map.removeOverlay(2);
    // new Olay().mapClicked(evt);
    // let feature = _layer.findFeature(evt)
    let feature = evt.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
        return feature;
    });
    if(feature){
        let new_feature = feature.clone()
        new_feature.setStyle(_overlay.createHoverStyle())
        console.log(new_feature.getStyle())
        // current_feature = feature
        // let current_style = feature.getStyle();
        // console.log(feature)

    }
    // _overlay.mapHover(evt)
}

function newlayer (map,layers){
    let Layers = _layer.buildLayers(layers)
}
function view (map){

}
