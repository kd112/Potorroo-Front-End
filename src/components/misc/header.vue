<template>
    <div fluid class="pa-0" xs>
        <v-flex>
            <!-- Admin Nav Drawer -->
            <admindrawer/>
        <!-- Admin Nav Drawer Ends -->
        <!-- The Top Nav bar -->
            <v-toolbar class="grey darken-4" dense fixed clipped-left>
                <v-toolbar-title>
                    <v-icon color="white">layers</v-icon>
                    <v-btn flat class="white--text">
                        <h5>Potoroo</h5>
                        </v-btn>
                </v-toolbar-title>
                <v-toolbar-items>
                    <v-btn v-if="$store.state.isLoggedIn" flat class="white--text">
                        <h5>My Profile</h5>
                        </v-btn>
                    <v-btn v-if="$store.state.isLoggedIn" flat class="white--text">
                        <h5>My Maps</h5>
                        </v-btn>
                </v-toolbar-items>
                    <v-spacer></v-spacer>
                    <!-- $emit('login-clicked') -->
                    <v-btn v-if="!$store.state.isLoggedIn" flat class="white--text" @click="login">
                        <h5>Login</h5>
                        </v-btn>
                    <v-btn v-if="$store.state.isLoggedIn" flat class="white--text" @click="logout">
                        <h5>Logout</h5>
                        </v-btn>
            </v-toolbar>
        </v-flex>
        <!-- The Top Nav Bar Ends -->

        <!-- The Login Bottom Drawer Begins -->
        <v-layout sm6 offset-sm3>
            <v-bottom-sheet v-model="sheet" class="white">
                <v-layout align-content-center class="white py-2">
                        <h3 class="h3-title black--text">Login</h3>
                </v-layout>
                <v-divider></v-divider>
                <div class="white">
                    <span v-bind:style="{ display: badCredentials }" class="white red--text"> Invalid Credentials</span>
                </div>
                <v-form  ref='form' action="" class="white py-5 px-3" autocomplete="off" lazy-validation>
                    <v-flex class="white black--text" xs12>
                        <!-- <span v-bind:style="{ display: isUsername }"  class='white red--text'>Please 
                            provide a username
                        </span> -->
                        <v-text-field
                        label="User Name"
                        type="text"
                        v-model="username"
                        prepend-inner-icon="fa-user"
                        required
                        :rules="usernamerules"
                        ></v-text-field>
                    </v-flex>
                    <v-flex class="white black--text" xs12>
                        <!-- <span v-bind:style="{ display: isPassword }"  class=' white red--text'>Please 
                            provide a password
                        </span> -->
                        <v-text-field
                        label="Password"
                        type="password"
                        v-model="password"
                        :rules="passwordRules"
                        autocomplete="new-password"
                        prepend-inner-icon="fa-lock"
                        required
                        ></v-text-field>
                    </v-flex>
                    <v-flex class="white " xs12>
                        <v-btn class ="cyan"  large @click="submit">
                            <h5 class="white--text">Submit</h5>
                        </v-btn>
                    </v-flex>

                </v-form>
            </v-bottom-sheet>
        </v-layout>
        
        <!-- Error Modal Begins -->
        <div class="text-xs-center">
            <v-dialog
                v-model="err"
                width="500"
            >
                <v-card>
                    <!-- <v-card-title class="red lighten-2"> -->
                        <v-card-text class="red lighten-2">
                            <h3 class="white--text">ERROR!!</h3>
                        </v-card-text>
                    <!-- </v-card-title> -->
                    <v-divider></v-divider>
                    <v-card-text>
                        {{error_message}}
                    </v-card-text>
                </v-card>
            </v-dialog>
        </div>
        <!-- Error Dialog Ends -->
        
        <!-- The Loading Icon -->
        <!-- TODO: The transitions dont seem to work -->
        <transition name="loading-icon">
            <!-- <div class="text-xs-center page elevation-0 white" id="div"> -->
            <div class="text-xs-center page elevation-0 white" id="div">
                <v-dialog
                v-model="dialog"
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
        </transition>
        <!-- The Loading Icon Ends -->

    </div>
</template>
<script>
import admindrawer from '@/components/misc/admin-nav-drawer.vue'
export default {
  name: "ui-header",
  components:{
      admindrawer
  },
  data: () => ({
    sheet: false,
    username: null,
    password: null,
    err: false,
    error_message:"",
    badCredentials: "none",
    dialog: false,
    usernamerules:[
        v=>v && v.length>0 || 'Please provide a user name'
    ],
    passwordRules:[
        v=>v && v.length >0 || 'Please provide a valid password'
    ]
  }),
  methods: {
    login() {
        // console.log(this.$store.getters.getMapId)
      this.sheet = !this.sheet;
    },
    async logout(){
        await this.$store.dispatch('logout')
        // await this.$store.dispatch('setUser',null)
        this.$cookies.remove('potorroo-ui')
        this.$router.push('/')
    },
    async submit() {
        try{
            //   let res = await this.$services.applicationServices.authenticate({
                //     username: this.username,
        //     password: this.password
        //   });
        // console.log(this.$refs.form.validate())
        if (this.$refs.form.validate()){
            this.sheet = false;
            this.dialog = true;
            await this.$store.dispatch('login',{
                username:this.username,
                password:this.password
            })
            // await this.$store.dispatch('setUser',res.data.user)
            this.$cookies.set('potorroo-ui',this.$store.state.token,{expires:60*60*24})
            this.dialog=false
            this.$refs.form.reset()
            this.$router.push('/app')

        }

      }catch(error){
          console.log(error)
          this.dialog=false
          this.username=null
          this.password=null
          this.error_message="Authentication Failed!! User Name or Password donot match"
          this.err=true
          setTimeout(()=>{
              this.$cookies.remove('potorroo-ui')
              this.error_message=""
              this.err=false
              this.sheet=true
          },2000)
      }
    }
  },
  watch: {
    username: () => {
      
      this.isUsername = "none";
      
    },
    password: () => {
      this.isPassword = "none";
    }
  }
};
</script>

<style scoped>
.h3-title {
  position: relative;
  left: 45%;
  padding: 5px;
  font-size: 18pt;
}
.page{
    position: fixed;
    width: inherit;
}
.loader {
  background-color: transparent;
}
/* .loading-icon-enter-active{
    animation:coming 1s;
    animation-delay: 1;
    opacity: 0;
}
.loading-icon-leave-active{
    animation:going 1s;
    animation-delay: 2s;
    opacity: 0;
}
@keyframes going{
     from{
         transform:translateY(0);
     }
     to{
         transform: translateY(-50px);
         opacity: 0;
     }
}

@keyframes coming {
    from{
        transform: translateY(-50px);
        opacity: 0;
    }
    to{
        transform: translateY(0px);
        opacity:1;
    }
} */

</style>

