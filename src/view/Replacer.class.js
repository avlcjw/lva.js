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
    //   case 'lva-each':
    //     this.type = type;
    //     this.dom = getDomsByAttr('lva-each');
    //     break;
    //   case 'lva-bind':
    //     this.type = type;
    //     this.dom = getDomsByAttr('lva-bind');
    //     break;
    //   case 'lva-bind-html':
    //     this.type = type;
    //     this.dom = getDomsByAttr('lva-bind-html');
    //     break;
    //   case 'lva-src':
    //     this.type = type;
    //     this.dom = getDomsByAttr('lva-src');
    //     break;
    //   case 'lva-if':
    //     this.type = type;
    //     this.dom = getDomsByAttr('lva-if');
    //     break;
    // }
  }

  replace(json) {
    // console.log(json);
    // console.log(this.json);
    let doms = this.dom;
    let self = this;
    let bind = '[lva-bind]',
      html = '[lva-bind-html]',
      each = '[lva-each]',
      src = '[lva-src]',
      fif = '[lva-if]';

    function jsonChangeToText(dom, json) {
      let bindAttrVal = dom.attr('lva-bind');
      // console.log(self.type, 'self.type');
      // console.log(dom,'dom');
      // console.log(json,'json');
      // console.log(bindAttrVal,'bindAttrVal');
      if (typeof json === 'string') {
        dom.text(json);
        dom.removeAttr('lva-bind');
        return;
      }
      // console.log(dom, ' dom');
      dom.html(json[bindAttrVal]);
    }

    function jsonChangeToHtml(dom, json) {

      if (typeof json === 'string') {
        dom.html(json);
        dom.removeAttr('lva-bind-html');
        return;
      }
      dom.html(json[dom.attr(self.type)]);
      dom.removeAttr('lva-bind-html');
    }

    function jsonChangeToSrc(dom, json) {
      let srcAttrVal = dom.attr(self.type);
      if (typeof json === 'string') {
        dom.attr('src', json);
        dom.removeAttr('lva-src');
        return;
      }
      dom.attr('src', json[srcAttrVal]);
    }

    function cloneEach(dom, json) {
      let eachAttrVal = dom.attr(self.type);
      let eachArr = json[eachAttrVal];
      let picTestReg = new RegExp('jpg|png|gif');
      eachArr = typeof eachArr === 'string' ? eachArr.slice(-1) == ',' ? eachArr.slice(0, eachArr.length - 1).split(',') : picTestReg.test(eachArr.slice(-3)) ? eachArr.split(',') : eachArr.split(',').slice(0, -1) : eachArr;
      dom.before('<!--Start lva-each-->');
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
          // console.log($v.find(bind).attr('lva-bind'),'22');
          // console.log(eachArr[i],'2233');
          jsonChangeToText($v.find(bind), eachArr[i]);
        }
        if ($v.find(html).length > 0) {
          jsonChangeToHtml($v.find(html), eachArr[i]);
        }
        $v.removeAttr(each.slice(1, each.length - 1));
        if (i === newEachDoms.length - 1) {
          $v.after('<!--End lva-each-->');
        }

      });
    }

    function ifDom(dom, json) {
      let ifAttr = dom.attr('lva-if');
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
        dom.before($('<!-- lva-if start-->')).after($('<!-- lva-if end-->'));
        dom.remove();
      }
    }

    if (doms.length === 1) {
      if (this.type === 'lva-each') {
        // console.log(doms,'doms');
        // console.log(json,'json');
        // console.log(doms,'doms');
        doms.hide();
        cloneEach(doms, json);
      }
      if (this.type === 'lva-bind') {
        jsonChangeToText(doms, json);
      }
      if (this.type === 'lva-bind-html') {
        jsonChangeToHtml(doms, json);
      }
      if (this.type === 'lva-src') {
        jsonChangeToSrc(doms, json);
      }
      if (this.type === 'lva-if') {
        ifDom(doms, json);
      }
    } else {
      doms.each((i, v)=> {
        if (this.type === 'lva-bind') {
          jsonChangeToText($(v), json);
        }
        if (this.type === 'lva-bind-html') {
          jsonChangeToHtml($(v), json);
        }
        if (this.type === 'lva-src') {
          jsonChangeToSrc($(v), json);
        }
        if (this.type === 'lva-if') {
          ifDom($(v), json);
        }
      });
    }
  }

}

export default Replacer;
