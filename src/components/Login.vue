/* eslint-disable */
<template>
      <v-container app align-baseline >
          <div class="form-ui">
            <v-icon x-large color="white">layers</v-icon>
            <h1>POTOROO</h1>
            <v-form action="" class="login-form">
                <v-flex class="align-content-space-around">
                        <v-text-field
                            dark
                            label='User Name'
                            v-model="username"
                        ></v-text-field>
                        <v-text-field
                        dark
                        label='Password'
                        :type="'password'"
                        v-model="password"
                        ></v-text-field>
                </v-flex>
                <div class="input-div">
                    <v-flex class="align-content-space-around">
                        <v-btn class="white grey-darken-1--text"  @click="submit">Login</v-btn>
                    </v-flex>
                </div>
            </v-form>
          </div>
      </v-container>
    <!-- <div></div> -->
</template>
<script>
// import AuthenticationService from '@/services/AuthenticationServices'
export default {
  name: 'login',
  data () {
    return {
      isValid:false,
      username: null,
      password: null
    }
  },
  beforeMount() {
      let cookie = this.$cookies.get('potorroo-ui',{expires:60*60*24})
      if (cookie){
          this.$router.push('/app')
      }
  },
  methods: {
    async submit () {
      let result = await this.$services.authenticationService.authenticate({
          username:this.username,
          password:this.password
        })
    //   console.log(result.data)
      this.$cookies.set('potorroo-ui',result.data)
      this.$services.authenticationService.api.setToken(result.data)
      if (result.status===200)this.$router.push('/app')
      else alert("Invalid username password")    
    }
  }
}
</script>
<style>
.data-app{
    margin:0;
}
.form-ui{
    position:relative;
    top:30%;
    overflow: hidden;
    height: 100%;
}
.login-form{
    padding-top:5px;
}
.input-div{
    padding-top:5px;
}
.input-div button{
    color:grey;
    background-color:white;
    align-content:center;
}
input,button{
    padding-top:5px;
    width:50%;
}
</style>
