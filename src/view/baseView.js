/**
 * Created by o2o3 on 16/10/19.
 */
import Fliter from '../filter/Fliter.class';
import Replacer from '../view/Replacer.class';
import Event from '../view/Event.class';
import Bind from '../view/Bind.class';

var global_datas;

class View {
  constructor(conf, app) {
    this.app = app;
    this.appConfig = conf;
    this.container = $(conf.view.container);
    this.events = conf.view.events;
    global_datas = conf.model.datas;
  }

  static changeTitle(text) {
    document.getElementById('page_title').innerText = text;
  }

  replace(html, json) {
    // console.log(this,321);
    let $con = this.container;
    let _innerhtml = $con.html();
    let binDataReg = new RegExp('{{[A-z]*}}', 'g');
    let directiveArr = new RegExp('lva-.*', 'g');
    let removeNotesHtml = _innerhtml.replace(/<!--.*-->/g, '');
    let replacesArr = _innerhtml.match(binDataReg);
    let selt = this;
    //delete notes
    $con.html(removeNotesHtml);

    if (findDomByAttr('lva-each')) {
      let eachs = new Replacer('lva-each', this.container, global_datas);
      eachs.replace(json);
    }

    if (findDomByAttr('lva-model')) {
      let modelDom = findDomByAttr('lva-model');
      modelDom.each((i,v)=>{
        let modelAttr = $(v).attr('lva-model');
        console.log(this.app,'this.app');
        let ms = new Bind(this.app, $(v), modelAttr);
        // ms.addBind();
      });
    }

    if (findDomByAttr('lva-bind')) {
      let bs = new Replacer('lva-bind', this.container, global_datas);
      bs.replace(json);
    }

    if (findDomByAttr('lva-bind-html')) {
      let htmls = new Replacer('lva-bind-html', this.container, global_datas);
      htmls.replace(json);
    }

    if (findDomByAttr('lva-src')) {
      let srcs = new Replacer('lva-src', this.container, global_datas);
      srcs.replace(json);
    }

    if (findDomByAttr('lva-if')) {
      let ifs = new Replacer('lva-if', this.container, global_datas);
      ifs.replace(json);
    }

    if (findParantheses(binDataReg)) {
      let replaces = findParantheses(binDataReg);
      let newStr = $con.html();

      replaces.forEach((v, i)=> {
        console.log(v, 'v21');
        let newProp = v.slice(2).slice(0, -2);
        let reg = new RegExp(v, 'g');
        newStr = newStr.replace(reg, json[newProp]);
      });

      $con.html(newStr);
    }

    if (findDomByAttr('lva-fliter')) {
      let fliterDoms = findDomByAttr('lva-fliter');
      if (fliterDoms.length === 1) {
        let fliterAttrVal = fliterDoms.attr('lva-fliter');
        Fliter.change.call(fliterDoms, fliterAttrVal);
        fliterDoms.removeAttr('lva-fliter');
      } else {
        fliterDoms.each((i, v)=> {
          let fliterAttrVal = $(v).attr('lva-fliter');
          Fliter.change.call($(v), fliterAttrVal);
          $(v).removeAttr('lva-fliter');
        });
      }
    }

    function findDomByAttr(attr) {
      return selt.container.find(`[${attr}]`);
    }

    function findParantheses(reg) {
      return removeNotesHtml.match(reg);
    }

  }

  onevent(container, evts) {
    if (this.events && this.events.init && typeof this.events.init === 'function') {
      this.events.init.call(this, this.container);
    }
    return new Event(container, evts);
  }

  render(json) {
    for (let i in json) {
      global_datas[i] = json[i];
    }
    this.replace(this.container, json);
    let events = this.onevent(this.container, this.events);
    events.bindAll();
  }

  appendMore(datas) {
    return new Promise((resolve, reject)=> {
      if (datas && typeof datas === 'object') {
        this.replace(datas);
        resolve('rended.');
      } else {
        reject('bad work render.');
      }
    })
  }

}

export default View;
