(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[592],{4353:function(e,n,r){"use strict";var t=r(7379),i=r(5893),a=t.ZP.div.withConfig({displayName:"header__Jumbo",componentId:"sc-t8fmwg-0"})(["margin:90px 0 30px 0;border-radius:20px;background-color:",";position:relative;padding:40px 10px 20px 20px;@media screen and (max-width:1000px){margin:10px 0 30px 0;padding:15px;}"],(function(e){return e.primary?"#1920EF":"#FFC024"})),o=t.ZP.h1.withConfig({displayName:"header__Title",componentId:"sc-t8fmwg-1"})(["font-weight:600;font-size:2.5em;margin:0px;color:",";@media screen and (max-width:1000px){width:100%;font-size:1.8em;}"],(function(e){return e.primary?"#FFF":"#000"})),s=t.ZP.h4.withConfig({displayName:"header__Desc",componentId:"sc-t8fmwg-2"})(["font-weight:",";font-size:",";margin:0px;width:50%;color:",";@media screen and (max-width:1000px){width:100%;font-size:1em;}"],(function(e){return e.primary?"bold":null}),(function(e){return e.primary?"1.4em":"1em"}),(function(e){return e.primary?"#FFC024":"#000"})),c=t.ZP.img.withConfig({displayName:"header__Img",componentId:"sc-t8fmwg-3"})(["position:absolute;width:38%;bottom:0;right:0;z-index:1;border-radius:20px;@media screen and (max-width:1000px){width:0px;}"]);n.Z=function(e){var n=e.title,r=e.desc,t=e.imgH,l=e.primary;return(0,i.jsxs)(a,{primary:l,children:[(0,i.jsx)(o,{primary:l,children:n}),(0,i.jsx)(s,{primary:l,children:r}),(0,i.jsx)(c,{src:t,primary:l})]})}},7913:function(e,n,r){"use strict";var t=r(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i,a=(i=r(7294))&&i.__esModule?i:{default:i},o=r(2199),s=r(1587),c=r(7215);function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d={};function p(e,n,r,t){if(e&&o.isLocalURL(n)){e.prefetch(n,r,t).catch((function(e){0}));var i=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;d[n+"%"+r+(i?"%"+i:"")]=!0}}var u=a.default.forwardRef((function(e,n){var r,i=e.legacyBehavior,u=void 0===i?!0!==Boolean(!1):i,f=e.href,x=e.as,m=e.children,h=e.prefetch,g=e.passHref,j=e.replace,b=e.shallow,_=e.scroll,y=e.locale,w=e.onClick,v=e.onMouseEnter,O=l(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);r=m,u&&"string"===typeof r&&(r=a.default.createElement("a",null,r));var C,k=!1!==h,E=s.useRouter(),I=a.default.useMemo((function(){var e=o.resolveHref(E,f,!0),n=t(e,2),r=n[0],i=n[1];return{href:r,as:x?o.resolveHref(E,x):i||r}}),[E,f,x]),P=I.href,N=I.as,S=a.default.useRef(P),Z=a.default.useRef(N);u&&(C=a.default.Children.only(r));var z=u?C&&"object"===typeof C&&C.ref:n,T=c.useIntersection({rootMargin:"200px"}),L=t(T,3),D=L[0],M=L[1],R=L[2],F=a.default.useCallback((function(e){Z.current===N&&S.current===P||(R(),Z.current=N,S.current=P),D(e),z&&("function"===typeof z?z(e):"object"===typeof z&&(z.current=e))}),[N,z,P,R,D]);a.default.useEffect((function(){var e=M&&k&&o.isLocalURL(P),n="undefined"!==typeof y?y:E&&E.locale,r=d[P+"%"+N+(n?"%"+n:"")];e&&!r&&p(E,P,N,{locale:n})}),[N,P,M,y,k,E]);var H={ref:F,onClick:function(e){u||"function"!==typeof w||w(e),u&&C.props&&"function"===typeof C.props.onClick&&C.props.onClick(e),e.defaultPrevented||function(e,n,r,t,i,a,s,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&o.isLocalURL(r))&&(e.preventDefault(),n[i?"replace":"push"](r,t,{shallow:a,locale:c,scroll:s}))}(e,E,P,N,j,b,_,y)},onMouseEnter:function(e){u||"function"!==typeof v||v(e),u&&C.props&&"function"===typeof C.props.onMouseEnter&&C.props.onMouseEnter(e),o.isLocalURL(P)&&p(E,P,N,{priority:!0})}};if(!u||g||"a"===C.type&&!("href"in C.props)){var U="undefined"!==typeof y?y:E&&E.locale,K=E&&E.isLocaleDomain&&o.getDomainLocale(N,U,E&&E.locales,E&&E.domainLocales);H.href=K||o.addBasePath(o.addLocale(N,U,E&&E.defaultLocale))}return u?a.default.cloneElement(C,H):a.default.createElement("a",Object.assign({},O,H),r)}));n.default=u,("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},7215:function(e,n,r){"use strict";var t=r(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,l=e.disabled||!o,d=i.useRef(),p=i.useState(!1),u=t(p,2),f=u[0],x=u[1],m=i.useState(n?n.current:null),h=t(m,2),g=h[0],j=h[1],b=i.useCallback((function(e){d.current&&(d.current(),d.current=void 0),l||f||e&&e.tagName&&(d.current=function(e,n,r){var t=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},t=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));t?n=s.get(t):(n=s.get(r),c.push(r));if(n)return n;var i=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return s.set(r,n={id:r,observer:a,elements:i}),n}(r),i=t.id,a=t.observer,o=t.elements;return o.set(e,n),a.observe(e),function(){if(o.delete(e),a.unobserve(e),0===o.size){a.disconnect(),s.delete(i);var n=c.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&x(e)}),{root:g,rootMargin:r}))}),[l,g,r,f]),_=i.useCallback((function(){x(!1)}),[]);return i.useEffect((function(){if(!o&&!f){var e=a.requestIdleCallback((function(){return x(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),i.useEffect((function(){n&&j(n.current)}),[n]),[b,f,_]};var i=r(7294),a=r(8065),o="undefined"!==typeof IntersectionObserver;var s=new Map,c=[];("function"===typeof n.default||"object"===typeof n.default&&null!==n.default)&&(Object.assign(n.default,n),e.exports=n.default)},8144:function(e,n,r){"use strict";r.r(n);var t=r(7379),i=r(6311),a=(r(3129),r(7294)),o=r(5893),s=t.ZP.div.withConfig({displayName:"listItems__Container",componentId:"sc-1e439g2-0"})([""]),c=t.ZP.div.withConfig({displayName:"listItems__Organiz",componentId:"sc-1e439g2-1"})(["display:flex;flex-wrap:wrap;justify-content:space-between;"]),l=t.ZP.div.withConfig({displayName:"listItems__Objeto",componentId:"sc-1e439g2-2"})(["width:350px;"]),d=t.ZP.h3.withConfig({displayName:"listItems__Subtitle",componentId:"sc-1e439g2-3"})(["white-space:pre-wrap;margin-left:10px;color:",";@media screen and (max-width:800px){font-size:17px;}"],(function(e){return 1===e.tipo?"black":"#172bef"})),p=t.ZP.p.withConfig({displayName:"listItems__Content",componentId:"sc-1e439g2-4"})(["margin-left:20px;transition:0.2s all;:hover{margin-left:25px;}@media screen and (max-width:800px){font-size:14px;}white-space:pre-wrap;"]),u=(t.ZP.p.withConfig({displayName:"listItems__Content2",componentId:"sc-1e439g2-5"})(["margin-left:20px;@media screen and (max-width:800px){font-size:14px;}white-space:pre-wrap;"]),t.ZP.img.withConfig({displayName:"listItems__Logo",componentId:"sc-1e439g2-6"})(["width:44px;@media screen and (max-width:800px){width:35px;}"])),f=function(e){var n=e.data,r=e.tipo,t=void 0===r?0:r;return 0==n[1].length?null:(0,o.jsxs)(l,{children:[(0,o.jsx)(d,{tipo:t,children:n[0]}),n[1].map((function(e){return(0,o.jsx)(p,{children:e[1]?(0,o.jsxs)("a",{href:e[1],target:"_blank",rel:"noreferrer",children:[""===e[2]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[2],".png")}),e[0]]}):(0,o.jsxs)("a",{onClick:function(){alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[""===e[2]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[2],".png")}),e[0]]})},e)}))]})},x=function(e){var n=e.data,r=e.tipo,t=void 0===r?0:r;return 0==n[1].length?null:(0,o.jsxs)(l,{children:[(0,o.jsx)(d,{tipo:t,children:n[0]}),n[1].map((function(e){return(0,o.jsxs)(p,{children:[e[4]?""==e[2]?(0,o.jsxs)("a",{children:[""===e[3]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[3],".png")}),(0,o.jsx)("b",{children:e[0]}),(0,o.jsxs)("a",{onClick:function(){alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[" ",e[1]]})]}):"N/A"==e[2]|"n/a"==e[2]?(0,o.jsxs)("a",{children:[""===e[3]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[3],".png")}),(0,o.jsx)("b",{children:e[0]}),(0,o.jsxs)("a",{children:[" ",e[1]]})]}):(0,o.jsxs)("a",{children:[""===e[3]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[3],".png")}),(0,o.jsx)("b",{children:e[0]}),(0,o.jsxs)("a",{href:e[2],target:"_blank",rel:"noreferrer",children:["\xa0",e[1]]})]}):""==e[2]?(0,o.jsxs)("a",{onClick:function(){alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[""===e[3]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[3],".png")}),(0,o.jsx)("b",{children:e[0]})," ",e[1]]}):"N/A"==e[2]|"n/a"==e[2]?(0,o.jsxs)("a",{children:[""===e[3]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[3],".png")}),(0,o.jsx)("b",{children:e[0]}),(0,o.jsxs)("a",{children:[" ",e[1]]})]}):(0,o.jsxs)("a",{href:e[2],target:"_blank",rel:"noreferrer",children:[""===e[3]?(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/TODOS.png")}):(0,o.jsx)(u,{src:"".concat(i.O,"/imgs/roles/").concat(e[3],".png")}),(0,o.jsx)("b",{children:e[0]})," ",e[1]]}),e[4]?""==e[5]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[4]]}):""==e[5]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[4]]}):(0,o.jsxs)("a",{href:e[5],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[4]]}):null,e[6]?""==e[7]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[6]]}):""==e[7]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[6]]}):(0,o.jsxs)("a",{href:e[7],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[6]]}):null,e[8]?""==e[9]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[8]]}):""==e[9]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[8]]}):(0,o.jsxs)("a",{href:e[9],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[8]]}):null,e[10]?""==e[11]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[10]]}):""==e[11]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[10]]}):(0,o.jsxs)("a",{href:e[11],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[10]]}):null,e[12]?""==e[13]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[12]]}):""==e[13]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[12]]}):(0,o.jsxs)("a",{href:e[13],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[12]]}):null,e[14]?""==e[15]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[14]]}):""==e[15]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[14]]}):(0,o.jsxs)("a",{href:e[15],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[14]]}):null,e[16]?""==e[17]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[16]]}):""==e[17]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[16]]}):(0,o.jsxs)("a",{href:e[17],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[16]]}):null,e[18]?""==e[19]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[18]]}):""==e[19]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[18]]}):(0,o.jsxs)("a",{href:e[19],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[18]]}):null,e[20]?""==e[21]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[20]]}):""==e[21]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[20]]}):(0,o.jsxs)("a",{href:e[21],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[20]]}):null,e[22]?""==e[23]?(0,o.jsxs)("a",{onClick:function(){return alert("El contenido estar\xe1 disponible pr\xf3ximamente")},children:[(0,o.jsx)("br",{}),"\xa0",e[22]]}):""==e[23]?(0,o.jsxs)("a",{children:[(0,o.jsx)("br",{}),"\xa0",e[22]]}):(0,o.jsxs)("a",{href:e[23],target:"_blank",rel:"noreferrer",children:[(0,o.jsx)("br",{}),"\xa0",e[22]]}):null]},e)}))]})};n.default=function(e){var n=e.tipo,r=e.data,t=(0,a.useState)(!1),i=t[0],l=t[1];return(0,a.useEffect)((function(){l(!0)})),(0,o.jsx)(s,{children:i?(0,o.jsxs)("div",{children:[1===n?(0,o.jsxs)(c,{children:[r["1_1"]?(0,o.jsx)(x,{data:r["1_1"]}):null,r["1_2"]?(0,o.jsx)(x,{data:r["1_2"]}):null,r["1_3"]?(0,o.jsx)(x,{data:r["1_3"]}):null,r["1_4"]?(0,o.jsx)(x,{data:r["1_4"]}):null,r["1_5"]?(0,o.jsx)(x,{data:r["1_5"]}):null,r["1_6"]?(0,o.jsx)(x,{data:r["1_6"]}):null,r["1_7"]?(0,o.jsx)(x,{data:r["1_7"]}):null]}):null,3===n?(0,o.jsxs)(c,{children:[(0,o.jsx)(f,{data:r[3]}),r[4]?(0,o.jsx)(f,{data:r[4]}):null,r[5]?(0,o.jsx)(f,{data:r[5]}):null,r[6]?(0,o.jsx)(f,{data:r[6]}):null,r[7]?(0,o.jsx)(f,{data:r[7]}):null,r[8]?(0,o.jsx)(f,{data:r[8]}):null,r[9]?(0,o.jsx)(f,{data:r[9]}):null,r[10]?(0,o.jsx)(f,{data:r[10]}):null,r[11]?(0,o.jsx)(f,{data:r[11]}):null]}):null]}):null})}},6703:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return P}});var t=r(2640),i=r(7294),a=r(6311),o=r(3129),s=r(8577),c=r(8144),l=r(7379),d=r(8580),p=r(4353),u=r(9499),f=r(5893);function x(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function m(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?x(Object(r),!0).forEach((function(n){(0,u.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var h=l.ZP.div.withConfig({displayName:"pisoSel__Selector",componentId:"sc-198y8og-0"})(["display:flex;flex-wrap:wrap;align-items:center;text-align:center;justify-content:space-evenly;padding:5px 5%;margin:20px 0;background-color:#e0e5ed;border-radius:20px;color:#1920EF;font-weight:bold;font-size:1em;@media screen and (max-width:1000px){padding:5px 15%;}@media screen and (max-width:800px){font-size:.8em;}"]),g=l.ZP.div.withConfig({displayName:"pisoSel__SelItem",componentId:"sc-198y8og-1"})(["border-radius:20px;padding:5px 10px;margin:5px 0px;white-space:nowrap;transition:0.5s;background-color:",";color:",";:hover{transform:scale(1.2);background-color:#979FF5;color:#ffffff;cursor:pointer;}"],(function(e){return e.primary?"#1920EF":null}),(function(e){return e.primary?"#fff":null})),j=function(){var e=(0,s.L)(),n=(0,t.Z)(e,2),r=n[0],i=n[1],a=(0,o.yz)();return(0,f.jsx)(h,{children:[1,2,3].map((function(e){return(0,f.jsxs)(g,{onClick:function(){var n;(n=e)>a||i(m(m({},r),{},{piso:n}))},primary:r.piso===e,children:["Edificio ",e]},e.toString())}))})},b=r(9362),_=l.ZP.h2.withConfig({displayName:"etesc__TitleCont",componentId:"sc-a18d0j-0"})(["font-weight:600;font-size:24px;@media screen and (max-width:824px){font-size:18px;}line-height:52px;letter-spacing:-0.03em;color:#272835;margin:0px;display:inline;z-index:2"]),y="".concat(a.O,"/imgs/header/etesc.png"),w=l.ZP.h2.withConfig({displayName:"etesc__Title",componentId:"sc-a18d0j-1"})(["font-weight:700;font-size:35px;line-height:42px;letter-spacing:-0.03em;color:#272835;margin-bottom:20px;z-index:2;@media screen and (max-width:1200px){font-size:22px;font-weight:700;line-height:28px;}"]),v=l.ZP.div.withConfig({displayName:"etesc__Margin",componentId:"sc-a18d0j-2"})(["margin:0 20px;"]),O=l.ZP.div.withConfig({displayName:"etesc__Card",componentId:"sc-a18d0j-3"})(["border-radius:10px;"]),C=l.ZP.div.withConfig({displayName:"etesc__Head",componentId:"sc-a18d0j-4"})(["background-color:#e0e5ed;padding-left:10px;border-radius:10px;cursor:pointer;"]),k=l.ZP.img.withConfig({displayName:"etesc__Icon",componentId:"sc-a18d0j-5"})(["display:inline;margin-left:10px;margin-right:30px;"]),E=l.ZP.div.withConfig({displayName:"etesc__Content",componentId:"sc-a18d0j-6"})(["transition:0.8s all;max-height:","px;overflow:hidden;padding:10px;@media screen and (max-width:800px){max-height:","px;}"],(function(e){return e.alt}),(function(e){return 2*e.alt})),I=l.ZP.p.withConfig({displayName:"etesc__Parrafo",componentId:"sc-a18d0j-7"})(["@media screen and (max-width:800px){font-size:13px;}"]),P=function(){var e=(0,s.L)(),n=(0,t.Z)(e,2),r=n[0],l=(n[1],r.group?r.group:"dos"),u=r.piso?r.piso:1,x=(0,o.a5)(l,u),m=((0,o.LR)(),(0,i.useState)({})),h=m[0],g=m[1];(0,i.useEffect)((function(){g((0,o.ov)(l,u))}),[l,u]);var P=(0,i.useState)(0),N=P[0],S=P[1],Z=(0,i.useState)(0),z=Z[0],T=Z[1],L=(0,i.useState)(0),D=L[0],M=L[1];function R(e){1===e&&S(0===N?1600:0),2===e&&T(0===z?1600:0),3===e&&M(0===D?1600:0)}return(0,f.jsxs)(d.Z,{pg:"ETESC",children:[(0,f.jsx)(p.Z,{title:"ETESC",desc:"Espacio Tecnol\xf3gico de Empredimiento Sostenible Colombia",imgH:y}),(0,f.jsxs)(v,{children:[(0,f.jsx)(I,{children:"En esta secci\xf3n podras realizar los entregables m\xe1s importantes en el desarrollo de tu proyecto los cuales te permitiran avanzar al proximo piso. Con estos y otros retos podras ganar Innocoins y Puntos de Victoria ."}),(0,f.jsx)(I,{children:"Por favor selecciona tu grupo, \xa1ten en cuenta que el contenido var\xeda seg\xfan el grupo que escojas!"}),(0,f.jsx)(b.Z,{}),(0,f.jsx)(j,{}),(0,f.jsx)(w,{children:x}),(0,f.jsxs)(O,{children:[(0,f.jsxs)(C,{onClick:function(){return R(1)},children:[0===N?(0,f.jsx)(k,{src:"".concat(a.O,"/imgs/main/Icon_flecha_abajo.png")}):(0,f.jsx)(k,{src:"".concat(a.O,"/imgs/main/Icon_flecha_arriba.png")}),(0,f.jsx)(_,{children:"Retos de edificio"})]}),(0,f.jsx)(E,{alt:N,children:(0,f.jsx)(c.default,{data:h,tipo:1})})]}),(0,f.jsxs)(O,{children:[(0,f.jsxs)(C,{onClick:function(){return R(3)},children:[0===D?(0,f.jsx)(k,{src:"".concat(a.O,"/imgs/main/Icon_flecha_abajo.png")}):(0,f.jsx)(k,{src:"".concat(a.O,"/imgs/main/Icon_flecha_arriba.png")}),(0,f.jsx)(_,{children:"Charlas & Encuestas"})]}),(0,f.jsx)(E,{alt:D,children:(0,f.jsx)(c.default,{data:h,tipo:3})})]})]})]})}},4082:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/etesc",function(){return r(6703)}])},1664:function(e,n,r){e.exports=r(7913)}},function(e){e.O(0,[735,580,774,888,179],(function(){return n=4082,e(e.s=n);var n}));var n=e.O();_N_E=n}]);