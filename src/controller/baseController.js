/**
 * Created by o2o3 on 16/10/21.
 */
class Controller {
    constructor(func) {
        $(()=>{
            func();
        })
    }
}

export default Controller;