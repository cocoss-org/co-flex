(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[214],{7494:function(e,t,n){"use strict";var r=this&&this.__extends||function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){if("function"!==typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0}),t.ChangeFlexNode=void 0;var o=function(e){function t(t,n){var r=e.call(this,t)||this;return r.onChange=n,r}return r(t,e),t.prototype.calculateLayout=function(){e.prototype.calculateLayout.call(this),this.afterCalculation()},t.prototype.afterCalculation=function(){this.onChange(this),this.commitedChildren.forEach((function(e){e instanceof t&&e.afterCalculation()}))},t}(n(2219).FlexNode);t.ChangeFlexNode=o},388:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&r(t,e,n);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useFlexNodeContext=t.FlexNodeContextProvider=void 0;var u=i(n(7378)),l=(0,u.createContext)(null);t.FlexNodeContextProvider=function(e){var t=e.children,n=e.context;return u.default.createElement(l.Provider,{value:n},t)},t.useFlexNodeContext=function(){var e=(0,u.useContext)(l);if(null==e)throw"unable to find flex context. Missing a FlexNodeContextProvider.";return e}},3349:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),o=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||r(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),o(n(7494),t),o(n(388),t),o(n(8955),t),o(n(7636),t),o(n(6377),t)},8955:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},o=this&&this.__values||function(e){var t="function"===typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"===typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")},i=this&&this.__read||function(e,t){var n="function"===typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(l){o={error:l}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u},u=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.useBindFlexNodeProperties=void 0;var l=n(7378);t.useBindFlexNodeProperties=function(e,t,n){var c=(0,l.useRef)({});(0,l.useEffect)((function(){var u,l,a,s;Object.freeze(n);var f=c.current;try{for(var d=o(Object.entries(n)),h=d.next();!h.done;h=d.next()){var p=i(h.value,2),v=p[0],y=p[1];y!=f[v]&&e.setProperty(v,y),delete f[v]}}catch(b){u={error:b}}finally{try{h&&!h.done&&(l=d.return)&&l.call(d)}finally{if(u)throw u.error}}try{for(var x=o(Object.entries(f)),g=x.next();!g.done;g=x.next()){v=i(g.value,1)[0];e.setProperty(v,void 0)}}catch(m){a={error:m}}finally{try{g&&!g.done&&(s=x.return)&&s.call(x)}finally{if(a)throw a.error}}c.current=r({},n),t()}),u([e,t],i(Object.entries(n).reduce((function(e,t){return e.concat(t)}),[])),!1))}},7636:function(e,t,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.useYogaNode=void 0;var o=n(7378),i=n(3349);t.useYogaNode=function(e,t,n){var u=(0,i.useFlexNodeContext)(),l=(0,o.useMemo)((function(){return new i.ChangeFlexNode(u.precision,n)}),[u.precision,n]);return(0,i.useBindFlexNodeProperties)(l,u.requestLayoutCalculation,e),(0,o.useEffect)((function(){return u.node.insertChild(l),u.requestLayoutCalculation(),function(){u.node.removeChild(l),u.requestLayoutCalculation()}}),[l,u]),(0,o.useEffect)((function(){l.index=t,u.requestLayoutCalculation()}),[t,l,u]),(0,o.useEffect)((function(){return l.destroy.bind(l)}),[l]),(0,o.useMemo)((function(){return r(r({},u),{node:l})}),[l,u])}},6377:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useYogaRootNode=void 0;var r=n(7378),o=n(3349);t.useYogaRootNode=function(e,t,n,i){void 0===n&&(n=10),void 0===i&&(i=.01);var u=(0,r.useMemo)((function(){return new o.ChangeFlexNode(i,t)}),[i,t]),l=(0,r.useRef)(!1),c=(0,r.useCallback)((function(){return l.current=!0}),[]);return(0,o.useBindFlexNodeProperties)(u,c,e),(0,r.useEffect)((function(){var e=function(){u.calculateLayout(),l.current=!1};e();var t=window.setInterval((function(){l.current&&e()}),1e3/n);return function(){return window.clearInterval(t)}}),[n,u]),(0,r.useMemo)((function(){return{node:u,precision:i,requestLayoutCalculation:c}}),[u,i])}},965:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gallery",function(){return n(3341)}])},3341:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},ContainerRoot:function(){return j},Container:function(){return _},VirtualizedContainer:function(){return O}});var r=n(4246),o=n(7378),i=n(1261),u=n(9073),l=n(3349),c=n(387);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){a(e,t,n[t])}))}return e}function f(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function d(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=[],r=!0,o=!1,i=void 0;try{for(var u,l=e[Symbol.iterator]();!(r=(u=l.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(c){o=!0,i=c}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var h=(0,o.createContext)(null),p=["https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg","https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9jdXN8ZW58MHx8MHx8&w=1000&q=80"],v=null==n.g.document?new Map:new Map(p.map((function(e){var t=document.createElement("img");return t.src=e,[e,t]})));function y(){var e=(0,c.useRouter)(),t=d(function(){var e=(0,o.useState)(null==n.g.window?[0,0]:[window.innerWidth,window.innerHeight]),t=e[0],r=e[1];return(0,o.useEffect)((function(){var e=function(){return r([window.innerWidth,window.innerHeight])};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),t}(),2),u=t[0],l=t[1];return e.isReady?(0,r.jsx)("div",{style:{background:"#fff",overflow:"hidden",top:0,right:0,left:0,bottom:0,position:"absolute"},children:(0,r.jsx)(i.VirtualBase,{children:(0,r.jsxs)(j,{width:u,height:l,flexDirection:"column",children:[(0,r.jsx)(g,{back:null!=e.query.url}),null==e.query.url?(0,r.jsx)(x,{}):(0,r.jsx)(m,{url:e.query.url})]})})}):null}function x(){return(0,r.jsx)(_,{flexDirection:"row",flexWrap:"wrap",flexGrow:1,children:p.map((function(e){return(0,r.jsx)(b,{url:e},e)}))})}function g(e){var t=e.back,n=(0,c.useRouter)();return(0,r.jsxs)(_,{height:60,width:"100%",flexDirection:"row",alignItems:"center",children:[t&&(0,r.jsx)(_,{marginLeft:20,index:0,width:24,height:24,content:(0,r.jsx)("img",{width:"100%",height:"100%",onClick:function(){return n.back()},className:"pointer",src:"/co-flex/back.svg"})}),(0,r.jsx)(_,{marginLeft:20,index:1,width:200,height:38,content:(0,r.jsx)("span",{style:{fontSize:26},className:"mb-1",children:"Gallery"})})]})}function b(e){var t=e.url,n=w(t),o=(0,c.useRouter)();return(0,r.jsx)(_,{id:t,content:(0,r.jsx)("img",{width:"100%",height:"100%",className:"pointer",onClick:function(){return o.push({query:{url:t}},void 0,{shallow:!0})},src:t}),marginBottom:20,marginLeft:20,marginRight:20,marginTop:20,width:Math.round(150*n),aspectRatio:n})}function m(e){var t=e.url,n=w(t);return(0,r.jsx)(_,{marginBottom:20,marginLeft:20,marginRight:20,marginTop:20,flexDirection:"row",justifyContent:"center",flexGrow:1,children:(0,r.jsx)(_,{flexShrink:1,id:t,content:(0,r.jsx)("img",{width:"100%",height:"100%",src:t}),aspectRatio:n})})}function w(e){var t=v.get(e),n=(0,o.useState)((null===t||void 0===t?void 0:t.complete)?(null===t||void 0===t?void 0:t.naturalWidth)/(null===t||void 0===t?void 0:t.naturalHeight):1),r=n[0],i=n[1];return(0,o.useEffect)((function(){if(null!=t&&!t.complete){var e=function(){return i(t.naturalWidth/t.naturalHeight)};return t.addEventListener("load",e),function(){return t.removeEventListener("load",e)}}}),[]),r}function j(e){var t=e.children,n=f(e,["children"]),i=(0,o.useState)({}),u=i[0],c=i[1],a=(0,l.useYogaRootNode)(n,(0,o.useCallback)((function(e){return c({width:e.getComputed("width"),height:e.getComputed("height"),left:e.getComputed("left"),top:e.getComputed("top")})}),[]),10,1);return(0,r.jsx)(l.FlexNodeContextProvider,{context:a,children:(0,r.jsx)(h.Provider,{value:u,children:t})})}function _(e){var t,n,u,c,a,d=e.id,p=e.children,v=e.index,y=e.content,x=f(e,["id","children","index","content"]),g=(0,o.useState)({}),b=g[0],m=g[1],w=(0,o.useContext)(h),j=(0,l.useYogaNode)(x,null!==v&&void 0!==v?v:0,(0,o.useCallback)((function(e){return m({width:e.getComputed("width"),height:e.getComputed("height"),left:e.getComputed("left"),top:e.getComputed("top")})}),[])),_=(0,o.useMemo)((function(){return s({},b,{zIndex:(null!==(t=w.zIndex)&&void 0!==t?t:0)+1,top:(null!==(n=w.top)&&void 0!==n?n:0)+(null!==(u=b.top)&&void 0!==u?u:0),left:(null!==(c=w.left)&&void 0!==c?c:0)+(null!==(a=b.left)&&void 0!==a?a:0),content:y})}),[w,b,y]);return(0,i.useVirtual)(O,_,v,d),(0,r.jsx)(l.FlexNodeContextProvider,{context:j,children:(0,r.jsx)(h.Provider,{value:_,children:p})})}function O(e){var t=e.destroy,n=e.controllerProps,i=(0,o.useRef)({}),l=(0,o.useMemo)((function(){return n.length>0&&null!=n[0].width&&(i.current=s({},n[0])),i.current}),[n]),c=l.zIndex,a=l.content,h=f(l,["zIndex","content"]),p=d((0,u.useSpring)(s({},h,{opacity:null!=h.width&&n.length>0?1:0,onRest:{opacity:function(e){0===e.value&&t()}}}),[h,n]),1)[0];return null==a?null:(0,r.jsx)(u.a.div,{style:s({position:"absolute",zIndex:c},p),children:a})}}},function(e){e.O(0,[13,298,73,261,774,888,179],(function(){return t=965,e(e.s=t);var t}));var t=e.O();_N_E=t}]);