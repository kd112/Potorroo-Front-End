<template>
<div class="user-list-body">
    <v-container fluid grid-list-md>
        <div class="text-xs-center add-btn">
            <v-btn round dark color="blue">
                <v-icon dark>add</v-icon>
                New User
            </v-btn>
        </div>
        <v-layout row wrap>
            <v-flex v-for="(user) in list" :key="user" fluid grid-list-md>
                <info title="User List" v-bind:mapper='mapper' v-bind:data='user' :options="{readonly:true}"></info>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import info from '@/components/Misc-Components/Info.vue'
export default {
    name:"UserList",
    components:{info},
    data:()=>({
        list:[],
        mapper:{
      "First Name":"name.first",
      "Last Name":"name.last",
      "User Name":"login.username",
      "Company":"company"
    }
    }),
    async beforeMount() {
        let list = await this.$services.userService.getUsersByQuery()
        let flat_json = [];
        list.data.user.forEach(element => {
            flat_json.push(this.$helpers.FlattenJson(element))
        });
        this.list = flat_json
    },
}
</script>
<style>
.user-list-body{
    position: fixed;
    top:5%;
    width:95%;
}
.add-btn{
    position: relative;
    left: 38%;
}
</style>

