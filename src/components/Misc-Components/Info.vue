<template>
   <v-expansion-panel focusable popout>
      <v-expansion-panel-content class="grey darken-2 white--text">
        <div slot="header">{{title}}</div>
        <v-card>
          <v-container grid-list-md text-xs-center>
            <v-layout row-wrap>
              <v-flex v-for="(kys,index) in mapper" :key="kys" xs6 light>
                    <v-card-text class="px-0">
                    <v-text-field 
                      v-if="options.readonly"
                      outline
                      v-bind:label="index"
                      v-bind:value="data[kys]"
                      readonly
                      >
                    </v-text-field>
                    <v-text-field 
                      v-else
                      outline
                      v-bind:label="index"
                      v-bind:value="data[kys]"
                      >
                    </v-text-field>
                    </v-card-text>
              </v-flex>
          </v-layout>
          </v-container>
        </v-card>
      </v-expansion-panel-content>
    </v-expansion-panel>
</template>
<script>
export default {
    name:"Info",
    props:["title","mapper","data","options"]
}
</script>
<style scoped>

</style>
