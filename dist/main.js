!function(r){function t(o){if(n[o])return n[o].exports;var e=n[o]={i:o,l:!1,exports:{}};return r[o].call(e.exports,e,e.exports,t),e.l=!0,e.exports}var n={};t.m=r,t.c=n,t.d=function(r,n,o){t.o(r,n)||Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:o})},t.n=function(r){var n=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(n,"a",n),n},t.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},t.p="",t(t.s=0)}([function(r,t,n){r.exports=n(1)},function(r,t,n){"use strict";n(2),n(3),n(4),n(5),window.onload=function(){function r(r,t,n,o,e,a,i,l,s,u){this.x=r,this.y=t,this.w=n,this.h=o,this.dx=e,this.dy=a,this.letter=i,this.randColor1=l,this.randColor2=s,this.randColor3=u}function t(){var t=30*Math.random()+30,n=20*Math.random()+20,o=375*Math.random(),e=1.8*Math.random()+.3,a=["A","B","C","D","E","F","G","H","I","J"],i=Math.floor(8.9999*Math.random())+1||a[Math.floor(6*Math.random())],l=Math.floor(8.9999*Math.random())+1||a[Math.floor(6*Math.random())],u=Math.floor(8.9999*Math.random())+1||a[Math.floor(6*Math.random())],c=new r(o,n,t,t,0,e,a[Math.floor(10*Math.random())],i,l,u);s.push(c)}function n(){i.clearRect(0,0,a.width,a.height),i.beginPath();for(var r=0;r<s.length;r++){var t=s[r];t.x+=t.dx,t.y+=t.dy,t.y>399&&(s.splice(r,1),u--,l.innerText=u,$("#score-box").animate({backgroundColor:"#F00"},50,function(){$("#score-box").animate({backgroundColor:"#eee"})})),i.font=t.w-11+"px Lucida Console",i.fillStyle="#"+t.randColor1+t.randColor2+t.randColor3,i.fillText(t.letter,t.x,t.y),i.fill(),i.stroke()}}function o(r){return null==r.which?r.keyCode<32?null:String.fromCharCode(r.keyCode):0!=r.which&&0!=r.charCode?r.which<32?null:String.fromCharCode(r.which):null}function e(r){for(var t=[],n=0,o=0;o<s.length;o++)s[o].letter.toLowerCase()===r&&(n++,t.push(o+1-n));if(n>1){u++,l.innerText=u,$("#score-box").animate({backgroundColor:"#0F0"},50,function(){$("#score-box").animate({backgroundColor:"#eee"})});for(var e=0;e<t.length;e++)s.splice(t[e],1)}}var a=document.getElementById("cnv"),i=a.getContext("2d"),l=document.getElementById("score"),s=[],u=0;l.innerText=u;var c=document.getElementById("start"),f=!0;c.addEventListener("click",function(){f=!f;var r=setInterval(function(){t(),f&&clearInterval(r)},700),o=setInterval(function(){n(),f&&clearInterval(o)},30)}),document.onkeypress=function(){e(o(event))}}},function(r,t){},function(r,t){},function(r,t){},function(r,t,n){"use strict";!function(r,t){function n(r,t,n){var o=c[t.type]||{};return null==r?n||!t.def?null:t.def:(r=o.floor?~~r:parseFloat(r),isNaN(r)?t.def:o.mod?(r+o.mod)%o.mod:0>r?0:o.max<r?o.max:r)}function o(t){var n=s(),o=n._rgba=[];return t=t.toLowerCase(),h(l,function(r,e){var a,i=e.re.exec(t),l=i&&e.parse(i),s=e.space||"rgba";if(l)return a=n[s](l),n[u[s].cache]=a[u[s].cache],o=n._rgba=a._rgba,!1}),o.length?("0,0,0,0"===o.join()&&r.extend(o,a.transparent),n):a[t]}function e(r,t,n){return n=(n+1)%1,6*n<1?r+(t-r)*n*6:2*n<1?t:3*n<2?r+(t-r)*(2/3-n)*6:r}var a,i=/^([\-+])=\s*(\d+\.?\d*)/,l=[{re:/rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[r[1],r[2],r[3],r[4]]}},{re:/rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,parse:function(r){return[2.55*r[1],2.55*r[2],2.55*r[3],r[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(r){return[parseInt(r[1],16),parseInt(r[2],16),parseInt(r[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(r){return[parseInt(r[1]+r[1],16),parseInt(r[2]+r[2],16),parseInt(r[3]+r[3],16)]}},{re:/hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,space:"hsla",parse:function(r){return[r[1],r[2]/100,r[3]/100,r[4]]}}],s=r.Color=function(t,n,o,e){return new r.Color.fn.parse(t,n,o,e)},u={rgba:{props:{red:{idx:0,type:"byte"},green:{idx:1,type:"byte"},blue:{idx:2,type:"byte"}}},hsla:{props:{hue:{idx:0,type:"degrees"},saturation:{idx:1,type:"percent"},lightness:{idx:2,type:"percent"}}}},c={byte:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},f=s.support={},d=r("<p>")[0],h=r.each;d.style.cssText="background-color:rgba(1,1,1,.5)",f.rgba=d.style.backgroundColor.indexOf("rgba")>-1,h(u,function(r,t){t.cache="_"+r,t.props.alpha={idx:3,type:"percent",def:1}}),s.fn=r.extend(s.prototype,{parse:function(e,i,l,c){if(e===t)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=r(e).css(i),i=t);var f=this,d=r.type(e),p=this._rgba=[];return i!==t&&(e=[e,i,l,c],d="array"),"string"===d?this.parse(o(e)||a._default):"array"===d?(h(u.rgba.props,function(r,t){p[t.idx]=n(e[t.idx],t)}),this):"object"===d?(e instanceof s?h(u,function(r,t){e[t.cache]&&(f[t.cache]=e[t.cache].slice())}):h(u,function(t,o){var a=o.cache;h(o.props,function(r,t){if(!f[a]&&o.to){if("alpha"===r||null==e[r])return;f[a]=o.to(f._rgba)}f[a][t.idx]=n(e[r],t,!0)}),f[a]&&r.inArray(null,f[a].slice(0,3))<0&&(f[a][3]=1,o.from&&(f._rgba=o.from(f[a])))}),this):void 0},is:function(r){var t=s(r),n=!0,o=this;return h(u,function(r,e){var a,i=t[e.cache];return i&&(a=o[e.cache]||e.to&&e.to(o._rgba)||[],h(e.props,function(r,t){if(null!=i[t.idx])return n=i[t.idx]===a[t.idx]})),n}),n},_space:function(){var r=[],t=this;return h(u,function(n,o){t[o.cache]&&r.push(n)}),r.pop()},transition:function(r,t){var o=s(r),e=o._space(),a=u[e],i=0===this.alpha()?s("transparent"):this,l=i[a.cache]||a.to(i._rgba),f=l.slice();return o=o[a.cache],h(a.props,function(r,e){var a=e.idx,i=l[a],s=o[a],u=c[e.type]||{};null!==s&&(null===i?f[a]=s:(u.mod&&(s-i>u.mod/2?i+=u.mod:i-s>u.mod/2&&(i-=u.mod)),f[a]=n((s-i)*t+i,e)))}),this[e](f)},blend:function(t){if(1===this._rgba[3])return this;var n=this._rgba.slice(),o=n.pop(),e=s(t)._rgba;return s(r.map(n,function(r,t){return(1-o)*e[t]+o*r}))},toRgbaString:function(){var t="rgba(",n=r.map(this._rgba,function(r,t){return null==r?t>2?1:0:r});return 1===n[3]&&(n.pop(),t="rgb("),t+n.join()+")"},toHslaString:function(){var t="hsla(",n=r.map(this.hsla(),function(r,t){return null==r&&(r=t>2?1:0),t&&t<3&&(r=Math.round(100*r)+"%"),r});return 1===n[3]&&(n.pop(),t="hsl("),t+n.join()+")"},toHexString:function(t){var n=this._rgba.slice(),o=n.pop();return t&&n.push(~~(255*o)),"#"+r.map(n,function(r){return r=(r||0).toString(16),1===r.length?"0"+r:r}).join("")},toString:function(){return 0===this._rgba[3]?"transparent":this.toRgbaString()}}),s.fn.parse.prototype=s.fn,u.hsla.to=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var t,n,o=r[0]/255,e=r[1]/255,a=r[2]/255,i=r[3],l=Math.max(o,e,a),s=Math.min(o,e,a),u=l-s,c=l+s,f=.5*c;return t=s===l?0:o===l?60*(e-a)/u+360:e===l?60*(a-o)/u+120:60*(o-e)/u+240,n=0===u?0:f<=.5?u/c:u/(2-c),[Math.round(t)%360,n,f,null==i?1:i]},u.hsla.from=function(r){if(null==r[0]||null==r[1]||null==r[2])return[null,null,null,r[3]];var t=r[0]/360,n=r[1],o=r[2],a=r[3],i=o<=.5?o*(1+n):o+n-o*n,l=2*o-i;return[Math.round(255*e(l,i,t+1/3)),Math.round(255*e(l,i,t)),Math.round(255*e(l,i,t-1/3)),a]},h(u,function(o,e){var a=e.props,l=e.cache,u=e.to,c=e.from;s.fn[o]=function(o){if(u&&!this[l]&&(this[l]=u(this._rgba)),o===t)return this[l].slice();var e,i=r.type(o),f="array"===i||"object"===i?o:arguments,d=this[l].slice();return h(a,function(r,t){var o=f["object"===i?r:t.idx];null==o&&(o=d[t.idx]),d[t.idx]=n(o,t)}),c?(e=s(c(d)),e[l]=d,e):s(d)},h(a,function(t,n){s.fn[t]||(s.fn[t]=function(e){var a,l=r.type(e),s="alpha"===t?this._hsla?"hsla":"rgba":o,u=this[s](),c=u[n.idx];return"undefined"===l?c:("function"===l&&(e=e.call(this,c),l=r.type(e)),null==e&&n.empty?this:("string"===l&&(a=i.exec(e))&&(e=c+parseFloat(a[2])*("+"===a[1]?1:-1)),u[n.idx]=e,this[s](u)))})})}),s.hook=function(t){var n=t.split(" ");h(n,function(t,n){r.cssHooks[n]={set:function(t,e){var a,i,l="";if("transparent"!==e&&("string"!==r.type(e)||(a=o(e)))){if(e=s(a||e),!f.rgba&&1!==e._rgba[3]){for(i="backgroundColor"===n?t.parentNode:t;(""===l||"transparent"===l)&&i&&i.style;)try{l=r.css(i,"backgroundColor"),i=i.parentNode}catch(r){}e=e.blend(l&&"transparent"!==l?l:"_default")}e=e.toRgbaString()}try{t.style[n]=e}catch(r){}}},r.fx.step[n]=function(t){t.colorInit||(t.start=s(t.elem,n),t.end=s(t.end),t.colorInit=!0),r.cssHooks[n].set(t.elem,t.start.transition(t.end,t.pos))}})},s.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"),r.cssHooks.borderColor={expand:function(r){var t={};return h(["Top","Right","Bottom","Left"],function(n,o){t["border"+o+"Color"]=r}),t}},a=r.Color.names={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00",transparent:[null,null,null,0],_default:"#ffffff"}}(jQuery)}]);