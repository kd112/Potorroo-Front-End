/* eslint-disable */
<template>
      <v-container app align-baseline>
          <div class="form-ui">
            <h1>POTOROO</h1>
            <v-form action="" class="login-form">
                    <v-text-field
                        label='User Name'
                        v-model="username"
                    ></v-text-field>
                    <v-text-field
                    label='Password'
                    :type="'password'"
                    v-model="password"
                    ></v-text-field>
                <div class="input-div">
                    <v-flex class="align-content-space-around">
                        <v-btn outline  @click="submit">Login</v-btn>
                    </v-flex>
                </div>
            </v-form>
          </div>
      </v-container>
    <!-- <div></div> -->
</template>
<script>
import AuthenticationService from '@/services/AuthenticationServices'
export default {
  name: 'login',
  data () {
    return {
      isValid:false,
      username: null,
      password: null
    }
  },
  methods: {
    async submit () {
      let result = await AuthenticationService.authenticate({
          username:this.username,
          password:this.password
        })
      console.log(router.push)     
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
