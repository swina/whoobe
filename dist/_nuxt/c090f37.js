(window.webpackJsonp=window.webpackJsonp||[]).push([[2,9],{61:function(t,e,h){!function(){function e(t){return Math.sqrt(t.x*t.x+t.y*t.y)}function h(t,h){var n=function(t,h){var n=e(t)*e(h);if(0===n)return 0;var o=function(t,e){return t.x*e.x+t.y*e.y}(t,h)/n;return o>1&&(o=1),Math.acos(o)}(t,h);return function(t,e){return t.x*e.y-e.x*t.y}(t,h)>0&&(n*=-1),180*n/Math.PI}var n=function(t){this.handlers=[],this.el=t};function o(t,e){var h=new n(t);return h.add(e),h}n.prototype.add=function(t){this.handlers.push(t)},n.prototype.del=function(t){t||(this.handlers=[]);for(var i=this.handlers.length;i>=0;i--)this.handlers[i]===t&&this.handlers.splice(i,1)},n.prototype.dispatch=function(){for(var i=0,t=this.handlers.length;i<t;i++){var e=this.handlers[i];"function"==typeof e&&e.apply(this.el,arguments)}};var l=function(t,option){this.element="string"==typeof t?document.querySelector(t):t,this.start=this.start.bind(this),this.move=this.move.bind(this),this.end=this.end.bind(this),this.cancel=this.cancel.bind(this),this.element.addEventListener("touchstart",this.start,!1),this.element.addEventListener("touchmove",this.move,!1),this.element.addEventListener("touchend",this.end,!1),this.element.addEventListener("touchcancel",this.cancel,!1),this.preV={x:null,y:null},this.pinchStartLen=null,this.zoom=1,this.isDoubleTap=!1;var e=function(){};this.rotate=o(this.element,option.rotate||e),this.touchStart=o(this.element,option.touchStart||e),this.multipointStart=o(this.element,option.multipointStart||e),this.multipointEnd=o(this.element,option.multipointEnd||e),this.pinch=o(this.element,option.pinch||e),this.swipe=o(this.element,option.swipe||e),this.tap=o(this.element,option.tap||e),this.doubleTap=o(this.element,option.doubleTap||e),this.longTap=o(this.element,option.longTap||e),this.singleTap=o(this.element,option.singleTap||e),this.pressMove=o(this.element,option.pressMove||e),this.twoFingerPressMove=o(this.element,option.twoFingerPressMove||e),this.touchMove=o(this.element,option.touchMove||e),this.touchEnd=o(this.element,option.touchEnd||e),this.touchCancel=o(this.element,option.touchCancel||e),this._cancelAllHandler=this.cancelAll.bind(this),window.addEventListener("scroll",this._cancelAllHandler),this.delta=null,this.last=null,this.now=null,this.tapTimeout=null,this.singleTapTimeout=null,this.longTapTimeout=null,this.swipeTimeout=null,this.x1=this.x2=this.y1=this.y2=null,this.preTapPosition={x:null,y:null}};l.prototype={start:function(t){if(t.touches){this.now=Date.now(),this.x1=t.touches[0].pageX,this.y1=t.touches[0].pageY,this.delta=this.now-(this.last||this.now),this.touchStart.dispatch(t,this.element),null!==this.preTapPosition.x&&(this.isDoubleTap=this.delta>0&&this.delta<=250&&Math.abs(this.preTapPosition.x-this.x1)<30&&Math.abs(this.preTapPosition.y-this.y1)<30,this.isDoubleTap&&clearTimeout(this.singleTapTimeout)),this.preTapPosition.x=this.x1,this.preTapPosition.y=this.y1,this.last=this.now;var h=this.preV;if(t.touches.length>1){this._cancelLongTap(),this._cancelSingleTap();var n={x:t.touches[1].pageX-this.x1,y:t.touches[1].pageY-this.y1};h.x=n.x,h.y=n.y,this.pinchStartLen=e(h),this.multipointStart.dispatch(t,this.element)}this._preventTap=!1,this.longTapTimeout=setTimeout(function(){this.longTap.dispatch(t,this.element),this._preventTap=!0}.bind(this),750)}},move:function(t){if(t.touches){var n=this.preV,o=t.touches.length,l=t.touches[0].pageX,c=t.touches[0].pageY;if(this.isDoubleTap=!1,o>1){var r=t.touches[1].pageX,d=t.touches[1].pageY,m={x:t.touches[1].pageX-l,y:t.touches[1].pageY-c};null!==n.x&&(this.pinchStartLen>0&&(t.zoom=e(m)/this.pinchStartLen,this.pinch.dispatch(t,this.element)),t.angle=h(m,n),this.rotate.dispatch(t,this.element)),n.x=m.x,n.y=m.y,null!==this.x2&&null!==this.sx2?(t.deltaX=(l-this.x2+r-this.sx2)/2,t.deltaY=(c-this.y2+d-this.sy2)/2):(t.deltaX=0,t.deltaY=0),this.twoFingerPressMove.dispatch(t,this.element),this.sx2=r,this.sy2=d}else{if(null!==this.x2){t.deltaX=l-this.x2,t.deltaY=c-this.y2;var T=Math.abs(this.x1-this.x2),v=Math.abs(this.y1-this.y2);(T>10||v>10)&&(this._preventTap=!0)}else t.deltaX=0,t.deltaY=0;this.pressMove.dispatch(t,this.element)}this.touchMove.dispatch(t,this.element),this._cancelLongTap(),this.x2=l,this.y2=c,o>1&&t.preventDefault()}},end:function(t){if(t.changedTouches){this._cancelLongTap();var e=this;t.touches.length<2&&(this.multipointEnd.dispatch(t,this.element),this.sx2=this.sy2=null),this.x2&&Math.abs(this.x1-this.x2)>30||this.y2&&Math.abs(this.y1-this.y2)>30?(t.direction=this._swipeDirection(this.x1,this.x2,this.y1,this.y2),this.swipeTimeout=setTimeout((function(){e.swipe.dispatch(t,e.element)}),0)):(this.tapTimeout=setTimeout((function(){e._preventTap||e.tap.dispatch(t,e.element),e.isDoubleTap&&(e.doubleTap.dispatch(t,e.element),e.isDoubleTap=!1)}),0),e.isDoubleTap||(e.singleTapTimeout=setTimeout((function(){e.singleTap.dispatch(t,e.element)}),250))),this.touchEnd.dispatch(t,this.element),this.preV.x=0,this.preV.y=0,this.zoom=1,this.pinchStartLen=null,this.x1=this.x2=this.y1=this.y2=null}},cancelAll:function(){this._preventTap=!0,clearTimeout(this.singleTapTimeout),clearTimeout(this.tapTimeout),clearTimeout(this.longTapTimeout),clearTimeout(this.swipeTimeout)},cancel:function(t){this.cancelAll(),this.touchCancel.dispatch(t,this.element)},_cancelLongTap:function(){clearTimeout(this.longTapTimeout)},_cancelSingleTap:function(){clearTimeout(this.singleTapTimeout)},_swipeDirection:function(t,e,h,n){return Math.abs(t-e)>=Math.abs(h-n)?t-e>0?"Left":"Right":h-n>0?"Up":"Down"},on:function(t,e){this[t]&&this[t].add(e)},off:function(t,e){this[t]&&this[t].del(e)},destroy:function(){return this.singleTapTimeout&&clearTimeout(this.singleTapTimeout),this.tapTimeout&&clearTimeout(this.tapTimeout),this.longTapTimeout&&clearTimeout(this.longTapTimeout),this.swipeTimeout&&clearTimeout(this.swipeTimeout),this.element.removeEventListener("touchstart",this.start),this.element.removeEventListener("touchmove",this.move),this.element.removeEventListener("touchend",this.end),this.element.removeEventListener("touchcancel",this.cancel),this.rotate.del(),this.touchStart.del(),this.multipointStart.del(),this.multipointEnd.del(),this.pinch.del(),this.swipe.del(),this.tap.del(),this.doubleTap.del(),this.longTap.del(),this.singleTap.del(),this.pressMove.del(),this.twoFingerPressMove.del(),this.touchMove.del(),this.touchEnd.del(),this.touchCancel.del(),this.preV=this.pinchStartLen=this.zoom=this.isDoubleTap=this.delta=this.last=this.now=this.tapTimeout=this.singleTapTimeout=this.longTapTimeout=this.swipeTimeout=this.x1=this.x2=this.y1=this.y2=this.preTapPosition=this.rotate=this.touchStart=this.multipointStart=this.multipointEnd=this.pinch=this.swipe=this.tap=this.doubleTap=this.longTap=this.singleTap=this.pressMove=this.touchMove=this.touchEnd=this.touchCancel=this.twoFingerPressMove=null,window.removeEventListener("scroll",this._cancelAllHandler),null}},t.exports=l}()}}]);