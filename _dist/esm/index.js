import*as e from"react";import t,{useState as n}from"react";var r=function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};"function"==typeof SuppressedError&&SuppressedError;var o,i="Button-module_button__18Bed",a=function(e){var n=e.children,o=e.className,a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}(e,["children","className"]);return t.createElement("button",r({className:"".concat(i," ").concat(null!=o?o:"")},a),n)},c={triggerButton:"Accordion-module_triggerButton__NXThU",title:"Accordion-module_title__-9-np",indicator:"Accordion-module_indicator__-V5wr",content:"Accordion-module_content__RyBzl"},l=function(e){var r=e.isOpen,o=e.onToggle,i=e.children,a=e.title,l=e.innerControl,s=void 0!==l&&l,u=n(!1),p=u[0],m=u[1],d=s?p:r;return t.createElement("div",{className:c.container},t.createElement("button",{onClick:function(){s?m((function(e){return!e})):null==o||o()},className:c.triggerButton},t.createElement("span",{className:c.title},a),t.createElement("span",{className:c.indicator},d?"-":"+")),d&&t.createElement("div",{className:c.content},i))};function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(null,arguments)}var u,p;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},m.apply(null,arguments)}var d,f;function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},h.apply(null,arguments)}var g=function(e){return function(n){return t.createElement(e,r({width:25,height:25},n))}},v=g((function(t){return e.createElement("svg",s({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},t),o||(o=e.createElement("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2.5,d:"m4.892 13.269 4.274 4.274L18.709 8"})))})),w=g((function(t){return e.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},t),u||(u=e.createElement("path",{stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M12 14v-1.5c0-.822 3.5-1 3.5-3.5 0-1.5-1.5-2.5-3.5-2.5-1.5 0-3 1-3 2.5"})),p||(p=e.createElement("path",{fill:"#000",d:"M13.227 16.954a1.227 1.227 0 1 1-2.454 0 1.227 1.227 0 0 1 2.454 0"})))})),O=g((function(t){return e.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"none",viewBox:"0 0 24 24"},t),d||(d=e.createElement("path",{fill:"#000",d:"M15 8.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"})),f||(f=e.createElement("path",{fill:"#000",stroke:"#000",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.63 20H5.947c-.402 0-.629-.441-.378-.755C6.684 17.848 9.29 15 12 15c2.727 0 5.063 2.886 6.027 4.273.22.317-.01.727-.396.727"})))}));export{l as Accordion,a as Button,v as CheckIcon,w as QuestionMarkIcon,O as UserIcon};
