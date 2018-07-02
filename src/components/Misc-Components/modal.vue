<template>

    
    <v-app id="inspire">
        <div class="text-xs-center">
        <v-dialog
            
            width="500"
        >
    
            <v-card>
            <v-card-title
                class="headline grey lighten-2"
                primary-title
            >
                {{title}}
            </v-card-title>
    
            <v-card-text>
                {{message}}
            </v-card-text>
    
            <v-divider></v-divider>
    
            <v-card-actions>
                <v-spacer></v-spacer>
                <!-- <v-btn
                color="primary"
                flat
                @click="dialog = false"
                >
                I accept
                </v-btn> -->
            </v-card-actions>
            </v-card>
        </v-dialog>
        </div>
    </v-app>
</template>

<script>
export default {
  name:"vue-modal",
  props:{
      'title':String,
      'message':String
  },  
}
</script>
<style>

</style>
