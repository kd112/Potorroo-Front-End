<template>
    <v-container fluid class="grey pa-0" column fill-height >
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
        
            <!-- User List Begins -->
            <v-layout justify-center column >
                <div class="container-panel my-3">
                    <v-expansion-panel focusable class=" my-3 white" >
                        <v-expansion-panel-content
                        v-if="($store.getters.users.length!==0)"
                        v-for="(user,idx) in $store.getters.users"
                        :key="user._id"
                        class="my-3"
                        >
                        <div slot="header" class="ma-3 white">
                        <v-badge v-if="user.isAdmin" left color="green" class="my-2">
                            <v-icon slot="badge" color="white" dark small>verified_user</v-icon>
                            <span>
                            <h6>Admin</h6>
                            </span>
                        </v-badge>
                        
                            <h3 class="pb-3">
                                {{fullName(idx)}}
                            </h3>
                        </div>
                        <v-card>
                            <v-card-text class="black py-1">
                                <v-text-field
                                    label="First Name"
                                    :value="user.name.first"
                                    
                                    dark
                                >
                                </v-text-field>
                                <v-text-field
                                label="Last Name"
                                :value="user.name.last"
                                
                                dark
                                >
                                </v-text-field>
                                <v-text-field
                                label="Company"
                                dark
                                ></v-text-field>
                                <v-btn flat small class="white--text" @click="$store.dispatch('toggleAdmin',idx)">
                                    <v-icon v-if="user.isAdmin===false" color="white">verified_user</v-icon>
                                    <v-icon v-else-if="user.isAdmin===true" color="green">verified_user</v-icon>
                                    Admin
                                </v-btn>
                                <!-- <input id="isAdmin" :checked="user.isAdmin" type="checkbox" label="Is Admin" class="white--text">
                                <label for="isAdmin" class="white--text">
                                    <h5>Is Admin</h5>
                                </label> -->
                            </v-card-text>
                        </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </div>
            </v-layout>
            
        <!-- User List Begins Ends-->
        <v-btn fab dark fixed bottom right color="blue" @click="newUser=!newUser">
            <v-icon class="pt-2" dark x-large>add</v-icon>
            <!-- <h1 class="white--text text-md-center">+</h1> -->
        </v-btn>
        <div class="text-xs-center">
            <v-dialog
                v-model="newUser"
                width="500"
            >
                 <form action="" class="white py-5 px-3" autocomplete="off">
                    <v-layout align-content-center class="white py-0">
                        <h3 class="h3-title black--text">Invite A New User</h3>
                    </v-layout>
                    <v-divider></v-divider>
                    <v-layout v-for="(invite,n) in emails" :key="n" class="white black--text" row xs12>
                        <!-- <span v-bind:style="{ display: isUsername }"  class='white red--text'>Please 
                            provide a username
                        </span> -->
                        <!-- <v-flex xs12 row> -->
                            <v-text-field
                            label="Email"
                            type="text"
                            v-model="invite.invitations"
                            ></v-text-field>
                            <v-spacer></v-spacer>
                            <v-text-field
                            label="First Name"
                            type="text"
                            v-model="invite.name"
                            prepend-inner-icon="fa-user"
                            ></v-text-field>
                        <!-- </v-flex> -->
                    </v-layout>
                    <v-flex>
                        <v-btn flat left small class="grey--text" @click="emails.push({invitations:null,name:null})">
                            <v-icon color="grey">add</v-icon>
                            Add 
                        </v-btn>
                    </v-flex>
                    <v-flex>
                        <v-btn color="cyan white--text" @click="submit">
                            <h5>Invite</h5>
                        </v-btn>
                    </v-flex>

                   <div class="text-xs-center">
                        <v-dialog
                            v-model="dialog"
                            width="500"
                        >
                            <v-card>
                                <!-- <v-card-title class="red lighten-2"> -->
                                    <v-card-text v-bind:class="headercolor">
                                        <h3 v-bind:class="text_color">{{title}}</h3>
                                    </v-card-text>
                                <!-- </v-card-title> -->
                                <v-divider></v-divider>
                                <v-card-text>
                                    {{message}}
                                </v-card-text>
                            </v-card>
                        </v-dialog>
                </div>
                    <!-- <v-flex class="white black--text" column xs12> -->
                        <!-- <span v-bind:style="{ display: isUsername }"  class='white red--text'>Please 
                            provide a username
                        </span> -->
                        <!-- <v-text-field -->
                        <!-- label="Email" -->
                        <!-- type="text" -->
                        
                        <!-- prepend-inner-icon="fa-user" -->
                        <!-- ></v-text-field> -->
                    <!-- </v-flex> -->
                    <!-- <v-flex class="white black--text" column xs12> -->
                        <!-- <span v-bind:style="{ display: isUsername }"  class='white red--text'>Please 
                            provide a username
                        </span> -->
                        <!-- <v-text-field -->
                        <!-- label="Email" -->
                        <!-- type="text" -->
                        
                        <!-- prepend-inner-icon="fa-user" -->
                        <!-- ></v-text-field> -->
                    <!-- </v-flex> -->
                    <!-- <v-flex class="white black--text" column xs12> -->
                        <!-- <span v-bind:style="{ display: isUsername }"  class='white red--text'>Please 
                            provide a username
                        </span> -->
                        <!-- <v-text-field -->
                        <!-- label="Email" -->
                        <!-- type="text" -->
                        
                        <!-- prepend-inner-icon="fa-user" -->
                        <!-- ></v-text-field> -->
                    <!-- </v-flex> -->
                    <!-- <v-flex class="white black--text" xs12> -->
                        <!-- <span v-bind:style="{ display: isPassword }"  class=' white red--text'>Please 
                            provide a password
                        </span> -->
                        <!-- <v-text-field -->
                        <!-- label="Password" -->
                        <!-- type="password" -->
                        <!-- v-model="password" -->
                        <!-- autocomplete="new-password" -->
                        <!-- prepend-inner-icon="fa-lock" -->
                        <!-- ></v-text-field> -->
                    <!-- </v-flex> -->
                    <!-- <v-flex class="white " xs12> -->
                        <!-- <v-btn class ="cyan"  large @click="submit"> -->
                            <!-- <h5 class="white--text">Submit</h5> -->
                        <!-- </v-btn> -->
                    <!-- </v-flex> -->
                </form>
            </v-dialog>
        </div>
    </v-container>
