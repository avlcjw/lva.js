/**
 * Created by o2o3 on 16/10/24.
 */

class Tools{
    constructor(type) {
        this.getUrlParam = (name)=>{
            let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            let r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);
            return null;
        };
        this.fixImages = (id)=>{
            let imgs = $(id).find('img');
            let loadimg = new Image();
            loadimg.src = imgs[imgs.length - 1].src;
            loadimg.onload = function (e) {
                $(id).find('.item').each(function (i, v) {
                    let $img = $(v).find('img');
                    if ($img.width() !== $img.height()) {
                        $img.height($(v).width());
                    }
                });
                loadimg = null;
            }
        }
    }
}

export default Tools;