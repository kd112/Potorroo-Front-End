import { Map as maps } from 'ol'
// console.log(maps)
class Maps{
    constructor(){

    }
    init(target){
        return new maps({
            target:target,
            layers:[],
            view:null
        })
        // console.log(map)
        // return map
    }
}

export default Maps