<template>
    <v-container light fluid fill-height>
              <!-- <div class="text-xs-center"> -->
        <v-layout row wrap>
                <v-dialog
                    v-model="dialog"
                    width="50%"
                    persistent
                >
                    <v-form ref="form" action="" class="white py-5 px-3" autocomplete="off" v-model="valid" lazy-validation>
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
                                    required
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
                                required
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
                                readOnly
                                label="Email"
                                light
                                type="email"
                                :rules="emailrules"
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
                                required
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
                                :rules="passwordrules"
                                required
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
                                :rules="passwordrules"
                                required
                                ></v-text-field>
                            </v-flex>
                        </v-layout>
                        <v-flex row>
                            <v-btn color="cyan white--text" flat @click="submit" large>
                                Save
                            </v-btn>
                            <v-btn color="red white--text" flat @click="dialog=false" large>
                                Cancel
                            </v-btn>
                        </v-flex>
                    </v-form>
                </v-dialog>
        </v-layout>
        <!-- </div> -->
        <v-layout class="text-xs-center">
            <v-dialog
                v-model="error"
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
        </v-layout>
        <v-layout class="text-xs-center">
            <v-dialog
                v-model="redirect"
                width="500"
            >
                <v-card>
                    <!-- <v-card-title class="red lighten-2"> -->
                        <v-card-text class="red lighten-2">
                            <h3 class="white--text">Redirecting</h3>
                        </v-card-text>
                    <!-- </v-card-title> -->
                    <v-divider></v-divider>
                    <v-card-text>
                        <h5>The link has expired,<br></h5>
                        <h5>redirecting....</h5>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    props:['id'],
    data(){
        return {
            error_message:"",
            error:false,
            redirect:false,
            valid:true,
            dialog:false,
            user:{
            name:{
                first:null,
                last:null
            },
            login:{
                username:null,
                password:null
            },
            email:null,
            phone:null,
            company:null,
            isAuthenticated:null,
        },
            repeatpassword:null,
            passwordrules:[
                (v)=>v===this.user.login.password ||'Password Doesnot Match'
            ],
            emailrules:[
                v => !!v || 'E-mail is required',
                v => /.+@.+/.test(v) || 'E-mail must be valid'
            ]

        }
    },
    methods:{
        async submit(){
            try{
                if(this.$refs.form.validate()){
                    this.user.isAuthenticated=true
                    let { data } = await this.$store.dispatch('newUser',{user:this.user})
                    this.$store.dispatch('setUser',data.token)
                    this.$refs.form.clear()
                    this.$router.push('/')
                }
            }catch(error){
                
            }
            
        }
    },
    async beforeMount(){
        try{
            
            let user= await this.$store.dispatch('getUser',this.id)
            if (!user){
                throw new Error()
            }else{
                
                this.user = user.user
                this.dialog =true
            }
        }catch(error){
            this.$router.push('/')
        }
    },
    watch:{
        redirect:(val)=>{
            if(!val) {
                console.log("if")
                return
            }
            console.log(this.redirect)
            setTimeout(() => {
                console.log(this.redirect)
                this.redirect = false
                console.log(this.redirect)
                }, 4000)
        }
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
