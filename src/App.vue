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
export default {
  name: 'App',
  components:{uiheader},
  async beforeMount() {
    let cookie = await this.$cookies.get('potorroo-ui',{expires:60*60*24})
    if (cookie){
      try{
        // console.log(cookie)
        this.$store.dispatch('setUser',cookie)
        this.$router.push('/')
        // let res = await this.$services.applicationServices.getSession(cookie)
        // this.$store.dispatch('setToken',res.data.token)
      }catch(error){
        this.$router.push('/')
        console.log("error",error)
      }
      
    }
  },
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
