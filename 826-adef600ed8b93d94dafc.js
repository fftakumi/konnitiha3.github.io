"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[826],{8826:function(e,t,n){n.r(t),n.d(t,{renderImageToString:function(){return h},swapPlaceholderImage:function(){return v}});var o,r=n(5861),i=n(4687),a=n.n(i),c=n(7059),u=n(7294),l=n(7762),s=(n(4811),new WeakMap),d=navigator.connection||navigator.mozConnection||navigator.webkitConnection,g=["image","loading","isLoading","isLoaded","imgClassName","imgStyle","objectPosition","backgroundColor","objectFit"];function b(e,t){e.style.opacity="1",t&&(t.style.opacity="0")}function f(e,t,n,o,r,i){var a=e.querySelector("[data-main-image]"),c=e.querySelector("[data-placeholder-image]"),u=n.has(t);function l(e){var t=this;this.removeEventListener("load",l);var n=e.currentTarget,o=new Image;o.src=n.currentSrc,o.decode?o.decode().then((function(){b(t,c),null==r||r({wasCached:u})})).catch((function(e){b(t,c),null==i||i(e)})):(b(this,c),null==r||r({wasCached:u}))}return a.addEventListener("load",l),null==o||o({wasCached:u}),Array.from(a.parentElement.children).forEach((function(e){var t=e.getAttribute("data-src"),n=e.getAttribute("data-srcset");t&&(e.removeAttribute("data-src"),e.setAttribute("src",t)),n&&(e.removeAttribute("data-srcset"),e.setAttribute("srcset",n))})),n.add(t),a.complete&&l.call(a,{currentTarget:a}),function(){a&&a.removeEventListener("load",l)}}function v(e,t,i,u,l,g,b){if(!(0,c.h)()){var v,h,m,w=(j=function(){v=f(e,t,i,l,g,b)},"IntersectionObserver"in window?(o||(o=new IntersectionObserver((function(e){e.forEach((function(e){var t;e.isIntersecting&&(null==(t=s.get(e.target))||t(),s.delete(e.target))}))}),{rootMargin:"4g"!==(null==d?void 0:d.effectiveType)||null!=d&&d.saveData?"2500px":"1250px"})),function(e){return s.set(e,j),o.observe(e),function(){o&&e&&(s.delete(e),o.unobserve(e))}}):function(){return j(),function(){}}),p=w(e);return"objectFit"in document.documentElement.style||(e.dataset.objectFit=null!=(h=u.objectFit)?h:"cover",e.dataset.objectPosition=""+(null!=(m=u.objectPosition)?m:"50% 50%"),(y=(0,r.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0="objectFitPolyfill"in window,e.t0){e.next=4;break}return e.next=4,n.e(231).then(n.t.bind(n,7231,23));case 4:window.objectFitPolyfill(t);case 5:case"end":return e.stop()}}),e)}))),function(e){return y.apply(this,arguments)})(e)),function(){v&&v(),p()}}var y,j;return f(e,t,i,l,g,b)}function h(e){var t=e.image,n=e.loading,o=void 0===n?"lazy":n,r=e.isLoading,i=e.isLoaded,a=e.imgClassName,s=e.imgStyle,d=void 0===s?{}:s,b=e.objectPosition,f=e.backgroundColor,v=e.objectFit,h=void 0===v?"cover":v,m=(0,c._)(e,g),w=t.width,p=t.height,y=t.layout,j=t.images,C=t.placeholder,k=t.backgroundColor;return d=(0,c.a)({objectFit:h,objectPosition:b,backgroundColor:f},d),(0,l.uS)(u.createElement(c.L,{layout:y,width:w,height:p},u.createElement(c.P,(0,c.a)({},(0,c.g)(C,i,y,w,p,k,h,b))),u.createElement(c.M,(0,c.a)({},m,{width:w,height:p,className:a},(0,c.b)(r,i,j,o,d)))))}}}]);
//# sourceMappingURL=826-adef600ed8b93d94dafc.js.map