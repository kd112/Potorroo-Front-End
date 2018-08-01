import 'ol/ol.css';
import { Map as Maps} from 'ol';

class OLMap {
    constructor(data){
        // super(data)
        this.map = this._build(data)
        
        return this
    }
    _build(data){
        new Maps(data)
    }
}


export default OLMap