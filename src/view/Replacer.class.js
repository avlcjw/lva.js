/**
 * Created by o2o3 on 16/10/24.
 */


function getDomsByAttr(attr) {
  // console.log(container.find(`[${attr}]`),'\r\nfind2d');
  return this.find(`[${attr}]`);
}

class Replacer {

  constructor(type, container, json) {
    this.json = json;
    type = type.toLowerCase();
    this.type = type;
    this.dom = getDomsByAttr.call(container, type);
    // switch (type) {
    //   case 'fuck-each':
    //     this.type = type;
    //     this.dom = getDomsByAttr('fuck-each');
    //     break;
    //   case 'fuck-bind':
    //     this.type = type;
    //     this.dom = getDomsByAttr('fuck-bind');
    //     break;
    //   case 'fuck-bind-html':
    //     this.type = type;
    //     this.dom = getDomsByAttr('fuck-bind-html');
    //     break;
    //   case 'fuck-src':
    //     this.type = type;
    //     this.dom = getDomsByAttr('fuck-src');
    //     break;
    //   case 'fuck-if':
    //     this.type = type;
    //     this.dom = getDomsByAttr('fuck-if');
    //     break;
    // }
  }

  replace(json) {
    // console.log(json);
    // console.log(this.json);
    let doms = this.dom;
    let self = this;
    let bind = '[fuck-bind]',
      html = '[fuck-bind-html]',
      each = '[fuck-each]',
      src = '[fuck-src]',
      fif = '[fuck-if]';

    function jsonChangeToText(dom, json) {
      let bindAttrVal = dom.attr(self.type);
      console.log(self.type, 'self.type');
      // console.log(dom);
      // console.log(json,'json');
      // console.log(bindAttrVal,'bindAttrVal');
      if (typeof json === 'string') {
        dom.text(json);
        dom.removeAttr('fuck-bind');
        return;
      }
      console.log(dom, ' dom');
      dom.html(json[bindAttrVal]);
    }

    function jsonChangeToHtml(dom, json) {

      if (typeof json === 'string') {
        dom.html(json);
        dom.removeAttr('Fuck-bind-html');
        return;
      }
      dom.html(json[dom.attr(self.type)]);
      dom.removeAttr('Fuck-bind-html');
    }

    function jsonChangeToSrc(dom, json) {
      let srcAttrVal = dom.attr(self.type);
      if (typeof json === 'string') {
        dom.attr('src', json);
        dom.removeAttr('fuck-src');
        return;
      }
      dom.attr('src', json[srcAttrVal]);
    }

    function cloneEach(dom, json) {
      let eachAttrVal = dom.attr(self.type);
      let eachArr = json[eachAttrVal];
      let picTestReg = new RegExp('jpg|png|gif');
      eachArr = typeof eachArr === 'string' ? eachArr.slice(-1) == ',' ? eachArr.slice(0, eachArr.length - 1).split(',') : picTestReg.test(eachArr.slice(-3)) ? eachArr.split(',') : eachArr.split(',').slice(0, -1) : eachArr;
      dom.before('<!--Start Fuck-each-->');
      dom.hide();
      eachArr.forEach((v, i)=> {
        if (i === eachArr.length - 1) return false;
        dom.after(dom.clone());
      });
      let newEachDoms = dom.parent().find(each);
      newEachDoms.each((i, v)=> {
        let $v = $(v);
        $(v).show();
        if ($v.find(src).length > 0) {
          jsonChangeToSrc($v.find(src), eachArr[i]);
        }
        if ($v.find(bind).length > 0) {
          jsonChangeToText($v.find(bind), eachArr[i]);
        }
        if ($v.find(html).length > 0) {
          jsonChangeToHtml($v.find(html), eachArr[i]);
        }
        $v.removeAttr(each.slice(1, each.length - 1));
        if (i === newEachDoms.length - 1) {
          $v.after('<!--End Fuck-each-->');
        }

      });
    }

    function ifDom(dom, json) {
      let ifAttr = dom.attr('Fuck-if');
      let trueIfAttr;
      if (ifAttr.indexOf('!') > -1) {
        trueIfAttr = ifAttr.replace('!', '');
      }

      let jsonKey = trueIfAttr ? trueIfAttr : ifAttr;

      let ifBoolean = Boolean((json[jsonKey] === '0' ? Number(json[jsonKey]) : json[jsonKey] ));

      if (trueIfAttr) {
        ifBoolean = !ifBoolean;
      }

      if (ifBoolean) {
        dom.show();
      } else {
        dom.before($('<!-- Fuck-if start-->')).after($('<!-- Fuck-if end-->'));
        dom.remove();
      }
    }

    if (doms.length === 1) {
      if (this.type === 'fuck-each') {
        // console.log(doms,'doms');
        // console.log(json,'json');
        console.log(doms,'doms');
        doms.hide();
        cloneEach(doms, json);
      }
      if (this.type === 'fuck-bind') {
        jsonChangeToText(doms, json);
      }
      if (this.type === 'fuck-bind-html') {
        jsonChangeToHtml(doms, json);
      }
      if (this.type === 'fuck-src') {
        jsonChangeToSrc(doms, json);
      }
      if (this.type === 'fuck-if') {
        ifDom(doms, json);
      }
    } else {
      doms.each((i, v)=> {
        if (this.type === 'fuck-bind') {
          jsonChangeToText($(v), json);
        }
        if (this.type === 'fuck-bind-html') {
          jsonChangeToHtml($(v), json);
        }
        if (this.type === 'fuck-src') {
          jsonChangeToSrc($(v), json);
        }
        if (this.type === 'fuck-if') {
          ifDom($(v), json);
        }
      });
    }
  }

}

export default Replacer;
