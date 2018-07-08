<template>
    <div fluid class="pa-0" xs>
        <v-toolbar class="grey darken-4" dense>
            <v-toolbar-title>
                <v-btn flat class="white--text">
                    <h5>Potoroo</h5>
                    </v-btn>
            </v-toolbar-title>
            <v-toolbar-items>
                <v-btn flat class="white--text">
                    <h5>My Profile</h5>
                    </v-btn>
                <v-btn flat class="white--text">
                    <h5>My Maps</h5>
                    </v-btn>
            </v-toolbar-items>
                <v-spacer></v-spacer>
                <!-- $emit('login-clicked') -->
                <v-btn flat class="white--text" @click="login">
                    <h5>Login</h5>
                    </v-btn>
                <v-btn flat class="white--text">
                    <h5>Logout</h5>
                    </v-btn>
        </v-toolbar>
        <v-layout sm6 offset-sm3>
            <v-bottom-sheet v-model="sheet" class="white">
                <v-layout align-content-center class="grey darken-4 black--text py-2">
                    <h3 class="h3-title white--text">Login</h3>
                </v-layout>
                <v-divider></v-divider>
                <div class="white">
                    <span v-bind:style="{ display: badCredentials }" class="white red--text"> Invalid Credentials</span>
                </div>
                <form action="" class="white py-5 px-3" autocomplete="off">
                    <v-flex class="white black--text" xs12>
                        <span v-bind:style="{ display: isUsername }"  class='white red--text'>Please 
                            provide a username
                        </span>
                        <v-text-field
                        label="User Name"
                        type="text"
                        v-model="username"
                        prepend-inner-icon="fa-user"
                        ></v-text-field>
                    </v-flex>
                    <v-flex class="white black--text" xs12>
                        <span v-bind:style="{ display: isPassword }"  class=' white red--text'>Please 
                            provide a password
                        </span>
                        <v-text-field
                        label="Password"
                        type="password"
                        v-model="password"
                        autocomplete="new-password"
                        prepend-inner-icon="fa-lock"
                        ></v-text-field>
                    </v-flex>
                    <v-flex class="white " xs12>
                        <v-btn class ="cyan"  large @click="submit">
                            <h5 class="white--text">Submit</h5>
                        </v-btn>
                    </v-flex>

                </form>
            </v-bottom-sheet>

        </v-layout>
        <!-- <v-navigation-drawer right>

        </v-navigation-drawer> -->
    </div>
</template>
<script>
export default {
    name:"ui-header",
    data:()=>({
        sheet:false,
        username:null,
        password:null,
        isUsername:'none',
        isPassword:'none',
        badCredentials:'none'
    }),
    methods:{
        login(){
            this.sheet=!this.sheet
            
        },
        async submit(){
            
            // if (!this.username){
            //     this.isUsername='inline';
            //     return
            //     }
            // if (!this.password){
            //     this.isPassword='inline'; 
            //     return
            //     }
            // this.isUsername='none'
            // this.isPassword='none'
            // console.log(setTimeout())
            let res = await this.$services.authenticationService.authenticate({username:this.username,password:this.password})
            this.sheet = false
        }
        
    },
    watch:{
        username:()=>{
            console.log(this.isUsername)
            this.isUsername='none'
            console.log(this.isUsername)
        },
        password:()=>{
            this.isPassword='none'
        }
    }
}
</script>

<style scoped>
 .h3-title{
     position: relative;
     left:45%;
     padding:5px;
     font-size: 18pt;
 }
</style>

