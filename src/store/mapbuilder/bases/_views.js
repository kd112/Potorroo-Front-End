import {View } from 'ol';
class OlView{
    constructor(){

    }
    init(map,data){
        let view
        if (data.view){
            // console.log(data.view)
            view = new View(data.view)
        }else{
            // console.log('else' /)
            view = new View({
                center: [0, 0],
                zoom: 0
            })
        }
        // console.log("here")
        // console.log(map.setView)
        // console.log(view)
        map.setView(view)
        return map
    }
}

export default OlView