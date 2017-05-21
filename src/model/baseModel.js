/**
 * Created by o2o3 on 16/8/31.
 */
'use strict';
import env from '../devconfig.js';
import api from '../ajax/method.js';
import load from '../ajax/loading.js';
import Storage from './storage.class';
import {FlowDatas} from './FlowDatas.class';

class Model {

  constructor(conf, parent) {
    this.appConfig = conf;
    // this.api = conf.model.api;
    // this.search = conf.model.search;
    this.now = new Date().getHours();
    this.datas = conf.model.datas;

    // Binding.set(this.datas);
    // FlowDatas.init(parent);
  }

  asynData(expireName) {
    let self = this;

    return new Promise((resolve, reject)=> {

      if (env.expire) {
        if (!Storage.checkExpire(expireName, this.appConfig.model, this.now)) {
          resolve(JSON.parse(localStorage.getItem(expireName)));
          return true;
        }
      }

      if (this.api === 'mall.product.list') {
        let storageType = JSON.stringify(this.appConfig.model);
        localStorage.setItem('type', storageType);
      }

      api.ajax({
        api: this.api,
        method: this.search.method,
        datas: this.search.datas,
        beforeSend: function () {
        },
        complete: function (XMLHttpRequest, textStatus) {
        },
        success: function (res) {
          if (env.expire && res.response) {
            Storage.addExpire(expireName, JSON.stringify(res.response), 2);
          }
          resolve(res.response);
        },
        error: function (err) {
          reject(err);
        }
      });

    });
  }


  setData(key, val) {
    if (!(key in this.datas)) {
      console.log('数据中没有这个key');
      return false;
    } else {
      this.datas[key] = val;
    }


    return false;
    this['fuckDatas'] = {};
    let modelDoms = findDomByAttr.call(this, 'Fuck-model');
    if (modelDoms.length === 1) {
      modelDoms.on('input', (e)=> {
        changeText(modelDoms, e.currentTarget.value);
      });
    }

    this.fuckDatas[key] = val;
    if (val) {
      changeText(modelDoms, val);
    }

    Object.defineProperty(this.fuckDatas, key, {
      get: () => {
        return this.datas[key];
      },
      set: (value) => {
        this.fuckDatas[key] = value;
        changeText(modelDoms, val);
      },
    });

    function changeText(e, v) {
      let modelAttrVal = e.attr('Fuck-model');
      let bindDom = $(`[Fuck-bind=${modelAttrVal}]`);
      bindDom.text(v);
    }

    function findDomByAttr(attr) {
      return this.container.find(`[${attr}]`);
    }

  }


  // more() {
  //
  //     return new Promise((resolve, reject)=> {
  //         api.ajax({
  //             api: this.api,
  //             method: this.search.method,
  //             datas: this.search.datas,
  //             beforeSend: function () {
  //             },
  //             success: function (res) {
  //                 resolve(res.response);
  //             },
  //             error: function (err) {
  //                 reject(err);
  //             }
  //         });
  //
  //     });
  //
  // }

}

export default Model;
