import { Map as maps } from 'ol'
// console.log(maps)
class Maps{
    constructor(){

    }
    init(target,overlay){
        // console.log(overlay.getId)
        return new maps({
            target:target,
            layers:[],
            view:null,
            overlays:[overlay]
        })
        // console.log(map)
        // return map
    }
}

export default Maps