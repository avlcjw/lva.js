/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by o2o3 on 16/8/31.
 */


var env = {
    version: '2.0.0',
    expire: false, //美业师首屏缓存   true:开启  false:关闭
    dev: true,
    // url:'http://192.168.1.199:7891/open/api/?method=',
    url: 'http://crm.qiaocat.com/open/api/?method=',
    // img_prefix:'http://192.168.1.199:7891'
    img_prefix: 'http://crm.qiaocat.com'
};

module.exports = env;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by o2o3 on 16/11/1.
 */

var FlowDatas = function () {
  function FlowDatas(obj) {
    // this.datasObject = obj;

    _classCallCheck(this, FlowDatas);
  }

  FlowDatas.init = function init(app) {
    var obj = app.$datas;
    console.log(app, 'obj');

    var _loop = function _loop(i) {
      if (obj.hasOwnProperty(i) && Object.getOwnPropertyDescriptor(obj, i).configurable) {
        var _tmp = void 0;
        Object.defineProperty(obj, i, {
          get: function get() {
            console.log('load data....', _tmp);
            return _tmp;
          },
          set: function set(value) {
            console.log('set data....', value);
            app.model.datas[i] = value;
            _tmp = value;
          }
        });
      }
      // console.log(Object.getOwnPropertyDescriptor(obj, i), 'obj');
    };

    for (var i in obj) {
      _loop(i);
    }
  };

  FlowDatas.addFlowData = function addFlowData(app, dom, attribute) {
    console.log(app.$datas, 'app.$datas');
    // console.log(dom, 'dom');
    // console.log(attribute, 'attribute');
    var _tmp = void 0;
    Object.defineProperty(app.$datas, attribute, {
      get: function get() {
        console.log('Load data....', _tmp);
        return _tmp;
      },
      set: function set(value) {
        console.log('Change DOM....', value);
        app.view.container.find('[lva-bind=' + attribute + ']').text(value);
        dom.val(value);
        // dom.text(value);
        _tmp = value;
      }
    });
  };

  return FlowDatas;
}();

exports.FlowDatas = FlowDatas;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Polyfills
// (these modules are what are in 'angular2/bundles/angular2-polyfills' so don't use that here)

// import 'ie-shim'; // Internet Explorer
// import 'es6-shim';
// import 'es6-promise';
// import 'es7-reflect-metadata';

// Prefer CoreJS over the polyfills above
// import 'core-js/es6';
// import 'core-js/es7/reflect';
// require('zone.js/dist/zone');


if (!ENV) {
  var ENV = 'development';
}

if (ENV === 'production') {
  // Production
} else {
  // Development


  Error.stackTraceLimit = Infinity;

  // require('zone.js/dist/long-stack-trace-zone');
}

