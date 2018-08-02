import Overlay from 'ol/Overlay';

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
        console.log(this.getOverlays())
        this.getOverlays()[0].setPosition(undefined);
        let map = evt.map
       var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        return feature;
        });
        if (feature){
            this.getOverlays()[0].getElement.innerHTML=`<p>Name:${feature.name_engli}</p>`
            this.getOverlays()[0].setPosition(evt.coordinate)
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
}


export default OverLay