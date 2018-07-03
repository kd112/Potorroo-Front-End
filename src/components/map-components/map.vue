<template>
  <v-container fluid >
    <v-layout grid-list-md fill-height>
      <MapRenderer/>
    </v-layout>
    <v-spacer></v-spacer>
    <v-layout grid-list-md fill-height>
      <MapDetails/>
    </v-layout>
  </v-container>
  <!-- <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
      <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>

      <vl-layer-tile id="bing-maps">
          <vl-source-osm></vl-source-osm>
      </vl-layer-tile>
  </vl-map> -->
</template>

<script>
import MapDetails from './map-details'
import MapRenderer from './map-renderer'
  export default {
    components:{MapDetails,MapRenderer}
  }
</script>
<style>

</style>