if (!Object.assign && typeof Object.assign === 'undefined') {
  console.log('unknow object');
  Object.assign = function () {
    var args = arguments;
    for (var i = 1; i < args.length; i++) {
      for (var j in args[i]) {
        args[0][j] = args[i][j];
      }
    }
    return args[0];
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _baseModel = __webpack_require__(11);

var _baseModel2 = _interopRequireDefault(_baseModel);

var _baseView = __webpack_require__(17);

var _baseView2 = _interopRequireDefault(_baseView);

var _tools = __webpack_require__(13);

var _tools2 = _interopRequireDefault(_tools);

var _navigator = __webpack_require__(23);

var _navigator2 = _interopRequireDefault(_navigator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by avlcjw on 2017/5/20.
                                                                                                                                                           */

var lva = function () {
  function lva(config) {
    _classCallCheck(this, lva);

    if ((typeof config === 'undefined' ? 'undefined' : _typeof(config)) === 'object') {
      // alert(123222);
    }
    console.log(config, 'config');
    /*
     *  防止页面 lva-if 的闪烁
     */
    var x = document.createElement('div');
    var styleText = '\n        [lva-if]{\n          display:none;\n        }\n        [lva-each]{\n          display:none;      \n        }';
    x.innerHTML = 'x<style>' + styleText + '</style>';
    document.getElementsByTagName('head')[0].appendChild(x.lastChild);

    this.$datas = Object.assign(_navigator2['default'] === 'IE8' ? $(config.view.container)[0] : {}, config.model.datas);
    this.model = new _baseModel2['default'](config, this);

    this.view = new _baseView2['default'](config, this);

    // this.controller = new Controller()
    // console.log(this.model, 'this.model');
    // console.log(this.view, 'this.view');
    // this.rended = config.rended.bind(this.view);


    // console.log(this.view.container);
    // this.view.replace.call(this,$(this.view.container), this.model.datas);
  }

  lva.Tools = function Tools(type) {
    return new _tools2['default'](type);
  };

  return lva;
}();

window.lva = lva;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(18);

/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/v4.1.3/LICENSE
 */
 var call = Function.prototype.call;
 var prototypeOfObject = Object.prototype;
 var owns = call.bind(prototypeOfObject.hasOwnProperty);

 // If JS engine supports accessors creating shortcuts.
 var defineGetter;
 var defineSetter;
 var lookupGetter;
 var lookupSetter;
 var supportsAccessors = owns(prototypeOfObject, '__defineGetter__');
 if (supportsAccessors) {
     /*eslint-disable no-underscore-dangle */
     defineGetter = call.bind(prototypeOfObject.__defineGetter__);
     defineSetter = call.bind(prototypeOfObject.__defineSetter__);
     lookupGetter = call.bind(prototypeOfObject.__lookupGetter__);
     lookupSetter = call.bind(prototypeOfObject.__lookupSetter__);
     /*eslint-enable no-underscore-dangle */
 }

 if (!Object.freeze) {
     Object.freeze = function freeze(object) {
         if (Object(object) !== object) {
             throw new TypeError('Object.freeze can only be called on Objects.');
         }
         // this is misleading and breaks feature-detection, but
         // allows "securable" code to "gracefully" degrade to working
         // but insecure code.
         return object;
     };
 }
 if (!Object.create) {

     // Contributed by Brandon Benvie, October, 2012
     var createEmpty;
     var supportsProto = !({ __proto__: null } instanceof Object);
                         // the following produces false positives
                         // in Opera Mini => not a reliable check
                         // Object.prototype.__proto__ === null
     /*global document */
     if (supportsProto || typeof document === 'undefined') {
         createEmpty = function () {
             return { __proto__: null };
         };
     } else {
         // In old IE __proto__ can't be used to manually set `null`, nor does
         // any other method exist to make an object that inherits from nothing,
         // aside from Object.prototype itself. Instead, create a new global
         // object and *steal* its Object.prototype and strip it bare. This is
         // used as the prototype to create nullary objects.
         createEmpty = function () {
             var iframe = document.createElement('iframe');
             var parent = document.body || document.documentElement;
             iframe.style.display = 'none';
             parent.appendChild(iframe);
             /*eslint-disable no-script-url */
             iframe.src = 'javascript:';
             /*eslint-enable no-script-url */
             var empty = iframe.contentWindow.Object.prototype;
             parent.removeChild(iframe);
             iframe = null;
             delete empty.constructor;
             delete empty.hasOwnProperty;
             delete empty.propertyIsEnumerable;
             delete empty.isPrototypeOf;
             delete empty.toLocaleString;
             delete empty.toString;
             delete empty.valueOf;
             /*eslint-disable no-proto */
             empty.__proto__ = null;
             /*eslint-enable no-proto */

             var Empty = function Empty() {};
             Empty.prototype = empty;
             // short-circuit future calls
             createEmpty = function () {
                 return new Empty();
             };
             return new Empty();
         };
     }

     Object.create = function create(prototype, properties) {

         var object;
         var Type = function Type() {}; // An empty constructor.

         if (prototype === null) {
             object = createEmpty();
         } else {
             if (typeof prototype !== 'object' && typeof prototype !== 'function') {
                 // In the native implementation `parent` can be `null`
                 // OR *any* `instanceof Object`  (Object|Function|Array|RegExp|etc)
                 // Use `typeof` tho, b/c in old IE, DOM elements are not `instanceof Object`
                 // like they are in modern browsers. Using `Object.create` on DOM elements
                 // is...err...probably inappropriate, but the native version allows for it.
                 throw new TypeError('Object prototype may only be an Object or null'); // same msg as Chrome
             }
             Type.prototype = prototype;
             object = new Type();
             // IE has no built-in implementation of `Object.getPrototypeOf`
             // neither `__proto__`, but this manually setting `__proto__` will
             // guarantee that `Object.getPrototypeOf` will work as expected with
             // objects created using `Object.create`
             /*eslint-disable no-proto */
             object.__proto__ = prototype;
             /*eslint-enable no-proto */
         }

         if (properties !== void 0) {
             Object.defineProperties(object, properties);
         }

         return object;
     };
 }


 var doesDefinePropertyWork = function doesDefinePropertyWork(object) {
     try {
         Object.defineProperty(object, 'sentinel', {});
         return 'sentinel' in object;
     } catch (exception) {
         return false;
     }
 };

 // check whether defineProperty works if it's given. Otherwise,
 // shim partially.
 if (Object.defineProperty) {
     var definePropertyWorksOnObject = doesDefinePropertyWork({});
     var definePropertyWorksOnDom = typeof document === 'undefined' ||
         doesDefinePropertyWork(document.createElement('div'));
     if (!definePropertyWorksOnObject || !definePropertyWorksOnDom) {
         var definePropertyFallback = Object.defineProperty,
             definePropertiesFallback = Object.defineProperties;
     }
 }
 if (!Object.defineProperty || definePropertyFallback) {
     var definePropertyFallback = Object.defineProperty;
     var ERR_NON_OBJECT_DESCRIPTOR = 'Property description must be an object: ';
     var ERR_NON_OBJECT_TARGET = 'Object.defineProperty called on non-object: ';
     var ERR_ACCESSORS_NOT_SUPPORTED = 'getters & setters can not be defined on this javascript engine';

     Object.defineProperty = function defineProperty(object, property, descriptor) {
         if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
             throw new TypeError(ERR_NON_OBJECT_TARGET + object);
         }
         if ((typeof descriptor !== 'object' && typeof descriptor !== 'function') || descriptor === null) {
             throw new TypeError(ERR_NON_OBJECT_DESCRIPTOR + descriptor);
         }
         // make a valiant attempt to use the real defineProperty
         // for I8's DOM elements.
         if (definePropertyFallback) {
             try {
                 return definePropertyFallback.call(Object, object, property, descriptor);
             } catch (exception) {
                 // try the shim if the real one doesn't work
             }
         }

         // If it's a data property.
         if ('value' in descriptor) {
             // fail silently if 'writable', 'enumerable', or 'configurable'
             // are requested but not supported
             /*
             // alternate approach:
             if ( // can't implement these features; allow false but not true
                 ('writable' in descriptor && !descriptor.writable) ||
                 ('enumerable' in descriptor && !descriptor.enumerable) ||
                 ('configurable' in descriptor && !descriptor.configurable)
             ))
                 throw new RangeError(
                     'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
                 );
             */

             if (supportsAccessors && (lookupGetter(object, property) || lookupSetter(object, property))) {
                 // As accessors are supported only on engines implementing
                 // `__proto__` we can safely override `__proto__` while defining
                 // a property to make sure that we don't hit an inherited
                 // accessor.
                 /*eslint-disable no-proto */
                 var prototype = object.__proto__;
                 object.__proto__ = prototypeOfObject;
                 // Deleting a property anyway since getter / setter may be
                 // defined on object itself.
                 delete object[property];
                 object[property] = descriptor.value;
                 // Setting original `__proto__` back now.
                 object.__proto__ = prototype;
                 /*eslint-enable no-proto */
             } else {
                 object[property] = descriptor.value;
             }
         }
         return object;
     };
 }

 // ES5 15.2.3.7
 // http://es5.github.com/#x15.2.3.7
 if (!Object.defineProperties || definePropertiesFallback) {
     Object.defineProperties = function defineProperties(object, properties) {
         // make a valiant attempt to use the real defineProperties
         if (definePropertiesFallback) {
             try {
                 return definePropertiesFallback.call(Object, object, properties);
             } catch (exception) {
                 // try the shim if the real one doesn't work
             }
         }

         Object.keys(properties).forEach(function (property) {
             if (property !== '__proto__') {
                 Object.defineProperty(object, property, properties[property]);
             }
         });
         return object;
     };
 }
 var doesGetOwnPropertyDescriptorWork = function doesGetOwnPropertyDescriptorWork(object) {
     try {
         object.sentinel = 0;
         return Object.getOwnPropertyDescriptor(object, 'sentinel').value === 0;
     } catch (exception) {
         return false;
     }
 };

 //check whether getOwnPropertyDescriptor works if it's given. Otherwise,
 //shim partially.
 if (Object.defineProperty) {
     var getOwnPropertyDescriptorWorksOnObject = doesGetOwnPropertyDescriptorWork({});
     var getOwnPropertyDescriptorWorksOnDom = typeof document === 'undefined' ||
     doesGetOwnPropertyDescriptorWork(document.createElement('div'));
     if (!getOwnPropertyDescriptorWorksOnDom || !getOwnPropertyDescriptorWorksOnObject) {
         var getOwnPropertyDescriptorFallback = Object.getOwnPropertyDescriptor;
     }
 }

 if (!Object.getOwnPropertyDescriptor || getOwnPropertyDescriptorFallback) {
     var ERR_NON_OBJECT = 'Object.getOwnPropertyDescriptor called on a non-object: ';

     /*eslint-disable no-proto */
     Object.getOwnPropertyDescriptor = function getOwnPropertyDescriptor(object, property) {
         if ((typeof object !== 'object' && typeof object !== 'function') || object === null) {
             throw new TypeError(ERR_NON_OBJECT + object);
         }

         // make a valiant attempt to use the real getOwnPropertyDescriptor
         // for I8's DOM elements.
         if (getOwnPropertyDescriptorFallback) {
             try {
                 return getOwnPropertyDescriptorFallback.call(Object, object, property);
             } catch (exception) {
                 // try the shim if the real one doesn't work
             }
         }

         var descriptor;

         // If object does not owns property return undefined immediately.
         if (!owns(object, property)) {
             return descriptor;
         }

         // If object has a property then it's for sure both `enumerable` and
         // `configurable`.
         descriptor = { enumerable: true, configurable: true };

         // If JS engine supports accessor properties then property may be a
         // getter or setter.
         if (supportsAccessors) {
             // Unfortunately `__lookupGetter__` will return a getter even
             // if object has own non getter property along with a same named
             // inherited getter. To avoid misbehavior we temporary remove
             // `__proto__` so that `__lookupGetter__` will return getter only
             // if it's owned by an object.
             var prototype = object.__proto__;
             var notPrototypeOfObject = object !== prototypeOfObject;
             // avoid recursion problem, breaking in Opera Mini when
             // Object.getOwnPropertyDescriptor(Object.prototype, 'toString')
             // or any other Object.prototype accessor
             if (notPrototypeOfObject) {
                 object.__proto__ = prototypeOfObject;
             }

             var getter = lookupGetter(object, property);
             var setter = lookupSetter(object, property);

             if (notPrototypeOfObject) {
                 // Once we have getter and setter we can put values back.
                 object.__proto__ = prototype;
             }

             if (getter || setter) {
                 if (getter) {
                     descriptor.get = getter;
                 }
                 if (setter) {
                     descriptor.set = setter;
                 }
                 // If it was accessor property we're done and return here
                 // in order to avoid adding `value` to the descriptor.
                 return descriptor;
             }
         }

         // If we got this far we know that object has an own property that is
         // not an accessor so we set it as a value and return descriptor.
         descriptor.value = object[property];
         descriptor.writable = true;
         return descriptor;
     };
     /*eslint-enable no-proto */
 }

 // ES5 15.2.3.4
 // http://es5.github.com/#x15.2.3.4
 if (!Object.getOwnPropertyNames) {
     Object.getOwnPropertyNames = function getOwnPropertyNames(object) {
         return Object.keys(object);
     };
 }

 if (!Object.getPrototypeOf) {
     // https://github.com/es-shims/es5-shim/issues#issue/2
     // http://ejohn.org/blog/objectgetprototypeof/
     // recommended by fschaefer on github
     //
     // sure, and webreflection says ^_^
     // ... this will nerever possibly return null
     // ... Opera Mini breaks here with infinite loops
     Object.getPrototypeOf = function getPrototypeOf(object) {
         /*eslint-disable no-proto */
         var proto = object.__proto__;
         /*eslint-enable no-proto */
         if (proto || proto === null) {
             return proto;
         } else if (object.constructor) {
             return object.constructor.prototype;
         } else {
             return prototypeOfObject;
         }
     };
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * https://github.com/es-shims/es5-shim
 * @license es5-shim Copyright 2009-2015 by contributors, MIT License
 * see https://github.com/es-shims/es5-shim/blob/master/LICENSE
 */

// vim: ts=4 sts=4 sw=4 expandtab

// Add semicolon to prevent IIFE from being passed as argument to concatenated code.
;

// UMD (Universal Module Definition)
// see https://github.com/umdjs/umd/blob/master/templates/returnExports.js
(function (root, factory) {
    'use strict';

    /* global define, exports, module */
    if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.returnExports = factory();
    }
}(this, function () {
    /**
     * Brings an environment as close to ECMAScript 5 compliance
     * as is possible with the facilities of erstwhile engines.
     *
     * Annotated ES5: http://es5.github.com/ (specific links below)
     * ES5 Spec: http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf
     * Required reading: http://javascriptweblog.wordpress.com/2011/12/05/extending-javascript-natives/
     */

    // Shortcut to an often accessed properties, in order to avoid multiple
    // dereference that costs universally. This also holds a reference to known-good
    // functions.
    var $Array = Array;
    var ArrayPrototype = $Array.prototype;
    var $Object = Object;
    var ObjectPrototype = $Object.prototype;
    var $Function = Function;
    var FunctionPrototype = $Function.prototype;
    var $String = String;
    var StringPrototype = $String.prototype;
    var $Number = Number;
    var NumberPrototype = $Number.prototype;
    var array_slice = ArrayPrototype.slice;
    var array_splice = ArrayPrototype.splice;
    var array_push = ArrayPrototype.push;
    var array_unshift = ArrayPrototype.unshift;
    var array_concat = ArrayPrototype.concat;
    var array_join = ArrayPrototype.join;
    var call = FunctionPrototype.call;
    var apply = FunctionPrototype.apply;
    var max = Math.max;
    var min = Math.min;

    // Having a toString local variable name breaks in Opera so use to_string.
    var to_string = ObjectPrototype.toString;

    /* global Symbol */
    /* eslint-disable one-var-declaration-per-line, no-redeclare, max-statements-per-line */
    var hasToStringTag = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';
    var isCallable; /* inlined from https://npmjs.com/is-callable */ var fnToStr = Function.prototype.toString, constructorRegex = /^\s*class /, isES6ClassFn = function isES6ClassFn(value) { try { var fnStr = fnToStr.call(value); var singleStripped = fnStr.replace(/\/\/.*\n/g, ''); var multiStripped = singleStripped.replace(/\/\*[.\s\S]*\*\//g, ''); var spaceStripped = multiStripped.replace(/\n/mg, ' ').replace(/ {2}/g, ' '); return constructorRegex.test(spaceStripped); } catch (e) { return false; /* not a function */ } }, tryFunctionObject = function tryFunctionObject(value) { try { if (isES6ClassFn(value)) { return false; } fnToStr.call(value); return true; } catch (e) { return false; } }, fnClass = '[object Function]', genClass = '[object GeneratorFunction]', isCallable = function isCallable(value) { if (!value) { return false; } if (typeof value !== 'function' && typeof value !== 'object') { return false; } if (hasToStringTag) { return tryFunctionObject(value); } if (isES6ClassFn(value)) { return false; } var strClass = to_string.call(value); return strClass === fnClass || strClass === genClass; };

    var isRegex; /* inlined from https://npmjs.com/is-regex */ var regexExec = RegExp.prototype.exec, tryRegexExec = function tryRegexExec(value) { try { regexExec.call(value); return true; } catch (e) { return false; } }, regexClass = '[object RegExp]'; isRegex = function isRegex(value) { if (typeof value !== 'object') { return false; } return hasToStringTag ? tryRegexExec(value) : to_string.call(value) === regexClass; };
    var isString; /* inlined from https://npmjs.com/is-string */ var strValue = String.prototype.valueOf, tryStringObject = function tryStringObject(value) { try { strValue.call(value); return true; } catch (e) { return false; } }, stringClass = '[object String]'; isString = function isString(value) { if (typeof value === 'string') { return true; } if (typeof value !== 'object') { return false; } return hasToStringTag ? tryStringObject(value) : to_string.call(value) === stringClass; };
    /* eslint-enable one-var-declaration-per-line, no-redeclare, max-statements-per-line */

    /* inlined from http://npmjs.com/define-properties */
    var supportsDescriptors = $Object.defineProperty && (function () {
        try {
            var obj = {};
            $Object.defineProperty(obj, 'x', { enumerable: false, value: obj });
            for (var _ in obj) { // jscs:ignore disallowUnusedVariables
                return false;
            }
            return obj.x === obj;
        } catch (e) { /* this is ES3 */
            return false;
        }
    }());
    var defineProperties = (function (has) {
        // Define configurable, writable, and non-enumerable props
        // if they don't exist.
        var defineProperty;
        if (supportsDescriptors) {
            defineProperty = function (object, name, method, forceAssign) {
                if (!forceAssign && (name in object)) {
                    return;
                }
                $Object.defineProperty(object, name, {
                    configurable: true,
                    enumerable: false,
                    writable: true,
                    value: method
                });
            };
        } else {
            defineProperty = function (object, name, method, forceAssign) {
                if (!forceAssign && (name in object)) {
                    return;
                }
                object[name] = method;
            };
        }
        return function defineProperties(object, map, forceAssign) {
            for (var name in map) {
                if (has.call(map, name)) {
                    defineProperty(object, name, map[name], forceAssign);
                }
            }
        };
    }(ObjectPrototype.hasOwnProperty));

    //
    // Util
    // ======
    //

    /* replaceable with https://npmjs.com/package/es-abstract /helpers/isPrimitive */
    var isPrimitive = function isPrimitive(input) {
        var type = typeof input;
        return input === null || (type !== 'object' && type !== 'function');
    };

    var isActualNaN = $Number.isNaN || function isActualNaN(x) {
        return x !== x;
    };

    var ES = {
        // ES5 9.4
        // http://es5.github.com/#x9.4
        // http://jsperf.com/to-integer
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToInteger */
        ToInteger: function ToInteger(num) {
            var n = +num;
            if (isActualNaN(n)) {
                n = 0;
            } else if (n !== 0 && n !== (1 / 0) && n !== -(1 / 0)) {
                n = (n > 0 || -1) * Math.floor(Math.abs(n));
            }
            return n;
        },

        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToPrimitive */
        ToPrimitive: function ToPrimitive(input) {
            var val, valueOf, toStr;
            if (isPrimitive(input)) {
                return input;
            }
            valueOf = input.valueOf;
            if (isCallable(valueOf)) {
                val = valueOf.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            toStr = input.toString;
            if (isCallable(toStr)) {
                val = toStr.call(input);
                if (isPrimitive(val)) {
                    return val;
                }
            }
            throw new TypeError();
        },

        // ES5 9.9
        // http://es5.github.com/#x9.9
        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToObject */
        ToObject: function (o) {
            if (o == null) { // this matches both null and undefined
                throw new TypeError("can't convert " + o + ' to object');
            }
            return $Object(o);
        },

        /* replaceable with https://npmjs.com/package/es-abstract ES5.ToUint32 */
        ToUint32: function ToUint32(x) {
            return x >>> 0;
        }
    };

    //
    // Function
    // ========
    //

    // ES-5 15.3.4.5
    // http://es5.github.com/#x15.3.4.5

    var Empty = function Empty() {};

    defineProperties(FunctionPrototype, {
        bind: function bind(that) { // .length is 1
            // 1. Let Target be the this value.
            var target = this;
            // 2. If IsCallable(Target) is false, throw a TypeError exception.
            if (!isCallable(target)) {
                throw new TypeError('Function.prototype.bind called on incompatible ' + target);
            }
            // 3. Let A be a new (possibly empty) internal list of all of the
            //   argument values provided after thisArg (arg1, arg2 etc), in order.
            // XXX slicedArgs will stand in for "A" if used
            var args = array_slice.call(arguments, 1); // for normal call
            // 4. Let F be a new native ECMAScript object.
            // 11. Set the [[Prototype]] internal property of F to the standard
            //   built-in Function prototype object as specified in 15.3.3.1.
            // 12. Set the [[Call]] internal property of F as described in
            //   15.3.4.5.1.
            // 13. Set the [[Construct]] internal property of F as described in
            //   15.3.4.5.2.
            // 14. Set the [[HasInstance]] internal property of F as described in
            //   15.3.4.5.3.
            var bound;
            var binder = function () {

                if (this instanceof bound) {
                    // 15.3.4.5.2 [[Construct]]
                    // When the [[Construct]] internal method of a function object,
                    // F that was created using the bind function is called with a
                    // list of arguments ExtraArgs, the following steps are taken:
                    // 1. Let target be the value of F's [[TargetFunction]]
                    //   internal property.
                    // 2. If target has no [[Construct]] internal method, a
                    //   TypeError exception is thrown.
                    // 3. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Construct]] internal
                    //   method of target providing args as the arguments.

                    var result = apply.call(
                        target,
                        this,
                        array_concat.call(args, array_slice.call(arguments))
                    );
                    if ($Object(result) === result) {
                        return result;
                    }
                    return this;

                } else {
                    // 15.3.4.5.1 [[Call]]
                    // When the [[Call]] internal method of a function object, F,
                    // which was created using the bind function is called with a
                    // this value and a list of arguments ExtraArgs, the following
                    // steps are taken:
                    // 1. Let boundArgs be the value of F's [[BoundArgs]] internal
                    //   property.
                    // 2. Let boundThis be the value of F's [[BoundThis]] internal
                    //   property.
                    // 3. Let target be the value of F's [[TargetFunction]] internal
                    //   property.
                    // 4. Let args be a new list containing the same values as the
                    //   list boundArgs in the same order followed by the same
                    //   values as the list ExtraArgs in the same order.
                    // 5. Return the result of calling the [[Call]] internal method
                    //   of target providing boundThis as the this value and
                    //   providing args as the arguments.

                    // equiv: target.call(this, ...boundArgs, ...args)
                    return apply.call(
                        target,
                        that,
                        array_concat.call(args, array_slice.call(arguments))
                    );

                }

            };

            // 15. If the [[Class]] internal property of Target is "Function", then
            //     a. Let L be the length property of Target minus the length of A.
            //     b. Set the length own property of F to either 0 or L, whichever is
            //       larger.
            // 16. Else set the length own property of F to 0.

            var boundLength = max(0, target.length - args.length);

            // 17. Set the attributes of the length own property of F to the values
            //   specified in 15.3.5.1.
            var boundArgs = [];
            for (var i = 0; i < boundLength; i++) {
                array_push.call(boundArgs, '$' + i);
            }

            // XXX Build a dynamic function with desired amount of arguments is the only
            // way to set the length property of a function.
            // In environments where Content Security Policies enabled (Chrome extensions,
            // for ex.) all use of eval or Function costructor throws an exception.
            // However in all of these environments Function.prototype.bind exists
            // and so this code will never be executed.
            bound = $Function('binder', 'return function (' + array_join.call(boundArgs, ',') + '){ return binder.apply(this, arguments); }')(binder);

            if (target.prototype) {
                Empty.prototype = target.prototype;
                bound.prototype = new Empty();
                // Clean up dangling references.
                Empty.prototype = null;
            }

            // TODO
            // 18. Set the [[Extensible]] internal property of F to true.

            // TODO
            // 19. Let thrower be the [[ThrowTypeError]] function Object (13.2.3).
            // 20. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "caller", PropertyDescriptor {[[Get]]: thrower, [[Set]]:
            //   thrower, [[Enumerable]]: false, [[Configurable]]: false}, and
            //   false.
            // 21. Call the [[DefineOwnProperty]] internal method of F with
            //   arguments "arguments", PropertyDescriptor {[[Get]]: thrower,
            //   [[Set]]: thrower, [[Enumerable]]: false, [[Configurable]]: false},
            //   and false.

            // TODO
            // NOTE Function objects created using Function.prototype.bind do not
            // have a prototype property or the [[Code]], [[FormalParameters]], and
            // [[Scope]] internal properties.
            // XXX can't delete prototype in pure-js.

            // 22. Return F.
            return bound;
        }
    });

    // _Please note: Shortcuts are defined after `Function.prototype.bind` as we
    // use it in defining shortcuts.
    var owns = call.bind(ObjectPrototype.hasOwnProperty);
    var toStr = call.bind(ObjectPrototype.toString);
    var arraySlice = call.bind(array_slice);
    var arraySliceApply = apply.bind(array_slice);
    var strSlice = call.bind(StringPrototype.slice);
    var strSplit = call.bind(StringPrototype.split);
    var strIndexOf = call.bind(StringPrototype.indexOf);
    var pushCall = call.bind(array_push);
    var isEnum = call.bind(ObjectPrototype.propertyIsEnumerable);
    var arraySort = call.bind(ArrayPrototype.sort);

    //
    // Array
    // =====
    //

    var isArray = $Array.isArray || function isArray(obj) {
        return toStr(obj) === '[object Array]';
    };

    // ES5 15.4.4.12
    // http://es5.github.com/#x15.4.4.13
    // Return len+argCount.
    // [bugfix, ielt8]
    // IE < 8 bug: [].unshift(0) === undefined but should be "1"
    var hasUnshiftReturnValueBug = [].unshift(0) !== 1;
    defineProperties(ArrayPrototype, {
        unshift: function () {
            array_unshift.apply(this, arguments);
            return this.length;
        }
    }, hasUnshiftReturnValueBug);

    // ES5 15.4.3.2
    // http://es5.github.com/#x15.4.3.2
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/isArray
    defineProperties($Array, { isArray: isArray });

    // The IsCallable() check in the Array functions
    // has been replaced with a strict check on the
    // internal class of the object to trap cases where
    // the provided function was actually a regular
    // expression literal, which in V8 and
    // JavaScriptCore is a typeof "function".  Only in
    // V8 are regular expression literals permitted as
    // reduce parameters, so it is desirable in the
    // general case for the shim to match the more
    // strict and common behavior of rejecting regular
    // expressions.

    // ES5 15.4.4.18
    // http://es5.github.com/#x15.4.4.18
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/array/forEach

    // Check failure of by-index access of string characters (IE < 9)
    // and failure of `0 in boxedString` (Rhino)
    var boxedString = $Object('a');
    var splitString = boxedString[0] !== 'a' || !(0 in boxedString);

    var properlyBoxesContext = function properlyBoxed(method) {
        // Check node 0.6.21 bug where third parameter is not boxed
        var properlyBoxesNonStrict = true;
        var properlyBoxesStrict = true;
        var threwException = false;
        if (method) {
            try {
                method.call('foo', function (_, __, context) {
                    if (typeof context !== 'object') {
                        properlyBoxesNonStrict = false;
                    }
                });

                method.call([1], function () {
                    'use strict';

                    properlyBoxesStrict = typeof this === 'string';
                }, 'x');
            } catch (e) {
                threwException = true;
            }
        }
        return !!method && !threwException && properlyBoxesNonStrict && properlyBoxesStrict;
    };

    defineProperties(ArrayPrototype, {
        forEach: function forEach(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var i = -1;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.forEach callback must be a function');
            }

            while (++i < length) {
                if (i in self) {
                    // Invoke the callback function with call, passing arguments:
                    // context, property value, property key, thisArg object
                    if (typeof T === 'undefined') {
                        callbackfn(self[i], i, object);
                    } else {
                        callbackfn.call(T, self[i], i, object);
                    }
                }
            }
        }
    }, !properlyBoxesContext(ArrayPrototype.forEach));

    // ES5 15.4.4.19
    // http://es5.github.com/#x15.4.4.19
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/map
    defineProperties(ArrayPrototype, {
        map: function map(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = $Array(length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.map callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self) {
                    if (typeof T === 'undefined') {
                        result[i] = callbackfn(self[i], i, object);
                    } else {
                        result[i] = callbackfn.call(T, self[i], i, object);
                    }
                }
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.map));

    // ES5 15.4.4.20
    // http://es5.github.com/#x15.4.4.20
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/filter
    defineProperties(ArrayPrototype, {
        filter: function filter(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var result = [];
            var value;
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.filter callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self) {
                    value = self[i];
                    if (typeof T === 'undefined' ? callbackfn(value, i, object) : callbackfn.call(T, value, i, object)) {
                        pushCall(result, value);
                    }
                }
            }
            return result;
        }
    }, !properlyBoxesContext(ArrayPrototype.filter));

    // ES5 15.4.4.16
    // http://es5.github.com/#x15.4.4.16
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
    defineProperties(ArrayPrototype, {
        every: function every(callbackfn/*, thisArg*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.every callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self && !(typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                    return false;
                }
            }
            return true;
        }
    }, !properlyBoxesContext(ArrayPrototype.every));

    // ES5 15.4.4.17
    // http://es5.github.com/#x15.4.4.17
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
    defineProperties(ArrayPrototype, {
        some: function some(callbackfn/*, thisArg */) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);
            var T;
            if (arguments.length > 1) {
                T = arguments[1];
            }

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.some callback must be a function');
            }

            for (var i = 0; i < length; i++) {
                if (i in self && (typeof T === 'undefined' ? callbackfn(self[i], i, object) : callbackfn.call(T, self[i], i, object))) {
                    return true;
                }
            }
            return false;
        }
    }, !properlyBoxesContext(ArrayPrototype.some));

    // ES5 15.4.4.21
    // http://es5.github.com/#x15.4.4.21
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduce
    var reduceCoercesToObject = false;
    if (ArrayPrototype.reduce) {
        reduceCoercesToObject = typeof ArrayPrototype.reduce.call('es5', function (_, __, ___, list) {
            return list;
        }) === 'object';
    }
    defineProperties(ArrayPrototype, {
        reduce: function reduce(callbackfn/*, initialValue*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.reduce callback must be a function');
            }

            // no value to return if no initial value and an empty array
            if (length === 0 && arguments.length === 1) {
                throw new TypeError('reduce of empty array with no initial value');
            }

            var i = 0;
            var result;
            if (arguments.length >= 2) {
                result = arguments[1];
            } else {
                do {
                    if (i in self) {
                        result = self[i++];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (++i >= length) {
                        throw new TypeError('reduce of empty array with no initial value');
                    }
                } while (true);
            }

            for (; i < length; i++) {
                if (i in self) {
                    result = callbackfn(result, self[i], i, object);
                }
            }

            return result;
        }
    }, !reduceCoercesToObject);

    // ES5 15.4.4.22
    // http://es5.github.com/#x15.4.4.22
    // https://developer.mozilla.org/en/Core_JavaScript_1.5_Reference/Objects/Array/reduceRight
    var reduceRightCoercesToObject = false;
    if (ArrayPrototype.reduceRight) {
        reduceRightCoercesToObject = typeof ArrayPrototype.reduceRight.call('es5', function (_, __, ___, list) {
            return list;
        }) === 'object';
    }
    defineProperties(ArrayPrototype, {
        reduceRight: function reduceRight(callbackfn/*, initial*/) {
            var object = ES.ToObject(this);
            var self = splitString && isString(this) ? strSplit(this, '') : object;
            var length = ES.ToUint32(self.length);

            // If no callback function or if callback is not a callable function
            if (!isCallable(callbackfn)) {
                throw new TypeError('Array.prototype.reduceRight callback must be a function');
            }

            // no value to return if no initial value, empty array
            if (length === 0 && arguments.length === 1) {
                throw new TypeError('reduceRight of empty array with no initial value');
            }

            var result;
            var i = length - 1;
            if (arguments.length >= 2) {
                result = arguments[1];
            } else {
                do {
                    if (i in self) {
                        result = self[i--];
                        break;
                    }

                    // if array contains no values, no initial value to return
                    if (--i < 0) {
                        throw new TypeError('reduceRight of empty array with no initial value');
                    }
                } while (true);
            }

            if (i < 0) {
                return result;
            }

            do {
                if (i in self) {
                    result = callbackfn(result, self[i], i, object);
                }
            } while (i--);

            return result;
        }
    }, !reduceRightCoercesToObject);

    // ES5 15.4.4.14
    // http://es5.github.com/#x15.4.4.14
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/indexOf
    var hasFirefox2IndexOfBug = ArrayPrototype.indexOf && [0, 1].indexOf(1, 2) !== -1;
    defineProperties(ArrayPrototype, {
        indexOf: function indexOf(searchElement/*, fromIndex */) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);

            if (length === 0) {
                return -1;
            }

            var i = 0;
            if (arguments.length > 1) {
                i = ES.ToInteger(arguments[1]);
            }

            // handle negative indices
            i = i >= 0 ? i : max(0, length + i);
            for (; i < length; i++) {
                if (i in self && self[i] === searchElement) {
                    return i;
                }
            }
            return -1;
        }
    }, hasFirefox2IndexOfBug);

    // ES5 15.4.4.15
    // http://es5.github.com/#x15.4.4.15
    // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/lastIndexOf
    var hasFirefox2LastIndexOfBug = ArrayPrototype.lastIndexOf && [0, 1].lastIndexOf(0, -3) !== -1;
    defineProperties(ArrayPrototype, {
        lastIndexOf: function lastIndexOf(searchElement/*, fromIndex */) {
            var self = splitString && isString(this) ? strSplit(this, '') : ES.ToObject(this);
            var length = ES.ToUint32(self.length);

            if (length === 0) {
                return -1;
            }
            var i = length - 1;
            if (arguments.length > 1) {
                i = min(i, ES.ToInteger(arguments[1]));
            }
            // handle negative indices
            i = i >= 0 ? i : length - Math.abs(i);
            for (; i >= 0; i--) {
                if (i in self && searchElement === self[i]) {
                    return i;
                }
            }
            return -1;
        }
    }, hasFirefox2LastIndexOfBug);

    // ES5 15.4.4.12
    // http://es5.github.com/#x15.4.4.12
    var spliceNoopReturnsEmptyArray = (function () {
        var a = [1, 2];
        var result = a.splice();
        return a.length === 2 && isArray(result) && result.length === 0;
    }());
    defineProperties(ArrayPrototype, {
        // Safari 5.0 bug where .splice() returns undefined
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) {
                return [];
            } else {
                return array_splice.apply(this, arguments);
            }
        }
    }, !spliceNoopReturnsEmptyArray);

    var spliceWorksWithEmptyObject = (function () {
        var obj = {};
        ArrayPrototype.splice.call(obj, 0, 0, 1);
        return obj.length === 1;
    }());
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            if (arguments.length === 0) {
                return [];
            }
            var args = arguments;
            this.length = max(ES.ToInteger(this.length), 0);
            if (arguments.length > 0 && typeof deleteCount !== 'number') {
                args = arraySlice(arguments);
                if (args.length < 2) {
                    pushCall(args, this.length - start);
                } else {
                    args[1] = ES.ToInteger(deleteCount);
                }
            }
            return array_splice.apply(this, args);
        }
    }, !spliceWorksWithEmptyObject);
    var spliceWorksWithLargeSparseArrays = (function () {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Safari 7/8 breaks with sparse arrays of size 1e5 or greater
        var arr = new $Array(1e5);
        // note: the index MUST be 8 or larger or the test will false pass
        arr[8] = 'x';
        arr.splice(1, 1);
        // note: this test must be defined *after* the indexOf shim
        // per https://github.com/es-shims/es5-shim/issues/313
        return arr.indexOf('x') === 7;
    }());
    var spliceWorksWithSmallSparseArrays = (function () {
        // Per https://github.com/es-shims/es5-shim/issues/295
        // Opera 12.15 breaks on this, no idea why.
        var n = 256;
        var arr = [];
        arr[n] = 'a';
        arr.splice(n + 1, 0, 'b');
        return arr[n] === 'a';
    }());
    defineProperties(ArrayPrototype, {
        splice: function splice(start, deleteCount) {
            var O = ES.ToObject(this);
            var A = [];
            var len = ES.ToUint32(O.length);
            var relativeStart = ES.ToInteger(start);
            var actualStart = relativeStart < 0 ? max((len + relativeStart), 0) : min(relativeStart, len);
            var actualDeleteCount = min(max(ES.ToInteger(deleteCount), 0), len - actualStart);

            var k = 0;
            var from;
            while (k < actualDeleteCount) {
                from = $String(actualStart + k);
                if (owns(O, from)) {
                    A[k] = O[from];
                }
                k += 1;
            }

            var items = arraySlice(arguments, 2);
            var itemCount = items.length;
            var to;
            if (itemCount < actualDeleteCount) {
                k = actualStart;
                var maxK = len - actualDeleteCount;
                while (k < maxK) {
                    from = $String(k + actualDeleteCount);
                    to = $String(k + itemCount);
                    if (owns(O, from)) {
                        O[to] = O[from];
                    } else {
                        delete O[to];
                    }
                    k += 1;
                }
                k = len;
                var minK = len - actualDeleteCount + itemCount;
                while (k > minK) {
                    delete O[k - 1];
                    k -= 1;
                }
            } else if (itemCount > actualDeleteCount) {
                k = len - actualDeleteCount;
                while (k > actualStart) {
                    from = $String(k + actualDeleteCount - 1);
                    to = $String(k + itemCount - 1);
                    if (owns(O, from)) {
                        O[to] = O[from];
                    } else {
                        delete O[to];
                    }
                    k -= 1;
                }
            }
            k = actualStart;
            for (var i = 0; i < items.length; ++i) {
                O[k] = items[i];
                k += 1;
            }
            O.length = len - actualDeleteCount + itemCount;

            return A;
        }
    }, !spliceWorksWithLargeSparseArrays || !spliceWorksWithSmallSparseArrays);

    var originalJoin = ArrayPrototype.join;
    var hasStringJoinBug;
    try {
        hasStringJoinBug = Array.prototype.join.call('123', ',') !== '1,2,3';
    } catch (e) {
        hasStringJoinBug = true;
    }
    if (hasStringJoinBug) {
        defineProperties(ArrayPrototype, {
            join: function join(separator) {
                var sep = typeof separator === 'undefined' ? ',' : separator;
                return originalJoin.call(isString(this) ? strSplit(this, '') : this, sep);
            }
        }, hasStringJoinBug);
    }

    var hasJoinUndefinedBug = [1, 2].join(undefined) !== '1,2';
    if (hasJoinUndefinedBug) {
        defineProperties(ArrayPrototype, {
            join: function join(separator) {
                var sep = typeof separator === 'undefined' ? ',' : separator;
                return originalJoin.call(this, sep);
            }
        }, hasJoinUndefinedBug);
    }

    var pushShim = function push(item) {
        var O = ES.ToObject(this);
        var n = ES.ToUint32(O.length);
        var i = 0;
        while (i < arguments.length) {
            O[n + i] = arguments[i];
            i += 1;
        }
        O.length = n + i;
        return n + i;
    };

    var pushIsNotGeneric = (function () {
        var obj = {};
        var result = Array.prototype.push.call(obj, undefined);
        return result !== 1 || obj.length !== 1 || typeof obj[0] !== 'undefined' || !owns(obj, 0);
    }());
    defineProperties(ArrayPrototype, {
        push: function push(item) {
            if (isArray(this)) {
                return array_push.apply(this, arguments);
            }
            return pushShim.apply(this, arguments);
        }
    }, pushIsNotGeneric);

    // This fixes a very weird bug in Opera 10.6 when pushing `undefined
    var pushUndefinedIsWeird = (function () {
        var arr = [];
        var result = arr.push(undefined);
        return result !== 1 || arr.length !== 1 || typeof arr[0] !== 'undefined' || !owns(arr, 0);
    }());
    defineProperties(ArrayPrototype, { push: pushShim }, pushUndefinedIsWeird);

    // ES5 15.2.3.14
    // http://es5.github.io/#x15.4.4.10
    // Fix boxed string bug
    defineProperties(ArrayPrototype, {
        slice: function (start, end) {
            var arr = isString(this) ? strSplit(this, '') : this;
            return arraySliceApply(arr, arguments);
        }
    }, splitString);

    var sortIgnoresNonFunctions = (function () {
        try {
            [1, 2].sort(null);
            [1, 2].sort({});
            return true;
        } catch (e) {}
        return false;
    }());
    var sortThrowsOnRegex = (function () {
        // this is a problem in Firefox 4, in which `typeof /a/ === 'function'`
        try {
            [1, 2].sort(/a/);
            return false;
        } catch (e) {}
        return true;
    }());
    var sortIgnoresUndefined = (function () {
        // applies in IE 8, for one.
        try {
            [1, 2].sort(undefined);
            return true;
        } catch (e) {}
        return false;
    }());
    defineProperties(ArrayPrototype, {
        sort: function sort(compareFn) {
            if (typeof compareFn === 'undefined') {
                return arraySort(this);
            }
            if (!isCallable(compareFn)) {
                throw new TypeError('Array.prototype.sort callback must be a function');
            }
            return arraySort(this, compareFn);
        }
    }, sortIgnoresNonFunctions || !sortIgnoresUndefined || !sortThrowsOnRegex);

    //
    // Object
    // ======
    //

    // ES5 15.2.3.14
    // http://es5.github.com/#x15.2.3.14

    // http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
    var hasDontEnumBug = !isEnum({ 'toString': null }, 'toString');
    var hasProtoEnumBug = isEnum(function () {}, 'prototype');
    var hasStringEnumBug = !owns('x', '0');
    var equalsConstructorPrototype = function (o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var blacklistedKeys = {
        $window: true,
        $console: true,
        $parent: true,
        $self: true,
        $frame: true,
        $frames: true,
        $frameElement: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $external: true
    };
    var hasAutomationEqualityBug = (function () {
        /* globals window */
        if (typeof window === 'undefined') {
            return false;
        }
        for (var k in window) {
            try {
                if (!blacklistedKeys['$' + k] && owns(window, k) && window[k] !== null && typeof window[k] === 'object') {
                    equalsConstructorPrototype(window[k]);
                }
            } catch (e) {
                return true;
            }
        }
        return false;
    }());
    var equalsConstructorPrototypeIfNotBuggy = function (object) {
        if (typeof window === 'undefined' || !hasAutomationEqualityBug) {
            return equalsConstructorPrototype(object);
        }
        try {
            return equalsConstructorPrototype(object);
        } catch (e) {
            return false;
        }
    };
    var dontEnums = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];
    var dontEnumsLength = dontEnums.length;

    // taken directly from https://github.com/ljharb/is-arguments/blob/master/index.js
    // can be replaced with require('is-arguments') if we ever use a build process instead
    var isStandardArguments = function isArguments(value) {
        return toStr(value) === '[object Arguments]';
    };
    var isLegacyArguments = function isArguments(value) {
        return value !== null &&
            typeof value === 'object' &&
            typeof value.length === 'number' &&
            value.length >= 0 &&
            !isArray(value) &&
            isCallable(value.callee);
    };
    var isArguments = isStandardArguments(arguments) ? isStandardArguments : isLegacyArguments;

    defineProperties($Object, {
        keys: function keys(object) {
            var isFn = isCallable(object);
            var isArgs = isArguments(object);
            var isObject = object !== null && typeof object === 'object';
            var isStr = isObject && isString(object);

            if (!isObject && !isFn && !isArgs) {
                throw new TypeError('Object.keys called on a non-object');
            }

            var theKeys = [];
            var skipProto = hasProtoEnumBug && isFn;
            if ((isStr && hasStringEnumBug) || isArgs) {
                for (var i = 0; i < object.length; ++i) {
                    pushCall(theKeys, $String(i));
                }
            }

            if (!isArgs) {
                for (var name in object) {
                    if (!(skipProto && name === 'prototype') && owns(object, name)) {
                        pushCall(theKeys, $String(name));
                    }
                }
            }

            if (hasDontEnumBug) {
                var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
                for (var j = 0; j < dontEnumsLength; j++) {
                    var dontEnum = dontEnums[j];
                    if (!(skipConstructor && dontEnum === 'constructor') && owns(object, dontEnum)) {
                        pushCall(theKeys, dontEnum);
                    }
                }
            }
            return theKeys;
        }
    });

    var keysWorksWithArguments = $Object.keys && (function () {
        // Safari 5.0 bug
        return $Object.keys(arguments).length === 2;
    }(1, 2));
    var keysHasArgumentsLengthBug = $Object.keys && (function () {
        var argKeys = $Object.keys(arguments);
        return arguments.length !== 1 || argKeys.length !== 1 || argKeys[0] !== 1;
    }(1));
    var originalKeys = $Object.keys;
    defineProperties($Object, {
        keys: function keys(object) {
            if (isArguments(object)) {
                return originalKeys(arraySlice(object));
            } else {
                return originalKeys(object);
            }
        }
    }, !keysWorksWithArguments || keysHasArgumentsLengthBug);

    //
    // Date
    // ====
    //

    var hasNegativeMonthYearBug = new Date(-3509827329600292).getUTCMonth() !== 0;
    var aNegativeTestDate = new Date(-1509842289600292);
    var aPositiveTestDate = new Date(1449662400000);
    var hasToUTCStringFormatBug = aNegativeTestDate.toUTCString() !== 'Mon, 01 Jan -45875 11:59:59 GMT';
    var hasToDateStringFormatBug;
    var hasToStringFormatBug;
    var timeZoneOffset = aNegativeTestDate.getTimezoneOffset();
    if (timeZoneOffset < -720) {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Tue Jan 02 -45875';
        hasToStringFormatBug = !(/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
    } else {
        hasToDateStringFormatBug = aNegativeTestDate.toDateString() !== 'Mon Jan 01 -45875';
        hasToStringFormatBug = !(/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/).test(aPositiveTestDate.toString());
    }

    var originalGetFullYear = call.bind(Date.prototype.getFullYear);
    var originalGetMonth = call.bind(Date.prototype.getMonth);
    var originalGetDate = call.bind(Date.prototype.getDate);
    var originalGetUTCFullYear = call.bind(Date.prototype.getUTCFullYear);
    var originalGetUTCMonth = call.bind(Date.prototype.getUTCMonth);
    var originalGetUTCDate = call.bind(Date.prototype.getUTCDate);
    var originalGetUTCDay = call.bind(Date.prototype.getUTCDay);
    var originalGetUTCHours = call.bind(Date.prototype.getUTCHours);
    var originalGetUTCMinutes = call.bind(Date.prototype.getUTCMinutes);
    var originalGetUTCSeconds = call.bind(Date.prototype.getUTCSeconds);
    var originalGetUTCMilliseconds = call.bind(Date.prototype.getUTCMilliseconds);
    var dayName = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var monthName = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var daysInMonth = function daysInMonth(month, year) {
        return originalGetDate(new Date(year, month, 0));
    };

    defineProperties(Date.prototype, {
        getFullYear: function getFullYear() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            if (year < 0 && originalGetMonth(this) > 11) {
                return year + 1;
            }
            return year;
        },
        getMonth: function getMonth() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            if (year < 0 && month > 11) {
                return 0;
            }
            return month;
        },
        getDate: function getDate() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetFullYear(this);
            var month = originalGetMonth(this);
            var date = originalGetDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) {
                    return date;
                }
                var days = daysInMonth(0, year + 1);
                return (days - date) + 1;
            }
            return date;
        },
        getUTCFullYear: function getUTCFullYear() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            if (year < 0 && originalGetUTCMonth(this) > 11) {
                return year + 1;
            }
            return year;
        },
        getUTCMonth: function getUTCMonth() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            if (year < 0 && month > 11) {
                return 0;
            }
            return month;
        },
        getUTCDate: function getUTCDate() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var year = originalGetUTCFullYear(this);
            var month = originalGetUTCMonth(this);
            var date = originalGetUTCDate(this);
            if (year < 0 && month > 11) {
                if (month === 12) {
                    return date;
                }
                var days = daysInMonth(0, year + 1);
                return (days - date) + 1;
            }
            return date;
        }
    }, hasNegativeMonthYearBug);

    defineProperties(Date.prototype, {
        toUTCString: function toUTCString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = originalGetUTCDay(this);
            var date = originalGetUTCDate(this);
            var month = originalGetUTCMonth(this);
            var year = originalGetUTCFullYear(this);
            var hour = originalGetUTCHours(this);
            var minute = originalGetUTCMinutes(this);
            var second = originalGetUTCSeconds(this);
            return dayName[day] + ', ' +
                (date < 10 ? '0' + date : date) + ' ' +
                monthName[month] + ' ' +
                year + ' ' +
                (hour < 10 ? '0' + hour : hour) + ':' +
                (minute < 10 ? '0' + minute : minute) + ':' +
                (second < 10 ? '0' + second : second) + ' GMT';
        }
    }, hasNegativeMonthYearBug || hasToUTCStringFormatBug);

    // Opera 12 has `,`
    defineProperties(Date.prototype, {
        toDateString: function toDateString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            return dayName[day] + ' ' +
                monthName[month] + ' ' +
                (date < 10 ? '0' + date : date) + ' ' +
                year;
        }
    }, hasNegativeMonthYearBug || hasToDateStringFormatBug);

    // can't use defineProperties here because of toString enumeration issue in IE <= 8
    if (hasNegativeMonthYearBug || hasToStringFormatBug) {
        Date.prototype.toString = function toString() {
            if (!this || !(this instanceof Date)) {
                throw new TypeError('this is not a Date object.');
            }
            var day = this.getDay();
            var date = this.getDate();
            var month = this.getMonth();
            var year = this.getFullYear();
            var hour = this.getHours();
            var minute = this.getMinutes();
            var second = this.getSeconds();
            var timezoneOffset = this.getTimezoneOffset();
            var hoursOffset = Math.floor(Math.abs(timezoneOffset) / 60);
            var minutesOffset = Math.floor(Math.abs(timezoneOffset) % 60);
            return dayName[day] + ' ' +
                monthName[month] + ' ' +
                (date < 10 ? '0' + date : date) + ' ' +
                year + ' ' +
                (hour < 10 ? '0' + hour : hour) + ':' +
                (minute < 10 ? '0' + minute : minute) + ':' +
                (second < 10 ? '0' + second : second) + ' GMT' +
                (timezoneOffset > 0 ? '-' : '+') +
                (hoursOffset < 10 ? '0' + hoursOffset : hoursOffset) +
                (minutesOffset < 10 ? '0' + minutesOffset : minutesOffset);
        };
        if (supportsDescriptors) {
            $Object.defineProperty(Date.prototype, 'toString', {
                configurable: true,
                enumerable: false,
                writable: true
            });
        }
    }

    // ES5 15.9.5.43
    // http://es5.github.com/#x15.9.5.43
    // This function returns a String value represent the instance in time
    // represented by this Date object. The format of the String is the Date Time
    // string format defined in 15.9.1.15. All fields are present in the String.
    // The time zone is always UTC, denoted by the suffix Z. If the time value of
    // this object is not a finite Number a RangeError exception is thrown.
    var negativeDate = -62198755200000;
    var negativeYearString = '-000001';
    var hasNegativeDateBug = Date.prototype.toISOString && new Date(negativeDate).toISOString().indexOf(negativeYearString) === -1;
    var hasSafari51DateBug = Date.prototype.toISOString && new Date(-1).toISOString() !== '1969-12-31T23:59:59.999Z';

    var getTime = call.bind(Date.prototype.getTime);

    defineProperties(Date.prototype, {
        toISOString: function toISOString() {
            if (!isFinite(this) || !isFinite(getTime(this))) {
                // Adope Photoshop requires the second check.
                throw new RangeError('Date.prototype.toISOString called on non-finite value.');
            }

            var year = originalGetUTCFullYear(this);

            var month = originalGetUTCMonth(this);
            // see https://github.com/es-shims/es5-shim/issues/111
            year += Math.floor(month / 12);
            month = (month % 12 + 12) % 12;

            // the date time string format is specified in 15.9.1.15.
            var result = [month + 1, originalGetUTCDate(this), originalGetUTCHours(this), originalGetUTCMinutes(this), originalGetUTCSeconds(this)];
            year = (
                (year < 0 ? '-' : (year > 9999 ? '+' : '')) +
                strSlice('00000' + Math.abs(year), (0 <= year && year <= 9999) ? -4 : -6)
            );

            for (var i = 0; i < result.length; ++i) {
                // pad months, days, hours, minutes, and seconds to have two digits.
                result[i] = strSlice('00' + result[i], -2);
            }
            // pad milliseconds to have three digits.
            return (
                year + '-' + arraySlice(result, 0, 2).join('-') +
                'T' + arraySlice(result, 2).join(':') + '.' +
                strSlice('000' + originalGetUTCMilliseconds(this), -3) + 'Z'
            );
        }
    }, hasNegativeDateBug || hasSafari51DateBug);

    // ES5 15.9.5.44
    // http://es5.github.com/#x15.9.5.44
    // This function provides a String representation of a Date object for use by
    // JSON.stringify (15.12.3).
    var dateToJSONIsSupported = (function () {
        try {
            return Date.prototype.toJSON &&
                new Date(NaN).toJSON() === null &&
                new Date(negativeDate).toJSON().indexOf(negativeYearString) !== -1 &&
                Date.prototype.toJSON.call({ // generic
                    toISOString: function () { return true; }
                });
        } catch (e) {
            return false;
        }
    }());
    if (!dateToJSONIsSupported) {
        Date.prototype.toJSON = function toJSON(key) {
            // When the toJSON method is called with argument key, the following
            // steps are taken:

            // 1.  Let O be the result of calling ToObject, giving it the this
            // value as its argument.
            // 2. Let tv be ES.ToPrimitive(O, hint Number).
            var O = $Object(this);
            var tv = ES.ToPrimitive(O);
            // 3. If tv is a Number and is not finite, return null.
            if (typeof tv === 'number' && !isFinite(tv)) {
                return null;
            }
            // 4. Let toISO be the result of calling the [[Get]] internal method of
            // O with argument "toISOString".
            var toISO = O.toISOString;
            // 5. If IsCallable(toISO) is false, throw a TypeError exception.
            if (!isCallable(toISO)) {
                throw new TypeError('toISOString property is not callable');
            }
            // 6. Return the result of calling the [[Call]] internal method of
            //  toISO with O as the this value and an empty argument list.
            return toISO.call(O);

            // NOTE 1 The argument is ignored.

            // NOTE 2 The toJSON function is intentionally generic; it does not
            // require that its this value be a Date object. Therefore, it can be
            // transferred to other kinds of objects for use as a method. However,
            // it does require that any such object have a toISOString method. An
            // object is free to use the argument key to filter its
            // stringification.
        };
    }

    // ES5 15.9.4.2
    // http://es5.github.com/#x15.9.4.2
    // based on work shared by Daniel Friesen (dantman)
    // http://gist.github.com/303249
    var supportsExtendedYears = Date.parse('+033658-09-27T01:46:40.000Z') === 1e15;
    var acceptsInvalidDates = !isNaN(Date.parse('2012-04-04T24:00:00.500Z')) || !isNaN(Date.parse('2012-11-31T23:59:59.000Z')) || !isNaN(Date.parse('2012-12-31T23:59:60.000Z'));
    var doesNotParseY2KNewYear = isNaN(Date.parse('2000-01-01T00:00:00.000Z'));
    if (doesNotParseY2KNewYear || acceptsInvalidDates || !supportsExtendedYears) {
        // XXX global assignment won't work in embeddings that use
        // an alternate object for the context.
        /* global Date: true */
        /* eslint-disable no-undef */
        var maxSafeUnsigned32Bit = Math.pow(2, 31) - 1;
        var hasSafariSignedIntBug = isActualNaN(new Date(1970, 0, 1, 0, 0, 0, maxSafeUnsigned32Bit + 1).getTime());
        /* eslint-disable no-implicit-globals */
        Date = (function (NativeDate) {
        /* eslint-enable no-implicit-globals */
        /* eslint-enable no-undef */
            // Date.length === 7
            var DateShim = function Date(Y, M, D, h, m, s, ms) {
                var length = arguments.length;
                var date;
                if (this instanceof NativeDate) {
                    var seconds = s;
                    var millis = ms;
                    if (hasSafariSignedIntBug && length >= 7 && ms > maxSafeUnsigned32Bit) {
                        // work around a Safari 8/9 bug where it treats the seconds as signed
                        var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                        var sToShift = Math.floor(msToShift / 1e3);
                        seconds += sToShift;
                        millis -= sToShift * 1e3;
                    }
                    date = length === 1 && $String(Y) === Y ? // isString(Y)
                        // We explicitly pass it through parse:
                        new NativeDate(DateShim.parse(Y)) :
                        // We have to manually make calls depending on argument
                        // length here
                        length >= 7 ? new NativeDate(Y, M, D, h, m, seconds, millis) :
                        length >= 6 ? new NativeDate(Y, M, D, h, m, seconds) :
                        length >= 5 ? new NativeDate(Y, M, D, h, m) :
                        length >= 4 ? new NativeDate(Y, M, D, h) :
                        length >= 3 ? new NativeDate(Y, M, D) :
                        length >= 2 ? new NativeDate(Y, M) :
                        length >= 1 ? new NativeDate(Y instanceof NativeDate ? +Y : Y) :
                                      new NativeDate();
                } else {
                    date = NativeDate.apply(this, arguments);
                }
                if (!isPrimitive(date)) {
                    // Prevent mixups with unfixed Date object
                    defineProperties(date, { constructor: DateShim }, true);
                }
                return date;
            };

            // 15.9.1.15 Date Time String Format.
            var isoDateExpression = new RegExp('^' +
                '(\\d{4}|[+-]\\d{6})' + // four-digit year capture or sign +
                                          // 6-digit extended year
                '(?:-(\\d{2})' + // optional month capture
                '(?:-(\\d{2})' + // optional day capture
                '(?:' + // capture hours:minutes:seconds.milliseconds
                    'T(\\d{2})' + // hours capture
                    ':(\\d{2})' + // minutes capture
                    '(?:' + // optional :seconds.milliseconds
                        ':(\\d{2})' + // seconds capture
                        '(?:(\\.\\d{1,}))?' + // milliseconds capture
                    ')?' +
                '(' + // capture UTC offset component
                    'Z|' + // UTC capture
                    '(?:' + // offset specifier +/-hours:minutes
                        '([-+])' + // sign capture
                        '(\\d{2})' + // hours offset capture
                        ':(\\d{2})' + // minutes offset capture
                    ')' +
                ')?)?)?)?' +
            '$');

            var months = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];

            var dayFromMonth = function dayFromMonth(year, month) {
                var t = month > 1 ? 1 : 0;
                return (
                    months[month] +
                    Math.floor((year - 1969 + t) / 4) -
                    Math.floor((year - 1901 + t) / 100) +
                    Math.floor((year - 1601 + t) / 400) +
                    365 * (year - 1970)
                );
            };

            var toUTC = function toUTC(t) {
                var s = 0;
                var ms = t;
                if (hasSafariSignedIntBug && ms > maxSafeUnsigned32Bit) {
                    // work around a Safari 8/9 bug where it treats the seconds as signed
                    var msToShift = Math.floor(ms / maxSafeUnsigned32Bit) * maxSafeUnsigned32Bit;
                    var sToShift = Math.floor(msToShift / 1e3);
                    s += sToShift;
                    ms -= sToShift * 1e3;
                }
                return $Number(new NativeDate(1970, 0, 1, 0, 0, s, ms));
            };

            // Copy any custom methods a 3rd party library may have added
            for (var key in NativeDate) {
                if (owns(NativeDate, key)) {
                    DateShim[key] = NativeDate[key];
                }
            }

            // Copy "native" methods explicitly; they may be non-enumerable
            defineProperties(DateShim, {
                now: NativeDate.now,
                UTC: NativeDate.UTC
            }, true);
            DateShim.prototype = NativeDate.prototype;
            defineProperties(DateShim.prototype, {
                constructor: DateShim
            }, true);

            // Upgrade Date.parse to handle simplified ISO 8601 strings
            var parseShim = function parse(string) {
                var match = isoDateExpression.exec(string);
                if (match) {
                    // parse months, days, hours, minutes, seconds, and milliseconds
                    // provide default values if necessary
                    // parse the UTC offset component
                    var year = $Number(match[1]),
                        month = $Number(match[2] || 1) - 1,
                        day = $Number(match[3] || 1) - 1,
                        hour = $Number(match[4] || 0),
                        minute = $Number(match[5] || 0),
                        second = $Number(match[6] || 0),
                        millisecond = Math.floor($Number(match[7] || 0) * 1000),
                        // When time zone is missed, local offset should be used
                        // (ES 5.1 bug)
                        // see https://bugs.ecmascript.org/show_bug.cgi?id=112
                        isLocalTime = Boolean(match[4] && !match[8]),
                        signOffset = match[9] === '-' ? 1 : -1,
                        hourOffset = $Number(match[10] || 0),
                        minuteOffset = $Number(match[11] || 0),
                        result;
                    var hasMinutesOrSecondsOrMilliseconds = minute > 0 || second > 0 || millisecond > 0;
                    if (
                        hour < (hasMinutesOrSecondsOrMilliseconds ? 24 : 25) &&
                        minute < 60 && second < 60 && millisecond < 1000 &&
                        month > -1 && month < 12 && hourOffset < 24 &&
                        minuteOffset < 60 && // detect invalid offsets
                        day > -1 &&
                        day < (dayFromMonth(year, month + 1) - dayFromMonth(year, month))
                    ) {
                        result = (
                            (dayFromMonth(year, month) + day) * 24 +
                            hour +
                            hourOffset * signOffset
                        ) * 60;
                        result = (
                            (result + minute + minuteOffset * signOffset) * 60 +
                            second
                        ) * 1000 + millisecond;
                        if (isLocalTime) {
                            result = toUTC(result);
                        }
                        if (-8.64e15 <= result && result <= 8.64e15) {
                            return result;
                        }
                    }
                    return NaN;
                }
                return NativeDate.parse.apply(this, arguments);
            };
            defineProperties(DateShim, { parse: parseShim });

            return DateShim;
        }(Date));
        /* global Date: false */
    }

    // ES5 15.9.4.4
    // http://es5.github.com/#x15.9.4.4
    if (!Date.now) {
        Date.now = function now() {
            return new Date().getTime();
        };
    }

    //
    // Number
    // ======
    //

    // ES5.1 15.7.4.5
    // http://es5.github.com/#x15.7.4.5
    var hasToFixedBugs = NumberPrototype.toFixed && (
      (0.00008).toFixed(3) !== '0.000' ||
      (0.9).toFixed(0) !== '1' ||
      (1.255).toFixed(2) !== '1.25' ||
      (1000000000000000128).toFixed(0) !== '1000000000000000128'
    );

    var toFixedHelpers = {
        base: 1e7,
        size: 6,
        data: [0, 0, 0, 0, 0, 0],
        multiply: function multiply(n, c) {
            var i = -1;
            var c2 = c;
            while (++i < toFixedHelpers.size) {
                c2 += n * toFixedHelpers.data[i];
                toFixedHelpers.data[i] = c2 % toFixedHelpers.base;
                c2 = Math.floor(c2 / toFixedHelpers.base);
            }
        },
        divide: function divide(n) {
            var i = toFixedHelpers.size;
            var c = 0;
            while (--i >= 0) {
                c += toFixedHelpers.data[i];
                toFixedHelpers.data[i] = Math.floor(c / n);
                c = (c % n) * toFixedHelpers.base;
            }
        },
        numToString: function numToString() {
            var i = toFixedHelpers.size;
            var s = '';
            while (--i >= 0) {
                if (s !== '' || i === 0 || toFixedHelpers.data[i] !== 0) {
                    var t = $String(toFixedHelpers.data[i]);
                    if (s === '') {
                        s = t;
                    } else {
                        s += strSlice('0000000', 0, 7 - t.length) + t;
                    }
                }
            }
            return s;
        },
        pow: function pow(x, n, acc) {
            return (n === 0 ? acc : (n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc)));
        },
        log: function log(x) {
            var n = 0;
            var x2 = x;
            while (x2 >= 4096) {
                n += 12;
                x2 /= 4096;
            }
            while (x2 >= 2) {
                n += 1;
                x2 /= 2;
            }
            return n;
        }
    };

    var toFixedShim = function toFixed(fractionDigits) {
        var f, x, s, m, e, z, j, k;

        // Test for NaN and round fractionDigits down
        f = $Number(fractionDigits);
        f = isActualNaN(f) ? 0 : Math.floor(f);

        if (f < 0 || f > 20) {
            throw new RangeError('Number.toFixed called with invalid number of decimals');
        }

        x = $Number(this);

        if (isActualNaN(x)) {
            return 'NaN';
        }

        // If it is too big or small, return the string value of the number
        if (x <= -1e21 || x >= 1e21) {
            return $String(x);
        }

        s = '';

        if (x < 0) {
            s = '-';
            x = -x;
        }

        m = '0';

        if (x > 1e-21) {
            // 1e-21 < x < 1e21
            // -70 < log2(x) < 70
            e = toFixedHelpers.log(x * toFixedHelpers.pow(2, 69, 1)) - 69;
            z = (e < 0 ? x * toFixedHelpers.pow(2, -e, 1) : x / toFixedHelpers.pow(2, e, 1));
            z *= 0x10000000000000; // Math.pow(2, 52);
            e = 52 - e;

            // -18 < e < 122
            // x = z / 2 ^ e
            if (e > 0) {
                toFixedHelpers.multiply(0, z);
                j = f;

                while (j >= 7) {
                    toFixedHelpers.multiply(1e7, 0);
                    j -= 7;
                }

                toFixedHelpers.multiply(toFixedHelpers.pow(10, j, 1), 0);
                j = e - 1;

                while (j >= 23) {
                    toFixedHelpers.divide(1 << 23);
                    j -= 23;
                }

                toFixedHelpers.divide(1 << j);
                toFixedHelpers.multiply(1, 1);
                toFixedHelpers.divide(2);
                m = toFixedHelpers.numToString();
            } else {
                toFixedHelpers.multiply(0, z);
                toFixedHelpers.multiply(1 << (-e), 0);
                m = toFixedHelpers.numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
            }
        }

        if (f > 0) {
            k = m.length;

            if (k <= f) {
                m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
            } else {
                m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
            }
        } else {
            m = s + m;
        }

        return m;
    };
    defineProperties(NumberPrototype, { toFixed: toFixedShim }, hasToFixedBugs);

    var hasToPrecisionUndefinedBug = (function () {
        try {
            return 1.0.toPrecision(undefined) === '1';
        } catch (e) {
            return true;
        }
    }());
    var originalToPrecision = NumberPrototype.toPrecision;
    defineProperties(NumberPrototype, {
        toPrecision: function toPrecision(precision) {
            return typeof precision === 'undefined' ? originalToPrecision.call(this) : originalToPrecision.call(this, precision);
        }
    }, hasToPrecisionUndefinedBug);

    //
    // String
    // ======
    //

    // ES5 15.5.4.14
    // http://es5.github.com/#x15.5.4.14

    // [bugfix, IE lt 9, firefox 4, Konqueror, Opera, obscure browsers]
    // Many browsers do not split properly with regular expressions or they
    // do not perform the split correctly under obscure conditions.
    // See http://blog.stevenlevithan.com/archives/cross-browser-split
    // I've tested in many browsers and this seems to cover the deviant ones:
    //    'ab'.split(/(?:ab)*/) should be ["", ""], not [""]
    //    '.'.split(/(.?)(.?)/) should be ["", ".", "", ""], not ["", ""]
    //    'tesst'.split(/(s)*/) should be ["t", undefined, "e", "s", "t"], not
    //       [undefined, "t", undefined, "e", ...]
    //    ''.split(/.?/) should be [], not [""]
    //    '.'.split(/()()/) should be ["."], not ["", "", "."]

    if (
        'ab'.split(/(?:ab)*/).length !== 2 ||
        '.'.split(/(.?)(.?)/).length !== 4 ||
        'tesst'.split(/(s)*/)[1] === 't' ||
        'test'.split(/(?:)/, -1).length !== 4 ||
        ''.split(/.?/).length ||
        '.'.split(/()()/).length > 1
    ) {
        (function () {
            var compliantExecNpcg = typeof (/()??/).exec('')[1] === 'undefined'; // NPCG: nonparticipating capturing group
            var maxSafe32BitInt = Math.pow(2, 32) - 1;

            StringPrototype.split = function (separator, limit) {
                var string = String(this);
                if (typeof separator === 'undefined' && limit === 0) {
                    return [];
                }

                // If `separator` is not a regex, use native split
                if (!isRegex(separator)) {
                    return strSplit(this, separator, limit);
                }

                var output = [];
                var flags = (separator.ignoreCase ? 'i' : '') +
                            (separator.multiline ? 'm' : '') +
                            (separator.unicode ? 'u' : '') + // in ES6
                            (separator.sticky ? 'y' : ''), // Firefox 3+ and ES6
                    lastLastIndex = 0,
                    // Make `global` and avoid `lastIndex` issues by working with a copy
                    separator2, match, lastIndex, lastLength;
                var separatorCopy = new RegExp(separator.source, flags + 'g');
                if (!compliantExecNpcg) {
                    // Doesn't need flags gy, but they don't hurt
                    separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
                }
                /* Values for `limit`, per the spec:
                 * If undefined: 4294967295 // maxSafe32BitInt
                 * If 0, Infinity, or NaN: 0
                 * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
                 * If negative number: 4294967296 - Math.floor(Math.abs(limit))
                 * If other: Type-convert, then use the above rules
                 */
                var splitLimit = typeof limit === 'undefined' ? maxSafe32BitInt : ES.ToUint32(limit);
                match = separatorCopy.exec(string);
                while (match) {
                    // `separatorCopy.lastIndex` is not reliable cross-browser
                    lastIndex = match.index + match[0].length;
                    if (lastIndex > lastLastIndex) {
                        pushCall(output, strSlice(string, lastLastIndex, match.index));
                        // Fix browsers whose `exec` methods don't consistently return `undefined` for
                        // nonparticipating capturing groups
                        if (!compliantExecNpcg && match.length > 1) {
                            /* eslint-disable no-loop-func */
                            match[0].replace(separator2, function () {
                                for (var i = 1; i < arguments.length - 2; i++) {
                                    if (typeof arguments[i] === 'undefined') {
                                        match[i] = void 0;
                                    }
                                }
                            });
                            /* eslint-enable no-loop-func */
                        }
                        if (match.length > 1 && match.index < string.length) {
                            array_push.apply(output, arraySlice(match, 1));
                        }
                        lastLength = match[0].length;
                        lastLastIndex = lastIndex;
                        if (output.length >= splitLimit) {
                            break;
                        }
                    }
                    if (separatorCopy.lastIndex === match.index) {
                        separatorCopy.lastIndex++; // Avoid an infinite loop
                    }
                    match = separatorCopy.exec(string);
                }
                if (lastLastIndex === string.length) {
                    if (lastLength || !separatorCopy.test('')) {
                        pushCall(output, '');
                    }
                } else {
                    pushCall(output, strSlice(string, lastLastIndex));
                }
                return output.length > splitLimit ? arraySlice(output, 0, splitLimit) : output;
            };
        }());

    // [bugfix, chrome]
    // If separator is undefined, then the result array contains just one String,
    // which is the this value (converted to a String). If limit is not undefined,
    // then the output array is truncated so that it contains no more than limit
    // elements.
    // "0".split(undefined, 0) -> []
    } else if ('0'.split(void 0, 0).length) {
        StringPrototype.split = function split(separator, limit) {
            if (typeof separator === 'undefined' && limit === 0) {
                return [];
            }
            return strSplit(this, separator, limit);
        };
    }

    var str_replace = StringPrototype.replace;
    var replaceReportsGroupsCorrectly = (function () {
        var groups = [];
        'x'.replace(/x(.)?/g, function (match, group) {
            pushCall(groups, group);
        });
        return groups.length === 1 && typeof groups[0] === 'undefined';
    }());

    if (!replaceReportsGroupsCorrectly) {
        StringPrototype.replace = function replace(searchValue, replaceValue) {
            var isFn = isCallable(replaceValue);
            var hasCapturingGroups = isRegex(searchValue) && (/\)[*?]/).test(searchValue.source);
            if (!isFn || !hasCapturingGroups) {
                return str_replace.call(this, searchValue, replaceValue);
            } else {
                var wrappedReplaceValue = function (match) {
                    var length = arguments.length;
                    var originalLastIndex = searchValue.lastIndex;
                    searchValue.lastIndex = 0;
                    var args = searchValue.exec(match) || [];
                    searchValue.lastIndex = originalLastIndex;
                    pushCall(args, arguments[length - 2], arguments[length - 1]);
                    return replaceValue.apply(this, args);
                };
                return str_replace.call(this, searchValue, wrappedReplaceValue);
            }
        };
    }

    // ECMA-262, 3rd B.2.3
    // Not an ECMAScript standard, although ECMAScript 3rd Edition has a
    // non-normative section suggesting uniform semantics and it should be
    // normalized across all browsers
    // [bugfix, IE lt 9] IE < 9 substr() with negative value not working in IE
    var string_substr = StringPrototype.substr;
    var hasNegativeSubstrBug = ''.substr && '0b'.substr(-1) !== 'b';
    defineProperties(StringPrototype, {
        substr: function substr(start, length) {
            var normalizedStart = start;
            if (start < 0) {
                normalizedStart = max(this.length + start, 0);
            }
            return string_substr.call(this, normalizedStart, length);
        }
    }, hasNegativeSubstrBug);

    // ES5 15.5.4.20
    // whitespace from: http://es5.github.io/#x15.5.4.20
    var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
        '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
        '\u2029\uFEFF';
    var zeroWidth = '\u200b';
    var wsRegexChars = '[' + ws + ']';
    var trimBeginRegexp = new RegExp('^' + wsRegexChars + wsRegexChars + '*');
    var trimEndRegexp = new RegExp(wsRegexChars + wsRegexChars + '*$');
    var hasTrimWhitespaceBug = StringPrototype.trim && (ws.trim() || !zeroWidth.trim());
    defineProperties(StringPrototype, {
        // http://blog.stevenlevithan.com/archives/faster-trim-javascript
        // http://perfectionkills.com/whitespace-deviations/
        trim: function trim() {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            return $String(this).replace(trimBeginRegexp, '').replace(trimEndRegexp, '');
        }
    }, hasTrimWhitespaceBug);
    var trim = call.bind(String.prototype.trim);

    var hasLastIndexBug = StringPrototype.lastIndexOf && 'abcあい'.lastIndexOf('あい', 2) !== -1;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            var S = $String(this);
            var searchStr = $String(searchString);
            var numPos = arguments.length > 1 ? $Number(arguments[1]) : NaN;
            var pos = isActualNaN(numPos) ? Infinity : ES.ToInteger(numPos);
            var start = min(max(pos, 0), S.length);
            var searchLen = searchStr.length;
            var k = start + searchLen;
            while (k > 0) {
                k = max(0, k - searchLen);
                var index = strIndexOf(strSlice(S, k, start + searchLen), searchStr);
                if (index !== -1) {
                    return k + index;
                }
            }
            return -1;
        }
    }, hasLastIndexBug);

    var originalLastIndexOf = StringPrototype.lastIndexOf;
    defineProperties(StringPrototype, {
        lastIndexOf: function lastIndexOf(searchString) {
            return originalLastIndexOf.apply(this, arguments);
        }
    }, StringPrototype.lastIndexOf.length !== 1);

    // ES-5 15.1.2.2
    /* eslint-disable radix */
    if (parseInt(ws + '08') !== 8 || parseInt(ws + '0x16') !== 22) {
    /* eslint-enable radix */
        /* global parseInt: true */
        parseInt = (function (origParseInt) {
            var hexRegex = /^[\-+]?0[xX]/;
            return function parseInt(str, radix) {
                var string = trim(String(str));
                var defaultedRadix = $Number(radix) || (hexRegex.test(string) ? 16 : 10);
                return origParseInt(string, defaultedRadix);
            };
        }(parseInt));
    }

    // https://es5.github.io/#x15.1.2.3
    if (1 / parseFloat('-0') !== -Infinity) {
        /* global parseFloat: true */
        parseFloat = (function (origParseFloat) {
            return function parseFloat(string) {
                var inputString = trim(String(string));
                var result = origParseFloat(inputString);
                return result === 0 && strSlice(inputString, 0, 1) === '-' ? -0 : result;
            };
        }(parseFloat));
    }

    if (String(new RangeError('test')) !== 'RangeError: test') {
        var errorToStringShim = function toString() {
            if (typeof this === 'undefined' || this === null) {
                throw new TypeError("can't convert " + this + ' to object');
            }
            var name = this.name;
            if (typeof name === 'undefined') {
                name = 'Error';
            } else if (typeof name !== 'string') {
                name = $String(name);
            }
            var msg = this.message;
            if (typeof msg === 'undefined') {
                msg = '';
            } else if (typeof msg !== 'string') {
                msg = $String(msg);
            }
            if (!name) {
                return msg;
            }
            if (!msg) {
                return name;
            }
            return name + ': ' + msg;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        Error.prototype.toString = errorToStringShim;
    }

    if (supportsDescriptors) {
        var ensureNonEnumerable = function (obj, prop) {
            if (isEnum(obj, prop)) {
                var desc = Object.getOwnPropertyDescriptor(obj, prop);
                if (desc.configurable) {
                    desc.enumerable = false;
                    Object.defineProperty(obj, prop, desc);
                }
            }
        };
        ensureNonEnumerable(Error.prototype, 'message');
        if (Error.prototype.message !== '') {
            Error.prototype.message = '';
        }
        ensureNonEnumerable(Error.prototype, 'name');
    }

    if (String(/a/mig) !== '/a/gim') {
        var regexToString = function toString() {
            var str = '/' + this.source + '/';
            if (this.global) {
                str += 'g';
            }
            if (this.ignoreCase) {
                str += 'i';
            }
            if (this.multiline) {
                str += 'm';
            }
            return str;
        };
        // can't use defineProperties here because of toString enumeration issue in IE <= 8
        RegExp.prototype.toString = regexToString;
    }
}));


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

