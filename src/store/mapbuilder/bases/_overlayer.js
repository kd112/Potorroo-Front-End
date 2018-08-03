import Overlay from 'ol/Overlay';
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import color from 'ol/color';

import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';

class OverLay {
    constructor(map,id) {
        this.map = map
        this.Overlay = new Overlay({
            id:id || 1    
        })
        return this
        // this.init()
        // map.on('click',mapClicked)
        // map.on('hover',mapHover)
    }
    // init(){
    //     console.log(Overlay.Popup)
    // }
    setelement(target){
        console.log(target)
        this.Overlay.setElement(target)
        // this.init()
        // this.map = map
        // this.map.on('singleclick',this.mapClicked)
        // this.map.on('pointermove',this.mapHover)
    }
    mapClicked(evt){
        // let self = this
        // console.log(this.getOverlays

        // console.log(this.Overlay.setPosition)
        // console.log(evt.map.overlays)
        // console.log(this.getOverlays())
        // this.Overlay.setPosition(undefined);
        let map = evt.map
       var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        return feature;
        });
        // console.log(feature)
        if (feature){
            console.log("id", feature.getProperties());
            // console.log(feature);
            // this.Overlay.getElement.innerHTML=`<p>Name:${feature.name_engli}</p>`
            // console.log(evt.coordinate)
            // this.Overlay.setPosition(evt.coordinate)
            // map.addOverlay(this.Overlay)
            // feature.overlay()
        }

    }
    mapHover(evt){
    let map = evt.map
       var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        return feature;
        });
        if (feature){
            // console.log("feature")
            // console.log(feature.overlay())
        }
    }
    createHoverStyle(feature){
        // let new_feature = feature.clone()
        return  new Style({
        //   fill: new Fill({
        //     color: "rgba(255, 255, 255, 0.14)"
        //   }),
          stroke:new Stroke({
            color: "#000000",
            width: 1
          })
        });
        // new_feature.setStyle(hoverStyle);
        // return new_feature;
        // return hoverStyle;

    }
    // _hoverLayer(feature){
    //     return new VectorLayer({
    //         source:this.
    //     })
    // }
}


export default OverLay