!function(){function t(){}function e(t,e){this.path=t,"undefined"!=typeof e&&null!==e?(this.at_2x_path=e,this.perform_check=!1):(this.at_2x_path=t.replace(/\.\w+$/,function(t){return"@2x"+t}),this.perform_check=!0)}function i(t){this.el=t,this.path=new e(this.el.getAttribute("src"),this.el.getAttribute("data-at2x"));var i=this;this.path.check_2x_variant(function(t){t&&i.swap()})}var n="undefined"==typeof exports?window:exports,s={check_mime_type:!0};n.Retina=t,t.configure=function(t){null==t&&(t={});for(var e in t)s[e]=t[e]},t.init=function(t){null==t&&(t=n);var e=t.onload||new Function;t.onload=function(){var t,n,s=document.getElementsByTagName("img"),a=[];for(t=0;t<s.length;t++)n=s[t],a.push(new i(n));e()}},t.isRetina=function(){var t="(-webkit-min-device-pixel-ratio: 1.5),                      (min--moz-device-pixel-ratio: 1.5),                      (-o-min-device-pixel-ratio: 3/2),                      (min-resolution: 1.5dppx)";return n.devicePixelRatio>1||!(!n.matchMedia||!n.matchMedia(t).matches)},n.RetinaImagePath=e;var a,o,r;if(localStorage){if(localStorage.retinajs_confirmed_paths)try{e.confirmed_paths=JSON.parse(localStorage.retinajs_confirmed_paths)}catch(t){e.confirmed_paths={}}else e.confirmed_paths={};if(localStorage.retinajs_skip_paths)try{e.skip_paths=JSON.parse(localStorage.retinajs_skip_paths)}catch(t){e.skip_paths={}}else e.skip_paths={};a=!1,o=function(){a||(a=!0,setTimeout(r,10))},r=function(){if(localStorage)try{localStorage.retinajs_confirmed_paths=JSON.stringify(e.confirmed_paths),localStorage.retinajs_skip_paths=JSON.stringify(e.skip_paths)}catch(t){o=r=function(){}}a=!1}}else e.confirmed_paths={},e.skip_paths={},o=r=function(){};e.prototype.is_external=function(){return!(!this.path.match(/^https?\:/i)||this.path.match("//"+document.domain))},e.prototype.check_2x_variant=function(t){var i,n=this;return this.is_external()?t(!1):e.skip_paths[this.at_2x_path]?t(!1):e.confirmed_paths[this.at_2x_path]?t(!0):(i=new XMLHttpRequest,i.open("HEAD",this.at_2x_path),i.onreadystatechange=function(){if(4!=i.readyState)return t(!1);if(i.status>=200&&i.status<=399){if(s.check_mime_type){var a=i.getResponseHeader("Content-Type");if(null==a||!a.match(/^image/i))return e.skip_paths[n.at_2x_path]=1,o(),t(!1)}return e.confirmed_paths[n.at_2x_path]=1,o(),t(!0)}return e.skip_paths[n.at_2x_path]=1,o(),t(!1)},i.send(),void 0)},n.RetinaImage=i,i.prototype.swap=function(t){function e(){i.el.complete?(i.el.setAttribute("width",i.el.offsetWidth),i.el.setAttribute("height",i.el.offsetHeight),i.el.setAttribute("src",t)):setTimeout(e,5)}"undefined"==typeof t&&(t=this.path.at_2x_path);var i=this;e()},t.isRetina()&&t.init(n)}(),function(t){t.fn.superfish=function(e){var i=t.fn.superfish,n=i.c,s=t(['<span class="',n.arrowClass,'"> &#187;</span>'].join("")),a=function(){var e=t(this),i=r(e);clearTimeout(i.sfTimer),e.showSuperfishUl().siblings().hideSuperfishUl()},o=function(){var e=t(this),n=r(e),s=i.op;clearTimeout(n.sfTimer),n.sfTimer=setTimeout(function(){s.retainPath=t.inArray(e[0],s.$path)>-1,e.hideSuperfishUl(),s.$path.length&&e.parents(["li.",s.hoverClass].join("")).length<1&&a.call(s.$path)},s.delay)},r=function(t){var e=t.parents(["ul.",n.menuClass,":first"].join(""))[0];return i.op=i.o[e.serial],e},h=function(t){t.addClass(n.anchorClass).append(s.clone())};return this.each(function(){var s=this.serial=i.o.length,r=t.extend({},i.defaults,e);r.$path=t("li."+r.pathClass,this).slice(0,r.pathLevels).each(function(){t(this).addClass([r.hoverClass,n.bcClass].join(" ")).filter("li:has(ul)").removeClass(r.pathClass)}),i.o[s]=i.op=r,t("li:has(ul)",this)[t.fn.hoverIntent&&!r.disableHI?"hoverIntent":"hover"](a,o).each(function(){r.autoArrows&&h(t(">a:first-child",this))}).not("."+n.bcClass).hideSuperfishUl();var c=t("a",this);c.each(function(t){var e=c.eq(t).parents("li");c.eq(t).focus(function(){a.call(e)}).blur(function(){o.call(e)})}),r.onInit.call(this)}).each(function(){var e=[n.menuClass];!i.op.dropShadows||t.browser.msie&&t.browser.version<7||e.push(n.shadowClass),t(this).addClass(e.join(" "))})};var e=t.fn.superfish;e.o=[],e.op={},e.IE7fix=function(){var i=e.op;t.browser.msie&&t.browser.version>6&&i.dropShadows&&void 0!=i.animation.opacity&&this.toggleClass(e.c.shadowClass+"-off")},e.c={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",arrowClass:"sf-sub-indicator",shadowClass:"sf-shadow"},e.defaults={hoverClass:"sfHover",pathClass:"overideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},speed:"normal",autoArrows:!0,dropShadows:!0,disableHI:!1,onInit:function(){},onBeforeShow:function(){},onShow:function(){},onHide:function(){}},t.fn.extend({hideSuperfishUl:function(){var i=e.op,n=i.retainPath===!0?i.$path:"";i.retainPath=!1;var s=t(["li.",i.hoverClass].join(""),this).add(this).not(n).removeClass(i.hoverClass).find(">ul").hide().css("visibility","hidden");return i.onHide.call(s),this},showSuperfishUl:function(){var t=e.op,i=(e.c.shadowClass+"-off",this.addClass(t.hoverClass).find(">ul:hidden").css("visibility","visible"));return e.IE7fix.call(i),t.onBeforeShow.call(i),i.animate(t.animation,t.speed,function(){e.IE7fix.call(i),t.onShow.call(i)}),this}})}(jQuery),function(t){t.fn.supersubs=function(e){var i=t.extend({},t.fn.supersubs.defaults,e);return this.each(function(){var e=t(this),n=t.meta?t.extend({},i,e.data()):i,s=t('<li id="menu-fontsize">&#8212;</li>').css({padding:0,position:"absolute",top:"-999em",width:"auto"}).appendTo(e).width();t("#menu-fontsize").remove(),$ULs=e.find("ul"),$ULs.each(function(e){var i=$ULs.eq(e),a=i.children(),o=a.children("a"),r=a.css("white-space","nowrap").css("float"),h=i.add(a).add(o).css({"float":"none",width:"auto"}).end().end()[0].clientWidth/s;h+=n.extraWidth,h>n.maxWidth?h=n.maxWidth:h<n.minWidth&&(h=n.minWidth),h+="em",i.css("width",h),a.css({"float":r,width:"100%","white-space":"normal"}).each(function(){var e=t(">ul",this),i=void 0!==e.css("left")?"left":"right";e.css(i,h)})})})},t.fn.supersubs.defaults={minWidth:9,maxWidth:25,extraWidth:0}}(jQuery);/*! responsive-nav.js v1.0.20 by @viljamis, http://responsive-nav.com, MIT license */
var responsiveNav=function(t,e){var i=!!t.getComputedStyle;t.getComputedStyle||(t.getComputedStyle=function(t){return this.el=t,this.getPropertyValue=function(e){var i=/(\-([a-z]){1})/g;return"float"===e&&(e="styleFloat"),i.test(e)&&(e=e.replace(i,function(t,e,i){return i.toUpperCase()})),t.currentStyle[e]?t.currentStyle[e]:null},this});var n,s,a,o,r,h=e.createElement("style"),c=function(t,e,i,n){if("addEventListener"in t)try{t.addEventListener(e,i,n)}catch(s){if("object"!=typeof i||!i.handleEvent)throw s;t.addEventListener(e,function(t){i.handleEvent.call(i,t)},n)}else"attachEvent"in t&&("object"==typeof i&&i.handleEvent?t.attachEvent("on"+e,function(){i.handleEvent.call(i)}):t.attachEvent("on"+e,i))},l=function(t,e,i,n){if("removeEventListener"in t)try{t.removeEventListener(e,i,n)}catch(s){if("object"!=typeof i||!i.handleEvent)throw s;t.removeEventListener(e,function(t){i.handleEvent.call(i,t)},n)}else"detachEvent"in t&&("object"==typeof i&&i.handleEvent?t.detachEvent("on"+e,function(){i.handleEvent.call(i)}):t.detachEvent("on"+e,i))},d=function(t){if(1>t.children.length)throw Error("The Nav container has no containing elements");for(var e=[],i=0;i<t.children.length;i++)1===t.children[i].nodeType&&e.push(t.children[i]);return e},u=function(t,e){for(var i in e)t.setAttribute(i,e[i])},p=function(t,e){t.className+=" "+e,t.className=t.className.replace(/(^\s*)|(\s*$)/g,"")},f=function(t,e){t.className=t.className.replace(RegExp("(\\s|^)"+e+"(\\s|$)")," ").replace(/(^\s*)|(\s*$)/g,"")},m=function(t,i){var a;this.options={animate:!0,transition:350,label:"Menu",insert:"after",customToggle:"",openPos:"relative",jsClass:"js",init:function(){},open:function(){},close:function(){}};for(a in i)this.options[a]=i[a];if(p(e.documentElement,this.options.jsClass),this.wrapperEl=t.replace("#",""),!e.getElementById(this.wrapperEl))throw Error("The nav element you are trying to select doesn't exist");this.wrapper=e.getElementById(this.wrapperEl),this.wrapper.inner=d(this.wrapper),s=this.options,n=this.wrapper,this._init(this)};m.prototype={destroy:function(){this._removeStyles(),f(n,"closed"),f(n,"opened"),n.removeAttribute("style"),n.removeAttribute("aria-hidden"),v=n=null,l(t,"resize",this,!1),l(e.body,"touchmove",this,!1),l(a,"touchstart",this,!1),l(a,"touchend",this,!1),l(a,"keyup",this,!1),l(a,"click",this,!1),l(a,"mouseup",this,!1),s.customToggle?a.removeAttribute("aria-hidden"):a.parentNode.removeChild(a)},toggle:function(){!0===o&&(r?(f(n,"opened"),p(n,"closed"),u(n,{"aria-hidden":"true"}),s.animate?(o=!1,setTimeout(function(){n.style.position="absolute",o=!0},s.transition+10)):n.style.position="absolute",r=!1,s.close()):(f(n,"closed"),p(n,"opened"),n.style.position=s.openPos,u(n,{"aria-hidden":"false"}),r=!0,s.open()))},handleEvent:function(e){switch(e=e||t.event,e.type){case"touchstart":this._onTouchStart(e);break;case"touchmove":this._onTouchMove(e);break;case"touchend":case"mouseup":this._onTouchEnd(e);break;case"click":this._preventDefault(e);break;case"keyup":this._onKeyUp(e);break;case"resize":this._resize(e)}},_init:function(){p(n,"closed"),o=!0,r=!1,this._createToggle(),this._transitions(),this._resize(),c(t,"resize",this,!1),c(e.body,"touchmove",this,!1),c(a,"touchstart",this,!1),c(a,"touchend",this,!1),c(a,"mouseup",this,!1),c(a,"keyup",this,!1),c(a,"click",this,!1),s.init()},_createStyles:function(){h.parentNode||e.getElementsByTagName("head")[0].appendChild(h)},_removeStyles:function(){h.parentNode&&h.parentNode.removeChild(h)},_createToggle:function(){if(s.customToggle){var t=s.customToggle.replace("#","");if(!e.getElementById(t))throw Error("The custom nav toggle you are trying to select doesn't exist");a=e.getElementById(t)}else t=e.createElement("a"),t.innerHTML=s.label,u(t,{href:"#",id:"nav-toggle"}),"after"===s.insert?n.parentNode.insertBefore(t,n.nextSibling):n.parentNode.insertBefore(t,n),a=e.getElementById("nav-toggle")},_preventDefault:function(t){t.preventDefault?(t.preventDefault(),t.stopPropagation()):t.returnValue=!1},_onTouchStart:function(t){t.stopPropagation(),this.startX=t.touches[0].clientX,this.startY=t.touches[0].clientY,this.touchHasMoved=!1,l(a,"mouseup",this,!1)},_onTouchMove:function(t){(10<Math.abs(t.touches[0].clientX-this.startX)||10<Math.abs(t.touches[0].clientY-this.startY))&&(this.touchHasMoved=!0)},_onTouchEnd:function(e){if(this._preventDefault(e),!this.touchHasMoved)if("touchend"===e.type){this.toggle(e);var i=this;n.addEventListener("click",i._preventDefault,!0),setTimeout(function(){n.removeEventListener("click",i._preventDefault,!0)},s.transition+100)}else{var a=e||t.event;3!==a.which&&2!==a.button&&this.toggle(e)}},_onKeyUp:function(e){13===(e||t.event).keyCode&&this.toggle(e)},_transitions:function(){if(s.animate){var t=n.style,e="max-height "+s.transition+"ms";t.WebkitTransition=e,t.MozTransition=e,t.OTransition=e,t.transition=e}},_calcHeight:function(){for(var t=0,e=0;e<n.inner.length;e++)t+=n.inner[e].offsetHeight;t="#"+this.wrapperEl+".opened{max-height:"+t+"px}",i&&(h.innerHTML=t)},_resize:function(){"none"!==t.getComputedStyle(a,null).getPropertyValue("display")?(u(a,{"aria-hidden":"false"}),n.className.match(/(^|\s)closed(\s|$)/)&&(u(n,{"aria-hidden":"true"}),n.style.position="absolute"),this._createStyles(),this._calcHeight()):(u(a,{"aria-hidden":"true"}),u(n,{"aria-hidden":"false"}),n.style.position=s.openPos,this._removeStyles())}};var v;return function(t,e){return v||(v=new m(t,e)),v}}(window,document);/*!
* FitVids 1.0
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
* Date: Thu Sept 01 18:00:00 2011 -0500
*/
!function(t){t.fn.fitVids=function(e){var i={customSelector:null};if(!document.getElementById("fit-vids-style")){var n=document.createElement("div"),s=document.getElementsByTagName("base")[0]||document.getElementsByTagName("script")[0],a="&shy;<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";n.className="fit-vids-style",n.id="fit-vids-style",n.style.display="none",n.innerHTML=a,s.parentNode.insertBefore(n,s)}return e&&t.extend(i,e),this.each(function(){var e=["iframe[src*='player.vimeo.com']","iframe[src*='youtube.com']","iframe[src*='youtube-nocookie.com']","iframe[src*='kickstarter.com'][src*='video.html']","object","embed"];i.customSelector&&e.push(i.customSelector);var n=t(this).find(e.join(","));n=n.not("object object"),n.each(function(){var e=t(this);if(!("embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){var i="object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height(),n=isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10),s=i/n;if(!e.attr("id")){var a="fitvid"+Math.floor(999999*Math.random());e.attr("id",a)}e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*s+"%"),e.removeAttr("height").removeAttr("width")}})})}}(window.jQuery||window.Zepto),/*!
 * headroom.js v0.3.9 - Give your page some headroom. Hide your header until you need it
 * Copyright (c) 2013 Nick Williams - http://wicky.nillia.ms/
 * License: MIT
 */
