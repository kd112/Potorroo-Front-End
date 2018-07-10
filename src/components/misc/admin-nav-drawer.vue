<template>
    <v-container>
        <v-navigation-drawer
        v-if="$store.state.isAdmin"
        fixed
        clipped
        app
        mini-variant
        hide-overlay
        class="white elevation-2"
        >   <v-layout>
                <v-list dense>
                    <!-- This div class is an empty buffer class that track -->
                    <div class="ma-5">
                    </div>
                    <v-flex v-for="item in icons" :key="item.id">
                            <v-list-tile @click=""> 
                                <v-list-tile-action>
                                            <v-icon v-bind:color="item.icon_color">
                                                {{item.icon}}
                                            </v-icon>                                            
                                </v-list-tile-action>
                                <v-list-tile-content>
                                    <v-list-tile-sub-title v-bind:class="item.text_color">
                                        <h5>{{item.title}}</h5>
                                    </v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                    </v-flex>
                    <!-- <v-flex>
                        <v-list-tile>
                            <v-list-tile-action>
                                <v-icon color="white">
                                    fa-map
                                </v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title class="white--text">
                                    <h5>Build New Map</h5>
                                </v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>

                    </v-flex> -->
                </v-list>

        </v-layout>
        
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
    data(){
        return {
            icons:[
                {
                    id:1,
                    icon:'fa-users',
                    icon_color:'black',
                    title:'Add New User',
                    text_color:'black--text'
                    
                },
                {
                    id:2,
                    icon:'fa-map',
                    icon_color:'black',
                    title:'Build New Map',
                    text_color:'black--text'
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>
