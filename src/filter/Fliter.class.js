/**
 * Created by o2o3 on 16/9/2.
 */
'use strict';
import env from '../devconfig';

class Fliter {
    constructor() {
        this.version = env.version;
    }

    static change(json) {
        let newJson;
        try{
            newJson = JSON.parse(json);
        }catch(err){
            newJson = JSON.parse(json.replace(/'/g,'"'));
        }
        let _input = this.text();
        this.text(newJson[_input]);
        //return current Jq DOM element;
        return this;
    };

}

export default Fliter;
