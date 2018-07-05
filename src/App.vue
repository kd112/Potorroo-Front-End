<template>
  <div id="app">
    <v-app class="grey darken-1" >
        <router-view/>
    </v-app>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
// import login from './components/Login'
export default {
  name: 'App',
  // mounted(){
  //   console.log("my plugins",this.$services)
  //   console.log("cookies",this.$cookies)
  // }
  // components: {
  //   login
  // }
}
</script>

<style>
#image_id{
  height:10px;
  width:10px;
}
.login-container{
  background-color: black;
  margin:0;
}
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  height: 100%;
  overflow: hidden;
}
</style>
