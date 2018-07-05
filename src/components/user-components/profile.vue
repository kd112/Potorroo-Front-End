<template>
    <div class="profile">
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card dark >
            <h1>User Profile</h1>
          </v-card>
        </v-flex>
        <v-flex v-for="(key,index) in userItems" :key="key" xs6 light>
          <!-- {{index}}:{{user[key]}} -->
          <v-text-field
          outline
          v-bind:label="index"
          v-bind:value="user[key]"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <Info></Info>
    </v-container>  
  </div>
</template>
<script>
import Info from '@/components/Misc-Components/Info.vue'
export default {
  name:"Profile",
  props:['data'],
  components:{Info},
  methods:{},
  data:()=>({
    user :{},
    userItems:{
      "First Name":"name.first",
      "Last Name":"name.last",
      "User Name":"login.username",
      "Company":"company"
    }
  }),
  beforeMount() {
    let data =this.data
    this.user = this.$helpers.FlattenJson(data)
  },
  mounted() {
    // console.log(this.user)
  },
}
</script>
<style>
.profile{
  position:relative;
  top:-20%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  width:100%
}
</style>
