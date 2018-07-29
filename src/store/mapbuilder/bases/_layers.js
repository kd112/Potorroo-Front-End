import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';

class LayerBuilder{
    constructor(){

    }
    init(map,data){
        let layer = new TileLayer({
            source: new OSM()
          })
        // console.log(map.addLayer)
        map.addLayer(layer)
        data.layers.forEach(element => {
            let new_Layer = this._build(element) 
            // console.log(new_layer)
            map.addLayer(new_Layer)
        });
        return map

    }

    
    _build(layer){
        let Layer 
        if (layer.type==='vector'){
            if (!layer.tiled){
                Layer = this._vectorlayer(layer)
            }
        }
        return Layer
    }

    _vectorlayer(layer){
     return new VectorLayer({
        source:this._buildsource(layer.source,new GeoJSON())
        })      
    }
    _buildsource(source,format){
        console.log("this._buildsource")
        let vectorSource = new VectorSource({
            format:format,
            loader:(extent, resolution, projection)=>{
                var proj = projection.getCode();
                // var url = 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
                //     'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
                //     'outputFormat=application/json&srsname=' + proj + '&' +
                //     'bbox=' + extent.join(',') + ',' + proj;
                var url = encodeURIComponent(source)
                var xhr = new XMLHttpRequest();
                console.log(`/proxy?source=${url}`)
                xhr.open('GET', `/proxy?source=${url}`);
                var onError = function() {
                    console.log('onError')
                vectorSource.removeLoadedExtent(extent);
                }
                xhr.onerror = onError;
                xhr.onload = function() {
                if (xhr.status == 200) {
                    vectorSource.addFeatures(
                        vectorSource.getFormat().readFeatures(xhr.responseText));
                } else {
                    onError();
                }
                }
                xhr.send();
            }
        })
        return vectorSource
    }
}


export default LayerBuilder;