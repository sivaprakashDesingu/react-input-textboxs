module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";e.exports=r(5)},function(e,t,r){e.exports=r(7)()},function(e,t,r){var n=r(9),o=r(10);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[e.i,o,""]]);var a={insert:"head",singleton:!1},i=(n(o,a),o.locals?o.locals:{});e.exports=i},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TextBox=t.FloatingLabel=void 0;var n=a(r(4)),o=a(r(12));function a(e){return e&&e.__esModule?e:{default:e}}t.FloatingLabel=n.default,t.TextBox=o.default},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=i(r(0)),a=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}r(2);var u={label:a.default.string.isRequired,value:a.default.string.isRequired,type:a.default.string.isRequired,onChange:a.default.func.isRequired,styles:a.default.object},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.state={floatingEnabled:!1},r.handleChange=r.handleChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"handleFloatingLabel",value:function(e){e.trim().length>=1?this.setState({floatingEnabled:!0}):this.setState({floatingEnabled:!1})}},{key:"componentDidMount",value:function(){this.handleFloatingLabel(this.props.value)}},{key:"render",value:function(){var e=this,t=this.state.floatingEnabled,r=this.props,n=r.label,a=r.value,i=r.type,u=r.variant,l=r.readOnly;return o.default.createElement("div",{className:"react-input-texboxs-wrapper "+u},o.default.createElement("div",{className:"input-floating-wrapper  "+(t?" enabled":"")},o.default.createElement("input",{type:i||"text",id:n,readOnly:l||!1,value:a||"",autoComplete:"new-password",onBlur:function(t){return e.handleFloatingLabel(t.target.value)},onChange:this.handleChange}),o.default.createElement("label",{htmlFor:n},n)))}}]),t}(o.default.Component);l.propTypes=u,t.default=l},function(e,t,r){"use strict";
/** @license React v16.12.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(6),o="function"==typeof Symbol&&Symbol.for,a=o?Symbol.for("react.element"):60103,i=o?Symbol.for("react.portal"):60106,u=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,c=o?Symbol.for("react.profiler"):60114,p=o?Symbol.for("react.provider"):60109,f=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,d=o?Symbol.for("react.suspense"):60113;o&&Symbol.for("react.suspense_list");var b=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116;o&&Symbol.for("react.fundamental"),o&&Symbol.for("react.responder"),o&&Symbol.for("react.scope");var h="function"==typeof Symbol&&Symbol.iterator;function v(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g={};function x(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}function w(){}function _(e,t,r){this.props=e,this.context=t,this.refs=g,this.updater=r||m}x.prototype.isReactComponent={},x.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(v(85));this.updater.enqueueSetState(this,e,t,"setState")},x.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},w.prototype=x.prototype;var O=_.prototype=new w;O.constructor=_,n(O,x.prototype),O.isPureReactComponent=!0;var j={current:null},C={current:null},S=Object.prototype.hasOwnProperty,E={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,r){var n,o={},i=null,u=null;if(null!=t)for(n in void 0!==t.ref&&(u=t.ref),void 0!==t.key&&(i=""+t.key),t)S.call(t,n)&&!E.hasOwnProperty(n)&&(o[n]=t[n]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var c=Array(l),p=0;p<l;p++)c[p]=arguments[p+2];o.children=c}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===o[n]&&(o[n]=l[n]);return{$$typeof:a,type:e,key:i,ref:u,props:o,_owner:C.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var R=/\/+/g,T=[];function M(e,t,r,n){if(T.length){var o=T.pop();return o.result=e,o.keyPrefix=t,o.func=r,o.context=n,o.count=0,o}return{result:e,keyPrefix:t,func:r,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>T.length&&T.push(e)}function N(e,t,r){return null==e?0:function e(t,r,n,o){var u=typeof t;"undefined"!==u&&"boolean"!==u||(t=null);var l=!1;if(null===t)l=!0;else switch(u){case"string":case"number":l=!0;break;case"object":switch(t.$$typeof){case a:case i:l=!0}}if(l)return n(o,t,""===r?"."+q(t,0):r),1;if(l=0,r=""===r?".":r+":",Array.isArray(t))for(var c=0;c<t.length;c++){var p=r+q(u=t[c],c);l+=e(u,p,n,o)}else if(null===t||"object"!=typeof t?p=null:p="function"==typeof(p=h&&t[h]||t["@@iterator"])?p:null,"function"==typeof p)for(t=p.call(t),c=0;!(u=t.next()).done;)l+=e(u=u.value,p=r+q(u,c++),n,o);else if("object"===u)throw n=""+t,Error(v(31,"[object Object]"===n?"object with keys {"+Object.keys(t).join(", ")+"}":n,""));return l}(e,"",t,r)}function q(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function L(e,t){e.func.call(e.context,t,e.count++)}function I(e,t,r){var n=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,r,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+r)),n.push(e))}function F(e,t,r,n,o){var a="";null!=r&&(a=(""+r).replace(R,"$&/")+"/"),N(e,I,t=M(t,a,n,o)),$(t)}function A(){var e=j.current;if(null===e)throw Error(v(321));return e}var U={Children:{map:function(e,t,r){if(null==e)return e;var n=[];return F(e,n,null,t,r),n},forEach:function(e,t,r){if(null==e)return e;N(e,L,t=M(null,null,t,r)),$(t)},count:function(e){return N(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(v(143));return e}},createRef:function(){return{current:null}},Component:x,PureComponent:_,createContext:function(e,t){return void 0===t&&(t=null),(e={$$typeof:f,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:p,_context:e},e.Consumer=e},forwardRef:function(e){return{$$typeof:s,render:e}},lazy:function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},memo:function(e,t){return{$$typeof:b,type:e,compare:void 0===t?null:t}},useCallback:function(e,t){return A().useCallback(e,t)},useContext:function(e,t){return A().useContext(e,t)},useEffect:function(e,t){return A().useEffect(e,t)},useImperativeHandle:function(e,t,r){return A().useImperativeHandle(e,t,r)},useDebugValue:function(){},useLayoutEffect:function(e,t){return A().useLayoutEffect(e,t)},useMemo:function(e,t){return A().useMemo(e,t)},useReducer:function(e,t,r){return A().useReducer(e,t,r)},useRef:function(e){return A().useRef(e)},useState:function(e){return A().useState(e)},Fragment:u,Profiler:c,StrictMode:l,Suspense:d,createElement:k,cloneElement:function(e,t,r){if(null==e)throw Error(v(267,e));var o=n({},e.props),i=e.key,u=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(u=t.ref,l=C.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(p in t)S.call(t,p)&&!E.hasOwnProperty(p)&&(o[p]=void 0===t[p]&&void 0!==c?c[p]:t[p])}var p=arguments.length-2;if(1===p)o.children=r;else if(1<p){c=Array(p);for(var f=0;f<p;f++)c[f]=arguments[f+2];o.children=c}return{$$typeof:a,type:e.type,key:i,ref:u,props:o,_owner:l}},createFactory:function(e){var t=k.bind(null,e);return t.type=e,t},isValidElement:P,version:"16.12.0",__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:j,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:C,IsSomeRendererActing:{current:!1},assign:n}},B={default:U},z=B&&U||B;e.exports=z.default||z},function(e,t,r){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var r,u,l=i(e),c=1;c<arguments.length;c++){for(var p in r=Object(arguments[c]))o.call(r,p)&&(l[p]=r[p]);if(n){u=n(r);for(var f=0;f<u.length;f++)a.call(r,u[f])&&(l[u[f]]=r[u[f]])}}return l}},function(e,t,r){"use strict";var n=r(8);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,r,o,a,i){if(i!==n){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}function t(){return e}e.isRequired=e;var r={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return r.PropTypes=r,r}},function(e,t,r){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";var n,o=function(){return void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n},a=function(){var e={};return function(t){if(void 0===e[t]){var r=document.querySelector(t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}e[t]=r}return e[t]}}(),i=[];function u(e){for(var t=-1,r=0;r<i.length;r++)if(i[r].identifier===e){t=r;break}return t}function l(e,t){for(var r={},n=[],o=0;o<e.length;o++){var a=e[o],l=t.base?a[0]+t.base:a[0],c=r[l]||0,p="".concat(l," ").concat(c);r[l]=c+1;var f=u(p),s={css:a[1],media:a[2],sourceMap:a[3]};-1!==f?(i[f].references++,i[f].updater(s)):i.push({identifier:p,updater:h(s,t),references:1}),n.push(p)}return n}function c(e){var t=document.createElement("style"),n=e.attributes||{};if(void 0===n.nonce){var o=r.nc;o&&(n.nonce=o)}if(Object.keys(n).forEach((function(e){t.setAttribute(e,n[e])})),"function"==typeof e.insert)e.insert(t);else{var i=a(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}return t}var p,f=(p=[],function(e,t){return p[e]=t,p.filter(Boolean).join("\n")});function s(e,t,r,n){var o=r?"":n.media?"@media ".concat(n.media," {").concat(n.css,"}"):n.css;if(e.styleSheet)e.styleSheet.cssText=f(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function d(e,t,r){var n=r.css,o=r.media,a=r.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var b=null,y=0;function h(e,t){var r,n,o;if(t.singleton){var a=y++;r=b||(b=c(t)),n=s.bind(null,r,a,!1),o=s.bind(null,r,a,!0)}else r=c(t),n=d.bind(null,r,t),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)};return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else o()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=o());var r=l(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var n=0;n<r.length;n++){var o=u(r[n]);i[o].references--}for(var a=l(e,t),c=0;c<r.length;c++){var p=u(r[c]);0===i[p].references&&(i[p].updater(),i.splice(p,1))}r=a}}}},function(e,t,r){(t=r(11)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap);"]),t.push([e.i,'.react-input-texboxs-wrapper *{padding:0;margin:0;outline:0;box-sizing:border-box;font-family:"Roboto", "arial";font-size:14px}.react-input-texboxs-wrapper input{border:0;border-bottom:1px solid #ddd;width:100%;padding:30px 0 10px}.react-input-texboxs-wrapper .input-floating-wrapper{position:relative;margin-bottom:10px}.react-input-texboxs-wrapper .input-floating-wrapper.enabled label{top:5px;font-size:12px;color:#0e56ea}.react-input-texboxs-wrapper .input-floating-wrapper.enabled input{border-bottom:2px solid #0e56ea}.react-input-texboxs-wrapper .input-floating-wrapper input{transition:0.3s ease all}.react-input-texboxs-wrapper .input-floating-wrapper label{position:absolute;left:0;top:32px;transition:0.3s ease all}.react-input-texboxs-wrapper .input-floating-wrapper input:hover{border-bottom:2px solid #000}.react-input-texboxs-wrapper .input-floating-wrapper input:focus{border-bottom:2px solid #0e56ea}.react-input-texboxs-wrapper .input-floating-wrapper input:focus ~ label{top:5px;font-size:13px;color:#0e56ea}.react-input-texboxs-wrapper.outline .input-floating-wrapper input{border:1px solid #ddd;padding:18px 20px 14px;border-radius:3px}.react-input-texboxs-wrapper.outline .input-floating-wrapper label{left:20px;top:calc(50% - 8px)}.react-input-texboxs-wrapper.outline .input-floating-wrapper input:hover{border:1px solid #000}.react-input-texboxs-wrapper.outline .input-floating-wrapper input:focus{border:1px solid #0e56ea}.react-input-texboxs-wrapper.outline .input-floating-wrapper input:focus ~ label{top:-8px;font-size:13px;color:#0e56ea;padding:2px 5px;background:#fff}.react-input-texboxs-wrapper.outline .input-floating-wrapper.enabled label{top:-8px;font-size:13px;color:#0e56ea;padding:2px 5px;background:#fff}.react-input-texboxs-wrapper.outline .input-floating-wrapper.enabled input{border:1px solid #0e56ea}.react-input-texboxs-wrapper .input-standared-wrapper{margin-bottom:20px;display:flex;flex-direction:column}.react-input-texboxs-wrapper .input-standared-wrapper input{padding:15px 20px;display:flex;border:1px solid #ddd;border-radius:3px;transition:.3s ease all}.react-input-texboxs-wrapper .input-standared-wrapper input:hover{border-color:#000}.react-input-texboxs-wrapper.withlabel .input-standared-wrapper label{padding:0 0 10px}\n',""]),e.exports=t},function(e,t,r){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r=function(e,t){var r=e[1]||"",n=e[3];if(!n)return r;if(t&&"function"==typeof btoa){var o=(i=n,u=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(u),"/*# ".concat(l," */")),a=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[r].concat(a).concat([o]).join("\n")}var i,u,l;return[r].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(r,"}"):r})).join("")},t.i=function(e,r,n){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(n)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&o[l[0]]||(r&&(l[2]?l[2]="".concat(r," and ").concat(l[2]):l[2]=r),t.push(l))}},t}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),o=i(r(0)),a=i(r(1));function i(e){return e&&e.__esModule?e:{default:e}}r(2);var u={label:a.default.string.isRequired,value:a.default.string.isRequired,type:a.default.string.isRequired,onChange:a.default.func.isRequired,styles:a.default.object},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return r.handleChange=r.handleChange.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"handleChange",value:function(e){this.props.onChange(e.target.value)}},{key:"render",value:function(){var e=this.props,t=e.label,r=e.value,n=e.type,a=e.placeholder,i=e.readOnly;return null==t?o.default.createElement("div",{className:"react-input-texboxs-wrapper "},o.default.createElement("div",{className:"input-standared-wrapper"},o.default.createElement("input",{type:n||"text",id:t,placeholder:a||" ",readOnly:i||!1,value:r||"",autoComplete:"new-password",onChange:this.handleChange}))):o.default.createElement("div",{className:"react-input-texboxs-wrapper withlabel"},o.default.createElement("div",{className:"input-standared-wrapper"},o.default.createElement("label",{htmlFor:t},t),o.default.createElement("input",{type:n||"text",id:t,placeholder:a||" ",readOnly:i||!1,value:r||"",autoComplete:"new-password",onChange:this.handleChange})))}}]),t}(o.default.Component);l.propTypes=u,t.default=l}]);