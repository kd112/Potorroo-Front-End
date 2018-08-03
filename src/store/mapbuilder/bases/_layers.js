import TileLayer from 'ol/layer/Tile';
import BaseLayer from 'ol/layer/Base'
import OSM from 'ol/source/OSM';
import GeoJSON from 'ol/format/GeoJSON.js';
import VectorLayer from 'ol/layer/Vector.js';
import VectorSource from 'ol/source/Vector.js';
import { bbox } from 'ol/loadingstrategy';
import Style from "ol/style/Style";
import Fill from "ol/style/Fill";
import Stroke from "ol/style/Stroke";
import color from 'ol/color';
class LayerBuilder {
  constructor() {}
  init(map, data) {
    let layer = new TileLayer({
      source: new OSM()
    });
    
    // console.log(map.addLayer)
    // map.addLayer(layer);
    map.addLayer(layer);
    data.layers.forEach(element => {
      let new_Layer = this._build(element);
      // console.log(new_layer)
      map.addLayer(new_Layer);
    });
    return map;
  }

  _build(layer) {
    let Layer;
    if (layer.type === "vector") {
      if (!layer.tiled) {
        Layer = this._vectorlayer(layer);
      }
    }
    // console.log(Layer.getStyle());
    return Layer;
  }

  _vectorlayer(layer) {
    return new VectorLayer({
      source: this._buildsource(layer.source, new GeoJSON()),
      style:this._buildstyle(layer.style)
    });
  }
  _buildsource(source, format) {
    let vectorSource = new VectorSource({
      format: format,
      loader: (extent, resolution, projection) => {
        let proj = projection.getCode();
        // let url = 'https://ahocevar.com/geoserver/wfs?service=WFS&' +
        //     'version=1.1.0&request=GetFeature&typename=osm:water_areas&' +
        //     'outputFormat=application/json&srsname=' + proj + '&' +
        //     'bbox=' + extent.join(',') + ',' + proj;
        let bbox = extent.join(",");
        let url = encodeURIComponent(
          `${source}&srsname=${proj}&bbox=${bbox},${proj}`
        );
        let xhr = new XMLHttpRequest();
        xhr.open("GET", `/proxy?source=${url}`);

        let onError = function() {
          vectorSource.removeLoadedExtent(extent);
        };
        xhr.onerror = onError;
        xhr.onload = function() {
          if (xhr.status == 200) {
            // console.log(xhr.responseText);
            vectorSource.addFeatures(
              vectorSource.getFormat().readFeatures(xhr.responseText)
            );
            vectorSource.forEachFeature((feature)=>{
              // console.log();
              feature.overlay = () => { console.log(xhr.responseText)}
            })
          } else {
            onError();
          }
        };
        xhr.send();
      },
      strategy: bbox,
      forEachFeature:()=>{
        console.log("for Each")
      }
    });
    // console.log(VectorSource.forEachFeature);
    return vectorSource;
  }
  _buildstyle(layer_style){
      // let style = new Style()
      // let style
    
      if(layer_style){
        return new Style({
          fill: new Fill({
            color:layer_style.fill
          }),
          stroke:new Stroke({
            color: layer_style.stroke.color ,
            width:layer_style.stroke.width 
          })
        })
      }
  }
  findFeature(evt){
    let feature = evt.map.forEachFeatureAtPixel(evt.pixel, function (feature, layer) {
      return feature;
    });
    console.log(feature)
    return feature
    
  }
}


export default LayerBuilder;