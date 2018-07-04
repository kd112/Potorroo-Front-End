import AuthenticationService from './services/AuthenticationServices';
const Potoroo={
    install(Vue,options){
        Vue.prototype.$services = {
            authenticationService:new AuthenticationService()
        }
        // Vue.mixin({
        //     mounted(){
        //         testobj:"testobj",
        //         console.log("mounted")
        //     }
        // })
    }
}
export default Potoroo;