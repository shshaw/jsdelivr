/*! Qoopido.js library 3.7.3, 2015-08-05 | https://github.com/dlueth/qoopido.js | (c) 2015 Dirk Lueth */
!function(e){window.qoopido.register("dom/element/lazyimage",e,["./emerge","../../function/merge"])}(function(e,t,r,n,o,i,a){"use strict";function u(){var e=this,t=e._settings.attribute;d+=1,e.emit(l).one(h,function(t){e.emit(t.type===v?s:f),d-=1},!1).setAttribute("src",e.getAttribute(t)).removeAttribute(t)}var c,m={interval:50,threshold:"auto",attribute:"data-lazyimage"},d=0,l="requested",s="loaded",f="failed",g="emerged",v="load",b="error",h="".concat(v," ",b);return c=e["dom/element/emerge"].extend({_constructor:function(t,r){var n=c._parent._constructor.call(this,t,e["function/merge"]({},m,r||{}));return n.on(g,function o(e){(0===d||1===e.data)&&(n.remove(),n.off(g,o),u.call(n))}),n}})});