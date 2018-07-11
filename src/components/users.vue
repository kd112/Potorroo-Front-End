<template>
    <v-container fluid class="grey pa-0" fill-height >
        
    </v-container>
</template>

<script>
export default {
    async beforeMount () {
        if (this.$store.getters.users.length===0){
            let filter = {}
            let options = {}
            let users = await this.$store.dispatch('setUsers',filter,options)
            console.log(users)
        }else{
            // console.log(users)
        }
    }
}
</script>

<style scoped>

</style>
