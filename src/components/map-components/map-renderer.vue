<template>
    <v-jumbotron dark>
        <h1>Map Renderer</h1>
    <vl-map :load-tiles-while-animating="true" :load-tiles-while-interacting="true" style="height: 400px">
        <vl-view :zoom.sync="zoom" :center.sync="center" :rotation.sync="rotation"></vl-view>
        <vl-layer-tile id="osm">
            <vl-source-osm></vl-source-osm>
        </vl-layer-tile>
    </vl-map>
    </v-jumbotron>    
</template>

<script>
export default{
    name:"Map_Renderer",
    data () {
        return {
        zoom: 2,
        center: [0, 0],
        rotation: 0,
        }
    }
}
</script>
<style>

</style>