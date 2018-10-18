/**
 * Created by o2o3 on 16/11/1.
 */


class FlowDatas {
  constructor(obj) {
    // this.datasObject = obj;
  }

  static init(app) {
    let obj = app.$datas;
    console.log(app, 'obj');
    for (let i in obj) {
      if (obj.hasOwnProperty(i) && Object.getOwnPropertyDescriptor(obj, i).configurable) {
        let _tmp;
        Object.defineProperty(obj, i, {
          get: () => {
            console.log('load data....', _tmp);
            return _tmp;
          },
          set: (value) => {
            console.log('set data....', value);
            app.model.datas[i] = value;
            _tmp = value;
          },
          // configurable: false
        });
      }
      // console.log(Object.getOwnPropertyDescriptor(obj, i), 'obj');
    }
  }

  static addFlowData(app, dom, attribute) {
    console.log(app.$datas, 'app.$datas');
    // console.log(dom, 'dom');
    // console.log(attribute, 'attribute');
    let _tmp;
    Object.defineProperty(app.$datas, attribute, {
      get: () => {
        console.log('Load data....', _tmp);
        return _tmp;
      },
      set: (value) => {
        console.log('Change DOM....', value);
        app.view.container.find('[lva-bind='+ attribute +']').text(value);
        dom.val(value);
        // dom.text(value);
        _tmp = value;
      },
      // configurable: false
    });
  }

}

export {FlowDatas};
