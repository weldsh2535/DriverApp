!function(){function e(r,t){return(e=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(r,t)}function r(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}();return function(){var a,o=n(e);if(r){var u=n(this).constructor;a=Reflect.construct(o,arguments,u)}else a=o.apply(this,arguments);return t(this,a)}}function t(e,r){return!r||"object"!=typeof r&&"function"!=typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(e,r,t,n,a,o,u){try{var c=e[o](u),i=c.value}catch(s){return void t(s)}c.done?r(i):Promise.resolve(i).then(n,a)}function o(e){return function(){var r=this,t=arguments;return new Promise(function(n,o){var u=e.apply(r,t);function c(e){a(u,n,o,c,i,"next",e)}function i(e){a(u,n,o,c,i,"throw",e)}c(void 0)})}}function u(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var u,c=e[Symbol.iterator]();!(n=(u=c.next()).done)&&(t.push(u.value),!r||t.length!==r);n=!0);}catch(i){a=!0,o=i}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||i(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=i(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,u=!0,c=!1;return{s:function(){t=e[Symbol.iterator]()},n:function(){var e=t.next();return u=e.done,e},e:function(e){c=!0,o=e},f:function(){try{u||null==t.return||t.return()}finally{if(c)throw o}}}}function i(e,r){if(e){if("string"==typeof e)return s(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?s(e,r):void 0}}function s(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{RdDx:function(t,n,a){"use strict";a.r(n),a.d(n,"HttpWeb",function(){return m});var i=a("7tlg"),s=function(e){return encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape)},f=function(e){return e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},p=function(){var e=[],r={};if(!document.cookie)return e;var t,n=c(document.cookie.split(";")||[]);try{for(n.s();!(t=n.n()).done;){var a=u(t.value.replace(/=/,"CAP_COOKIE").split("CAP_COOKIE"),2),o=a[0],i=a[1];o=f(o).trim(),i=f(i).trim(),r[o]=i}}catch(m){n.e(m)}finally{n.f()}for(var s=0,p=Object.entries(r);s<p.length;s++){var l=u(p[s],2),d=l[0],h=l[1];e.push({key:d,value:h})}return e},l=function(){var e,r=c(document.cookie.split(";")||[]);try{for(r.s();!(e=r.n()).done;){var t=e.value;document.cookie=t.replace(/^ +/,"").replace(/=.*/,"=;expires=".concat((new Date).toUTCString(),";path=/"))}}catch(n){r.e(n)}finally{r.f()}},d=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=Object.assign({method:e.method||"GET",headers:e.headers},r),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=Object.keys(e);return Object.keys(e).map(function(e){return e.toLocaleLowerCase()}).reduce(function(t,n,a){return t[n]=e[r[a]],t},{})}(e.headers)["content-type"]||"";if("string"==typeof e.data)t.body=e.data;else if(n.includes("application/x-www-form-urlencoded")){for(var a=new URLSearchParams,o=0,c=Object.entries(e.data||{});o<c.length;o++){var i=u(c[o],2),s=i[0],f=i[1];a.set(s,f)}t.body=a.toString()}else if(n.includes("multipart/form-data")){var p=new FormData;if(e.data instanceof FormData)e.data.forEach(function(e,r){p.append(r,e)});else for(var l=0,d=Object.keys(e.data);l<d.length;l++){var h=d[l];p.append(h,e.data[h])}t.body=p;var m=new Headers(t.headers);m.delete("content-type"),t.headers=m}else(n.includes("application/json")||"object"==typeof e.data)&&(t.body=JSON.stringify(e.data));return t},h=function(){var e=o(regeneratorRuntime.mark(function e(r){var t,n,a,c,i,s,f,p,l,h,m;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=d(r,r.webFetchExtra),n=function(e){var r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return e?Object.entries(e).reduce(function(e,t){var n,a,o=u(t,2),c=o[0],i=o[1];return Array.isArray(i)?(a="",i.forEach(function(e){n=r?encodeURIComponent(e):e,a+="".concat(c,"=").concat(n,"&")}),a.slice(0,-1)):(n=r?encodeURIComponent(i):i,a="".concat(c,"=").concat(n)),"".concat(e,"&").concat(a)},"").substr(1):null}(r.params,r.shouldEncodeUrlParams),a=n?"".concat(r.url,"?").concat(n):r.url,e.next=5,fetch(a,t);case 5:c=e.sent,i=c.headers.get("content-type")||"",f=c.ok?r:{},p=f.responseType,l=void 0===p?"text":p,e.t0=(i.includes("application/json")&&(l="json"),l),e.next="arraybuffer"===e.t0||"blob"===e.t0?11:"json"===e.t0?18:("document"===e.t0||e.t0,22);break;case 11:return e.next=13,c.blob();case 13:return h=e.sent,e.next=16,function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){var n=new FileReader;n.onload=function(){var r=n.result,t=r.substr(r.indexOf(",")+1);e(t)},n.onerror=function(e){return t(e)},n.readAsDataURL(r)}));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()(h);case 16:return s=e.sent,e.abrupt("break",25);case 18:return e.next=20,c.json();case 20:return s=e.sent,e.abrupt("break",25);case 22:return e.next=24,c.text();case 24:s=e.sent;case 25:return m={},e.abrupt("return",(c.headers.forEach(function(e,r){m[r]=e}),{data:s,headers:m,status:c.status,url:c.url}));case 27:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),m=function(t){!function(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(t&&t.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),t&&e(r,t)}(a,t);var n=r(a);function a(){var e;return function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,a),(e=n.call(this)).request=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h(r));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.get=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h(Object.assign(Object.assign({},r),{method:"GET"})));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()(r));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.post=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h(Object.assign(Object.assign({},r),{method:"POST"})));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()(r));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.put=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h(Object.assign(Object.assign({},r),{method:"PUT"})));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()(r));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.patch=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h(Object.assign(Object.assign({},r),{method:"PATCH"})));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()(r));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.del=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",h(Object.assign(Object.assign({},r),{method:"DELETE"})));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}()(r));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.getCookiesMap=function(){var e=o(regeneratorRuntime.mark(function e(r){var t,n,a,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=p(),n={},a=c(t);try{for(a.s();!(o=a.n()).done;)u=o.value,n[u.key]=u.value}catch(r){a.e(r)}finally{a.f()}return e.abrupt("return",n);case 4:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.getCookies=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",{cookies:p()});case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.setCookie=function(){var e=o(regeneratorRuntime.mark(function e(r){var t,n,a,o,u;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=r.key,n=r.value,a=r.expires,o=void 0===a?"":a,u=r.path,function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=s(e),a=s(r),o="; expires=".concat((t.expires||"").replace("expires=","")),u=(t.path||"/").replace("path=","");document.cookie="".concat(n,"=").concat(a||"").concat(o,"; path=").concat(u)}(t,n,{expires:o,path:void 0===u?"":u});case 2:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.getCookie=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",function(e){var r,t=c(p());try{for(t.s();!(r=t.n()).done;){var n=r.value;if(n.key===e)return n}}catch(a){t.e(a)}finally{t.f()}return{key:e,value:""}}(r.key));case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.deleteCookie=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:document.cookie="".concat(r.key,"=; Max-Age=0");case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.clearCookies=function(){var e=o(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l());case 1:case"end":return e.stop()}},e)}));return function(r){return e.apply(this,arguments)}}(),e.clearAllCookies=o(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",l());case 1:case"end":return e.stop()}},e)})),e.uploadFile=function(){var r=o(regeneratorRuntime.mark(function r(t){var n,a;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return(n=new FormData).append(t.name,t.blob||"undefined"),a=Object.assign(Object.assign({},t),{body:n,method:"POST"}),r.abrupt("return",e.post(a));case 4:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),e.downloadFile=function(){var r=o(regeneratorRuntime.mark(function r(t){var n,a,o,u,c,i,s,f,p,l,h,m,v,b,y,g;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return n=d(t,t.webFetchExtra),r.next=3,fetch(t.url,n);case 3:if(a=r.sent,!(null==t?void 0:t.progress)){r.next=27;break}if(!(null==a?void 0:a.body)){r.next=24;break}u=a.body.getReader(),c=0,i=[],s=a.headers.get("content-type"),f=parseInt(a.headers.get("content-length")||"0",10);case 9:return r.next=11,u.read();case 11:if(p=r.sent,l=p.done,h=p.value,!l){r.next=16;break}return r.abrupt("break",19);case 16:i.push(h),c+=(null==h?void 0:h.length)||0,e.notifyListeners("progress",{type:"DOWNLOAD",url:t.url,bytes:c,contentLength:f});case 17:r.next=9;break;case 19:for(m=new Uint8Array(c),v=0,b=0,y=i;b<y.length;b++)void 0!==(g=y[b])&&(m.set(g,v),v+=g.length);o=new Blob([m.buffer],{type:s||void 0}),r.next=25;break;case 24:o=new Blob;case 25:r.next=30;break;case 27:return r.next=29,a.blob();case 29:o=r.sent;case 30:return r.abrupt("return",{blob:o});case 31:case"end":return r.stop()}},r)}));return function(e){return r.apply(this,arguments)}}(),e}return a}(i.a)}}])}();