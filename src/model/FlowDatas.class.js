/**
 * Created by o2o3 on 16/11/1.
 */


class FlowDatas {
  constructor(obj) {
    this.datasObject = obj;
  }

  static init() {
    for (let i in this.datasObject) {
      if (this.datasObject.hasOwnProperty(i) && Object.getOwnPropertyDescriptor(this.datasObject, i).configurable) {
        let obj = this.datasObject;
        let _tmp;
        Object.defineProperty(obj, i, {
          get: () => {
            console.log('load data....');
            return _tmp;
          },
          set: (value) => {
            console.log('set data....');
            _tmp = value;
          },
          configurable: false
        });
      }
    }
  }

}

export {FlowDatas};
