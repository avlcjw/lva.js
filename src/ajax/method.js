/**
 * Created by o2o3 on 16/8/31.
 */
'use strict';
var env = require('../devconfig.js');
var api = {

    ajax: (configObj)=> {

        if (!configObj.api) {
            if (env.dev) {
                alert('请求method名字');
            } else {
                console.log('请求method名字');
            }
            return false;
        }

        var config = {
            method: configObj.method ? configObj.method : 'get',
            api: configObj.api ? configObj.api : null,
            datas: configObj.datas ? configObj.datas : {},
            contentType: configObj.contentType ? configObj.contentType : "application/json",
            dataType: "json",
            async: configObj.async !== false,
            beforeSend: configObj.beforeSend ? configObj.beforeSend : null,
            complete: configObj.complete ? configObj.complete : null,
            callBack: configObj.success ? configObj.success : null,
            errBack: configObj.error ? configObj.error : null
        };

        $.extend({}, config, configObj);

        $.ajax({
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            },
            contentType: config.contentType,
            method: config.method,
            url: config.api.indexOf('/') < 0 ? env.url + config.api : config.api.indexOf('http') < 0 ? env.img_prefix + config.api : config.api,
            data: config.datas,
            async: config.async,
            beforeSend: config.beforeSend,
            complete: config.complete,
            success: config.callBack ? config.callBack : null,
            error: config.errBack ? config.errBack : null
        });
    }

};

module.exports = api;