__webpack_require__(4);

__webpack_require__(2);

__webpack_require__(6);

__webpack_require__(3);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by o2o3 on 16/8/31.
 */


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loading = function () {
    function Loading(width, height) {
        _classCallCheck(this, Loading);

        this.width = width || 50;
        this.height = height || 50;
        this.$elem = null;
    }

    Loading.showLoading = function showLoading(text) {
        $.showLoading(text);
    };

    Loading.disLoading = function disLoading() {
        $.hideLoading();
    };

    return Loading;
}();

// module.exports = new Loading();


exports['default'] = Loading;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by o2o3 on 16/8/31.
 */


var env = __webpack_require__(0);
var api = {

    ajax: function ajax(configObj) {

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by o2o3 on 16/9/2.
 */


exports.__esModule = true;

var _devconfig = __webpack_require__(0);

var _devconfig2 = _interopRequireDefault(_devconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Fliter = function () {
    function Fliter() {
        _classCallCheck(this, Fliter);

        this.version = _devconfig2['default'].version;
    }

    Fliter.change = function change(json) {
        var newJson = void 0;
        try {
            newJson = JSON.parse(json);
        } catch (err) {
            newJson = JSON.parse(json.replace(/'/g, '"'));
        }
        var _input = this.text();
        this.text(newJson[_input]);
        //return current Jq DOM element;
        return this;
    };

    return Fliter;
}();

exports['default'] = Fliter;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Created by o2o3 on 16/8/31.
 */


exports.__esModule = true;

var _devconfig = __webpack_require__(0);

var _devconfig2 = _interopRequireDefault(_devconfig);

var _method = __webpack_require__(9);

var _method2 = _interopRequireDefault(_method);

var _loading = __webpack_require__(8);

var _loading2 = _interopRequireDefault(_loading);

var _storage = __webpack_require__(12);

var _storage2 = _interopRequireDefault(_storage);

var _FlowDatas = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Model = function () {
  function Model(conf, parent) {
    _classCallCheck(this, Model);

    this.appConfig = conf;
    // this.api = conf.model.api;
    // this.search = conf.model.search;
    this.now = new Date().getHours();
    this.datas = conf.model.datas;

    // Binding.set(this.datas);
    // FlowDatas.init(parent);
  }

  Model.prototype.asynData = function asynData(expireName) {
    var _this = this;

    var self = this;

    return new Promise(function (resolve, reject) {

      if (_devconfig2['default'].expire) {
        if (!_storage2['default'].checkExpire(expireName, _this.appConfig.model, _this.now)) {
          resolve(JSON.parse(localStorage.getItem(expireName)));
          return true;
        }
      }

      if (_this.api === 'mall.product.list') {
        var storageType = JSON.stringify(_this.appConfig.model);
        localStorage.setItem('type', storageType);
      }

      _method2['default'].ajax({
        api: _this.api,
        method: _this.search.method,
        datas: _this.search.datas,
        beforeSend: function beforeSend() {},
        complete: function complete(XMLHttpRequest, textStatus) {},
        success: function success(res) {
          if (_devconfig2['default'].expire && res.response) {
            _storage2['default'].addExpire(expireName, JSON.stringify(res.response), 2);
          }
          resolve(res.response);
        },
        error: function error(err) {
          reject(err);
        }
      });
    });
  };

  Model.prototype.setData = function setData(key, val) {
    var _this2 = this;

    if (!(key in this.datas)) {
      console.log('数据中没有这个key');
      return false;
    } else {
      this.datas[key] = val;
    }

    return false;
    this['lvaDatas'] = {};
    var modelDoms = findDomByAttr.call(this, 'lva-model');
    if (modelDoms.length === 1) {
      modelDoms.on('input', function (e) {
        changeText(modelDoms, e.currentTarget.value);
      });
    }

    this.fuckDatas[key] = val;
    if (val) {
      changeText(modelDoms, val);
    }

    Object.defineProperty(this.fuckDatas, key, {
      get: function get() {
        return _this2.datas[key];
      },
      set: function set(value) {
        _this2.fuckDatas[key] = value;
        changeText(modelDoms, val);
      }
    });

    function changeText(e, v) {
      var modelAttrVal = e.attr('Fuck-model');
      var bindDom = $('[Fuck-bind=' + modelAttrVal + ']');
      bindDom.text(v);
    }

    function findDomByAttr(attr) {
      return this.container.find('[' + attr + ']');
    }
  };

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

  return Model;
}();

exports['default'] = Model;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by o2o3 on 16/11/1.
 */

var Storage = function () {
    function Storage() {
        _classCallCheck(this, Storage);
    }

    Storage.addExpire = function addExpire(name, datas, time, now) {
        localStorage.setItem(name, datas);
        localStorage.setItem(name + '-expire-time', now + time);
    };

    Storage.compareTimeByName = function compareTimeByName(name, now) {
        if (localStorage.getItem(name + '-expire-time')) {
            if (localStorage.getItem(name + '-expire-time') > 23) {
                now += 23;
            }
            if (now > localStorage.getItem(name + '-expire-time')) {
                console.log('缓存已过期');
                return true;
            } else {
                console.log('缓存未过期');
                return false;
            }
        } else {
            console.log('无缓存');
            return true;
        }
    };

    Storage.checkExpire = function checkExpire(name, config, now) {
        if (this.method === 'mall.product.list') {
            if (JSON.stringify(config) === localStorage.getItem('type')) {
                return this.compareTimeByName(name, now);
            } else {
                console.log('无该类型缓存');
                return true;
            }
        } else {
            return this.compareTimeByName(name, now);
        }
    };

    return Storage;
}();

exports['default'] = Storage;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by o2o3 on 16/10/24.
 */

var Tools = function Tools(type) {
    _classCallCheck(this, Tools);

    this.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return decodeURI(r[2]);
        return null;
    };
    this.fixImages = function (id) {
        var imgs = $(id).find('img');
        var loadimg = new Image();
        loadimg.src = imgs[imgs.length - 1].src;
        loadimg.onload = function (e) {
            $(id).find('.item').each(function (i, v) {
                var $img = $(v).find('img');
                if ($img.width() !== $img.height()) {
                    $img.height($(v).width());
                }
            });
            loadimg = null;
        };
    };
};

exports["default"] = Tools;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _FlowDatas = __webpack_require__(1);

var _navigator = __webpack_require__(23);

var _navigator2 = _interopRequireDefault(_navigator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by o2o3 on 16/10/24.
                                                                                                                                                           */


var Bind = function () {
  function Bind(app, dom, attr) {
    _classCallCheck(this, Bind);

    this.dom = dom;
    this.attr = attr;
    // console.log(app, 'app');
    var str = _navigator2['default'] === "IE8" ? 'keyup' : 'input';
    $(document).on(str, '[fuck-model=' + attr + ']', function (e) {
      console.log(e, 'e');
      app.$datas[attr] = $(this).val();
    });
    _FlowDatas.FlowDatas.addFlowData(app, this.dom, this.attr);
    // dom.bind('input', function (e) {
    //   console.log(e, 'e')
    // });
  }

  Bind.prototype.addBind = function addBind(attribute) {
    // FlowDatas.addFlowData(this.dom, this.attr);
  };

  return Bind;
}();

exports['default'] = Bind;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by o2o3 on 16/10/24.
 */
var Event = function () {
    function Event(container, events) {
        _classCallCheck(this, Event);

        this.container = container;
        this.events = events;
    }

    Event.prototype.bindAll = function bindAll(evts) {
        var self = this;

        function getDomsByAttr(attr) {
            return self.container.find('[' + attr + ']');
        }

        if (getDomsByAttr('Fuck-touch').length > 0) {
            var touchs = getDomsByAttr('Fuck-touch');

            if (touchs.length == 1) {
                var attrVal = touchs.attr('Fuck-touch');
                touchs.bind('touchend', function (e) {
                    e.stopPropagation();
                    var eve = {
                        type: e.type,
                        timeStamp: e.timeStamp,
                        target: e.currentTarget,
                        X: e.clientX,
                        Y: e.clientY
                    };
                    return self.events[attrVal].call(this, eve);
                });
            } else {
                touchs.each(function (i, v) {
                    var attrVal = $(v).attr('Fuck-touch');
                    $(v).bind('touchend', function (e) {
                        e.stopPropagation();
                        var eve = {
                            type: e.type,
                            timeStamp: e.timeStamp,
                            target: e.currentTarget,
                            X: e.clientX,
                            Y: e.clientY
                        };
                        return self.events[attrVal].call(this, eve);
                    });
                });
            }
        }

        if (getDomsByAttr('Fuck-click').length > 0) {
            var clicks = getDomsByAttr('Fuck-click');
            if (clicks.length == 1) {
                var _attrVal = clicks.attr('Fuck-click');
                clicks.bind('click', function (e) {
                    e.stopPropagation();
                    var eve = {
                        type: e.type,
                        timeStamp: e.timeStamp,
                        target: e.currentTarget,
                        X: e.clientX,
                        Y: e.clientY
                    };
                    return self.events[_attrVal].call(this, eve);
                });
            } else {
                clicks.each(function (i, v) {
                    var attrVal = $(v).attr('Fuck-click');
                    $(v).bind('click', function (e) {
                        e.stopPropagation();
                        var eve = {
                            type: e.type,
                            timeStamp: e.timeStamp,
                            target: e.currentTarget,
                            X: e.clientX,
                            Y: e.clientY
                        };
                        return self.events[attrVal].call(this, eve);
                    });
                });
            }
        }

        if (getDomsByAttr('Fuck-swiper-right').length > 0) {
            var swipeL = getDomsByAttr('Fuck-swiper-right');
            if (swipeL.length == 1) {
                var _attrVal2 = swipeL.attr('Fuck-swiper-right');
                swipeL.on('swipeRight', function (e) {
                    e.stopPropagation();
                    var eve = {
                        type: e.type,
                        timeStamp: e.timeStamp,
                        target: e.currentTarget,
                        X: e.clientX,
                        Y: e.clientY
                    };
                    return self.events[_attrVal2].call(this, eve);
                });
            } else {
                swipeL.each(function (i, v) {
                    var attrVal = $(v).attr('Fuck-swiper-right');
                    $(v).on('swipeRight', function (e) {
                        e.stopPropagation();
                        var eve = {
                            type: e.type,
                            timeStamp: e.timeStamp,
                            target: e.currentTarget,
                            X: e.clientX,
                            Y: e.clientY
                        };
                        return self.events[attrVal].call(this, eve);
                    });
                });
            }
        }
    };

    return Event;
}();

exports['default'] = Event;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by o2o3 on 16/10/24.
 */

function getDomsByAttr(attr) {
  // console.log(container.find(`[${attr}]`),'\r\nfind2d');
  return this.find('[' + attr + ']');
}

var Replacer = function () {
  function Replacer(type, container, json) {
    _classCallCheck(this, Replacer);

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

  Replacer.prototype.replace = function replace(json) {
    var _this = this;

    // console.log(json);
    // console.log(this.json);
    var doms = this.dom;
    var self = this;
    var bind = '[fuck-bind]',
        html = '[fuck-bind-html]',
        each = '[fuck-each]',
        src = '[fuck-src]',
        fif = '[fuck-if]';

    function jsonChangeToText(dom, json) {
      var bindAttrVal = dom.attr('fuck-bind');
      // console.log(self.type, 'self.type');
      // console.log(dom,'dom');
      // console.log(json,'json');
      // console.log(bindAttrVal,'bindAttrVal');
      if (typeof json === 'string') {
        dom.text(json);
        dom.removeAttr('fuck-bind');
        return;
      }
      // console.log(dom, ' dom');
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
      var srcAttrVal = dom.attr(self.type);
      if (typeof json === 'string') {
        dom.attr('src', json);
        dom.removeAttr('fuck-src');
        return;
      }
      dom.attr('src', json[srcAttrVal]);
    }

    function cloneEach(dom, json) {
      var eachAttrVal = dom.attr(self.type);
      var eachArr = json[eachAttrVal];
      var picTestReg = new RegExp('jpg|png|gif');
      eachArr = typeof eachArr === 'string' ? eachArr.slice(-1) == ',' ? eachArr.slice(0, eachArr.length - 1).split(',') : picTestReg.test(eachArr.slice(-3)) ? eachArr.split(',') : eachArr.split(',').slice(0, -1) : eachArr;
      dom.before('<!--Start Fuck-each-->');
      eachArr.forEach(function (v, i) {
        if (i === eachArr.length - 1) return false;
        dom.after(dom.clone());
      });
      var newEachDoms = dom.parent().find(each);
      newEachDoms.each(function (i, v) {
        var $v = $(v);
        $(v).show();
        if ($v.find(src).length > 0) {
          jsonChangeToSrc($v.find(src), eachArr[i]);
        }
        if ($v.find(bind).length > 0) {
          // console.log($v.find(bind).attr('fuck-bind'),'22');
          // console.log(eachArr[i],'2233');
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
      var ifAttr = dom.attr('Fuck-if');
      var trueIfAttr = void 0;
      if (ifAttr.indexOf('!') > -1) {
        trueIfAttr = ifAttr.replace('!', '');
      }

      var jsonKey = trueIfAttr ? trueIfAttr : ifAttr;

      var ifBoolean = Boolean(json[jsonKey] === '0' ? Number(json[jsonKey]) : json[jsonKey]);

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
        // console.log(doms,'doms');
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
      doms.each(function (i, v) {
        if (_this.type === 'fuck-bind') {
          jsonChangeToText($(v), json);
        }
        if (_this.type === 'fuck-bind-html') {
          jsonChangeToHtml($(v), json);
        }
        if (_this.type === 'fuck-src') {
          jsonChangeToSrc($(v), json);
        }
        if (_this.type === 'fuck-if') {
          ifDom($(v), json);
        }
      });
    }
  };

  return Replacer;
}();

exports['default'] = Replacer;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Fliter = __webpack_require__(10);

var _Fliter2 = _interopRequireDefault(_Fliter);

var _Replacer = __webpack_require__(16);

var _Replacer2 = _interopRequireDefault(_Replacer);

var _Event = __webpack_require__(15);

var _Event2 = _interopRequireDefault(_Event);

var _Bind = __webpack_require__(14);

var _Bind2 = _interopRequireDefault(_Bind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } /**
                                                                                                                                                           * Created by o2o3 on 16/10/19.
                                                                                                                                                           */


var global_datas;

var View = function () {
  function View(conf, app) {
    _classCallCheck(this, View);

    this.app = app;
    this.appConfig = conf;
    this.container = $(conf.view.container);
    this.events = conf.view.events;
    global_datas = conf.model.datas;
  }

  View.changeTitle = function changeTitle(text) {
    document.getElementById('page_title').innerText = text;
  };

  View.prototype.replace = function replace(html, json) {
    var _this = this;

    // console.log(this,321);
    var $con = this.container;
    var _innerhtml = $con.html();
    var binDataReg = new RegExp('{{[A-z]*}}', 'g');
    var directiveArr = new RegExp('fuck-.*', 'g');
    var removeNotesHtml = _innerhtml.replace(/<!--.*-->/g, '');
    var replacesArr = _innerhtml.match(binDataReg);
    var selt = this;
    //delete notes
    $con.html(removeNotesHtml);

    if (findDomByAttr('Fuck-each')) {
      var eachs = new _Replacer2['default']('fuck-each', this.container, global_datas);
      eachs.replace(json);
    }

    if (findDomByAttr('Fuck-model')) {
      var modelDom = findDomByAttr('Fuck-model');
      modelDom.each(function (i, v) {
        var modelAttr = $(v).attr('Fuck-model');
        console.log(_this.app, 'this.app');
        var ms = new _Bind2['default'](_this.app, $(v), modelAttr);
        // ms.addBind();
      });
    }

    if (findDomByAttr('Fuck-bind')) {
      var bs = new _Replacer2['default']('fuck-bind', this.container, global_datas);
      bs.replace(json);
    }

    if (findDomByAttr('Fuck-bind-html')) {
      var htmls = new _Replacer2['default']('fuck-bind-html', this.container, global_datas);
      htmls.replace(json);
    }

    if (findDomByAttr('Fuck-src')) {
      var srcs = new _Replacer2['default']('fuck-src', this.container, global_datas);
      srcs.replace(json);
    }

    if (findDomByAttr('Fuck-if')) {
      var ifs = new _Replacer2['default']('fuck-if', this.container, global_datas);
      ifs.replace(json);
    }

    if (findParantheses(binDataReg)) {
      var replaces = findParantheses(binDataReg);
      var newStr = $con.html();

      replaces.forEach(function (v, i) {
        console.log(v, 'v21');
        var newProp = v.slice(2).slice(0, -2);
        var reg = new RegExp(v, 'g');
        newStr = newStr.replace(reg, json[newProp]);
      });

      $con.html(newStr);
    }

    if (findDomByAttr('Fuck-fliter')) {
      var fliterDoms = findDomByAttr('Fuck-fliter');
      if (fliterDoms.length === 1) {
        var fliterAttrVal = fliterDoms.attr('Fuck-fliter');
        _Fliter2['default'].change.call(fliterDoms, fliterAttrVal);
        fliterDoms.removeAttr('Fuck-fliter');
      } else {
        fliterDoms.each(function (i, v) {
          var fliterAttrVal = $(v).attr('Fuck-fliter');
          _Fliter2['default'].change.call($(v), fliterAttrVal);
          $(v).removeAttr('Fuck-fliter');
        });
      }
    }

    function findDomByAttr(attr) {
      return selt.container.find('[' + attr + ']');
    }

    function findParantheses(reg) {
      return removeNotesHtml.match(reg);
    }
  };

  View.prototype.onevent = function onevent(container, evts) {
    if (this.events && this.events.init && typeof this.events.init === 'function') {
      this.events.init.call(this, this.container);
    }
    return new _Event2['default'](container, evts);
  };

  View.prototype.render = function render(json) {
    for (var i in json) {
      global_datas[i] = json[i];
    }
    this.replace(this.container, json);
    var events = this.onevent(this.container, this.events);
    events.bindAll();
  };

  View.prototype.appendMore = function appendMore(datas) {
    var _this2 = this;

    return new Promise(function (resolve, reject) {
      if (datas && (typeof datas === 'undefined' ? 'undefined' : _typeof(datas)) === 'object') {
        _this2.replace(datas);
        resolve('rended.');
      } else {
        reject('bad work render.');
      }
    });
  };

  return View;
}();

exports['default'] = View;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// Console-polyfill. MIT license.
// https://github.com/paulmillr/console-polyfill
// Make it safe to do console.log() always.
(function(global) {
  'use strict';
  global.console = global.console || {};
  var con = global.console;
  var prop, method;
  var empty = {};
  var dummy = function() {};
  var properties = 'memory'.split(',');
  var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' +
     'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' +
     'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
  while (prop = properties.pop()) if (!con[prop]) con[prop] = empty;
  while (method = methods.pop()) if (!con[method]) con[method] = dummy;
})(typeof window === 'undefined' ? this : window);


/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
/**
 * Created by Administrator on 2017/5/22.
 */
var browser = navigator.appName;
var b_version = navigator.appVersion;
var version = b_version.split(";");
var trim_Version = version[1].replace(/[ ]/g, "");
var ie = '';
if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE6.0") {
  ie = "IE6";
} else if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE7.0") {
  ie = "IE7";
} else if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE8.0") {
  ie = "IE8";
} else if (browser === "Microsoft Internet Explorer" && trim_Version === "MSIE9.0") {
  ie = "IE9";
}

exports["default"] = ie;

/***/ })
/******/ ]);
