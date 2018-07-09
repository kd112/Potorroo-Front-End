<template>
    <v-container fluid class="pa-0" fill-height>
        <!-- <div id="map" class="map">

        </div> -->
        <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 100%" :data-projection.sync="projection">
            <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation" ></vl-view>
            <vl-layer-tile id="osm">
                <vl-source-osm></vl-source-osm>
            </vl-layer-tile>
        </vl-map>
    </v-container>   
</template>
 <script>
 export default {
    data () {
      return { 
        zoom: 5,
        center: [132.802734,-25.244696],
        rotation: 0,
        projection:'EPSG:3857'
      }
    },
    beforeMount() {
        // Make an api call, which should return an json with zoom, center, epsg (default to 3857),rotation
        let data = {
            zoom:5,
            center:[132.802734,-25.244696],
            rotation:0,
            projection:"EPSG:4326"
        }
        this.zoom=data.zoom
        this.center = data.center
        this.rotation=data.rotation
        this.projection = data.projection || 'EPSG:3857'
    },

 }
 </script>
 
 <style scoped>
 
 </style>
 