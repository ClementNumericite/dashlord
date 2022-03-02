(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[319],{37434:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/trends",function(){return t(74650)}])},74650:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return y}});var l=t(85893),r=t(9008),u=t(67294),s=t(45697),d=t.n(s);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function i(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var n=(0,u.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,s=void 0===r?24:r,d=i(e,["color","size"]);return u.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),u.createElement("polyline",{points:"23 6 13.5 15.5 8.5 10.5 1 18"}),u.createElement("polyline",{points:"17 6 23 6 23 12"}))}));n.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},n.displayName="TrendingUp";var v=n;function T(){return(T=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,l,r=function(e,a){if(null==e)return{};var t,l,r={},u=Object.keys(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(l=0;l<u.length;l++)t=u[l],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var h=(0,u.forwardRef)((function(e,a){var t=e.color,l=void 0===t?"currentColor":t,r=e.size,s=void 0===r?24:r,d=c(e,["color","size"]);return u.createElement("svg",T({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:l,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},d),u.createElement("polyline",{points:"23 18 13.5 8.5 8.5 13.5 1 6"}),u.createElement("polyline",{points:"17 18 23 18 23 12"}))}));h.propTypes={color:d().string,size:d().oneOfType([d().string,d().number])},h.displayName="TrendingDown";var Z=h,p=t(74041),g=t(18121),f=t(49384),_={testsslGrade:{title:"SSL"},codescanGrade:{title:"Codescan grade"},dependabotGrade:{title:"Dependabot grade"},httpGrade:{title:"HTTP observatory"},lighthouse_performance:{treshold:.1,title:"Lighthouse Performance"},lighthouse_seo:{treshold:.1,title:"Lighthouse SEO"},lighthouse_pwa:{treshold:.1,title:"Lighthouse PWA"},lighthouse_accessibility:{title:"Lighthouse accessibility"},"lighthouse_best-practices":{treshold:.1,title:"Lighthouse best practices"},nmapGrade:{title:"NMAP grade"},nmapOpenPortsGrade:{title:"NMAP open ports grade"},trackersCount:{title:"Trackers count",reverse:!0},cookiesCount:{title:"Cookies count",reverse:!0},uptime:{treshold:1,title:"uptime"},apdex:{treshold:.05,title:"apDex"},"declaration-a11y":{title:"D\xe9claration a11y"},trivyGrade:{title:"Trivy grade"}},m=[{name:"trend",label:"Trend",render:function(e){return function(e,a){var t=_[e],l=a[0],r=a[a.length-1];return e.match(/Grade$/)||"declaration-a11y"===e?(0,f.BE)(r)-(0,f.BE)(l):t.reverse?l-r:r-l}(e.key,e.values)>0?(0,l.jsx)(v,{size:40,style:{stroke:"var(--success)",marginRight:10}}):(0,l.jsx)(Z,{size:40,style:{stroke:"var(--error)",marginRight:10}})}},{name:"outil",label:"Outil",render:function(e){return _[e.key].title}},{name:"evolution",label:"Evolution",render:function(e){return e.values.map((function(e){return isNaN(e)?e:Math.floor(1e4*e)/1e4})).filter((function(e,a,t){return 0===a||a===t.length-1})).join(" => ")}}],b=function(e){var a=e.trends,t=Object.keys(a);return t.sort(),(0,l.jsxs)("div",{children:[(0,l.jsx)("br",{}),(0,l.jsx)("h3",{children:"Evolutions sur les 30 derniers jours"}),(0,l.jsx)("br",{}),t.map((function(e){var t=function(e){var a={};return Object.keys(e).filter((function(e){return e in _})).forEach((function(t){var l=e[t].map((function(e){return e.date,e.value}));if(l.length>1){var r=l[0],u=l[l.length-1],s=_[t].treshold;(!s||Math.abs(r-u)>(s||0))&&r!==u&&(a[t]=[r,u])}})),a}(a[e]);return Object.keys(t).length?(0,l.jsx)(g.s,{title:(0,f.p5)(e),url:"/url/".concat(encodeURIComponent((0,f.N0)(e))),children:(0,l.jsx)(p.Table,{columns:m,data:Object.keys(t).map((function(e){return{key:e,values:t[e]}})),rowKey:"key"})},e):null}))]})},G=JSON.parse('{"https://www.fabrique.social.gouv.fr":{"404":[{"date":"2021-09-06T15:38:08.000Z","value":5},{"date":"2021-10-17T00:54:36.000Z","value":6},{"date":"2021-11-28T00:59:23.000Z","value":7},{"date":"2021-12-12T01:00:52.000Z","value":8}],"httpGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A+"},{"date":"2022-02-23T15:33:59.000Z","value":"B"}],"dependabotGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"F"},{"date":"2021-06-14T10:39:19.000Z","value":"D"}],"dependabotCount":[{"date":"2021-05-31T09:35:12.000Z","value":6},{"date":"2021-06-14T10:39:19.000Z","value":7},{"date":"2021-06-29T22:27:16.000Z","value":8},{"date":"2021-09-02T10:35:57.000Z","value":4},{"date":"2021-10-17T00:54:36.000Z","value":6},{"date":"2021-12-12T01:00:52.000Z","value":7},{"date":"2021-12-26T01:01:17.000Z","value":4},{"date":"2022-01-09T01:03:17.000Z","value":5},{"date":"2022-01-16T01:03:41.000Z","value":6},{"date":"2022-01-23T00:56:13.000Z","value":9},{"date":"2022-01-30T00:56:33.000Z","value":8}],"testsslGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"},{"date":"2021-06-14T10:39:19.000Z","value":"B"}],"cookiesCount":[{"date":"2021-05-31T09:35:12.000Z","value":0},{"date":"2021-06-14T10:39:19.000Z","value":2}],"trackersGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"trackersCount":[{"date":"2021-05-31T09:35:12.000Z","value":0}],"lighthouse_performance":[{"date":"2021-05-31T09:35:12.000Z","value":0.5},{"date":"2021-09-02T10:35:57.000Z","value":0.45},{"date":"2021-11-28T00:59:23.000Z","value":0.4},{"date":"2021-12-12T01:00:52.000Z","value":0.35}],"lighthouse_performanceGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2021-05-31T09:35:12.000Z","value":0.92},{"date":"2021-06-14T20:16:26.000Z","value":0.93},{"date":"2021-09-02T10:35:57.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-05-31T09:35:12.000Z","value":0.8},{"date":"2021-06-14T10:39:19.000Z","value":0.93}],"lighthouse_best-practicesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"},{"date":"2021-06-14T10:39:19.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-05-31T09:35:12.000Z","value":0.83},{"date":"2021-09-06T15:38:08.000Z","value":0.9}],"lighthouse_seoGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"},{"date":"2021-09-06T15:38:08.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-05-31T09:35:12.000Z","value":0.42}],"lighthouse_pwaGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"D"}],"statsGrade":[{"date":"2021-06-29T22:27:16.000Z","value":"A"},{"date":"2021-09-06T15:38:08.000Z","value":"F"}],"nmapGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-10-17T00:54:36.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-17T00:54:36.000Z","value":false},{"date":"2021-11-28T00:59:23.000Z","value":true},{"date":"2021-12-12T01:00:52.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-17T00:54:36.000Z","value":"2021-12-26T11:59:00.000Z"},{"date":"2021-12-12T01:00:52.000Z","value":"2022-03-04T16:49:00.000Z"},{"date":"2021-12-26T01:01:17.000Z","value":"2022-03-20T08:22:00.000Z"},{"date":"2022-02-20T01:29:49.000Z","value":"2022-05-19T07:23:00.000Z"},{"date":"2022-02-27T01:33:52.000Z","value":"2022-05-25T17:41:00.000Z"}],"declaration-a11y":[{"date":"2022-02-10T09:41:58.000Z","value":"C"}]},"https://beta.gouv.fr":{"404":[{"date":"2021-09-06T15:38:08.000Z","value":2},{"date":"2021-12-26T01:01:17.000Z","value":4},{"date":"2022-01-02T01:00:55.000Z","value":2},{"date":"2022-01-09T01:03:17.000Z","value":25},{"date":"2022-01-16T01:03:41.000Z","value":3},{"date":"2022-01-23T00:56:13.000Z","value":8},{"date":"2022-01-30T00:56:33.000Z","value":3},{"date":"2022-02-13T00:58:55.000Z","value":7},{"date":"2022-02-17T13:53:36.000Z","value":4},{"date":"2022-02-23T18:29:34.000Z","value":10},{"date":"2022-02-24T09:25:36.000Z","value":4},{"date":"2022-03-02T13:42:39.000Z","value":8},{"date":"2022-03-02T14:02:38.000Z","value":4},{"date":"2022-03-02T15:21:57.107Z","value":28}],"httpGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"D"}],"testsslGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A+"}],"cookiesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"}],"cookiesCount":[{"date":"2021-05-31T09:35:12.000Z","value":2}],"trackersGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"C"}],"trackersCount":[{"date":"2021-05-31T09:35:12.000Z","value":6},{"date":"2021-09-02T10:35:57.000Z","value":7},{"date":"2021-11-21T01:03:00.000Z","value":6}],"lighthouse_performance":[{"date":"2021-05-31T09:35:12.000Z","value":1}],"lighthouse_performanceGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2021-05-31T09:35:12.000Z","value":0.89},{"date":"2022-02-10T09:41:58.000Z","value":0.88}],"lighthouse_accessibilityGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2021-05-31T09:35:12.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_seo":[{"date":"2021-05-31T09:35:12.000Z","value":1},{"date":"2021-09-02T10:35:57.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2021-05-31T09:35:12.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2021-05-31T09:35:12.000Z","value":"B"}],"statsGrade":[{"date":"2021-06-29T22:27:16.000Z","value":"A"}],"nmapGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2021-10-17T00:54:36.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2021-10-17T00:54:36.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2021-10-17T00:54:36.000Z","value":false}],"testsslExpireDate":[{"date":"2021-10-17T00:54:36.000Z","value":"2021-11-24T13:00:00.000Z"},{"date":"2021-10-31T01:04:40.000Z","value":"2022-01-23T13:00:00.000Z"},{"date":"2021-12-26T01:01:17.000Z","value":"2022-03-24T13:00:00.000Z"},{"date":"2022-02-23T15:33:59.000Z","value":"2022-05-23T13:00:00.000Z"}],"declaration-a11y":[{"date":"2022-02-10T09:41:58.000Z","value":"C"}]},"https://www.free.fr":{"404":[{"date":"2022-02-21T17:39:13.000Z","value":"A+"}],"httpGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"C"}],"testsslExpireSoon":[{"date":"2022-02-21T17:39:13.000Z","value":false}],"testsslExpireDate":[{"date":"2022-02-21T17:39:13.000Z","value":"2022-07-15T23:59:00.000Z"}],"testsslGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"B"}],"cookiesGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"B"}],"cookiesCount":[{"date":"2022-02-21T17:39:13.000Z","value":2}],"trackersGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"C"}],"trackersCount":[{"date":"2022-02-21T17:39:13.000Z","value":6}],"lighthouse_performance":[{"date":"2022-02-21T17:39:13.000Z","value":0.4982715606689453}],"lighthouse_performanceGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-02-21T17:39:13.000Z","value":0.92}],"lighthouse_accessibilityGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-02-21T17:39:13.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-02-21T17:39:13.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-02-21T17:39:13.000Z","value":0.75}],"lighthouse_pwaGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-02-21T17:39:13.000Z","value":"F"}]},"https://www.lemonde.fr":{"404":[{"date":"2022-02-21T17:39:13.000Z","value":"A+"}],"httpGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"F"}],"nmapGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-02-21T17:39:13.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-02-21T17:39:13.000Z","value":false}],"testsslExpireDate":[{"date":"2022-02-21T17:39:13.000Z","value":"2022-12-28T19:46:00.000Z"}],"testsslGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"C"}],"cookiesCount":[{"date":"2022-02-21T17:39:13.000Z","value":4}],"trackersGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"F"}],"trackersCount":[{"date":"2022-02-21T17:39:13.000Z","value":18}],"lighthouse_performance":[{"date":"2022-02-21T17:39:13.000Z","value":0.5}],"lighthouse_performanceGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"D"}],"lighthouse_accessibility":[{"date":"2022-02-21T17:39:13.000Z","value":0.89}],"lighthouse_accessibilityGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-02-21T17:39:13.000Z","value":1}],"lighthouse_best-practicesGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-02-21T17:39:13.000Z","value":0.92}],"lighthouse_seoGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-02-21T17:39:13.000Z","value":0.92}],"lighthouse_pwaGrade":[{"date":"2022-02-21T17:39:13.000Z","value":"A"}],"declaration-a11y":[{"date":"2022-02-21T17:39:13.000Z","value":"F"}]},"https://emjpm.fabrique.social.gouv.fr/":{"404":[{"date":"2022-02-23T18:07:36.000Z","value":"A+"}],"httpGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"B+"}],"nmapGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-02-23T18:07:36.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-02-23T18:07:36.000Z","value":false}],"testsslExpireDate":[{"date":"2022-02-23T18:07:36.000Z","value":"2022-10-11T21:59:00.000Z"}],"testsslGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A"}],"cookiesCount":[{"date":"2022-02-23T18:07:36.000Z","value":0}],"trackersGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"B"}],"trackersCount":[{"date":"2022-02-23T18:07:36.000Z","value":1}],"lighthouse_performance":[{"date":"2022-02-23T18:07:36.000Z","value":0.992799949645996}],"lighthouse_performanceGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-02-23T18:07:36.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-02-23T18:07:36.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-02-23T18:07:36.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-02-23T18:07:36.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2022-02-23T18:07:36.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-02-23T18:07:36.000Z","value":"C"}]},"https://emjpm.fabrique.social.gouv.fr":{"404":[{"date":"2022-02-23T18:29:34.000Z","value":"A+"}],"httpGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"B+"}],"nmapGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A"}],"nmapOpenPortsCount":[{"date":"2022-02-23T18:29:34.000Z","value":2}],"nmapOpenPortsGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A"}],"testsslExpireSoon":[{"date":"2022-02-23T18:29:34.000Z","value":false}],"testsslExpireDate":[{"date":"2022-02-23T18:29:34.000Z","value":"2022-10-11T21:59:00.000Z"}],"testsslGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A+"}],"cookiesGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A"}],"cookiesCount":[{"date":"2022-02-23T18:29:34.000Z","value":0}],"trackersGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"B"}],"trackersCount":[{"date":"2022-02-23T18:29:34.000Z","value":1}],"lighthouse_performance":[{"date":"2022-02-23T18:29:34.000Z","value":0.992793083190918},{"date":"2022-02-24T09:25:36.000Z","value":0.9928033828735352},{"date":"2022-02-27T01:33:52.000Z","value":0.9928003311157226},{"date":"2022-03-02T13:22:25.000Z","value":0.9928119659423829},{"date":"2022-03-02T13:42:39.000Z","value":0.9928050994873047},{"date":"2022-03-02T14:02:38.000Z","value":0.9927982330322266},{"date":"2022-03-02T14:31:26.000Z","value":0.9928016662597656},{"date":"2022-03-02T14:40:03.000Z","value":0.9928033828735352},{"date":"2022-03-02T14:53:29.000Z","value":0.9927982330322266},{"date":"2022-03-02T15:21:57.107Z","value":0.9928119659423829}],"lighthouse_performanceGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A"}],"lighthouse_accessibility":[{"date":"2022-02-23T18:29:34.000Z","value":0.96}],"lighthouse_accessibilityGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A"}],"lighthouse_best-practices":[{"date":"2022-02-23T18:29:34.000Z","value":0.87}],"lighthouse_best-practicesGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A"}],"lighthouse_seo":[{"date":"2022-02-23T18:29:34.000Z","value":1}],"lighthouse_seoGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"A"}],"lighthouse_pwa":[{"date":"2022-02-23T18:29:34.000Z","value":0.67}],"lighthouse_pwaGrade":[{"date":"2022-02-23T18:29:34.000Z","value":"B"}],"declaration-a11y":[{"date":"2022-02-23T18:29:34.000Z","value":"C"}]}}'),y=function(){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.default,{children:(0,l.jsx)("title",{children:"DashLord - evolutions"})}),(0,l.jsx)(b,{trends:G})]})}},18121:function(e,a,t){"use strict";t.d(a,{s:function(){return T}});var l=t(85893),r=(t(67294),t(94184)),u=t.n(r),s=t(79223),d=t(73973),o=t(83206),i=t(41664),n=t(75670),v=t.n(n),T=function(e){var a=e.title,t=e.children,r=e.info,n=e.url,T=e.urlText,c=void 0===T?"":T,h=e.className,Z=e.isExternal,p=void 0!==Z&&Z;return(0,l.jsxs)("div",{className:u()(v().container,h),children:[(0,l.jsxs)("div",{className:v().banner,children:[(0,l.jsx)("h5",{className:v().mainTitle,children:a}),r&&(0,l.jsx)(s.Z,{overlay:r,children:(0,l.jsx)(d.Z,{size:20,style:{marginLeft:5,cursor:"pointer"}})}),n&&(p?(0,l.jsx)("a",{style:{float:"right"},href:n,target:"_blank",rel:"noreferrer noopener",children:c}):(0,l.jsx)(i.default,{prefetch:!1,href:n,children:(0,l.jsxs)("a",{style:{float:"right"},children:[c,(0,l.jsx)(o.Z,{})]})}))]}),(0,l.jsx)("div",{className:v().body,children:t})]})}},75670:function(e){e.exports={container:"panel_container__s3lQL",banner:"panel_banner__IDWUZ",mainTitle:"panel_mainTitle__N5MWp",body:"panel_body___c3aS"}}},function(e){e.O(0,[241,774,888,179],(function(){return a=37434,e(e.s=a);var a}));var a=e.O();_N_E=a}]);