<template>
    <v-container fluid>
        <v-toolbar class="cyan darken-1" dense>
            <v-toolbar-title>
                <v-btn flat class="white--text">Potoroo</v-btn>
            </v-toolbar-title>
            <v-toolbar-items>
                <v-btn flat class="white--text">My Profile</v-btn>
                <v-btn flat class="white--text">My Maps</v-btn>
            </v-toolbar-items>
                <v-spacer></v-spacer>
                <v-btn flat class="white--text" @clicked="showmodal">Login</v-btn>
                <v-btn flat class="white--text">Logout</v-btn>
        </v-toolbar>
        <modal ></modal>
    </v-container>
</template>
<script>
export default {
    name:"ui-header",
    data:()=>({
        show:false
    }),
    methods:{
        showmodal(){
            console.log("here")
            this.show=true
        }
    }
}
</script>

<style>

</style>
