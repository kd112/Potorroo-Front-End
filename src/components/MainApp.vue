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
        <v-list-tile  v-for="item in items" :key="item.text" @click="item.action">
          <v-list-tile-action>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{item.text}}
            </v-list-tile-title>
          </v-list-tile-content>
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
  </v-app>
</template>

<script>
export default {
  name: 'MainApp',
  methods: {
    logout(){
      this.$router.push('/')
    }
  },
  data: () => ({
      drawer: true,
      items: [
        {
          text:"My Profile",
          icon:'fa-user',
          action:""
        },
        {
          text:"My Maps",
          icon:"fa-map",
          action:""
          },
        {
          text:"Logout",
          icon:"power_settings_new",
          action:"logout"
        }]
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
</style>
