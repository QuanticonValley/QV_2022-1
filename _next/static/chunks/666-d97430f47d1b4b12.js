(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[666],{9454:function(e,n,t){"use strict";var i=t(7379),o=t(5893),r=i.ZP.div.withConfig({displayName:"header__Jumbo",componentId:"sc-t8fmwg-0"})(["margin:90px 0 30px 0;border-radius:20px;background-color:",";position:relative;padding:40px 10px 20px 20px;@media screen and (max-width:1000px){padding:15px;}"],(function(e){return e.primary?"#1920EF":"#FFC024"})),a=i.ZP.h1.withConfig({displayName:"header__Title",componentId:"sc-t8fmwg-1"})(["font-weight:600;font-size:2.5em;margin:0px;color:",";@media screen and (max-width:1000px){width:100%;font-size:1.8em;}"],(function(e){return e.primary?"#FFF":"#000"})),s=i.ZP.h4.withConfig({displayName:"header__Desc",componentId:"sc-t8fmwg-2"})(["font-weight:",";font-size:",";margin:0px;width:50%;color:",";@media screen and (max-width:1000px){width:100%;font-size:1em;}"],(function(e){return e.primary?"bold":null}),(function(e){return e.primary?"1.4em":"1em"}),(function(e){return e.primary?"#FFC024":"#000"})),c=i.ZP.img.withConfig({displayName:"header__Img",componentId:"sc-t8fmwg-3"})(["position:absolute;width:38%;bottom:0;right:0;z-index:1;border-radius:20px;@media screen and (max-width:1000px){width:0px;}"]);n.Z=function(e){var n=e.title,t=e.desc,i=e.imgH,d=e.primary;return(0,o.jsxs)(r,{primary:d,children:[(0,o.jsx)(a,{primary:d,children:n}),(0,o.jsx)(s,{primary:d,children:t}),(0,o.jsx)(c,{src:i,primary:d})]})}},8180:function(e,n,t){"use strict";t.d(n,{Z:function(){return ce}});var i=t(7379),o=t(1664),r=t(8735),a=t(7294),s=t(2279),c={pages:[{title:"Principal",link:"/principal",src:"".concat(s.O,"/imgs/main/Icon_principal.svg"),dsc:"Avance y Estado Actual del Juego"},{title:"ETESC",link:"/etesc",src:"".concat(s.O,"/imgs/main/Icon_ETESC.svg"),dsc:"Entregables y Retos para cada Semana"},{title:"Oficina",link:"/office",src:"".concat(s.O,"/imgs/main/Icon_Oficina.svg"),dsc:"Informacion sobre cada uno de los Equipos"},{title:"Ranking",link:"/ranking",src:"".concat(s.O,"/imgs/main/Icon_tabla.png"),dsc:"Puedes encontrar el avance del juego y la clasificatoria"},{title:"Actores",link:"/actors",src:"".concat(s.O,"/imgs/main/Icon_actores.svg"),dsc:"Informacion sobre los actores del juego"},{title:"Acerca del juego",link:"/info/about",src:"".concat(s.O,"/imgs/main/Icon_Informacion.svg"),dsc:"Para Conocer y Saber mas de Quanticon Valley"}]},d=function(){return c.pages},l=t(5893),p=i.ZP.img.withConfig({displayName:"navBar__Logo",componentId:"sc-w5sz8n-0"})(["margin:10% 0 10% 10%;max-width:50%;cursor:pointer;"]),m=i.ZP.img.withConfig({displayName:"navBar__NavImg",componentId:"sc-w5sz8n-1"})(["position:absolute;width:100%;bottom:0;left:0;@media screen and (max-height:600px){display:none;}"]),u=i.ZP.div.withConfig({displayName:"navBar__Button",componentId:"sc-w5sz8n-2"})(["display:flex;justify-content:space-evenly;align-items:center;padding:2vh 0px;font-weight:bold;width:100%;transition:0.5s ease;color:",";background-color:",";border-left:solid "," #FFC024;border-radius:",";transform:",";:hover{cursor:pointer;background-color:#303CFE;color:#ffffff;}"],(function(e){return e.active?"#fff":null}),(function(e){return e.active?"#303CFE":null}),(function(e){return e.active?"5px":"0"}),(function(e){return e.active?"0 10px 10px 0":"0"}),(function(e){return e.active?"scale(1.02)":null})),f=i.ZP.img.withConfig({displayName:"navBar__Icon",componentId:"sc-w5sz8n-3"})(["position:relative;display:inline-block height:80%;"]),g=i.ZP.span.withConfig({displayName:"navBar__Text",componentId:"sc-w5sz8n-4"})(["display:inline-block;margin:0px;padding:0px;width:65%;font-size:1rem;"]),h=i.ZP.nav.withConfig({displayName:"navBar__Container",componentId:"sc-w5sz8n-5"})(["grid-area:sb;position:sticky;background-color:#1920EF;padding:10px 0px 0px 0px;margin:12px 0px 12px 8px;border-radius:20px;top:12px;height:96vh;color:#bbb;box-shadow:-3px 0px 40px rgba(0,0,0,0.4);@media screen and (max-width:800px){display:none;}"]),x="".concat(s.O,"/imgs/main/QB_blanco_vertical_1.png"),y="".concat(s.O,"/imgs/main/QV_textura.png"),v=function(e){var n=e.pg,t=(0,a.useState)(!1),i=t[0],s=t[1];(0,a.useEffect)((function(){s(!0)}),[]);var c=d();return(0,l.jsxs)(h,{children:[(0,l.jsx)(m,{src:y,alt:"nav-img"}),(0,l.jsx)(o.default,{href:"/principal",passHref:!0,children:(0,l.jsx)(p,{src:x,alt:"logo"})}),c.map((function(e,t){return(0,l.jsxs)("span",{children:[(0,l.jsx)(o.default,{href:e.link,passHref:!0,children:(0,l.jsxs)(u,{active:e.title===n,"data-tip":!0,"data-for":"dscTooltip"+t.toString(),children:[(0,l.jsx)(f,{src:e.src,alt:e.link}),(0,l.jsx)(g,{children:e.title})]})}),i&&(0,l.jsx)(r.Z,{id:"dscTooltip"+t,place:"right",type:"info",children:e.dsc})]},e.link)}))]})},b=i.ZP.div.withConfig({displayName:"navMobile__Button",componentId:"sc-1uzc9au-0"})(["display:flex;justify-content:center;align-items:center;padding:2vh 0px;height:100%;width:100%;transition:0.5s;:hover{transform:scale(1,1.1);background-color:#55F;fill:black;}"]),w=i.ZP.img.withConfig({displayName:"navMobile__Icon",componentId:"sc-1uzc9au-1"})(["position:relative;display:inline-block height:1.6em;width:1.6em;"]),j=i.ZP.nav.withConfig({displayName:"navMobile__Container",componentId:"sc-1uzc9au-2"})(["display:none;position:fixed;background-color:#1920EF;left:0;bottom:0;height:60px;width:100%;color:#999;box-shadow:-3px 0px 40px rgba(0,0,0,0.4);justify-content:center;align-items:center;z-index:2;@media screen and (max-width:800px){display:flex;}"]),_=function(){var e=d();return(0,l.jsx)(j,{children:e.map((function(e){return(0,l.jsx)(o.default,{href:e.link,children:(0,l.jsx)(b,{children:(0,l.jsx)(w,{src:e.src,alt:e.link})})},e.link)}))})},C=t(9499),P=t(2640),I=t(1681),k=t(4786),E=i.ZP.div.withConfig({displayName:"notiWidget__Container",componentId:"sc-c7thu2-0"})(["position:relative;width:100%;"]),O=i.ZP.img.withConfig({displayName:"notiWidget__Img",componentId:"sc-c7thu2-1"})(["width:100%;border-radius:1em;box-shadow:-3px 0px 40px rgba(0,0,0,0.15);transition:.3s ease;:hover{transform:scaley(1.03);box-shadow:2px 2px 8px rgba(0,0,0,0.8);cursor:pointer;}"]),N=(i.ZP.iframe.withConfig({displayName:"notiWidget__Iframe",componentId:"sc-c7thu2-2"})(["position:absolute;top:30px;left:0;width:100%;height:80%;borderRadius:0 0 1em 1em;"]),function(e){var n=e.open,t=(0,a.useState)(!1),i=t[0],o=t[1];(0,a.useEffect)((function(){o(!0)}),[]);var c=(0,I.WA)(),d=c[0]?c[0].video:null;return(0,l.jsxs)(E,{onClick:n,children:[(0,l.jsx)(O,{src:"".concat(s.O,"/imgs/noti/news.png"),"data-tip":!0,"data-for":"dscTooltipNoti"}),d?(0,l.jsx)("iframe",{src:"https://www.youtube.com/embed/".concat(d),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Noticias",style:{position:"absolute",bottom:0,left:0,width:"100%",height:"80%",borderRadius:"0 0 1em 1em"}}):null,i&&(0,l.jsx)(r.Z,{id:"dscTooltipNoti",place:"left",type:"info",children:"Revisa todos los Noticieros"})]})});function Z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Z(Object(t),!0).forEach((function(n){(0,C.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Z(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var z=["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"],F=function(e){var n=e.d;return(0,l.jsx)("li",{className:"weekDay",children:n})},D=function(){return(0,l.jsx)("div",{className:"evenDot"})},S=function(e){var n=e.d,t=e.y,i=e.m,o=e.haClick,r=e.event,a=e.today,s=a.d===n&&a.m===i&&a.y===t,c={background:s?"blue":null,color:s?"white":null,fontWeight:s?"Bold":null};if(new Date(t,i+1,0).getDate()<n)return null;if(1===n){var d=new Date(t,i,n).getDay();return(0,l.jsxs)("li",{onClick:o,style:M({gridColumnStart:d},c),children:[" ",n," ",r?(0,l.jsx)(D,{}):null]})}return(0,l.jsxs)("li",{onClick:o,style:c,children:[n," ",r?(0,l.jsx)(D,{}):null]})},B=function(e){var n=e.styles,t=e.handleDay,i=e.events,o={d:(new Date).getDate(),m:(new Date).getMonth(),y:(new Date).getFullYear()},r=(0,a.useState)((new Date).getMonth()),s=r[0],c=r[1],d=(0,a.useState)((new Date).getFullYear()),p=d[0],m=d[1],u=function(e){var n=s+e;return n>11?(c(0),m((function(e){return e+1})),null):n<0?(c(11),m((function(e){return e-1})),null):void c((function(e){return n}))};return(0,l.jsxs)("div",{style:M({maxWidth:"300px"},null===n||void 0===n?void 0:n.box),children:[(0,l.jsxs)("div",{className:"header",children:[(0,l.jsxs)("h3",{style:{margin:0},children:[z[s]," ",p]}),(0,l.jsxs)("div",{className:"btns",children:[(0,l.jsx)("button",{onClick:function(){return u(-1)},style:M({},null===n||void 0===n?void 0:n.button),children:"\u276e"}),(0,l.jsx)("button",{onClick:function(){return u(1)},style:M({},null===n||void 0===n?void 0:n.button),children:"\u276f"})]})]}),(0,l.jsxs)("ol",{children:[["L","M","X","J","V","S","D"].map((function(e){return(0,l.jsx)(F,{d:e},e)})),[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31].map((function(e){return(0,l.jsx)(S,{today:o,d:e,y:p,m:s,haClick:function(){return t(new Date(p,s,e))},event:i.some((function(n){return n.d===e&&n.m===s+1&&n.y===p}))},e)}))]})]})},T=[{d:7,m:3,y:2022,event:"Primera Clase TPI y Presentaci\xf3n de la materia"},{d:9,m:3,y:2022,event:"Presentaci\xf3n Pitch propuestas de estudiantes"},{d:14,m:3,y:2022,event:"Presentaci\xf3n Pitch estudiantes y proponentes externos"},{d:16,m:3,y:2022,event:"Mentoria y Entrega de Encuesta, Acta de compromiso, roles, problematica, mentor"},{d:23,m:3,y:2022,event:"Mentoria"},{d:28,m:3,y:2022,event:"Taller de \xe9tica"},{d:30,m:3,y:2022,event:"Mentoria"},{d:4,m:4,y:2022,event:"Multiple oferta"},{d:6,m:4,y:2022,event:"Mentoria (pitch de piso 2) - Entrega del problema, actores, antecedentes, opini\xf3n experto, pregunta"},{d:18,m:4,y:2022,event:"Conversatorio"},{d:20,m:4,y:2022,event:"Mentoria"},{d:25,m:4,y:2022,event:"Mentoria"},{d:27,m:4,y:2022,event:"Mentoria (pitch de piso 3) y Entrega posibles soluciones e Infograf\xeda"},{d:1,m:5,y:2022,event:"Semana de evaluaci\xf3n de desempe\xf1o 1"},{d:2,m:5,y:2022,event:"Mentoria y Entrega de objetivos, planeaci\xf3n y metodolog\xeda de Startup como negocio"},{d:4,m:5,y:2022,event:"Mentoria y Entrega de estructura de dise\xf1o"},{d:9,m:5,y:2022,event:"Conversatorio alternativas de prototipado y Entrega de implementaci\xf3n del dise\xf1o"},{d:11,m:5,y:2022,event:"Mentoria y Entrega primer trabajo escrito"},{d:16,m:5,y:2022,event:"Laboratorios y Entrega avance en propotipo, modelo de negocio y propuesta de valor"},{d:18,m:5,y:2022,event:"Mentoria"},{d:23,m:5,y:2022,event:"Evaluaci\xf3n trabajo en equipo"},{d:25,m:5,y:2022,event:"Mentoria (pitch de piso 4)"},{d:1,m:6,y:2022,event:"Mentoria"},{d:6,m:6,y:2022,event:"Mentoria y Entrega avance en prototipo y an\xe1lisis de viabilidad"},{d:8,m:6,y:2022,event:"Mentoria"},{d:13,m:6,y:2022,event:"Mentoria y Entrega Prototipo Final, campa\xf1a publicitaria y estrat\xe9gia de mercadeo"},{d:15,m:6,y:2022,event:"Mentoria (pitch de piso 5) y Entrega Prototipo, validaci\xf3n de soluci\xf3n y pitch final"},{d:17,m:6,y:2022,event:"Ultimo plazo de enviar entregables Expoideas"},{d:19,m:6,y:2022,event:"Semana de Entrega prototipo, v\xeddeo y p\xe1gina web del trabajo del semestre"},{d:20,m:6,y:2022,event:"Semana de Entrega Evaluaci\xf3n de desempe\xf1o 2"},{d:21,m:6,y:2022,event:"TPI Expoideas"},{d:22,m:6,y:2022,event:"TPI Expoideas"},{d:27,m:6,y:2022,event:"Entrega apreciativa del mentor"},{d:29,m:6,y:2022,event:"Ultima clase TPI y Gran final Expoideas"}],L=i.ZP.div.withConfig({displayName:"calendar__Container",componentId:"sc-1izln6s-0"})(["position:relative;height:240px;width:100%;display:flex;justify-content:center;"]),R=i.ZP.div.withConfig({displayName:"calendar__Event",componentId:"sc-1izln6s-1"})(["position:absolute;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;border-radius:2em;background-color:#1920EF;color:white;width:100%;height:",";z-index:3;transition:.3s ease;"],(function(e){return e.active?"100%":"0"})),H=i.ZP.img.withConfig({displayName:"calendar__Close",componentId:"sc-1izln6s-2"})(["position:absolute;top:1em;right:1em;transition:.3s ease;:hover{cursor:pointer;transform:scale(1.2);}"]),A=i.ZP.h2.withConfig({displayName:"calendar__Title",componentId:"sc-1izln6s-3"})(["margin:0;"]),U=i.ZP.h3.withConfig({displayName:"calendar__DateT",componentId:"sc-1izln6s-4"})(["margin:0;"]),W=function(){var e=(0,a.useState)(null),n=e[0],t=e[1],i=T.find((function(e){return new Date(e.y,e.m-1,e.d).getTime()===(null===n||void 0===n?void 0:n.getTime())}));return(0,l.jsxs)(L,{children:[(0,l.jsx)(R,{active:i,children:i?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(U,{children:[i.d,"-",i.m,"-",i.y]}),(0,l.jsx)(A,{children:i.event}),(0,l.jsx)(H,{onClick:function(){t(null)},src:"".concat(s.O,"/imgs/exit.png")})]}):null}),(0,l.jsx)(B,{handleDay:function(e){t(e)},events:T})]})};i.ZP.div.withConfig({displayName:"miniprofile__Container",componentId:"sc-guowk3-0"})(["display:flex;justify-content:center;transition:.5s all;:hover{transform:translate(-9px);}"]),i.ZP.div.withConfig({displayName:"miniprofile__Img",componentId:"sc-guowk3-1"})(["background-color:#bbbbbb;border-radius:5px;width:60px;height:60px;"]),i.ZP.div.withConfig({displayName:"miniprofile__Prof",componentId:"sc-guowk3-2"})(["text-align:right;margin-right:10px;"]),i.ZP.div.withConfig({displayName:"miniprofile__Prof2",componentId:"sc-guowk3-3"})(["text-align:right;font-size:1.2em;@media screen and (max-width:1480px){font-size:1em;}"]),i.ZP.div.withConfig({displayName:"miniprofile__Prof3",componentId:"sc-guowk3-4"})(["text-align:right;font-size:1rem;@media screen and (max-width:1480px){font-size:0.8em;}"]);function q(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function J(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?q(Object(t),!0).forEach((function(n){(0,C.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):q(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var K=i.ZP.div.withConfig({displayName:"rightBar__Container",componentId:"sc-m5hjym-0"})(["grid-area:rb;display:flex;flex-direction:column;justify-content:space-evenly;background-color:#fff;padding:0px .5em;margin:5px 2px;height:98vh;box-shadow:-3px 0px 40px rgba(0,0,0,0.15);transition:all .3s ease-in;grid-column-gap:50px;@media screen and (max-width:800px){position:absolute;z-index:3;height:100%;width:'100%';top:0;right:",";margin:0;padding:60px 5px .5em 1em;}"],(function(e){return e.active?"0":"-1300px"})),Q=i.ZP.div.withConfig({displayName:"rightBar__ItemB",componentId:"sc-m5hjym-1"})(["display:flex;align-items:center;border-radius:1em;justify-content:center;box-shadow:2px 4px 6px rgba(0,0,0,0.4);background-color:#1920EF;color:white;padding:.5em 1em;font-weight:bold;font-size:1em;text-align:end;transition:0.3s;margin:10px;:hover{transform:scale(0.98);box-shadow:2px 2px 8px rgba(0,0,0,0.8);cursor:pointer;}@media screen and (max-width:800px){height:50px;font-size:.8em;font-weight:400;img{width:30px;}}"]),V=i.ZP.div.withConfig({displayName:"rightBar__Header",componentId:"sc-m5hjym-2"})(["position:absolute;display:flex;justify-content:flex-end;align-items:center;padding:.5em 1em;background-color:#1920EF;color:white;z-index:4;top:0;right:0;width:100%;height:60px;@media screen and (min-width:800px){display:none;}"]),Y=i.ZP.img.withConfig({displayName:"rightBar__CloseImg",componentId:"sc-m5hjym-3"})(["width:2.4em;transition:.3 ease;:hover{transform:scale(1.05);}"]),G=i.ZP.div.withConfig({displayName:"rightBar__HallFame",componentId:"sc-m5hjym-4"})(["display:flex;justify-content:center;align-items:center;min-height:50px;margin:10px;font-weight:bold;background:#FFC024;box-sizing:border-box;box-shadow:2px 4px 6px rgba(0,0,0,0.4);border-radius:10px;transition:.3s ease;:hover{transform:scale(1.03);cursor:pointer;}@media screen and (max-width:800px){height:50px;font-size:.8em;font-weight:400;img{width:30px;}}"]),X=i.ZP.h2.withConfig({displayName:"rightBar__Pis",componentId:"sc-m5hjym-5"})(["text-align:center;color:#1920EF;padding:2px;border-bottom:2px solid #1920EF;border-top:2px solid #1920EF;@media screen and (max-width:800px){font-size:14px;margin-top:20px;}"]),$=i.ZP.img.withConfig({displayName:"rightBar__Image",componentId:"sc-m5hjym-6"})(["margin-right:1em;"]),ee=i.ZP.div.withConfig({displayName:"rightBar__Contenedor",componentId:"sc-m5hjym-7"})(["overflow:auto;"]),ne=function(e){var n=e.active,t=e.close,i=(0,a.useState)(!1),o=i[0],c=i[1];(0,a.useEffect)((function(){c(!0)}),[]);var d=(0,k.L)(),p=(0,P.Z)(d,2),m=p[0],u=p[1],f=function(e){u(J(J({},m),{},{modal:{visibility:!0,type:e}}))},g=(0,I.LR)();return(0,l.jsxs)(K,{active:n,children:[(0,l.jsx)(V,{children:(0,l.jsx)(Y,{onClick:t,src:"".concat(s.O,"/imgs/exit.png")})}),(0,l.jsxs)(ee,{children:[(0,l.jsxs)(X,{children:["\xa1Estamos en el piso n\xfamero ",g,"!"]}),(0,l.jsx)(W,{}),(0,l.jsx)(N,{open:function(){return f("Noticiero")}}),(0,l.jsx)("a",{href:"https://drive.google.com/file/d/1gjLNIgF3h0M2DEksdszSECtPe2O439b7/view?usp=sharing",target:"_blank",rel:"noreferrer",children:(0,l.jsxs)(Q,{"data-tip":!0,"data-for":"dscTooltipPils",children:[(0,l.jsx)("img",{src:"".concat(s.O,"/imgs/pil2.png")}),"Pildoras de la semana"]})}),(0,l.jsxs)(G,{onClick:function(){return f("Salon de la Fama")},"data-tip":!0,"data-for":"dscTooltipHF",children:[(0,l.jsx)($,{src:"".concat(s.O,"/imgs/principal/hallfame.png"),alt:""}),"Salon de la Fama"]}),o&&(0,l.jsx)(r.Z,{id:"dscTooltipPils",place:"left",type:"info",children:"Informacion para la Semana"}),o&&(0,l.jsx)(r.Z,{id:"dscTooltipHF",place:"left",type:"info",children:"Tabla de Clasificaci\xf3n"})]})]})},te=i.ZP.div.withConfig({displayName:"MobBar__Container",componentId:"sc-9hwl8o-0"})(["position:absolute;height:50px;width:100%;background-color:#1920EF;z-index:1;display:flex;justify-content:center;align-items:center;@media screen and (min-width:800px){display:none;}"]),ie=i.ZP.img.withConfig({displayName:"MobBar__Img",componentId:"sc-9hwl8o-1"})(["height:35px;"]),oe=i.ZP.img.withConfig({displayName:"MobBar__Menu",componentId:"sc-9hwl8o-2"})(["position:absolute;right:1em;transition:.3s ease;:hover{transform:scale(1.1);cursor:pointer;}"]),re=function(e){var n=e.open;return(0,l.jsxs)(te,{children:[(0,l.jsx)(ie,{src:"".concat(s.O,"/imgs/main/QV_Blanco_horizontal.png")}),(0,l.jsx)(oe,{onClick:n,src:"".concat(s.O,"/imgs/menu.png")})]})},ae=i.ZP.div.withConfig({displayName:"qv__Container",componentId:"sc-198ybjb-0"})(['overflow:hidden;position:relative;background-color:#eee;width:100%;height:100vh;display:grid;transition:0.3s ease;grid-template-columns:1fr 4fr 1.3fr;grid-template-rows:auto;grid-template-areas:"sb  ct  rb";margin:0;@media screen and (max-width:800px){grid-template-columns:1fr;grid-template-rows:1fr;grid-template-areas:"ct";}']),se=i.ZP.div.withConfig({displayName:"qv__Content",componentId:"sc-198ybjb-1"})(["grid-area:ct;padding:0 2em 150px 2em;margin:0 .2em;overflow-y:scroll;display:flex;flex-direction:column;@media screen and (max-width:800px){padding:0 0 150px 0;}::-webkit-scrollbar-track{border:none;padding:10px 0;margin:10px 0;background-color:none;}::-webkit-scrollbar{width:5px;}::-webkit-scrollbar-thumb{border-radius:10px;background-color:#ccc;border:1px solid rgba(0,0,0,0);}"]),ce=function(e){var n=e.children,t=e.pg,i=(0,a.useState)(!1),o=i[0],r=i[1];return(0,l.jsxs)(ae,{children:[(0,l.jsx)(se,{children:n}),(0,l.jsx)(ne,{active:o,close:function(){r(!1)}}),(0,l.jsx)(v,{pg:t}),(0,l.jsx)(_,{pg:t}),(0,l.jsx)(re,{open:function(){return r(!0)}})]})}},7942:function(e,n,t){"use strict";var i=t(5696);n.default=void 0;var o,r=(o=t(7294))&&o.__esModule?o:{default:o},a=t(4957),s=t(9898),c=t(639);var d={};function l(e,n,t,i){if(e&&a.isLocalURL(n)){e.prefetch(n,t,i).catch((function(e){0}));var o=i&&"undefined"!==typeof i.locale?i.locale:e&&e.locale;d[n+"%"+t+(o?"%"+o:"")]=!0}}var p=function(e){var n,t=!1!==e.prefetch,o=s.useRouter(),p=r.default.useMemo((function(){var n=a.resolveHref(o,e.href,!0),t=i(n,2),r=t[0],s=t[1];return{href:r,as:e.as?a.resolveHref(o,e.as):s||r}}),[o,e.href,e.as]),m=p.href,u=p.as,f=e.children,g=e.replace,h=e.shallow,x=e.scroll,y=e.locale;"string"===typeof f&&(f=r.default.createElement("a",null,f));var v=(n=r.default.Children.only(f))&&"object"===typeof n&&n.ref,b=c.useIntersection({rootMargin:"200px"}),w=i(b,2),j=w[0],_=w[1],C=r.default.useCallback((function(e){j(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,j]);r.default.useEffect((function(){var e=_&&t&&a.isLocalURL(m),n="undefined"!==typeof y?y:o&&o.locale,i=d[m+"%"+u+(n?"%"+n:"")];e&&!i&&l(o,m,u,{locale:n})}),[u,m,_,y,t,o]);var P={ref:C,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,t,i,o,r,s,c){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(t))&&(e.preventDefault(),null==s&&i.indexOf("#")>=0&&(s=!1),n[o?"replace":"push"](t,i,{shallow:r,locale:c,scroll:s}))}(e,o,m,u,g,h,x,y)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),a.isLocalURL(m)&&l(o,m,u,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var I="undefined"!==typeof y?y:o&&o.locale,k=o&&o.isLocaleDomain&&a.getDomainLocale(u,I,o&&o.locales,o&&o.domainLocales);P.href=k||a.addBasePath(a.addLocale(u,I,o&&o.defaultLocale))}return r.default.cloneElement(n,P)};n.default=p},639:function(e,n,t){"use strict";var i=t(5696);Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!a,c=o.useRef(),d=o.useState(!1),l=i(d,2),p=l[0],m=l[1],u=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),t||p||e&&e.tagName&&(c.current=function(e,n,t){var i=function(e){var n=e.rootMargin||"",t=s.get(n);if(t)return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=i.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return s.set(n,t={id:n,observer:o,elements:i}),t}(t),o=i.id,r=i.observer,a=i.elements;return a.set(e,n),r.observe(e),function(){a.delete(e),r.unobserve(e),0===a.size&&(r.disconnect(),s.delete(o))}}(e,(function(e){return e&&m(e)}),{rootMargin:n}))}),[t,n,p]);return o.useEffect((function(){if(!a&&!p){var e=r.requestIdleCallback((function(){return m(!0)}));return function(){return r.cancelIdleCallback(e)}}}),[p]),[u,p]};var o=t(7294),r=t(6286),a="undefined"!==typeof IntersectionObserver;var s=new Map},1664:function(e,n,t){e.exports=t(7942)}}]);