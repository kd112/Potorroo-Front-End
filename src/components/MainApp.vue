<template>
  <v-app
    light
    id="inspire"
    >
    <v-navigation-drawer
      fixed
      clipped
      v-model="drawer"
      class="grey darken-1"
      app
    >
    <v-list dense>
        <v-list-tile  v-for="(item,index) in items" :key="item.text" @click='tileClicked(index)' v-bind:class="item.onSelected">
          <v-list-tile-action>
            <v-icon v-bind:color="item.color">{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-bind:class='item.textcolor'>
              {{item.text}}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        
        <v-list-tile @click="logout">
          <v-list-tile-action>
            <v-icon color="red">power_settings_new</v-icon>
          </v-list-tile-action>
          <v-list-tile-title class="white--text">Logout</v-list-tile-title>
        </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar
      color="grey darken-1"
      dense
      fixed
      clipped-left
      app
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer">
      <v-icon class="mx-3" color="white">menu</v-icon>
      </v-toolbar-side-icon>
      <v-icon class="mx-3" color="white">layers</v-icon>
      <v-toolbar-title class="mr-5 align-center">
        <span class="title white--text">Potoroo</span>
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
          dark
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
import UserList from '@/components/user-components/UserList.vue'
// console.log(map)
export default {
  name: 'MainApp',
  components:{
    profile,
    map_component,
    vue_modal,
    UserList
  },
  beforeMount(){
    if(this.$cookies.get('potorroo-ui')){
      let cookie =this.$cookies.get('potorroo-ui') 
      // console.log("cookie",cookie)
      if (!this.$services.authenticationService.api.token)this.$services.authenticationService.api.token=cookie
        try{
          let user = this.$jwt.decode(cookie)
          this.items[0].data = user
          if (user.isAdmin){
            this.items.push({
              text:"Manage Maps",
              icon:"fa-globe",
              color:"white",
              textcolor:"white--text",
              onSelected:"",
              action:"",
              component:"",
              data:{}
            })
            this.items.push({
              text:"Manage Users",
              icon:"fa-users",
              color:"white",
              textcolor:"white--text",
              onSelected:"",
              action:"",
              component:"UserList",
              data:{}
            })
          }
          this.user=user
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
      if (!this.currentSelection || this.currentSelection!==tab){
        this.currentSelection=tab
      }
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
          // console.log(this.currentComponent)
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
          color:"white",
          textcolor:"white--text",
          onSelected:"",
          action:"user",
          component:"profile",
          data:this.user
        },
        {
          text:"My Maps",
          icon:"fa-map",
          color:"white",
          textcolor:"white--text",
          onSelected:"",
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
        currentSelection:null
    }),
    watch:{
      currentSelection:(newSelection,oldSelection)=>{
        
        let textcolor = "deep-orange--text darken-1"
        let color = "grey darken-2"
        let iconcolor = "deep-orange darken-1"
        
        if (oldSelection){
          oldSelection.textcolor="white--text"
          oldSelection.color="white"
          oldSelection.onSelected=""
        }
        newSelection.textcolor=textcolor
        newSelection.color=iconcolor
        newSelection.onSelected=color
        

      }
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