</template>

<script>
export default {
    methods:{
        fullName(index){
            let user = this.$store.getters.users[index]
            return `${user.name.first} ${user.name.last}`
        },
        adminClick(index){
            // console.log(index)
        },
        submit(){
            let success = this.$store.dispatch('invite',this.emails)
            if (success){

                this.headercolor = "red lighten-2"
                this.text_color = "white--text"
                this.title = "Error!!"
                this.message = "Invitations Sent"
            }else{
                this.headercolor = "red lighten-2"
                this.text_color = "white--text"
                this.title = "Error!!"
                this.message = "Oops!! Something went wrong"
            }
            this.dialog = true
        }

    },
    data(){
        return {
            isloading:false,
            checkbox:false,
            newUser:false,
            headercolor:"",
            text_color:"",
            title:"",
            message:"",
            dialog:false,
            emails:[{invitations:null,name:null}]
        }
    },
    mount(){
        console.log(this.$store.getters.users)
    },
    async beforeMount () {
        if (this.$store.getters.session){
            if (this.$store.getters.users.length===0){
                this.isloading = true
                let filter = {}
                let options = {}
                let users = await this.$store.dispatch('setUsers',filter,options)
                this.isloading = false
            }
        }else{
            this.$router.push('/')
            // if (this.$cookies.get('potorroo-ui')){
                
            // }
        }
    }
}
</script>

<style scoped>
.container-panel{
    position:relative;
    width: 75%;
    left:15%;
    top:-23%;
}

.h3-title {
  position: relative;
  left: 30%;
  top:-10%;
  padding: 0;
  font-size: 15pt;
}
</style>
