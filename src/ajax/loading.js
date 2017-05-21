/**
 * Created by o2o3 on 16/8/31.
 */
'use strict';

class Loading {
    constructor(width, height) {
        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }

    static showLoading(text) {
        $.showLoading(text);
    }
    static disLoading(){
        $.hideLoading();
    }
}


// module.exports = new Loading();
export default Loading;
