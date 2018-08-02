<template>
    <v-container fluid class="pa-0" fill-height>
        <div ref="overlay"></div>
        <v-flex id="map" fill-height>

        </v-flex>
        <div class="text-xs-center page elevation-0 white" id="div">
                <v-dialog
                v-model="isloading"
                hide-overlay
                persistent
                width="300"
                >
                <v-card
                    color="white"
                    dark
                >
                    <v-card-text class="black--text">
                    <h5>Building....</h5>
                    <v-divider></v-divider>
                    <v-progress-linear
                        indeterminate
                        color="blue"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
                </v-dialog>
            </div>
    </v-container>   
</template>
 <script>
 export default {
     data(){
         return {
             maps:null,
             isloading:false,
         }
     },
     mounted(){
         this.isloading=true
        //  this.maps = await this.$store.dispatch('buildMap',123123)
         this.$store.dispatch('buildMap',123123,this.$refs.overlay).then((map)=>{
            //  return new Promise((resolve,reject)=>{
                 this.maps = map
                //  resolve()
            //  })
         }).then(()=>{
             setTimeout(()=>{
                 this.isloading=false
             },3000)
         })
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
 