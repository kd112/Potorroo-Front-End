<template>
    <div fluid class="pa-0" xs>
        <v-flex>

            <v-toolbar class="grey darken-4" dense>
                <v-toolbar-title>
                    <v-icon color="white">layers</v-icon>
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
                        <v-layout align-content-center class="white py-2">
                                <h3 class="h3-title black--text">Login</h3>
                        </v-layout>
                        <v-divider></v-divider>
                        <div class="white">
                            <span v-bind:style="{ display: badCredentials }" class="white red--text"> Invalid Credentials</span>
                        </div>
                        <form action="" class="white py-5 px-3" autocomplete="off">
                            <v-flex class="white black--text" xs12>
                                <!-- <span v-bind:style="{ display: isUsername }"  class='white red--text'>Please 
                                    provide a username
                                </span> -->
                                <v-text-field
                                label="User Name"
                                type="text"
                                v-model="username"
                                prepend-inner-icon="fa-user"
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
                <v-layout xl offset-sm3>
                    <v-dialog v-model="err" class="white">
                        <v-layout align-content-center class="white py-1">
                            <h3 class="h3-title black--text">Error</h3>
                        </v-layout>
                        <v-divider></v-divider>
                        <v-layout class="white black--text pb-5">
                            <v-flex class="ma-5">
                                {{error_message}}
                            </v-flex>
                        </v-layout>

                    </v-dialog>                
                    </v-layout>                
            </v-layout>
        </v-flex>
        <div  class="text-xs-center">
    <v-dialog
      v-model="dialog"
      hide-overlay
      persistent
      flat
      class="transparent"
      width="300"
    >
      <v-card
        color="grey lighten-4"
        flat
      >
        <v-progress-circular
            :size="70"
            :width="7"
            color="purple"
            indeterminate
            class="py-1"
        ></v-progress-circular>
        <v-card-text class='purple--text'>
            Loading....
        </v-card-text>
      </v-card>
    </v-dialog>
        </div>
        <!-- <v-navigation-drawer right>

        </v-navigation-drawer> -->
    </div>
</template>
<script>
export default {
  name: "ui-header",
  data: () => ({
    sheet: false,
    username: null,
    password: null,
    err: true,
    error_message:"",
    badCredentials: "none",
    dialog: false
  }),
  methods: {
    login() {
      this.sheet = !this.sheet;
    },
    async submit() {
      this.sheet = false;
      this.dialog = true;
      try{
          let res = await this.$services.authenticationService.authenticate({
            username: this.username,
            password: this.password
          });
          await setTimeout(() => {
            this.dialog = false;
          }, 5000);
      }catch(error){
          this.dialog=false
          this.username=null
          this.password=null
          this.error_message="Authentication Failed"
          this.err=true
          setTimeout(()=>{
              this.error_message=""
              this.err=false
          },3000)
      }
    }
  },
  watch: {
    username: () => {
      console.log(this.isUsername);
      this.isUsername = "none";
      console.log(this.isUsername);
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
.loader {
  background-color: transparent;
}
</style>

