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
            map.addLayer(this._build(element))
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
        source: new VectorSource({
          url: layer.source,
          format: new GeoJSON()
            })
        })      
    }
}


export default LayerBuilder;