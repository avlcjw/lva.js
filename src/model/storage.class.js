/**
 * Created by o2o3 on 16/11/1.
 */


class Storage {
    constructor() {

    }

    static addExpire(name, datas, time, now) {
        localStorage.setItem(name, datas);
        localStorage.setItem(name + '-expire-time', now + time);
    }

    static compareTimeByName(name,now) {
        if (localStorage.getItem(name + '-expire-time')) {
            if (localStorage.getItem(name + '-expire-time') > 23) {
                now += 23;
            }
            if ((now > localStorage.getItem(name + '-expire-time'))) {
                console.log('缓存已过期');
                return true;
            } else {
                console.log('缓存未过期');
                return false;
            }
        } else {
            console.log('无缓存');
            return true;
        }
    }

    static checkExpire(name,config,now) {
        if (this.method === 'mall.product.list') {
            if (JSON.stringify(config) === localStorage.getItem('type')) {
                return this.compareTimeByName(name,now);
            } else {
                console.log('无该类型缓存');
                return true;
            }
        } else {
            return this.compareTimeByName(name,now);
        }
    }

}

export default Storage;