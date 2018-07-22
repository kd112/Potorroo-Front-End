<template>
    <!-- <transition v-fade-transition>  -->
    <v-container fluid dark class=" black pa-0" fill-height >
        <!-- <v-layout></v-layout> -->
        <v-layout column offset-xs12 mt-5>
            <v-flex></v-flex>
            <v-flex>
                <v-icon large color="white">layers</v-icon>
                <div class="py-2"></div>
                <h1 class="white--text">POTOROO</h1>
            </v-flex>
            <v-flex></v-flex>
        </v-layout>
        <!-- <v-layout></v-layout> -->
    </v-container>
    <!-- </transition>    -->
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
 