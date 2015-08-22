/*
* MIXITUP - A CSS3 and JQuery Filter & Sort Plugin
* Version: 1.5.4
* License: Creative Commons Attribution-NoDerivs 3.0 Unported - CC BY-ND 3.0
* http://creativecommons.org/licenses/by-nd/3.0/
* This software may be used freely on commercial and non-commercial projects with attribution to the author/copyright holder.
* Author: Patrick Kunka
* Copyright 2012-2013 Patrick Kunka, Barrel LLC, All Rights Reserved
* 
* http://mixitup.io
*/
!function(e){function t(t,r,a,o,s){function l(){p.unbind("webkitTransitionEnd transitionend otransitionend oTransitionEnd"),r&&n(r,a,o,s),s.startOrder=[],s.newOrder=[],s.origSort=[],s.checkSort=[],h.removeStyle(s.prefix+"filter, filter, "+s.prefix+"transform, transform, opacity, display").css(s.clean).removeAttr("data-checksum"),window.atob||h.css({display:"none",opacity:"0"}),p.removeStyle(s.prefix+"transition, transition, "+s.prefix+"perspective, perspective, "+s.prefix+"perspective-origin, perspective-origin, "+(s.resizeContainer?"height":"")),"list"==s.layoutMode?(g.css({display:s.targetDisplayList,opacity:"1"}),s.origDisplay=s.targetDisplayList):(g.css({display:s.targetDisplayGrid,opacity:"1"}),s.origDisplay=s.targetDisplayGrid),s.origLayout=s.layoutMode,setTimeout(function(){if(h.removeStyle(s.prefix+"transition, transition"),s.mixing=!1,"function"==typeof s.onMixEnd){var e=s.onMixEnd.call(this,s);s=e?e:s}})}if(clearInterval(s.failsafe),s.mixing=!0,s.filter=t,"function"==typeof s.onMixStart){var c=s.onMixStart.call(this,s);s=c?c:s}for(var u=s.transitionSpeed,c=0;2>c;c++){var d=0==c?d=s.prefix:"";s.transition[d+"transition"]="all "+u+"ms linear",s.transition[d+"transform"]=d+"translate3d(0,0,0)",s.perspective[d+"perspective"]=s.perspectiveDistance+"px",s.perspective[d+"perspective-origin"]=s.perspectiveOrigin}var f=s.targetSelector,h=o.find(f);h.each(function(){this.data={}});var p=h.parent();p.css(s.perspective),s.easingFallback="ease-in-out","smooth"==s.easing&&(s.easing="cubic-bezier(0.25, 0.46, 0.45, 0.94)"),"snap"==s.easing&&(s.easing="cubic-bezier(0.77, 0, 0.175, 1)"),"windback"==s.easing&&(s.easing="cubic-bezier(0.175, 0.885, 0.320, 1.275)",s.easingFallback="cubic-bezier(0.175, 0.885, 0.320, 1)"),"windup"==s.easing&&(s.easing="cubic-bezier(0.6, -0.28, 0.735, 0.045)",s.easingFallback="cubic-bezier(0.6, 0.28, 0.735, 0.045)"),c="list"==s.layoutMode&&null!=s.listEffects?s.listEffects:s.effects,Array.prototype.indexOf&&(s.fade=-1<c.indexOf("fade")?"0":"",s.scale=-1<c.indexOf("scale")?"scale(.01)":"",s.rotateZ=-1<c.indexOf("rotateZ")?"rotate(180deg)":"",s.rotateY=-1<c.indexOf("rotateY")?"rotateY(90deg)":"",s.rotateX=-1<c.indexOf("rotateX")?"rotateX(90deg)":"",s.blur=-1<c.indexOf("blur")?"blur(8px)":"",s.grayscale=-1<c.indexOf("grayscale")?"grayscale(100%)":"");var g=e(),m=e(),v=[],y=!1;"string"==typeof t?v=i(t):(y=!0,e.each(t,function(e){v[e]=i(this)})),"or"==s.filterLogic?(""==v[0]&&v.shift(),1>v.length?m=m.add(o.find(f+":visible")):h.each(function(){var t=e(this);if(y){var n=0;e.each(v,function(){this.length?t.is("."+this.join(", ."))&&n++:n>0&&n++}),n==v.length?g=g.add(t):m=m.add(t)}else t.is("."+v.join(", ."))?g=g.add(t):m=m.add(t)})):(g=g.add(p.find(f+"."+v.join("."))),m=m.add(p.find(f+":not(."+v.join(".")+"):visible"))),t=g.length;var b=e(),x=e(),w=e();if(m.each(function(){var t=e(this);"none"!=t.css("display")&&(b=b.add(t),w=w.add(t))}),g.filter(":visible").length==t&&!b.length&&!r){if(s.origLayout==s.layoutMode)return l(),!1;if(1==g.length)return"list"==s.layoutMode?(o.addClass(s.listClass),o.removeClass(s.gridClass),w.css("display",s.targetDisplayList)):(o.addClass(s.gridClass),o.removeClass(s.listClass),w.css("display",s.targetDisplayGrid)),l(),!1}if(s.origHeight=p.height(),g.length){if(o.removeClass(s.failClass),g.each(function(){var t=e(this);"none"==t.css("display")?x=x.add(t):w=w.add(t)}),s.origLayout!=s.layoutMode&&0==s.animateGridList)return"list"==s.layoutMode?(o.addClass(s.listClass),o.removeClass(s.gridClass),w.css("display",s.targetDisplayList)):(o.addClass(s.gridClass),o.removeClass(s.listClass),w.css("display",s.targetDisplayGrid)),l(),!1;if(!window.atob)return l(),!1;if(h.css(s.clean),w.each(function(){this.data.origPos=e(this).offset()}),"list"==s.layoutMode?(o.addClass(s.listClass),o.removeClass(s.gridClass),x.css("display",s.targetDisplayList)):(o.addClass(s.gridClass),o.removeClass(s.listClass),x.css("display",s.targetDisplayGrid)),x.each(function(){this.data.showInterPos=e(this).offset()}),b.each(function(){this.data.hideInterPos=e(this).offset()}),w.each(function(){this.data.preInterPos=e(this).offset()}),"list"==s.layoutMode?w.css("display",s.targetDisplayList):w.css("display",s.targetDisplayGrid),r&&n(r,a,o,s),t=r)e:if(t=s.origSort,c=s.checkSort,t.length!=c.length)t=!1;else{for(d=0;d<c.length;d++)if(t[d].compare&&!t[d].compare(c[d])||t[d]!==c[d]){t=!1;break e}t=!0}if(t)return l(),!1;for(b.hide(),x.each(function(){this.data.finalPos=e(this).offset()}),w.each(function(){this.data.finalPrePos=e(this).offset()}),s.newHeight=p.height(),r&&n("reset",null,o,s),x.hide(),w.css("display",s.origDisplay),"block"==s.origDisplay?(o.addClass(s.listClass),x.css("display",s.targetDisplayList)):(o.removeClass(s.listClass),x.css("display",s.targetDisplayGrid)),s.resizeContainer&&p.css("height",s.origHeight+"px"),t={},c=0;2>c;c++)d=0==c?d=s.prefix:"",t[d+"transform"]=s.scale+" "+s.rotateX+" "+s.rotateY+" "+s.rotateZ,t[d+"filter"]=s.blur+" "+s.grayscale;x.css(t),w.each(function(){var t=this.data,n=e(this);n.hasClass("mix_tohide")?(t.preTX=t.origPos.left-t.hideInterPos.left,t.preTY=t.origPos.top-t.hideInterPos.top):(t.preTX=t.origPos.left-t.preInterPos.left,t.preTY=t.origPos.top-t.preInterPos.top);for(var i={},r=0;2>r;r++){var a=0==r?a=s.prefix:"";i[a+"transform"]="translate("+t.preTX+"px,"+t.preTY+"px)"}n.css(i)}),"list"==s.layoutMode?(o.addClass(s.listClass),o.removeClass(s.gridClass)):(o.addClass(s.gridClass),o.removeClass(s.listClass)),setTimeout(function(){if(s.resizeContainer){for(var t={},n=0;2>n;n++){var i=0==n?i=s.prefix:"";t[i+"transition"]="all "+u+"ms ease-in-out",t.height=s.newHeight+"px"}p.css(t)}for(b.css("opacity",s.fade),x.css("opacity",1),x.each(function(){var t=this.data;t.tX=t.finalPos.left-t.showInterPos.left,t.tY=t.finalPos.top-t.showInterPos.top;for(var n={},i=0;2>i;i++){var r=0==i?r=s.prefix:"";n[r+"transition-property"]=r+"transform, "+r+"filter, opacity",n[r+"transition-timing-function"]=s.easing+", linear, linear",n[r+"transition-duration"]=u+"ms",n[r+"transition-delay"]="0",n[r+"transform"]="translate("+t.tX+"px,"+t.tY+"px)",n[r+"filter"]="none"}e(this).css("-webkit-transition","all "+u+"ms "+s.easingFallback).css(n)}),w.each(function(){var t=this.data;t.tX=0!=t.finalPrePos.left?t.finalPrePos.left-t.preInterPos.left:0,t.tY=0!=t.finalPrePos.left?t.finalPrePos.top-t.preInterPos.top:0;for(var n={},i=0;2>i;i++){var r=0==i?r=s.prefix:"";n[r+"transition"]="all "+u+"ms "+s.easing,n[r+"transform"]="translate("+t.tX+"px,"+t.tY+"px)"}e(this).css("-webkit-transition","all "+u+"ms "+s.easingFallback).css(n)}),t={},n=0;2>n;n++)i=0==n?i=s.prefix:"",t[i+"transition"]="all "+u+"ms "+s.easing+", "+i+"filter "+u+"ms linear, opacity "+u+"ms linear",t[i+"transform"]=s.scale+" "+s.rotateX+" "+s.rotateY+" "+s.rotateZ,t[i+"filter"]=s.blur+" "+s.grayscale,t.opacity=s.fade;b.css(t),p.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(t){(-1<t.originalEvent.propertyName.indexOf("transform")||-1<t.originalEvent.propertyName.indexOf("opacity"))&&(-1<f.indexOf(".")?e(t.target).hasClass(f.replace(".",""))&&l():e(t.target).is(f)&&l())})},10),s.failsafe=setTimeout(function(){s.mixing&&l()},u+400)}else{if(s.resizeContainer&&p.css("height",s.origHeight+"px"),!window.atob)return l(),!1;b=m,setTimeout(function(){if(p.css(s.perspective),s.resizeContainer){for(var e={},t=0;2>t;t++){var n=0==t?n=s.prefix:"";e[n+"transition"]="height "+u+"ms ease-in-out",e.height=s.minHeight+"px"}p.css(e)}if(h.css(s.transition),m.length){for(e={},t=0;2>t;t++)n=0==t?n=s.prefix:"",e[n+"transform"]=s.scale+" "+s.rotateX+" "+s.rotateY+" "+s.rotateZ,e[n+"filter"]=s.blur+" "+s.grayscale,e.opacity=s.fade;b.css(e),p.bind("webkitTransitionEnd transitionend otransitionend oTransitionEnd",function(e){(-1<e.originalEvent.propertyName.indexOf("transform")||-1<e.originalEvent.propertyName.indexOf("opacity"))&&(o.addClass(s.failClass),l())})}else s.mixing=!1},10)}}function n(t,n,i,r){function a(e,n){var i=isNaN(1*e.attr(t))?e.attr(t).toLowerCase():1*e.attr(t),r=isNaN(1*n.attr(t))?n.attr(t).toLowerCase():1*n.attr(t);return r>i?-1:i>r?1:0}function o(e){"asc"==n?s.prepend(e).prepend(" "):s.append(e).append(" ")}i.find(r.targetSelector).wrapAll('<div class="mix_sorter"/>');var s=i.find(".mix_sorter");if(r.origSort.length||s.find(r.targetSelector+":visible").each(function(){e(this).wrap("<s/>"),r.origSort.push(e(this).parent().html().replace(/\s+/g,"")),e(this).unwrap()}),s.empty(),"reset"==t)e.each(r.startOrder,function(){s.append(this).append(" ")});else if("default"==t)e.each(r.origOrder,function(){o(this)});else if("random"==t){if(!r.newOrder.length){for(var l=r.startOrder.slice(),c=l.length,u=c;u--;){var d=parseInt(Math.random()*c),f=l[u];l[u]=l[d],l[d]=f}r.newOrder=l}e.each(r.newOrder,function(){s.append(this).append(" ")})}else if("custom"==t)e.each(n,function(){o(this)});else{if("undefined"==typeof r.origOrder[0].attr(t))return console.log("No such attribute found. Terminating"),!1;r.newOrder.length||(e.each(r.origOrder,function(){r.newOrder.push(e(this))}),r.newOrder.sort(a)),e.each(r.newOrder,function(){o(this)})}r.checkSort=[],s.find(r.targetSelector+":visible").each(function(t){var n=e(this);0==t&&n.attr("data-checksum","1"),n.wrap("<s/>"),r.checkSort.push(n.parent().html().replace(/\s+/g,"")),n.unwrap()}),i.find(r.targetSelector).unwrap()}function i(t){t=t.replace(/\s{2,}/g," ");var n=t.split(" ");return e.each(n,function(e){"all"==this&&(n[e]="mix_all")}),""==n[0]&&n.shift(),n}var r={init:function(i){return this.each(function(){var r={targetSelector:".mix",filterSelector:".filter",sortSelector:".sort",buttonEvent:"click",effects:["fade","scale"],listEffects:null,easing:"smooth",layoutMode:"grid",targetDisplayGrid:"inline-block",targetDisplayList:"block",listClass:"",gridClass:"",transitionSpeed:600,showOnLoad:"all",sortOnLoad:!1,multiFilter:!1,filterLogic:"or",resizeContainer:!0,minHeight:0,failClass:"fail",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",animateGridList:!0,onMixLoad:null,onMixStart:null,onMixEnd:null,container:null,origOrder:[],startOrder:[],newOrder:[],origSort:[],checkSort:[],filter:"",mixing:!1,origDisplay:"",origLayout:"",origHeight:0,newHeight:0,isTouch:!1,resetDelay:0,failsafe:null,prefix:"",easingFallback:"ease-in-out",transition:{},perspective:{},clean:{},fade:"1",scale:"",rotateX:"",rotateY:"",rotateZ:"",blur:"",grayscale:""};i&&e.extend(r,i),this.config=r,e.support.touch="ontouchend"in document,e.support.touch&&(r.isTouch=!0,r.resetDelay=350),r.container=e(this);var a,o=r.container;e:{a=o[0];for(var s=["Webkit","Moz","O","ms"],l=0;l<s.length;l++)if(s[l]+"Transition"in a.style){a=s[l];break e}a="transition"in a.style?"":!1}if(r.prefix=a,r.prefix=r.prefix?"-"+r.prefix.toLowerCase()+"-":"",o.find(r.targetSelector).each(function(){r.origOrder.push(e(this))}),r.sortOnLoad){var c;e.isArray(r.sortOnLoad)?(a=r.sortOnLoad[0],c=r.sortOnLoad[1],e(r.sortSelector+"[data-sort="+r.sortOnLoad[0]+"][data-order="+r.sortOnLoad[1]+"]").addClass("active")):(e(r.sortSelector+"[data-sort="+r.sortOnLoad+"]").addClass("active"),a=r.sortOnLoad,r.sortOnLoad="desc"),n(a,c,o,r)}for(c=0;2>c;c++)a=0==c?a=r.prefix:"",r.transition[a+"transition"]="all "+r.transitionSpeed+"ms ease-in-out",r.perspective[a+"perspective"]=r.perspectiveDistance+"px",r.perspective[a+"perspective-origin"]=r.perspectiveOrigin;for(c=0;2>c;c++)a=0==c?a=r.prefix:"",r.clean[a+"transition"]="none";"list"==r.layoutMode?(o.addClass(r.listClass),r.origDisplay=r.targetDisplayList):(o.addClass(r.gridClass),r.origDisplay=r.targetDisplayGrid),r.origLayout=r.layoutMode,c=r.showOnLoad.split(" "),e.each(c,function(){e(r.filterSelector+'[data-filter="'+this+'"]').addClass("active")}),o.find(r.targetSelector).addClass("mix_all"),"all"==c[0]&&(c[0]="mix_all",r.showOnLoad="mix_all");var u=e();e.each(c,function(){u=u.add(e("."+this))}),u.each(function(){var t=e(this);"list"==r.layoutMode?t.css("display",r.targetDisplayList):t.css("display",r.targetDisplayGrid),t.css(r.transition)}),setTimeout(function(){r.mixing=!0,u.css("opacity","1"),setTimeout(function(){if(u.removeStyle(r.prefix+"transition, transition").css("list"==r.layoutMode?{display:r.targetDisplayList,opacity:1}:{display:r.targetDisplayGrid,opacity:1}),r.mixing=!1,"function"==typeof r.onMixLoad){var e=r.onMixLoad.call(this,r);r=e?e:r}},r.transitionSpeed)},10),r.filter=r.showOnLoad,e(r.sortSelector).bind(r.buttonEvent,function(){if(!r.mixing){var n=e(this),i=n.attr("data-sort"),a=n.attr("data-order");if(n.hasClass("active")){if("random"!=i)return!1}else e(r.sortSelector).removeClass("active"),n.addClass("active");o.find(r.targetSelector).each(function(){r.startOrder.push(e(this))}),t(r.filter,i,a,o,r)}}),e(r.filterSelector).bind(r.buttonEvent,function(){if(!r.mixing){var n=e(this);if(0==r.multiFilter)e(r.filterSelector).removeClass("active"),n.addClass("active"),r.filter=n.attr("data-filter"),e(r.filterSelector+'[data-filter="'+r.filter+'"]').addClass("active");else{var i=n.attr("data-filter");n.hasClass("active")?(n.removeClass("active"),r.filter=r.filter.replace(RegExp("(\\s|^)"+i),"")):(n.addClass("active"),r.filter=r.filter+" "+i)}t(r.filter,null,null,o,r)}})})},toGrid:function(){return this.each(function(){var n=this.config;"grid"!=n.layoutMode&&(n.layoutMode="grid",t(n.filter,null,null,e(this),n))})},toList:function(){return this.each(function(){var n=this.config;"list"!=n.layoutMode&&(n.layoutMode="list",t(n.filter,null,null,e(this),n))})},filter:function(n){return this.each(function(){var i=this.config;i.mixing||(e(i.filterSelector).removeClass("active"),e(i.filterSelector+'[data-filter="'+n+'"]').addClass("active"),t(n,null,null,e(this),i))})},sort:function(n){return this.each(function(){var i=this.config,r=e(this);if(!i.mixing){if(e(i.sortSelector).removeClass("active"),e.isArray(n)){var a=n[0],o=n[1];e(i.sortSelector+'[data-sort="'+n[0]+'"][data-order="'+n[1]+'"]').addClass("active")}else e(i.sortSelector+'[data-sort="'+n+'"]').addClass("active"),a=n,o="desc";r.find(i.targetSelector).each(function(){i.startOrder.push(e(this))}),t(i.filter,a,o,r,i)}})},multimix:function(n){return this.each(function(){var i=this.config,r=e(this);multiOut={filter:i.filter,sort:null,order:"desc",layoutMode:i.layoutMode},e.extend(multiOut,n),i.mixing||(e(i.filterSelector).add(i.sortSelector).removeClass("active"),e(i.filterSelector+'[data-filter="'+multiOut.filter+'"]').addClass("active"),"undefined"!=typeof multiOut.sort&&(e(i.sortSelector+'[data-sort="'+multiOut.sort+'"][data-order="'+multiOut.order+'"]').addClass("active"),r.find(i.targetSelector).each(function(){i.startOrder.push(e(this))})),i.layoutMode=multiOut.layoutMode,t(multiOut.filter,multiOut.sort,multiOut.order,r,i))})},remix:function(n){return this.each(function(){var i=this.config,r=e(this);i.origOrder=[],r.find(i.targetSelector).each(function(){var t=e(this);t.addClass("mix_all"),i.origOrder.push(t)}),!i.mixing&&"undefined"!=typeof n&&(e(i.filterSelector).removeClass("active"),e(i.filterSelector+'[data-filter="'+n+'"]').addClass("active"),t(n,null,null,r,i))})}};e.fn.mixitup=function(e){return r[e]?r[e].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof e&&e?void 0:r.init.apply(this,arguments)},e.fn.removeStyle=function(t){return this.each(function(){var n=e(this);t=t.replace(/\s+/g,"");var i=t.split(",");e.each(i,function(){var e=RegExp(this.toString()+"[^;]+;?","g");n.attr("style",function(t,n){return n?n.replace(e,""):void 0})})})}}(jQuery);