/**
 * Created by o2o3 on 16/11/15.
 *
 * @param  method : string - 'GET' || 'POST'
 * @param  url : string - 'http://www.baidu.com'
 * @param  data : object - {name:'Tom', age:18}
 * @param  datatype : string - json (default) || text || blob || arrayBuffer
 * @param  async : boolean
 * @param  beforesend : function
 * @param  complete : function
 * @param  success : function
 * @param  error : function
 * @param  crossDomain : boolean
 * @param  contentType : string - "application/x-www-form-urlencoded;charset=utf-8"
 * @param  timeout : number - 5000 (ms)
 *
 */

var DEFAULTS = {
    method: 'GET',
    url: '',
    data: {},
    datatype: 'json',
    async: true,
    beforesend: null,
    complete: null,
    success: null,
    error: null,
    crossdomain: false,
    xhrfields: null,
    contenttype: "application/x-www-form-urlencoded;charset=utf-8"
};

class Ajax {

    constructor(obj) {
        let lowCaseObj = {};
        for (let i in obj) {
            lowCaseObj[i.toLowerCase()] = obj[i];
        }
        // The hold config object !!  ( Object.assign combine the arguments to a new object )
        this.config = Object.assign({}, DEFAULTS, lowCaseObj);

        if (window.fetch) {
            //  USE fetch API
            let url = '';
            let body;
            let data = (()=> {
                let str = '';
                if (this.config.method === 'POST' || this.config.method === 'post') {
                    body = {};
                    for (let i in this.config.data) {
                        // str += `${i}=${this.config.data[i]}&`
                        body[i] = this.config.data[i];
                    }
                    url = this.config.url;
                } else {
                    str += '?';
                    for (let i in this.config.data) {
                        str += `${i}=${this.config.data[i]}&`
                    }
                    str = str.slice(0, str.length - 1);
                    url += this.config.url + str;

                }
                return str;
            })();

            let request = new Request(url, {
                method: this.config.method,
                mode: obj.crossDomain ? 'cors' : 'no-cors',
                credentials: obj.crossDomain ? 'include' : 'same-origin',
                redirect: 'follow',
                headers: new Headers({
                    'Content-Type': obj.contentType ? obj.contentType : this.config.contenttype
                }),
                body: body ? JSON.stringify(body) : null
            });

            //For beforeSend Fn
            this.config.beforesend(request);

            let self = this;
            return window.fetch(request).then(function (response) {
                // console.log(response,'resp');
                //For complete Fn
                self.config.complete(response);
                if (response.status !== 200) {
                    return response;
                }
                if (obj.dataType) {
                    if (obj.dataType == 'text') {
                        return response.text();
                    } else if (obj.dataType == 'blob') {
                        return response.blob();
                    } else {
                        return response.arrayBuffer();
                    }
                } else {
                    return response.json();
                }
            });


        } else {
            //  USE XMLHttpRequest
            let data = (()=> {
                let str = '';
                if (this.config.method === 'POST' || this.config.method === 'post') {
                    for (let i in this.config.data) {
                        str += `${i}=${this.config.data[i]}&`
                    }
                } else {
                    str += '?';
                    for (let i in this.config.data) {
                        str += `${i}=${this.config.data[i]}&`
                    }
                }
                str = str.slice(0, str.length - 1);
                return str;
            })();

            return new Promise((reslove, reject)=> {
                let xmlhttp;

                if (window.XMLHttpRequest) {
                    xmlhttp = new XMLHttpRequest();  //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
                } else {
                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");  // IE6, IE5 浏览器执行代码
                }
                if (this.config.timeout) {
                    xmlhttp.timeout = this.config.timeout;
                }
                if (obj.crossDomain) {
                    xmlhttp.withCredentials = this.config.crossdomain;
                }

                if (this.config.method === ('POST' || 'post')) {
                    xmlhttp.open(this.config.method, this.config.url, this.config.async);
                    if (obj.contentType) {
                        xmlhttp.setRequestHeader("Content-type", this.config.contentType);
                    }
                    xmlhttp.send(data);
                } else {
                    xmlhttp.open(this.config.method, this.config.url + data, this.config.async);
                    xmlhttp.send();
                }

                console.log(xmlhttp);
                xmlhttp.onreadystatechange = (e)=> {
                    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                        reslove(JSON.parse(xmlhttp.responseText));
                    } else if (xmlhttp.status == 404) {
                        reject(xmlhttp.status);
                    }
                };
                xmlhttp.onload = this.config.beforesend;
                xmlhttp.onloadend = this.config.complete;
                xmlhttp.onerror = this.config.error;
            });

        }
    }

}

export default Ajax;