!function(t){"use strict";function e(t){this.callback=t,this.ticking=!1}function i(t,n){n=n||i.options,this.lastKnownScrollY=0,this.elem=t,this.debouncer=new e(this.update.bind(this)),this.tolerance=n.tolerance,this.classes=n.classes,this.offset=n.offset}window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame,e.prototype={constructor:e,update:function(){this.callback&&this.callback(),this.ticking=!1},requestTick:function(){this.ticking||(requestAnimationFrame(this.update.bind(this)),this.ticking=!0)},handleEvent:function(){this.requestTick()}},i.prototype={constructor:i,init:function(){this.elem.classList.add(this.classes.initial),setTimeout(this.attachEvent.bind(this),100)},destroy:function(){window.removeEventListener("scroll",this.eventHandler,!1),this.eventHandler=null,this.elem.classList.remove(this.classes.unpinned,this.classes.pinned,this.classes.initial)},attachEvent:function(){this.eventHandler||(this.eventHandler=this.debouncer.handleEvent.bind(this.debouncer),window.addEventListener("scroll",this.eventHandler,!1))},unpin:function(){this.elem.classList.add(this.classes.unpinned),this.elem.classList.remove(this.classes.pinned)},pin:function(){this.elem.classList.remove(this.classes.unpinned),this.elem.classList.add(this.classes.pinned)},update:function(){var t=window.scrollY,e=Math.abs(t-this.lastKnownScrollY)>=this.tolerance;0>t||(e&&(t>this.lastKnownScrollY&&t>=this.offset?this.unpin():t<this.lastKnownScrollY&&this.pin()),this.lastKnownScrollY=t)}},i.options={tolerance:0,offset:0,classes:{pinned:"headroom--pinned",unpinned:"headroom--unpinned",initial:"headroom"}},t.Headroom=i}(this),!function(t){t.fn.headroom=function(e){return this.each(function(){var i=t(this),n=i.data("headroom"),s="object"==typeof e&&e;s=t.extend(!0,{},Headroom.options,s),n||(n=new Headroom(this,s),n.init(),i.data("headroom",n)),"string"==typeof e&&n[e]()})},t("[data-headroom]").each(function(){var e=t(this);e.headroom(e.data())})}(window.Zepto||window.jQuery);