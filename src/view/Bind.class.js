/**
 * Created by o2o3 on 16/10/24.
 */
import {FlowDatas} from '../model/FlowDatas.class';
import ie from '../tools/navigator';

class Bind {

  constructor(app, dom, attr) {
    this.dom = dom;
    this.attr = attr;
    // console.log(app, 'app');
    let str = ie === "IE8" ? 'keyup' : 'input';
    $(document).on(str, '[fuck-model=' + attr + ']', function (e) {
      console.log(e, 'e');
      app.$datas[attr] = $(this).val();
    });
    FlowDatas.addFlowData(app, this.dom, this.attr);
    // dom.bind('input', function (e) {
    //   console.log(e, 'e')
    // });
  }

  addBind(attribute) {
    // FlowDatas.addFlowData(this.dom, this.attr);
  }

}

export default Bind;
