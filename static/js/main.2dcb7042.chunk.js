(this.webpackJsonpempire=this.webpackJsonpempire||[]).push([[0],{25:function(e,t,a){e.exports=a(43)},35:function(e,t,a){e.exports=a.p+"static/media/newlogo.7a3cc6f7.jpg"},36:function(e,t,a){e.exports=a.p+"static/media/video-placeholder.a622fc5d.jpg"},37:function(e,t,a){e.exports=a.p+"static/media/archi.568842c0.jpg"},38:function(e,t,a){e.exports=a.p+"static/media/web.f06387ee.jpg"},39:function(e,t,a){e.exports=a.p+"static/media/baug (1).c6bdcc96.jpg"},40:function(e,t,a){e.exports=a.p+"static/media/logo.55b45ff4.jpg"},41:function(e,t,a){e.exports=a.p+"static/media/logicsitic.0d0e6f8d.jpg"},42:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var i=a(0),l=a.n(i),n=a(22),r=a.n(n),o=a(11),s=a(6),c=a(2),m=function(e){var t=e.component,a=e.layout,i=Object(c.a)(e,["component","layout"]);return a=void 0===a?function(e){return l.a.createElement(l.a.Fragment,null,e.children)}:a,l.a.createElement(o.a,Object.assign({},i,{render:function(e){return l.a.createElement(a,null,l.a.createElement(t,e))}}))},d=a(10),u=a(3),v=a.n(u),p=a(18),b=l.a.forwardRef((function(e,t){var a=Object(i.useState)(window.innerHeight),n=Object(d.a)(a,2),r=n[0],o=n[1],s=Object(i.useState)([]),c=Object(d.a)(s,2),m=c[0],u=c[1],v=function(){return m.length<=document.querySelectorAll("[class*=reveal-].is-revealed").length},b=function(){if(!v())for(var e=function(e){var t=m[e],a=t.getAttribute("data-reveal-delay"),i=t.getAttribute("data-reveal-offset")?t.getAttribute("data-reveal-offset"):"200";(function(e,t){return e.getBoundingClientRect().top<=r-t})(t.getAttribute("data-reveal-container")?t.closest(t.getAttribute("data-reveal-container")):t,i)&&!t.classList.contains("is-revealed")&&(a&&0!==a?setTimeout((function(){t.classList.add("is-revealed")}),a):t.classList.add("is-revealed"))},t=0;t<m.length;t++)e(t)};Object(i.useImperativeHandle)(t,(function(){return{init:function(){u(document.querySelectorAll("[class*=reveal-]"))}}})),Object(i.useEffect)((function(){"undefined"!==typeof m&&m.length>0&&(v()||(window.addEventListener("scroll",h),window.addEventListener("resize",E)),b())}),[m]);var f=function(){v()&&(window.removeEventListener("scroll",h),window.removeEventListener("resize",E))},h=Object(p.throttle)((function(){f(),b()}),30),E=Object(p.throttle)((function(){o(window.innerHeight)}),30);return Object(i.useEffect)((function(){f(),b()}),[r]),l.a.createElement(l.a.Fragment,null,e.children())}));b.propTypes={children:v.a.func.isRequired};var f=b,h=a(14),E=a(1),g=a.n(E),N=a(8),O=function(e){var t=e.className,a=e.src,n=e.width,r=e.height,o=e.alt,s=Object(c.a)(e,["className","src","width","height","alt"]),m=Object(i.useState)(!1),u=Object(d.a)(m,2),v=u[0],p=u[1],b=Object(i.useRef)(null);Object(i.useEffect)((function(){f(b.current)}),[]);var f=function(e){var t,a,i=document.createElement("img");v||(e.style.display="none",e.before(i),i.src=(t=e.getAttribute("width")||0,a=e.getAttribute("height")||0,'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 '.concat(t," ").concat(a,'"%3E%3C/svg%3E')),i.width=e.getAttribute("width"),i.height=e.getAttribute("height"),i.style.opacity="0",e.className&&i.classList.add(e.className),i.remove(),e.style.display="")};return l.a.createElement("img",Object.assign({},s,{ref:b,className:t,src:a,width:n,height:r,alt:o,onLoad:function(){p(!0)}}))};O.defaultProps={src:void 0,width:void 0,height:void 0,alt:void 0};var w=O,j=function(e){var t=e.className,i=Object(c.a)(e,["className"]),n=g()("brand",t);return l.a.createElement("div",Object.assign({},i,{className:n}),l.a.createElement("h1",{className:"m-0"},l.a.createElement(N.a,{to:"/"},l.a.createElement(w,{src:a(35),alt:"Open",width:100,height:70}))))},x=function(e){var t=e.className,a=e.navPosition,n=e.hideNav,r=e.hideSignin,o=e.bottomOuterDivider,s=e.bottomDivider,m=Object(c.a)(e,["className","navPosition","hideNav","hideSignin","bottomOuterDivider","bottomDivider"]),u=Object(i.useState)(!1),v=Object(d.a)(u,2),p=v[0],b=v[1],f=Object(i.useRef)(null),h=Object(i.useRef)(null);Object(i.useEffect)((function(){return p&&E(),document.addEventListener("keydown",w),document.addEventListener("click",x),function(){document.removeEventListener("keydown",w),document.removeEventListener("click",x),O()}}));var E=function(){document.body.classList.add("off-nav-is-active"),f.current.style.maxHeight=f.current.scrollHeight+"px",b(!0)},O=function(){document.body.classList.remove("off-nav-is-active"),f.current&&(f.current.style.maxHeight=null),b(!1)},w=function(e){p&&27===e.keyCode&&O()},x=function(e){f.current&&p&&!f.current.contains(e.target)&&e.target!==h.current&&O()},D=g()("site-header",o&&"has-bottom-divider",t);return l.a.createElement("header",Object.assign({},m,{className:D}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-header-inner",s&&"has-bottom-divider")},l.a.createElement(j,null),!n&&l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{ref:h,className:"header-nav-toggle",onClick:p?O:E},l.a.createElement("span",{className:"screen-reader"},"Menu"),l.a.createElement("span",{className:"hamburger"},l.a.createElement("span",{className:"hamburger-inner"}))),l.a.createElement("nav",{ref:f,className:g()("header-nav",p&&"is-active")},l.a.createElement("div",{className:"header-nav-inner"},l.a.createElement("ul",{className:g()("list-reset text-xs",a&&"header-nav-".concat(a))},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:O},"About US"))),!r&&l.a.createElement("ul",{className:"list-reset header-nav-right"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0",onClick:O},"Contact")))))))))};x.defaultProps={navPosition:"",hideNav:!1,hideSignin:!1,bottomOuterDivider:!1,bottomDivider:!1};var D=x,y=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-nav",t);return l.a.createElement("nav",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"Contact")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"About us")),l.a.createElement("li",null,l.a.createElement(N.a,{to:"#0"},"Support"))))},C=a(13),k=function(e){var t=e.className,a=Object(c.a)(e,["className"]),i=g()("footer-social",t);return l.a.createElement("div",Object.assign({},a,{className:i}),l.a.createElement("ul",{className:"list-reset"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://facebook.com/"},l.a.createElement(C.a,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://wa.me/message/NQERYR7YT5XRB1"},l.a.createElement(C.c,null))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://instagram.com/pranav_kunjir96?utm_medium=copy_link"},l.a.createElement(C.b,null)))))},L=function(e){var t=e.className,a=e.topOuterDivider,i=e.topDivider,n=Object(c.a)(e,["className","topOuterDivider","topDivider"]),r=g()("site-footer center-content-mobile",a&&"has-top-divider",t);return l.a.createElement("footer",Object.assign({},n,{className:r}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:g()("site-footer-inner",i&&"has-top-divider")},l.a.createElement("div",{className:"footer-top space-between text-xxs"},l.a.createElement(j,null),l.a.createElement(k,null)),l.a.createElement("div",{className:"footer-bottom space-between text-xxs invert-order-desktop"},l.a.createElement(y,null),l.a.createElement("div",{className:"footer-copyright"},"Made by ",l.a.createElement("a",{href:"https://cruip.com"},"Cruip"),". All right reserved")))))};L.defaultProps={topOuterDivider:!1,topDivider:!1};var q=L,P=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(D,{navPosition:"right",className:"reveal-from-bottom"}),l.a.createElement("main",{className:"site-content"},t),l.a.createElement(q,null))},F=a(5),S={types:{topOuterDivider:v.a.bool,bottomOuterDivider:v.a.bool,topDivider:v.a.bool,bottomDivider:v.a.bool,hasBgColor:v.a.bool,invertColor:v.a.bool},defaults:{topOuterDivider:!1,bottomOuterDivider:!1,topDivider:!1,bottomDivider:!1,hasBgColor:!1,invertColor:!1}},A={types:Object(F.a)({},S.types),defaults:Object(F.a)({},S.defaults)},H={types:Object(F.a)({},S.types,{invertMobile:v.a.bool,invertDesktop:v.a.bool,alignTop:v.a.bool,imageFill:v.a.bool}),defaults:Object(F.a)({},S.defaults,{invertMobile:!1,invertDesktop:!1,alignTop:!1,imageFill:!1})},B={types:Object(F.a)({},S.types,{pushLeft:v.a.bool}),defaults:Object(F.a)({},S.defaults,{pushLeft:!1})},T=function(e){var t=e.className,a=e.tag,i=e.color,n=e.size,r=e.loading,o=e.wide,s=e.wideMobile,m=e.disabled,d=Object(c.a)(e,["className","tag","color","size","loading","wide","wideMobile","disabled"]),u=g()("button",i&&"button-".concat(i),n&&"button-".concat(n),r&&"is-loading",o&&"button-block",s&&"button-wide-mobile",t),v=a;return l.a.createElement(v,Object.assign({},d,{className:u,disabled:m}))};T.defaultProps={tag:"button",color:"",size:"",loading:!1,wide:!1,wideMobile:!1,disabled:!1};var R=function(e){var t=e.className,a=e.children,n=e.handleClose,r=e.show,o=e.closeHidden,s=e.video,m=e.videoTag,d=Object(c.a)(e,["className","children","handleClose","show","closeHidden","video","videoTag"]);Object(i.useEffect)((function(){return document.addEventListener("keydown",v),document.addEventListener("click",p),function(){document.removeEventListener("keydown",v),document.removeEventListener("click",p)}})),Object(i.useEffect)((function(){u()}),[d.show]);var u=function(){document.querySelectorAll(".modal.is-active").length?document.body.classList.add("modal-is-active"):document.body.classList.remove("modal-is-active")},v=function(e){27===e.keyCode&&n(e)},p=function(e){e.stopPropagation()},b=g()("modal",r&&"is-active",s&&"modal-video",t);return l.a.createElement(l.a.Fragment,null,r&&l.a.createElement("div",Object.assign({},d,{className:b,onClick:n}),l.a.createElement("div",{className:"modal-inner",onClick:p},s?l.a.createElement("div",{className:"responsive-video"},"iframe"===m?l.a.createElement("iframe",{title:"video",src:s,frameBorder:"0",allowFullScreen:!0}):l.a.createElement("video",{"v-else":!0,controls:!0,src:s})):l.a.createElement(l.a.Fragment,null,!o&&l.a.createElement("button",{className:"modal-close","aria-label":"close",onClick:n}),l.a.createElement("div",{className:"modal-content"},a)))))};R.defaultProps={children:null,show:!1,closeHidden:!1,video:"",videoTag:"iframe"};var _=R,M=Object(F.a)({},A.defaults),z=function(e){var t=e.className,n=e.topOuterDivider,r=e.bottomOuterDivider,o=e.topDivider,s=e.bottomDivider,m=e.hasBgColor,u=e.invertColor,v=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor"]),p=Object(i.useState)(!1),b=Object(d.a)(p,2),f=b[0],h=b[1],E=g()("hero section center-content",n&&"has-top-divider",r&&"has-bottom-divider",m&&"has-bg-color",u&&"invert-color",t),N=g()("hero-inner section-inner",o&&"has-top-divider",s&&"has-bottom-divider");return l.a.createElement("section",Object.assign({},v,{className:E}),l.a.createElement("div",{className:"container-sm"},l.a.createElement("div",{className:N},l.a.createElement("div",{className:"hero-content"},l.a.createElement("h1",{className:"mt-0 mb-16 reveal-from-bottom","data-reveal-delay":"200"},"Empire-gfx"),l.a.createElement("div",{className:"container-xs"},l.a.createElement("p",{className:"m-0 mb-32 reveal-from-bottom","data-reveal-delay":"400"},"Group of Unity"))),l.a.createElement("div",{className:"hero-figure reveal-from-bottom illustration-element-01","data-reveal-value":"20px","data-reveal-delay":"800"},l.a.createElement("a",{"data-video":"https://player.vimeo.com/video/174002812",href:"#0","aria-controls":"video-modal",onClick:function(e){e.preventDefault(),h(!0)}},l.a.createElement(w,{className:"has-shadow",src:a(36),alt:"Hero",width:896,height:504}))),l.a.createElement(_,{id:"video-modal",show:f,handleClose:function(e){e.preventDefault(),h(!1)},video:"https://player.vimeo.com/video/174002812",videoTag:"iframe"}))))};z.defaultProps=M;var U=z,I=function(e){var t=e.className,a=e.data,i=e.children,n=e.tag,r=Object(c.a)(e,["className","data","children","tag"]),o=g()("section-header",t),s=n;return l.a.createElement(l.a.Fragment,null,(a.title||a.paragraph)&&l.a.createElement("div",Object.assign({},r,{className:o}),l.a.createElement("div",{className:"container-xs"},i,a.title&&l.a.createElement(s,{className:g()("mt-0",a.paragraph?"mb-16":"mb-0")},a.title),a.paragraph&&l.a.createElement("p",{className:"m-0"},a.paragraph))))};I.defaultProps={children:null,tag:"h2"};var W=I,G=Object(F.a)({},B.defaults),K=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("features-tiles section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("features-tiles-inner section-inner pt-0",n&&"has-top-divider",r&&"has-bottom-divider");g()("tiles-wrap center-content",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(W,{data:{title:"Multiple services just in one click!!"},className:"center-content"}))))};K.defaultProps=G;var Y=K,J=Object(F.a)({},H.defaults),V=function(e){var t=e.className,i=e.topOuterDivider,n=e.bottomOuterDivider,r=e.topDivider,o=e.bottomDivider,s=e.hasBgColor,m=e.invertColor,d=e.invertMobile,u=e.invertDesktop,v=e.alignTop,p=e.imageFill,b=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","invertMobile","invertDesktop","alignTop","imageFill"]),f=g()("features-split section",i&&"has-top-divider",n&&"has-bottom-divider",s&&"has-bg-color",m&&"invert-color",t),h=g()("features-split-inner section-inner",r&&"has-top-divider",o&&"has-bottom-divider"),E=g()("split-wrap",d&&"invert-mobile",u&&"invert-desktop",v&&"align-top");return l.a.createElement("section",Object.assign({},b,{className:f}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:h},l.a.createElement(W,{data:{title:"Workflow that just works",paragraph:"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum \u2014 semper quis lectus nulla at volutpat diam ut venenatis."},className:"center-content"}),l.a.createElement("div",{className:E},l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(37),alt:"Features split 01",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-right","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(38),alt:"Features split 02",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(39),alt:"Features split 03",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(40),alt:"Features split 03",width:528,height:396}))),l.a.createElement("div",{className:"split-item"},l.a.createElement("div",{className:"split-item-content center-content-mobile reveal-from-left","data-reveal-container":".split-item"},l.a.createElement("div",{className:"text-xxs text-color-primary fw-600 tt-u mb-8"},"Lightning fast workflow"),l.a.createElement("h3",{className:"mt-0 mb-12"},"Data-driven insights"),l.a.createElement("p",{className:"m-0"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua \u2014 Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.")),l.a.createElement("div",{className:g()("split-item-image center-content-mobile reveal-from-bottom",p&&"split-item-image-fill"),"data-reveal-container":".split-item"},l.a.createElement(w,{src:a(41),alt:"Features split 03",width:528,height:396})))))))};V.defaultProps=J;var Q=V,X=Object(F.a)({},B.defaults),$=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.pushLeft,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","pushLeft"]),u=g()("testimonial section",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("testimonial-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider"),p=g()("tiles-wrap",m&&"push-left");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement(W,{data:{title:"Customer testimonials",paragraph:"Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus\u2014in ornare."},className:"center-content"}),l.a.createElement("div",{className:p},l.a.createElement("div",{className:"tiles-item reveal-from-right","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Roman Level"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-bottom"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Diana Rynzhuk"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName"))))),l.a.createElement("div",{className:"tiles-item reveal-from-left","data-reveal-delay":"200"},l.a.createElement("div",{className:"tiles-item-inner"},l.a.createElement("div",{className:"testimonial-item-content"},l.a.createElement("p",{className:"text-sm mb-0"},"\u2014 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum cillum dolore eu fugiat.")),l.a.createElement("div",{className:"testimonial-item-footer text-xs mt-32 mb-0 has-top-divider"},l.a.createElement("span",{className:"testimonial-item-name text-color-high"},"Ben Stafford"),l.a.createElement("span",{className:"text-color-low"}," / "),l.a.createElement("span",{className:"testimonial-item-link"},l.a.createElement("a",{href:"#0"},"AppName")))))))))};$.defaultProps=X;var Z=$,ee=function(e){var t=e.className,a=e.children,i=e.labelHidden,n=e.id,r=Object(c.a)(e,["className","children","labelHidden","id"]),o=g()("form-label",i&&"screen-reader",t);return l.a.createElement("label",Object.assign({},r,{className:o,htmlFor:n}),a)};ee.defaultProps={children:null,labelHidden:!1,id:null};var te=ee,ae=function(e){var t=e.children,a=e.className,i=e.status,n=Object(c.a)(e,["children","className","status"]),r=g()("form-hint",i&&"text-color-".concat(i),a);return l.a.createElement("div",Object.assign({},n,{className:r}),t)};ae.defaultProps={children:null,status:!1};var ie=ae,le=function(e){var t=e.className,a=e.children,i=e.label,n=e.labelHidden,r=e.type,o=e.name,s=e.status,m=e.disabled,d=e.value,u=e.formGroup,v=e.hasIcon,p=e.size,b=e.placeholder,f=e.rows,h=e.hint,E=Object(c.a)(e,["className","children","label","labelHidden","type","name","status","disabled","value","formGroup","hasIcon","size","placeholder","rows","hint"]),N=g()(u&&""!==u&&("desktop"===u?"form-group-desktop":"form-group"),v&&""!==v&&"has-icon-"+v),O=g()("form-input",p&&"form-input-".concat(p),s&&"form-".concat(s),t),w="textarea"===r?"textarea":"input";return l.a.createElement(l.a.Fragment,null,i&&l.a.createElement(te,{labelHidden:n,id:E.id},i),l.a.createElement("div",{className:N},l.a.createElement(w,Object.assign({},E,{type:"textarea"!==r?r:null,className:O,name:o,disabled:m,value:d,placeholder:b,rows:"textarea"===r?f:null})),a),h&&l.a.createElement(ie,{status:s},h))};le.defaultProps={children:null,label:"",labelHidden:!1,type:"text",name:void 0,status:"",disabled:!1,value:void 0,formGroup:null,hasIcon:null,size:"",placeholder:"",rows:3,hint:null};var ne=le,re=Object(F.a)({},A.defaults,{split:!1}),oe=function(e){var t=e.className,a=e.topOuterDivider,i=e.bottomOuterDivider,n=e.topDivider,r=e.bottomDivider,o=e.hasBgColor,s=e.invertColor,m=e.split,d=Object(c.a)(e,["className","topOuterDivider","bottomOuterDivider","topDivider","bottomDivider","hasBgColor","invertColor","split"]),u=g()("cta section center-content-mobile reveal-from-bottom",a&&"has-top-divider",i&&"has-bottom-divider",o&&"has-bg-color",s&&"invert-color",t),v=g()("cta-inner section-inner",n&&"has-top-divider",r&&"has-bottom-divider",m&&"cta-split");return l.a.createElement("section",Object.assign({},d,{className:u}),l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:v},l.a.createElement("div",{className:"cta-slogan"},l.a.createElement("h3",{className:"m-0"},"For previewing layouts and visual?")),l.a.createElement("div",{className:"cta-action"},l.a.createElement(ne,{id:"newsletter",type:"email",label:"Subscribe",labelHidden:!0,hasIcon:"right",placeholder:"Your best email"},l.a.createElement("svg",{width:"16",height:"12",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:"M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z",fill:"#376DF9"})))))))};oe.defaultProps=re;var se=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(U,{className:"illustration-section-01"}),l.a.createElement(Y,null),l.a.createElement(Q,{invertMobile:!0,topDivider:!0,imageFill:!0,className:"illustration-section-02"}),l.a.createElement(Z,{topDivider:!0}))};h.a.initialize(Object({NODE_ENV:"production",PUBLIC_URL:"/empire",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_GA_CODE);var ce=function(){var e=Object(i.useRef)(),t=Object(o.f)();return Object(i.useEffect)((function(){var a=t.pathname;document.body.classList.add("is-loaded"),e.current.init(),function(e){h.a.set({page:e}),h.a.pageview(e)}(a)}),[t]),l.a.createElement(f,{ref:e,children:function(){return l.a.createElement(o.c,null,l.a.createElement(m,{exact:!0,path:"/",component:se,layout:P}))}})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(42);var me=Object(s.a)();r.a.render(l.a.createElement(o.b,{history:me},l.a.createElement(ce,null),l.a.createElement("h1",null,"happy")),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[25,1,2]]]);
//# sourceMappingURL=main.2dcb7042.chunk.js.map