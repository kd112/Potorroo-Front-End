<template>
    <v-container fluid class="grey pa-0" fill-height >
         <!-- Loading Icon -->         
         <div class="text-xs-center page elevation-0 white" id="div">
                <v-dialog
                v-model="isloading"
                hide-overlay
                persistent
                width="300"
                >
                <v-card
                    color="white"
                    dark
                >
                    <v-card-text class="black--text">
                    <h5>Please stand by</h5>
                    <v-divider></v-divider>
                    <v-progress-linear
                        indeterminate
                        color="blue"
                        class="mb-0"
                    ></v-progress-linear>
                    </v-card-text>
                </v-card>
                </v-dialog>
            </div>
            <!-- Loading Icon Ends -->
        
            <!-- <v-flex xs12> -->
            <div class="container-panel">
                <v-layout justify-center column>
                    <v-expansion-panel focusable class="xs12" >
                        <v-expansion-panel-content
                        v-if="($store.getters.users.length!==0)"
                        v-for="(user,idx) in $store.getters.users"
                        :key="user._id"
                        class="ma-1"
                        >
                        <div slot="header">
                            <h5>
                                {{fullName(idx)}}
                            </h5>
                        </div>
                        <v-card>
                            <v-card-text class="grey lighten-3">
                                <v-text-field
                                    label="First Name"
                                    :value="user.name.first"
                                >
                                </v-text-field>
                                <v-text-field
                                label="Last Name"
                                :value="user.name.last"
                                >
                                </v-text-field>
                                <v-text-field
                                label="Company"
                                ></v-text-field>
                               
                            </v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-layout>
            </div>
            
        <!-- </v-flex>     -->
        
    </v-container>
</template>

<script>
export default {
    methods:{
        fullName(index){
            let user = this.$store.getters.users[index]
            return `${user.name.first} ${user.name.last}`
        },
    },
    data(){
        return {
            isloading:false
        }
    },
    mount(){
        console.log(this.$store.getters.users)
    },
    async beforeMount () {
        if (this.$store.getters.users.length===0){
            this.isloading = true
            let filter = {}
            let options = {}
            let users = await this.$store.dispatch('setUsers',filter,options)
            this.isloading = false
        }else{
            // console.log(users)
        }
    }
}
</script>

<style scoped>
.container-panel{
    position:relative;
    width: 75%;
    left:15%;
}
</style>
