(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{4314:function(e,t,r){"use strict";r.d(t,{Z:function(){return O}});var n=r(19013),i=r(13882);function a(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e),a=(0,n.Z)(t),o=r.getTime()-a.getTime();return o<0?-1:o>0?1:o}function o(e,t){(0,i.Z)(2,arguments);var r=(0,n.Z)(e),a=(0,n.Z)(t),o=r.getFullYear()-a.getFullYear(),u=r.getMonth()-a.getMonth();return 12*o+u}function u(e){(0,i.Z)(1,arguments);var t=(0,n.Z)(e);return t.setHours(23,59,59,999),t}function s(e){(0,i.Z)(1,arguments);var t=(0,n.Z)(e),r=t.getMonth();return t.setFullYear(t.getFullYear(),r+1,0),t.setHours(23,59,59,999),t}function l(e){(0,i.Z)(1,arguments);var t=(0,n.Z)(e);return u(t).getTime()===s(t).getTime()}function d(e,t){(0,i.Z)(2,arguments);var r,u=(0,n.Z)(e),s=(0,n.Z)(t),d=a(u,s),c=Math.abs(o(u,s));if(c<1)r=0;else{1===u.getMonth()&&u.getDate()>27&&u.setDate(30),u.setMonth(u.getMonth()-d*c);var f=a(u,s)===-d;l((0,n.Z)(e))&&1===c&&1===a(e,s)&&(f=!1),r=d*(c-Number(f))}return 0===r?0:r}function c(e,t){return(0,i.Z)(2,arguments),(0,n.Z)(e).getTime()-(0,n.Z)(t).getTime()}var f={ceil:Math.ceil,round:Math.round,floor:Math.floor,trunc:function(e){return e<0?Math.ceil(e):Math.floor(e)}};function m(e){return e?f[e]:f.trunc}function h(e,t,r){(0,i.Z)(2,arguments);var n=c(e,t)/1e3;return m(null===r||void 0===r?void 0:r.roundingMethod)(n)}var p=r(95826);function v(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var r in t=t||{})Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}({},e)}var y=r(24262),b=1440,g=43200;function w(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,i.Z)(2,arguments);var o=r.locale||p.Z;if(!o.formatDistance)throw new RangeError("locale must contain formatDistance property");var u=a(e,t);if(isNaN(u))throw new RangeError("Invalid time value");var s,l,c=v(r);c.addSuffix=Boolean(r.addSuffix),c.comparison=u,u>0?(s=(0,n.Z)(t),l=(0,n.Z)(e)):(s=(0,n.Z)(e),l=(0,n.Z)(t));var f,m=h(l,s),w=((0,y.Z)(l)-(0,y.Z)(s))/1e3,O=Math.round((m-w)/60);if(O<2)return r.includeSeconds?m<5?o.formatDistance("lessThanXSeconds",5,c):m<10?o.formatDistance("lessThanXSeconds",10,c):m<20?o.formatDistance("lessThanXSeconds",20,c):m<40?o.formatDistance("halfAMinute",null,c):m<60?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",1,c):0===O?o.formatDistance("lessThanXMinutes",1,c):o.formatDistance("xMinutes",O,c);if(O<45)return o.formatDistance("xMinutes",O,c);if(O<90)return o.formatDistance("aboutXHours",1,c);if(O<b){var j=Math.round(O/60);return o.formatDistance("aboutXHours",j,c)}if(O<2520)return o.formatDistance("xDays",1,c);if(O<g){var M=Math.round(O/b);return o.formatDistance("xDays",M,c)}if(O<86400)return f=Math.round(O/g),o.formatDistance("aboutXMonths",f,c);if((f=d(l,s))<12){var _=Math.round(O/g);return o.formatDistance("xMonths",_,c)}var k=f%12,P=Math.floor(f/12);return k<3?o.formatDistance("aboutXYears",P,c):k<9?o.formatDistance("overXYears",P,c):o.formatDistance("almostXYears",P+1,c)}function O(e,t){return(0,i.Z)(1,arguments),w(e,Date.now(),t)}},75830:function(e,t,r){"use strict";r.d(t,{Z:function(){return f}});var n={lessThanXSeconds:{one:"moins d\u2019une seconde",other:"moins de {{count}} secondes"},xSeconds:{one:"1 seconde",other:"{{count}} secondes"},halfAMinute:"30 secondes",lessThanXMinutes:{one:"moins d\u2019une minute",other:"moins de {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"environ 1 heure",other:"environ {{count}} heures"},xHours:{one:"1 heure",other:"{{count}} heures"},xDays:{one:"1 jour",other:"{{count}} jours"},aboutXWeeks:{one:"environ 1 semaine",other:"environ {{count}} semaines"},xWeeks:{one:"1 semaine",other:"{{count}} semaines"},aboutXMonths:{one:"environ 1 mois",other:"environ {{count}} mois"},xMonths:{one:"1 mois",other:"{{count}} mois"},aboutXYears:{one:"environ 1 an",other:"environ {{count}} ans"},xYears:{one:"1 an",other:"{{count}} ans"},overXYears:{one:"plus d\u2019un an",other:"plus de {{count}} ans"},almostXYears:{one:"presqu\u2019un an",other:"presque {{count}} ans"}},i=function(e,t,r){var i,a=n[e];return i="string"===typeof a?a:1===t?a.one:a.other.replace("{{count}}",String(t)),null!==r&&void 0!==r&&r.addSuffix?r.comparison&&r.comparison>0?"dans "+i:"il y a "+i:i},a=r(49526),o={date:(0,a.Z)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,a.Z)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.Z)({formats:{full:"{{date}} '\xe0' {{time}}",long:"{{date}} '\xe0' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},u={lastWeek:"eeee 'dernier \xe0' p",yesterday:"'hier \xe0' p",today:"'aujourd\u2019hui \xe0' p",tomorrow:"'demain \xe0' p'",nextWeek:"eeee 'prochain \xe0' p",other:"P"},s=function(e,t,r,n){return u[e]},l=r(88486),d={ordinalNumber:function(e,t){var r=Number(e),n=null===t||void 0===t?void 0:t.unit;if(0===r)return"0";return r+(1===r?n&&["year","week","hour","minute","second"].includes(n)?"\xe8re":"er":"\xe8me")},era:(0,l.Z)({values:{narrow:["av. J.-C","ap. J.-C"],abbreviated:["av. J.-C","ap. J.-C"],wide:["avant J\xe9sus-Christ","apr\xe8s J\xe9sus-Christ"]},defaultWidth:"wide"}),quarter:(0,l.Z)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1er trim.","2\xe8me trim.","3\xe8me trim.","4\xe8me trim."],wide:["1er trimestre","2\xe8me trimestre","3\xe8me trimestre","4\xe8me trimestre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,l.Z)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["janv.","f\xe9vr.","mars","avr.","mai","juin","juil.","ao\xfbt","sept.","oct.","nov.","d\xe9c."],wide:["janvier","f\xe9vrier","mars","avril","mai","juin","juillet","ao\xfbt","septembre","octobre","novembre","d\xe9cembre"]},defaultWidth:"wide"}),day:(0,l.Z)({values:{narrow:["D","L","M","M","J","V","S"],short:["di","lu","ma","me","je","ve","sa"],abbreviated:["dim.","lun.","mar.","mer.","jeu.","ven.","sam."],wide:["dimanche","lundi","mardi","mercredi","jeudi","vendredi","samedi"]},defaultWidth:"wide"}),dayPeriod:(0,l.Z)({values:{narrow:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"mat.",afternoon:"ap.m.",evening:"soir",night:"mat."},abbreviated:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"matin",afternoon:"apr\xe8s-midi",evening:"soir",night:"matin"},wide:{am:"AM",pm:"PM",midnight:"minuit",noon:"midi",morning:"du matin",afternoon:"de l\u2019apr\xe8s-midi",evening:"du soir",night:"du matin"}},defaultWidth:"wide"})},c=r(76723),f={code:"fr",formatDistance:i,formatLong:o,formatRelative:s,localize:d,match:{ordinalNumber:(0,r(60974).Z)({matchPattern:/^(\d+)(i\xe8me|\xe8re|\xe8me|er|e)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e)}}),era:(0,c.Z)({matchPatterns:{narrow:/^(av\.J\.C|ap\.J\.C|ap\.J\.-C)/i,abbreviated:/^(av\.J\.-C|av\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(avant J\xe9sus-Christ|apr\xe8s J\xe9sus-Christ)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^av/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,c.Z)({matchPatterns:{narrow:/^T?[1234]/i,abbreviated:/^[1234](er|\xe8me|e)? trim\.?/i,wide:/^[1234](er|\xe8me|e)? trimestre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,c.Z)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(janv|f\xe9vr|mars|avr|mai|juin|juill|juil|ao\xfbt|sept|oct|nov|d\xe9c)\.?/i,wide:/^(janvier|f\xe9vrier|mars|avril|mai|juin|juillet|ao\xfbt|septembre|octobre|novembre|d\xe9cembre)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^av/i,/^ma/i,/^juin/i,/^juil/i,/^ao/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,c.Z)({matchPatterns:{narrow:/^[lmjvsd]/i,short:/^(di|lu|ma|me|je|ve|sa)/i,abbreviated:/^(dim|lun|mar|mer|jeu|ven|sam)\.?/i,wide:/^(dimanche|lundi|mardi|mercredi|jeudi|vendredi|samedi)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^l/i,/^m/i,/^m/i,/^j/i,/^v/i,/^s/i],any:[/^di/i,/^lu/i,/^ma/i,/^me/i,/^je/i,/^ve/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,c.Z)({matchPatterns:{narrow:/^(a|p|minuit|midi|mat\.?|ap\.?m\.?|soir|nuit)/i,any:/^([ap]\.?\s?m\.?|du matin|de l'apr\xe8s[-\s]midi|du soir|de la nuit)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^min/i,noon:/^mid/i,morning:/mat/i,afternoon:/ap/i,evening:/soir/i,night:/nuit/i}},defaultParseWidth:"any"})},options:{weekStartsOn:1,firstWeekContainsDate:4}}},90638:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},i=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),i.forEach((function(t){n(e,t,r[t])}))}return e}t.default=function(e,t){var r=a.default,n={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};o=e,s=Promise,(null!=s&&"undefined"!==typeof Symbol&&s[Symbol.hasInstance]?s[Symbol.hasInstance](o):o instanceof s)?n.loader=function(){return e}:"function"===typeof e?n.loader=e:"object"===typeof e&&(n=i({},n,e));var o,s;var l=n=i({},n,t);if(l.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(l.suspense)return r(l);n.loadableGenerated&&delete(n=i({},n,n.loadableGenerated)).loadableGenerated;if("boolean"===typeof n.ssr){if(!n.ssr)return delete n.ssr,u(r,n);delete n.ssr}return r(n)};o(r(67294));var a=o(r(14302));function o(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},16319:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var i=((n=r(67294))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=i},14302:function(e,t,r){"use strict";function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){i(e,t,r[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=r(67294))&&o.__esModule?o:{default:o},s=r(67161),l=r(16319);var d=[],c=[],f=!1;function m(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var h=function(){function e(t,r){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,r,i;return t=e,(r=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;if(t.loading){if("number"===typeof r.delay)if(0===r.delay)this._state.pastDelay=!0;else{var n=this;this._delay=setTimeout((function(){n._update({pastDelay:!0})}),r.delay)}if("number"===typeof r.timeout){var i=this;this._timeout=setTimeout((function(){i._update({timedOut:!0})}),r.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=a({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&n(t.prototype,r),i&&n(t,i),e}();function p(e){return function(e,t){var r=function(){if(!i){var t=new h(e,n);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},n=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);n.suspense&&(n.lazy=u.default.lazy(n.loader));var i=null;if(!f&&!n.suspense){var o=n.webpack?n.webpack():n.modules;o&&c.push((function(e){var t=!0,n=!1,i=void 0;try{for(var a,u=o[Symbol.iterator]();!(t=(a=u.next()).done);t=!0){var s=a.value;if(-1!==e.indexOf(s))return r()}}catch(l){n=!0,i=l}finally{try{t||null==u.return||u.return()}finally{if(n)throw i}}}))}var d=n.suspense?function(e,t){return u.default.createElement(n.lazy,a({},e,{ref:t}))}:function(e,t){r();var a=u.default.useContext(l.LoadableContext),o=s.useSubscription(i);return u.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),a&&Array.isArray(n.modules)&&n.modules.forEach((function(e){a(e)})),u.default.useMemo((function(){return o.loading||o.error?u.default.createElement(n.loading,{isLoading:o.loading,pastDelay:o.pastDelay,timedOut:o.timedOut,error:o.error,retry:i.retry}):o.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(o.loaded),e):null}),[e,o])};return d.preload=function(){return!n.suspense&&r()},d.displayName="LoadableComponent",u.default.forwardRef(d)}(m,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}p.preloadAll=function(){return new Promise((function(e,t){v(d).then(e,t)}))},p.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return f=!0,t()};v(c,e).then(r,r)}))},window.__NEXT_PRELOADREADY=p.preloadReady;var y=p;t.default=y},5152:function(e,t,r){e.exports=r(90638)},90791:function(e,t,r){"use strict";var n=r(67294),i=r(45697),a=r.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,a=e.size,s=void 0===a?24:a,l=u(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("circle",{cx:"12",cy:"12",r:"10"}),n.createElement("polyline",{points:"12 6 12 12 16 14"}))}));s.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},s.displayName="Clock",t.Z=s},19589:function(e,t,r){"use strict";var n=r(67294),i=r(45697),a=r.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,a=e.size,s=void 0===a?24:a,l=u(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("rect",{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"}),n.createElement("path",{d:"M7 11V7a5 5 0 0 1 10 0v4"}))}));s.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},s.displayName="Lock",t.Z=s},41027:function(e,t,r){"use strict";var n=r(67294),i=r(45697),a=r.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,a=e.size,s=void 0===a?24:a,l=u(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("path",{d:"M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"}))}));s.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},s.displayName="ThumbsUp",t.Z=s},34588:function(e,t,r){"use strict";var n=r(67294),i=r(45697),a=r.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=(0,n.forwardRef)((function(e,t){var r=e.color,i=void 0===r?"currentColor":r,a=e.size,s=void 0===a?24:a,l=u(e,["color","size"]);return n.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),n.createElement("polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"}))}));s.propTypes={color:a().string,size:a().oneOfType([a().string,a().number])},s.displayName="Zap",t.Z=s}}]);