"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[50],{4811:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},7059:function(e,t,a){a.d(t,{G:function(){return q},L:function(){return f},M:function(){return L},P:function(){return E},S:function(){return j},_:function(){return s},a:function(){return o},b:function(){return u},c:function(){return c},g:function(){return d},h:function(){return l}});var r=a(7294),n=(a(4811),a(5697)),i=a.n(n);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},o.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var l=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};var c=function(e){var t;return function(e){var t,a;return Boolean(null==e||null==(t=e.images)||null==(a=t.fallback)?void 0:a.src)}(e)?e:function(e){return Boolean(null==e?void 0:e.gatsbyImageData)}(e)?e.gatsbyImageData:function(e){return Boolean(null==e?void 0:e.gatsbyImage)}(e)?e.gatsbyImage:null==e||null==(t=e.childImageSharp)?void 0:t.gatsbyImageData};function u(e,t,a,r,n){return void 0===n&&(n={}),o({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:o({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,l){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),l&&(c.objectPosition=l);var u=o({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:o({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}var m,g=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){var t=e.children,a=s(e,g);return r.createElement(r.Fragment,null,r.createElement(p,o({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,l=void 0===i?"":i,c=e.shouldLoad,u=s(e,h);return r.createElement("img",o({},u,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:l}))},w=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,l=void 0===i||i,c=s(e,y),u=c.sizes||(null==t?void 0:t.sizes),d=r.createElement(v,o({},c,t,{sizes:u,shouldLoad:l}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,sizes:u})})),d):d};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var b=["fallback"],E=function(e){var t=e.fallback,a=s(e,b);return t?r.createElement(w,o({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",o({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(m=w.propTypes)?void 0:m.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var L=function(e){return r.createElement(r.Fragment,null,r.createElement(w,o({},e)),r.createElement("noscript",null,r.createElement(w,o({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=w.propTypes;var C,k,S=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),o=3;o<r;o++)n[o-3]=arguments[o];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:S},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],x=new Set,O=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,u=e.backgroundColor,d=e.className,m=e.class,g=e.onStartLoad,p=e.onLoad,f=e.onError,h=s(e,T),y=i.width,v=i.height,w=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(y,v,w),E=b.style,L=b.className,S=s(b,I),N=(0,r.useRef)(),O=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);m&&(d=m);var q=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,v);return(0,r.useEffect)((function(){C||(C=Promise.all([a.e(774),a.e(826)]).then(a.bind(a,8826)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=N.current.querySelector("[data-gatsby-image-ssr]");return r&&l()?(r.complete?(null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):document.addEventListener("load",(function e(){document.removeEventListener("load",e),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)})),void x.add(O)):k&&x.has(O)?void 0:(C.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;N.current&&(N.current.innerHTML=r(o({isLoading:!0,isLoaded:x.has(O),image:i},h)),x.has(O)||(e=requestAnimationFrame((function(){N.current&&(t=n(N.current,O,x,c,g,p,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){x.has(O)&&k&&(N.current.innerHTML=k(o({isLoading:x.has(O),isLoaded:x.has(O),image:i},h)),null==g||g({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,r.createElement)(n,o({},S,{style:o({},E,c,{backgroundColor:u}),className:L+(d?" "+d:""),ref:N,dangerouslySetInnerHTML:{__html:q},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));q.propTypes=N,q.displayName="GatsbyImage";var A,R=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions"],_=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},z=new Set(["fixed","fullWidth","constrained"]),M={src:i().string.isRequired,alt:S,width:_,height:_,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!z.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},j=(A=q,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,R);return n&&console.warn(n),a?r.createElement(A,o({image:a},i)):(console.warn("Image not loaded",t),null)});j.displayName="StaticImage",j.propTypes=M},8285:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(7294),n=a(1597),i="layout-module--nav-link-item--pfCo2",o="layout-module--nav-link-text--ac2nV",s=function(e){var t=e.pageTitle,a=e.children,s=(0,n.useStaticQuery)("3159585216");return r.createElement(r.Fragment,null,r.createElement("title",null,t," | ",s.site.siteMetadata.title),r.createElement("header",{className:"layout-module--site-title--5N6mf"},r.createElement(n.Link,{to:"/",className:"layout-module--nav-link-title--JEyJu"},s.site.siteMetadata.title)),r.createElement("div",{className:"layout-module--container--eLBMS"},r.createElement("nav",null,r.createElement("ul",{className:"layout-module--nav-links--EROwB"},r.createElement("li",{className:i},r.createElement(n.Link,{to:"/",className:o},"Home")),r.createElement("li",{className:i},r.createElement(n.Link,{to:"/app",className:o},"App")),r.createElement("li",{className:i},r.createElement(n.Link,{to:"/blog",className:o},"Blog")))),r.createElement("main",null,r.createElement("h1",{className:"layout-module--heading--8VjLO"},t),a)),r.createElement("footer",{className:"layout-module--site-footer--cSc3a"}))}}}]);
//# sourceMappingURL=117fb336e4bc1ede79596e75b5ae5d2880838c24-c894815c38884f8888bd.js.map