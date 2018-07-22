<template>
    <v-container fluid class="pa-0" fill-height>
        <v-flex id="map" fill-height>

        </v-flex>
    </v-container>   
</template>
 <script>
 export default {
     data(){
         return {
             map:null
         }
     },
     async mounted(){
         this.map = await this.$store.dispatch('buildMap',123123)
        // console.log(this.map.getView())
        //  console.log(this.map.getLayers())
        // this.map = this.$store.getters.getMap
     }

 }
 </script>
 
 <style scoped>
    /* #map{
        position: relative;
        left:5%;
        bottom:-5%;
        height: 100%;
        width: 100%;
    } */
 </style>
 