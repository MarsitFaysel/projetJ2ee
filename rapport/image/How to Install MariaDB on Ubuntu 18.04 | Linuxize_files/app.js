!function(e){function t(t){for(var a,s,c=t[0],r=t[1],l=t[2],u=0,f=[];u<c.length;u++)s=c[u],o[s]&&f.push(o[s][0]),o[s]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(d&&d(t);f.length;)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var r=n[c];0!==o[r]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={0:0},i=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window.webpackJsonp=window.webpackJsonp||[],r=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=r;i.push([7,1]),n()}([,,,function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;t.default=!0},function(e,t,n){"use strict";t.__esModule=!0,t.warn=t.log=t.info=t.error=t.clear=void 0;var a,o=(a=n(3))&&a.__esModule?a:{default:a};var i=function(e){if(!o.default&&console&&console[e]){for(var t,n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];(t=console)[e].apply(t,a)}};t.clear=function(){o.default||console.clear()};t.error=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,["error"].concat(t))};t.info=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,["info"].concat(t))};t.log=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,["log"].concat(t))};t.warn=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return i.apply(void 0,["warn"].concat(t))}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){var a=document.head||document.getElementsByTagName("head")[0],o=document.createElement("script");"function"==typeof t&&(n=t,t={});o.type=t.type||"text/javascript",o.charset=t.charset||"utf8",o.async=!("async"in t&&!t.async),o.id=t.id||"",o.src=e,n&&(o.onload=function(){o.onerror=o.onload=null,n(null,o)},o.onerror=function(){o.onerror=o.onload=null,n(new Error("Failed to load "+e),o)});a.appendChild(o)}},,function(e,t,n){"use strict";n(8),n(10);var a=y(n(27)),o=y(n(28)),i=y(n(3)),s=y(n(29)),c=n(4),r=y(n(30)),l=y(n(31)),d=y(n(33)),u=y(n(34)),f=y(n(35)),v=y(n(36)),h=y(n(38)),m=y(n(39)),p=y(n(41)),g=y(n(42)),w=y(n(43));function y(e){return e&&e.__esModule?e:{default:e}}(0,s.default)(function(e){(0,f.default)(),(0,h.default)(),(0,l.default)(),i.default&&((0,r.default)(),(0,d.default)()),(0,o.default)('[data-action="zoom"]',{margin:24}),(0,u.default)(),new a.default('a[href*="#"]'),(0,v.default)(),(0,m.default)(),new p.default([".single-post"]),(0,g.default)(),(0,w.default)(),(0,c.info)("Event: "+e.type,"Datestamp: "+this.date)},{date:new Date})},function(e,t,n){},,function(e,t,n){"use strict";n(11),n(12),n(13),n(14),n(15),n(16),n(17),n(18),n(19),n(20),n(21),n(22),n(23),n(24),n(25),n(26)},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"logo",use:"logo-usage",viewBox:"0 0 50 50",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" id="logo">\n    <path d="M25 1L4 13v24l21 12 21-12V13zm0 4.607l17 9.713v19.36l-17 9.713L8 34.68V15.32zm-1 2.875l-14 8v16.032l5.912-3.371.938 1.638-5.827 3.32L25 42.09l13.977-7.988-5.827-3.32.938-1.64L40 32.515V16.482l-14-8-.17 16.494h-2z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"twitter",use:"twitter-usage",viewBox:"0 0 18 18",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="twitter">\n    <path d="M16.5,4.3c-0.6,0.2-1.1,0.4-1.8,0.5c0.6-0.4,1.1-1,1.4-1.7c-0.6,0.4-1.3,0.6-2,0.8c-0.6-0.6-1.4-1-2.2-1 c-1.7,0-3.1,1.4-3.1,3.1c0,0.2,0,0.5,0.1,0.7C6.3,6.5,4.1,5.3,2.5,3.4C2.3,3.9,2.1,4.4,2.1,5c0,1.1,0.5,2,1.4,2.6 c-0.5,0-1-0.2-1.4-0.4c0,0,0,0,0,0c0,1.5,1.1,2.8,2.5,3.1c-0.3,0.1-0.5,0.1-0.8,0.1c-0.2,0-0.4,0-0.6-0.1c0.4,1.2,1.5,2.1,2.9,2.2 c-1.1,0.8-2.4,1.3-3.8,1.3c-0.2,0-0.5,0-0.7,0c1.4,0.9,3,1.4,4.7,1.4c5.7,0,8.8-4.7,8.8-8.9c0-0.1,0-0.3,0-0.4 C15.6,5.5,16.1,4.9,16.5,4.3" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"pinterest",use:"pinterest-usage",viewBox:"0 0 30 30",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" id="pinterest">\n  <path d="M15 3C8.373 3 3 8.373 3 15c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.406.042-3.442.218-.936 1.407-5.965 1.407-5.965s-.359-.719-.359-1.781c0-1.669.967-2.914 2.171-2.914 1.024 0 1.518.769 1.518 1.69 0 1.03-.655 2.569-.994 3.995-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.208 0 1.031.397 2.137.893 2.739a.359.359 0 0 1 .083.344c-.091.379-.293 1.194-.333 1.361-.052.22-.174.266-.401.16-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.966 7.398 6.931 0 4.136-2.608 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378 0 0-.602 2.291-.748 2.853-.271 1.042-1.002 2.349-1.492 3.146C12.57 26.812 13.763 27 15 27c6.627 0 12-5.373 12-12S21.627 3 15 3z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"facebook",use:"facebook-usage",viewBox:"0 0 18 18",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="facebook">\n    <path d="M15.7,1.5H2.3c-0.5,0-0.8,0.4-0.8,0.8v13.3c0,0.5,0.4,0.8,0.8,0.8h7.2v-5.8h-2V8.4h2V6.8c0-1.9,1.2-3,2.9-3 c0.8,0,1.5,0.1,1.7,0.1v2l-1.2,0c-0.9,0-1.1,0.4-1.1,1.1v1.4h2.2l-0.3,2.3h-1.9v5.8h3.8c0.5,0,0.8-0.4,0.8-0.8V2.3 C16.5,1.9,16.1,1.5,15.7,1.5z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"rss",use:"rss-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="rss">\n  <path d="M0 0h24v24H0z" fill="none" />\n  <circle cx="6.18" cy="17.82" r="2.18" />\n  <path d="M4 4.44v2.83c7.03 0 12.73 5.7 12.73 12.73h2.83c0-8.59-6.97-15.56-15.56-15.56zm0 5.66v2.83c3.9 0 7.07 3.17 7.07 7.07h2.83c0-5.47-4.43-9.9-9.9-9.9z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"link",use:"link-usage",viewBox:"0 0 26 26",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 26" id="link">\n    <g><path d="M19.625.156c-1.629.078-3.195.79-4.406 2l-4.75 4.75c.746-.75 3.515-.234 4.187.438l2.875-2.875c.637-.637 1.434-1.028 2.25-1.063a2.62 2.62 0 0 1 2.032.781 2.65 2.65 0 0 1 .78 1.907c0 .855-.39 1.707-1.062 2.375l-5 5.031c-1.258 1.258-3.172 1.36-4.281.25a1.642 1.642 0 0 0-2.313 0 1.639 1.639 0 0 0 0 2.313 5.873 5.873 0 0 0 4.188 1.718c1.672 0 3.379-.683 4.688-2l5.03-5c1.278-1.273 2-2.976 2-4.687 0-1.59-.6-3.102-1.718-4.219C22.93.68 21.325.078 19.625.156zm-7.75 8.063c-1.672 0-3.406.687-4.719 2l-5 5c-1.277 1.273-2 2.976-2 4.687 0 1.59.602 3.102 1.719 4.219 1.195 1.195 2.8 1.797 4.5 1.719 1.629-.078 3.195-.79 4.406-2l4.75-4.75c-.75.75-3.515.234-4.187-.438l-2.875 2.875c-.637.637-1.434 1.024-2.25 1.063a2.615 2.615 0 0 1-2.032-.782 2.656 2.656 0 0 1-.78-1.906c0-.855.39-1.707 1.062-2.375l5-5.031c1.258-1.258 3.172-1.355 4.281-.25.637.637 1.68.637 2.313 0a1.639 1.639 0 0 0 0-2.313 5.88 5.88 0 0 0-4.188-1.718z" /></g>\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"arrow-left",use:"arrow-left-usage",viewBox:"0 0 40 40",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="arrow-left">\n    <g><path d="m33.4 18.4v3.2h-20.4l9.3 9.4-2.3 2.4-13.4-13.4 13.4-13.4 2.3 2.4-9.3 9.4h20.4z" /></g>\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"arrow-right",use:"arrow-right-usage",viewBox:"0 0 40 40",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" id="arrow-right">\n    <g><path d="m20 6.6l13.4 13.4-13.4 13.4-2.3-2.4 9.3-9.4h-20.4v-3.2h20.4l-9.3-9.4z" /></g>\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"three-dots",use:"three-dots-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="three-dots">\n  <path d="M 5 10 C 3.894531 10 3 10.894531 3 12 C 3 13.105469 3.894531 14 5 14 C 6.105469 14 7 13.105469 7 12 C 7 10.894531 6.105469 10 5 10 Z M 12 10 C 10.894531 10 10 10.894531 10 12 C 10 13.105469 10.894531 14 12 14 C 13.105469 14 14 13.105469 14 12 C 14 10.894531 13.105469 10 12 10 Z M 19 10 C 17.894531 10 17 10.894531 17 12 C 17 13.105469 17.894531 14 19 14 C 20.105469 14 21 13.105469 21 12 C 21 10.894531 20.105469 10 19 10 Z " />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"gplus",use:"gplus-usage",viewBox:"0 0 18 18",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="gplus">\n    <path d="M6.4,8.1v2h2.8c-0.2,1.2-1.3,2.1-2.8,2.1c-1.7,0-3.1-1.5-3.1-3.2s1.4-3.2,3.1-3.2c0.8,0,1.5,0.3,2,0.8v0 l1.5-1.5C9,4.3,7.8,3.8,6.4,3.8C3.5,3.8,1.1,6.1,1.1,9s2.4,5.2,5.2,5.2c3,0,5-2.1,5-5.1c0-0.4,0-0.7-0.1-1.1H6.4z" />\n    <polygon points="15.4,8.2 15.4,6.8 14.2,6.8 14.2,8.2 12.8,8.2 12.8,9.4 14.2,9.4 14.2,10.9 15.4,10.9 15.4,9.4 16.9,9.4 16.9,8.2" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"hacker-news",use:"hacker-news-usage",viewBox:"0 0 24 24",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="hacker-news">\n  <path d="M2 2v20h20V2zm2 2h16v16H4zm1 1v14h14V5zm2 2h2.563L12 10.063 14.438 7H17l-4 5v5h-2v-5z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"email",use:"email-usage",viewBox:"0 0 18 18",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" id="email">\n    <path d="M9,8.2L3,4.5h12L9,8.2z M15,13.5H3V6l6,3.8L15,6V13.5z M15,3H3C2.2,3,1.5,3.7,1.5,4.5l0,9C1.5,14.3,2.2,15,3,15 h12c0.8,0,1.5-0.7,1.5-1.5v-9C16.5,3.7,15.8,3,15,3z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"exclamation",use:"exclamation-usage",viewBox:"0 0 20 20",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" id="exclamation">\n    <path d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10zm0-2c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm-.5-5h1c.276 0 .5.224.5.5v1c0 .276-.224.5-.5.5h-1c-.276 0-.5-.224-.5-.5v-1c0-.276.224-.5.5-.5zm0-8h1c.276 0 .5.224.5.5V8l-.5 3-1 .5L9 8V5.5c0-.276.224-.5.5-.5z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"search",use:"search-usage",viewBox:"0 0 24 22",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 22" id="search">\n    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"close",use:"close-usage",viewBox:"0 0 32 32",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" id="close">\n    <path d="M 16 3 C 8.832031 3 3 8.832031 3 16 C 3 23.167969 8.832031 29 16 29 C 23.167969 29 29 23.167969 29 16 C 29 8.832031 23.167969 3 16 3 Z M 16 5 C 22.085938 5 27 9.914063 27 16 C 27 22.085938 22.085938 27 16 27 C 9.914063 27 5 22.085938 5 16 C 5 9.914063 9.914063 5 16 5 Z M 12.21875 10.78125 L 10.78125 12.21875 L 14.5625 16 L 10.78125 19.78125 L 12.21875 21.21875 L 16 17.4375 L 19.78125 21.21875 L 21.21875 19.78125 L 17.4375 16 L 21.21875 12.21875 L 19.78125 10.78125 L 16 14.5625 Z " />\n</symbol>'});s.a.add(c);t.default=c},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(1),s=n.n(i),c=new o.a({id:"search-by-algolia",use:"search-by-algolia-usage",viewBox:"0 0 130 21",content:'<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130 21" id="search-by-algolia">\n  <path fill-rule="evenodd" d="M96.667 15.57c0 1.719-.44 2.974-1.327 3.773-.887.799-2.24 1.197-4.066 1.197-.666 0-2.051-.129-3.159-.373l.408-1.997c.925.193 2.15.245 2.79.245 1.017 0 1.741-.206 2.175-.618.433-.412.647-1.023.647-1.835v-.413a7.533 7.533 0 0 1-.99.374c-.408.123-.88.186-1.411.186-.7 0-1.333-.11-1.91-.328a4 4 0 0 1-1.482-.966 4.424 4.424 0 0 1-.958-1.596c-.227-.637-.343-1.778-.343-2.615 0-.785.123-1.77.363-2.427a4.638 4.638 0 0 1 1.068-1.694c.466-.47 1.035-.83 1.703-1.094a6.276 6.276 0 0 1 2.299-.431c.822 0 1.58.103 2.317.225a18.7 18.7 0 0 1 1.877.393v9.993h-.001zm-7.037-4.971c0 1.055.233 2.227.7 2.717.466.489 1.068.733 1.806.733.402 0 .783-.057 1.139-.167.356-.11.64-.24.867-.393V7.237c-.18-.039-.938-.192-1.67-.212-.919-.026-1.617.347-2.11.946-.486.6-.732 1.649-.732 2.628zm19.051 0a6.07 6.07 0 0 1-.376 2.195 5.186 5.186 0 0 1-1.068 1.797c-.46.496-1.01.881-1.657 1.152-.648.27-1.644.425-2.143.425-.498-.005-1.489-.147-2.13-.425a4.831 4.831 0 0 1-1.65-1.152 5.302 5.302 0 0 1-1.074-1.797 5.953 5.953 0 0 1-.39-2.195c0-.85.118-1.668.377-2.363a5.233 5.233 0 0 1 1.087-1.783 4.855 4.855 0 0 1 1.657-1.147c.64-.27 1.346-.4 2.11-.4.764 0 1.47.136 2.117.4.648.271 1.204.65 1.657 1.147.46.496.815 1.088 1.074 1.783.272.695.408 1.513.408 2.363h.001zm-2.59.005c0-1.088-.24-1.996-.705-2.627-.465-.637-1.12-.952-1.954-.952-.836 0-1.49.315-1.955.952-.466.637-.693 1.539-.693 2.627 0 1.102.233 1.842.7 2.48.466.644 1.12.96 1.955.96s1.489-.322 1.954-.96c.466-.644.7-1.378.7-2.48h-.001zm8.229 5.563c-4.15.02-4.15-3.335-4.15-3.869L110.164.399 112.696 0v11.822c0 .302 0 2.222 1.625 2.227v2.118h-.001zm4.46 0h-2.545V5.3l2.545-.4v11.268zM117.505 3.71c.848 0 1.54-.684 1.54-1.526a1.53 1.53 0 0 0-1.54-1.526 1.53 1.53 0 0 0-1.541 1.526c0 .844.692 1.526 1.54 1.526zm7.6 1.197c.835 0 1.541.103 2.11.31.57.205 1.03.496 1.367.862.337.368.575.869.718 1.397.15.528.22 1.107.22 1.744v6.478c-.389.084-.977.18-1.767.297-.79.115-1.677.173-2.66.173a8.07 8.07 0 0 1-1.793-.186 3.797 3.797 0 0 1-1.392-.6 2.901 2.901 0 0 1-.9-1.068c-.213-.437-.323-1.055-.323-1.7 0-.618.123-1.01.363-1.435.246-.426.575-.773.99-1.044.42-.27.9-.463 1.45-.579a8.359 8.359 0 0 1 1.722-.174c.279 0 .57.02.88.052.311.032.635.09.985.174v-.412c0-.29-.032-.567-.104-.824a1.756 1.756 0 0 0-.363-.69 1.694 1.694 0 0 0-.686-.462 2.997 2.997 0 0 0-1.082-.193c-.582 0-1.113.07-1.599.155a7.43 7.43 0 0 0-1.191.29l-.304-2.068c.317-.11.79-.218 1.398-.328.609-.11 1.262-.168 1.962-.168l-.001-.001zm.214 9.136c.776 0 1.353-.045 1.754-.123v-2.562a6.024 6.024 0 0 0-1.49-.187c-.278 0-.563.02-.848.064a2.561 2.561 0 0 0-.77.226 1.38 1.38 0 0 0-.551.463c-.143.2-.207.316-.207.618 0 .593.207.934.583 1.16.381.231.886.341 1.528.341zM75.33 4.971c.836 0 1.542.103 2.111.31.57.205 1.03.496 1.366.862.343.374.576.869.719 1.397a6.4 6.4 0 0 1 .22 1.744v6.478c-.39.084-.978.18-1.767.297-.79.115-1.677.173-2.66.173a8.07 8.07 0 0 1-1.793-.186 3.797 3.797 0 0 1-1.392-.6 2.901 2.901 0 0 1-.9-1.068c-.214-.437-.324-1.055-.324-1.7 0-.618.123-1.01.363-1.435.246-.426.576-.773.99-1.044.421-.27.9-.463 1.45-.579a8.359 8.359 0 0 1 1.723-.174c.279 0 .57.02.88.052.304.032.635.09.985.174V9.26c0-.29-.032-.567-.104-.824a1.756 1.756 0 0 0-.363-.69 1.694 1.694 0 0 0-.687-.462 2.997 2.997 0 0 0-1.081-.193 9.17 9.17 0 0 0-1.6.155 7.43 7.43 0 0 0-1.19.29l-.304-2.068c.316-.11.79-.218 1.398-.328a10.507 10.507 0 0 1 1.962-.168l-.002-.001zm.22 9.142c.777 0 1.353-.045 1.754-.123v-2.562a6.024 6.024 0 0 0-1.49-.187c-.278 0-.563.02-.848.064a2.561 2.561 0 0 0-.77.226 1.38 1.38 0 0 0-.55.463c-.144.2-.208.316-.208.618 0 .592.207.934.583 1.16.376.225.886.341 1.528.341h.001zm10.26 2.054c-4.149.02-4.149-3.335-4.149-3.869L81.657.399 84.188 0v11.822c0 .302 0 2.222 1.625 2.227v2.118h-.001zM6.524 12.713c0 .906-.328 1.617-.984 2.133-.654.515-1.558.774-2.71.774-1.153 0-2.096-.178-2.83-.536v-1.576c.464.219.958.39 1.48.515.523.126 1.01.188 1.462.188.659 0 1.146-.125 1.46-.375.313-.251.47-.588.47-1.01a1.27 1.27 0 0 0-.432-.97c-.288-.265-.883-.578-1.784-.94-.93-.377-1.585-.807-1.966-1.29C.31 9.143.118 8.562.118 7.884c0-.851.303-1.52.907-2.008.604-.488 1.414-.732 2.432-.732.976 0 1.946.214 2.913.642l-.53 1.36c-.906-.381-1.714-.573-2.425-.573-.538 0-.947.117-1.226.352-.28.236-.419.545-.419.93 0 .265.056.492.168.68.111.188.296.366.55.533.256.168.716.388 1.381.662.748.31 1.297.601 1.645.87.349.27.604.575.767.914.163.34.244.74.244 1.199h-.001zm5.164 2.906c-1.198 0-2.137-.35-2.813-1.05-.676-.7-1.014-1.662-1.014-2.89 0-1.259.314-2.248.941-2.968.628-.72 1.49-1.08 2.586-1.08 1.018 0 1.821.308 2.412.927.59.618.885 1.467.885 2.551v.885H9.548c.024.748.226 1.324.606 1.726.38.402.918.602 1.61.602.455 0 .88-.042 1.271-.128a6.69 6.69 0 0 0 1.265-.43v1.331c-.4.19-.804.325-1.213.405a7.42 7.42 0 0 1-1.4.118h.001zm-.3-6.747c-.52 0-.937.165-1.252.495-.313.33-.5.81-.56 1.443h3.498c-.009-.637-.163-1.12-.46-1.446-.297-.328-.706-.492-1.226-.492zm9.98 6.607l-.327-1.073h-.055c-.373.47-.746.789-1.123.959-.376.17-.86.254-1.45.254-.758 0-1.349-.205-1.774-.613-.426-.41-.638-.987-.638-1.735 0-.795.295-1.395.885-1.8.59-.403 1.489-.624 2.697-.66l1.33-.042v-.412c0-.492-.114-.86-.345-1.105-.23-.243-.586-.366-1.07-.366a3.7 3.7 0 0 0-1.135.174 8.434 8.434 0 0 0-1.046.411l-.53-1.171a5.723 5.723 0 0 1 1.374-.499c.498-.113.967-.17 1.408-.17.98 0 1.72.214 2.219.642.5.428.75 1.099.75 2.014v5.192h-1.172.002zm-2.439-1.115c.595 0 1.072-.167 1.433-.499.36-.332.54-.798.54-1.397V11.8l-.99.042c-.771.028-1.331.157-1.682.386-.351.23-.526.582-.526 1.055 0 .344.101.61.306.798.204.188.51.283.92.283zm9.807-6.733c.33 0 .601.024.815.07l-.16 1.527a3.109 3.109 0 0 0-.725-.084c-.655 0-1.186.214-1.593.641-.406.428-.61.984-.61 1.667v4.029h-1.638V7.77h1.283l.216 1.36h.084c.255-.46.588-.825 1-1.095.41-.27.853-.404 1.327-.404V7.63zm5.352 7.988c-1.166 0-2.052-.34-2.659-1.021-.606-.68-.91-1.658-.91-2.931 0-1.297.317-2.293.952-2.99.634-.697 1.55-1.046 2.75-1.046.813 0 1.544.151 2.196.453L35.92 9.4c-.692-.27-1.263-.404-1.714-.404-1.334 0-2.001.885-2.001 2.656 0 .864.166 1.514.498 1.947.333.435.82.652 1.461.652.73 0 1.42-.181 2.07-.544v1.429a3.259 3.259 0 0 1-.936.37 5.618 5.618 0 0 1-1.21.11v.002zm10.74-.14h-1.644V10.74c0-.594-.12-1.038-.36-1.33-.238-.293-.619-.44-1.139-.44-.688 0-1.192.206-1.516.617-.323.411-.485 1.1-.485 2.067v3.827h-1.638V4.635h1.638V7.39c0 .442-.028.913-.084 1.414h.104c.224-.372.533-.66.93-.864.398-.204.86-.306 1.391-.306 1.869 0 2.803.941 2.803 2.824v5.025-.003zm9.926-7.848c.962 0 1.71.349 2.247 1.046.537.697.805 1.675.805 2.934 0 1.264-.272 2.248-.815 2.953-.544.704-1.299 1.055-2.266 1.055-.976 0-1.733-.351-2.272-1.053h-.111l-.3.913h-1.227V4.634h1.638v2.579c0 .19-.01.474-.029.85l-.041.718h.07c.52-.767 1.287-1.15 2.3-1.15zm-.426 1.338c-.66 0-1.134.194-1.425.581-.29.388-.44 1.038-.45 1.948v.111c0 .938.15 1.618.446 2.039.298.42.783.63 1.458.63.58 0 1.02-.23 1.32-.69.301-.46.45-1.123.45-1.993 0-1.752-.6-2.627-1.799-2.627zm4.21-1.199h1.784l1.569 4.37c.237.624.394 1.209.474 1.757h.055c.041-.255.118-.566.23-.93.112-.365.703-2.097 1.77-5.197h1.771l-3.297 8.734c-.6 1.603-1.599 2.405-2.997 2.405a4.71 4.71 0 0 1-1.059-.118v-1.297c.246.056.527.084.844.084.79 0 1.345-.457 1.666-1.373l.286-.724-3.095-7.71h-.001z" />\n</symbol>'});s.a.add(c);t.default=c},,,function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a,o=document;o.addEventListener("DOMContentLoaded",function e(t){o.removeEventListener("DOMContentLoaded",e),a=t});var i=function(e,t){var n=t||window;"complete"===o.readyState?e.call(n,a):o.addEventListener("DOMContentLoaded",function t(i){o.removeEventListener("DOMContentLoaded",t),a=i,e.call(n,i)})};t.default=i},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){window.addEventListener("load",function(){"serviceWorker"in navigator&&navigator.serviceWorker.register("/OneSignalSDKWorker.js").then(function(e){(0,a.info)("%c [SW] Service Worker Registred!","color:green")}).catch(function(e){console.error("Unable to register service worker.",e)})})};var a=n(4)},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){f.start(),s.addEventListener("click",d),c.addEventListener("click",u),document.addEventListener("keyup",function(e){27===e.keyCode&&u()})};var a,o=(a=n(32))&&a.__esModule?a:{default:a};var i=document.body,s=document.getElementById("btn-search"),c=document.getElementById("btn-search-close"),r=document.querySelector(".search"),l=r.querySelector(".search-input");function d(){i.classList.add("overflow-hidden"),i.classList.add("h-screen"),r.classList.add("active"),l.focus()}function u(){i.classList.remove("overflow-hidden"),i.classList.remove("h-screen"),r.classList.remove("active"),l.blur(),l.value=""}var f=(0,o.default)({appId:"XVW692FWI3",apiKey:"c04ebb2176b99ed5c76c4df99e6e9b8a",indexName:"linuxize-blog",routing:!0,searchParameters:{facetingAfterDistinct:!0,highlightPreTag:'<span class="text-green-dark font-medium font-normal bg-green-lightest">',highlightPostTag:"</span>"},searchFunction:function(e){var t=document.getElementById("hits");""!==e.state.query?(e.search(),t.classList.remove("hidden")):t.classList.add("hidden")}});f.addWidget(o.default.widgets.searchBox({container:"#search-input",placeholder:"Type to search",magnifier:!1,autofocus:!0}));f.addWidget(o.default.widgets.hits({container:"#hits",templates:{empty:'<div class="text-center">No results found matching <strong>{{query}}</strong>.</div>',item:'<section class="section-{{ objectID }} w-full "><a href="{{ relpermalink }}" class="w-full py-8 flex items-center leading-normal border-b border-grey-light"><div class="flex-1"><div class="text-xs text-grey-dark uppercase flex font-normal items-center"><span>{{publish_date}}</span><span class="mx-2">&bull;</span><span class="inline-block font-medium uppercase rounded-sm px-1 leading-normal bg-grey-lightest"><small>{{type}}</small></span></div><h2 class="text-black font-medium text-xl lg:text-2xl">{{{_highlightResult.title.value}}}</h2><p class="text-black">{{{_highlightResult.description.value}}}</h2></div></a></section>'},transformData:{item:function(e){return e.publish_date=new Date(e.publishdate).toISOString().slice(0,10),e}}}))},function(e,t){e.exports=instantsearch},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){(0,o.default)("https://cdn.onesignal.com/sdks/OneSignalSDK.js",function(e,t){if(!e){var n=window.OneSignal||[];n.push(function(){n.isPushNotificationsSupported&&(n.push(["init",{appId:"27b7a002-ef41-4152-bf0a-b38e23e0e27b",safari_web_id:"web.onesignal.auto.0b751c21-4ab5-448f-a888-cd2e20e2cfd5",persistNotification:!1,autoRegister:!1,welcomeNotification:{title:"Linuxize",message:"Thanks for subscribing!"}}]),n.push(function(){n.isPushNotificationsEnabled(function(e){e||n.registerForPushNotifications()})}))})}})};var a,o=(a=n(5))&&a.__esModule?a:{default:a}},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){var e=0,t=0,n=!1,a=null,o={pinned:"header-pin",unpinned:"header-unpin"};function i(){t<e?a.classList.contains(o.unpinned)&&(a.classList.remove(o.unpinned),a.classList.add(o.pinned)):t>e&&(!a.classList.contains(o.pinned)&&a.classList.contains(o.unpinned)||(a.classList.remove(o.pinned),a.classList.add(o.unpinned))),e=t,n=!1}(a=document.getElementById("header"))&&window.addEventListener("scroll",function(){t=window.pageYOffset,function(){n||requestAnimationFrame(i);n=!0}()},!1)}},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a,o=(a=n(6))&&a.__esModule?a:{default:a};var i=function(){o.default.msie&&document.body.classList.add("msie"),o.default.msedge&&document.body.classList.add("msedge")};t.default=i},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a,o=(a=n(37))&&a.__esModule?a:{default:a};var i=function(){var e=document.querySelector(".post-header h1"),t=document.querySelector(".nav-post-title");e&&t&&window.addEventListener("scroll",function(){(0,o.default)(e)?(t.classList.remove("block"),t.classList.add("hidden")):(t.classList.add("block"),t.classList.remove("hidden"))},!1)};t.default=i},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)};t.default=a},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a,o=(a=n(5))&&a.__esModule?a:{default:a};var i=document.querySelector(".disqus-load");function s(e){var t=i.parentElement;t.style.minHeight=t.offsetHeight+"px",i.classList.add("hidden"),(0,o.default)("https://linuxize-com.disqus.com/embed.js",function(t,n){t||e.preventDefault()})}var c=function(){null!==i&&(0,o.default)("https://linuxize-com.disqus.com/count.js",{id:"dsq-count-scr"},function(e,t){e||(i.removeEventListener("click",s),i.addEventListener("click",s))})};t.default=c},function(e,t,n){"use strict";t.__esModule=!0,t.default=function(){(function(){for(var e=document.querySelectorAll("code.language-bash"),t=e.length,n=0;n<t;n++)e[n].innerHTML="<span class='bash-line' prefix='$'>"+e[n].textContent.split("\n").filter(Boolean).join("</span>\n<span class='bash-line' prefix='$'>")+"</span>";for(var a=document.querySelectorAll("code.language-mysql"),o=a.length,i=0;i<o;i++)a[i].innerHTML="<span class='mysql-line' prefix='mysql>'>"+a[i].textContent.split("\n").filter(Boolean).join("</span>\n<span class='mysql-line' prefix='$'>")+"</span>"})(),o.default.isSupported()&&function(){for(var e=document.querySelectorAll(i.copyTargets),t=0;t<e.length;t++){var n,a=e[t].textContent||e[t].innerText,c=document.createElement("span");(n=c.classList).add.apply(n,i.copyClass),c.innerHTML=i.copyText,c.setAttribute("data-clipboard-text",a);var r=new o.default(c),l=s(e[t],c);r.on("success",function(e){e.trigger.innerHTML=i.copySuccessText,e.clearSelection(),setTimeout(function(){e.trigger.innerHTML=i.copyText},i.copyTimeout)}),e[t].parent&&(e[t].parent.innerHTML=l.outerHTML)}}()};var a,o=(a=n(40))&&a.__esModule?a:{default:a};var i={copyClass:["code-copy","button","main","small"],copyText:"Copy",copySuccessText:"Copied!",copyTimeout:1e3,copyTargets:["div.highlight"]};function s(e,t){return t=t||document.createElement("span"),e.appendChild(t),e}},,function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(){function e(e){if(!e)throw new Error("No targets defined");this.targets=this.getTargets(e),this.icon='<svg viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><use xlink:href="#link"></use></svg>',this.minLevel=2,this.maxLevel=6,this.linkifyTargets()}var t=e.prototype;return t.getTargets=function(e){return Array.isArray(e)||(e=[e]),e.map(function(e){return document.querySelector(e)})},t.anchorForId=function(e){var t=document.createElement("a");return t.href=window.location.pathname+"#"+e,t.setAttribute("data-scroll",""),t},t.addAnchor=function(e,t){var n=e.innerHTML;return(t=t||document.createElement("span")).innerHTML=n,t.innerHTML+=this.icon,e.innerHTML="",e.appendChild(t),e.classList.add("anchor"),e.setAttribute("aria-hidden","true"),e},t.linkifyHeadings=function(e,t){for(var n=t.getElementsByTagName("h"+e),a=0;a<n.length;a++){var o=n[a];if(void 0!==o.id&&""!==o.id){var i=this.anchorForId(o.id),s=this.addAnchor(o,i);o.parentNode.replaceChild(o,s)}}},t.linkifyTargets=function(){var e=this;this.targets.forEach(function(t){if(null!==t)for(var n=e.minLevel;n<=e.maxLevel;n++)e.linkifyHeadings(n,t)})},e}();t.default=a},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a=function(){var e=document.querySelectorAll("ins.adsbygoogle");if(window.adsbygoogle=window.adsbygoogle||[],e)for(var t=0;t<e.length;t++){if(0===e[t].offsetWidth)return;window.adsbygoogle.push({})}};t.default=a},function(e,t,n){"use strict";t.__esModule=!0,t.default=void 0;var a,o=(a=n(6))&&a.__esModule?a:{default:a};var i=function(){void 0===window.canRunAds&&setTimeout(function(){var e=document.querySelector(".sideblock"),t=document.querySelector(".sideblock ins.adsbygoogle"),n=document.querySelector(".sideblock .affiliate");t&&0===t.innerHTML.replace(/\s/g,"").length&&(n.classList.remove("hidden"),n.classList.add("block"),o.default.msedge||e.classList.add("sticky-affiliate"))},2e3)};t.default=i}]);