<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card dark >
          <h1>User Profile</h1>
        </v-card>
      </v-flex>
      <v-flex v-for="(key,index) in userItems" :key="key">
        {{index}}:{{user[key]}}
      </v-flex>
    </v-layout>
  </v-container>  
</template>
<script>
export default {
  name:"Profile",
  props:['data'],
  methods:{
    flatten(data){
      var result = {};
    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
    }
  },
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
    this.user = this.flatten(this.data)
  },
  mounted() {
    console.log(this.user)
  },
}
</script>
<style>

</style>
