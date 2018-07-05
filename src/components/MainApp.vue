<template>
  <v-app
    dark
    id="inspire"
  >
    <v-navigation-drawer
      fixed
      clipped
      v-model="drawer"
      app
    >
    <v-list dense>
        <v-list-tile  v-for="(item,index) in items" :key="item.text" @click='tileClicked(index)'>
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{item.text}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <div style="height:100%;"></div>
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon color="grey darken-1">power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="grey--text text--darken-1">Logout</v-list-tile-title>
        </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="black"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
      <v-icon class="mx-3">menu</v-icon>
      </v-toolbar-side-icon>
      <v-icon class="mx-3">layers</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title">Potoroo</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-layout row align-center style="max-width: 650px">
        <v-text-field
          placeholder="Search..."
          single-line
          append-icon="search"
          :append-icon-cb="() => {}"
          color="white"
          hide-details
        ></v-text-field>
      </v-layout>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <component :is="tabClicked" v-bind:data='componentData.data'></component>
        <!-- <div v-show="!currentComponent"></div> -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import profile from '@/components/user-components/profile.vue'
import map_component from '@/components/map-components/map.vue'
import vue_modal from '@/components/Misc-Components/modal.vue'
// console.log(map)
export default {
  name: 'MainApp',
  props:["isAdmin"],
  components:{
    profile,
    map_component,
    vue_modal
  },
  beforeMount(){
    console.log("before Mount")
  },
  beforeMount(){
    if(this.$cookies.get('potorroo-ui')){
      let cookie =this.$cookies.get('potorroo-ui') 
      // console.log("cookie",cookie)
        try{
          let user = this.$jwt.decode(cookie)
          this.items[0].data = user
          if (user.isAdmin){
            this.items.push({
              text:"Manage Maps",
              icon:"fa-globe",
              action:"",
              component:"",
              data:{}
            })
            this.items.push({
              text:"Manage Users",
              icon:"fa-users",
              action:"",
              component:"",
              data:{}
            })
          }
        }catch(error){
          this.$router.push('/')
          alert(error)
        }
      

    }else{
      this.$router.push('/')
    }
  },
  methods: {
    logout(){
      this.$cookies.remove('potorroo-ui')
      this.$router.push('/')
    },
    tileClicked(index){
      let tab = this.items[index]
      this.currentComponent = tab.component
      this.componentData.data = tab.data
      if (tab.action==='login')this.props_data={title:"Logout",message:"Do you wish to logout?"}
    }
    // swapComponent(){
    //   console.log("component")
    // }
  },
  computed:{
        tabClicked(){
          console.log(this.currentComponent)
          return this.currentComponent
        }
      },
  data: () => ({
      drawer: true,
      currentComponent:null,
      componentData:{data:null},
      user:null,
      items: [
        {
          text:"My Profile",
          icon:'fa-user',
          action:"user",
          component:"profile",
          data:this.user
        },
        {
          text:"My Maps",
          icon:"fa-map",
          action:"map",
          component:"map_component",
          data:this.user
          },
        // {
        //   text:"Logout",
        //   icon:"power_settings_new",
        //   action:"logout",
        //   component:'vue_modal'
        ],
      props_data:{}
    }),
    props: {
      source: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
i:hover{
  color:white;
}
</style>
