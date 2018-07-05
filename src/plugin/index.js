import AuthenticationService from './services/AuthenticationServices';
import FlattenJson from './helpers/flatten_json';
const Potoroo={
    install(Vue,options){
        Vue.prototype.$services = {
            authenticationService:new AuthenticationService()
        }
        Vue.prototype.$helpers ={
            FlattenJson:FlattenJson
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