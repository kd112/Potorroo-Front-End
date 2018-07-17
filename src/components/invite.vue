<template>
    <v-container light fluid fill-height>
              <!-- <div class="text-xs-center"> -->
        <v-layout row wrap>
                <v-dialog
                    v-model="dialog"
                    width="50%"
                    persistent
                >
                    <form action="" class="white py-5 px-3" autocomplete="off">
                        <v-layout align-content-center class="white py-0 text-md-center text-sm-center">
                            <h1 class="text-md-center text-sm-center black--text">User Profile</h1>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout class="pa-3" row xs>
                            <v-flex row>
                                <v-text-field
                                    
                                    label="First Name"
                                    type="text"
                                    light
                                    v-model="user.name.first"
                                >
                                </v-text-field>
                            </v-flex>
                            <div class="px-3"></div>
                            <v-flex row>
                                <v-text-field
                                
                                label="Last Name"
                                type="text"
                                light
                                v-model="user.name.last"
                                >
                                </v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout class = "pa-3" row xs12>
                            <v-flex row>
                                <v-text-field
                                
                                label="Company"
                                light
                                type="text"
                                v-model="user.company"
                                ></v-text-field>
                            </v-flex>
                            <div class="px-3"></div>
                            <v-flex row>
                                <v-text-field
                                
                                label="Phone"
                                light
                                type="number"
                                v-model="user.phone"
                                ></v-text-field>
                            </v-flex>
                            <div class="px-3"></div>
                            <v-flex row>
                                <v-text-field
                                
                                label="Email"
                                light
                                type="email"
                                v-model="user.email"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                         <v-layout class="pa-3" xs12>
                            <v-flex row>
                                <v-text-field
                                label="User Name"
                                light
                                type="text"
                                v-model="user.login.username"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout class="pa-3" xs12>
                            <v-flex row>
                                <v-text-field
                                label="Password"
                                light
                                type="Password"
                                v-model="user.login.password"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-layout class="pa-3" xs12>
                            <v-flex row>
                                <v-text-field
                                label="Repeat Password"
                                light
                                type="Password"
                                v-model="repeatpassword"
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-flex row>
                            <v-btn color="cyan white--text" flat @click="submit">
                                <h5>Save</h5>
                            </v-btn>
                            <v-btn color="red white--text" flat @click="dialog=false">
                                <h5>Cancel</h5>
                            </v-btn>
                        </v-flex>
                    </form>
                </v-dialog>
        </v-layout>
        <!-- </div> -->
    </v-container>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            dialog:true,
            user:null,
            repeatpassword:null
        }
    },
    methods:{
        submit(){
            
        }
    },
    async beforeMount(){
        await this.$store.dispatch('getNewUser',this.id)
        this.user = this.$store.getters.user
    }
}
</script>
<style scoped>
.h3-title {
  position: relative;
  left: 40%;
  top:-10%;
  padding: 0;
  font-size: 15pt;
}
</style>
