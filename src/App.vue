<template>
  <div id="app">
    <v-app>
        <uiheader/>
        <main>
          <router-view/>
        </main>
    </v-app>
  </div>
</template>

<script>
import uiheader from '@/components/misc/header.vue'
import inside_modal from '@/components/misc/modals/modals.vue' 
export default {
  name: 'App',
  components:{uiheader,inside_modal},
  methods:{
    login(){
      console.log("login")
      // this.$emit('vuedals:new',{components:inside_modal})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:white;
  height: 100%;
  overflow: hidden;
}
main{
  height: 100%;
  width: 100%
}
</style>
