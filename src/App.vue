<template>
  <div id="app">
    <v-app >
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
  components:{uiheader}
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
</style>
