/**
 * Created by avlcjw on 2017/5/20.
 */

import Model from './model/baseModel';
import View from './view/baseView';
import Tools from './tools/tools';
import ie from './tools/navigator';

class lva {
  constructor(config) {
    if (typeof config === 'object') {
      // alert(123222);
    }
    console.log(config, 'config');
    /*
     *  防止页面 lva-if 的闪烁
     */
    var x = document.createElement('div');
    let styleText = `
        [lva-if]{
          display:none;
        }
        [lva-each]{
          display:none;      
        }`;
    x.innerHTML = `x<style>${styleText}</style>`;
    document.getElementsByTagName('head')[0].appendChild(x.lastChild);


    this.$datas = Object.assign(ie === 'IE8' ? $(config.view.container)[0] : {}, config.model.datas);
    this.model = new Model(config, this);

    this.view = new View(config, this);


    // this.controller = new Controller()
    // console.log(this.model, 'this.model');
    // console.log(this.view, 'this.view');
    // this.rended = config.rended.bind(this.view);


    // console.log(this.view.container);
    // this.view.replace.call(this,$(this.view.container), this.model.datas);

  }

  static Tools(type) {
    return new Tools(type);
  }

}

window.lva = lva;
