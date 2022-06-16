import{S as W,r as pn,b as yn,i as B,d as nn,e as tn,f as Mn}from"./index.c06da41c.js";function T(n,t){return n==null||t==null?NaN:n<t?-1:n>t?1:n>=t?0:NaN}function kn(n,t){return n==null||t==null?NaN:t<n?-1:t>n?1:t>=n?0:NaN}function sn(n){let t,e,r;n.length!==2?(t=T,e=(o,c)=>T(n(o),c),r=(o,c)=>n(o)-c):(t=n===T||n===kn?n:wn,e=n,r=n);function i(o,c,f=0,d=o.length){if(f<d){if(t(c,c)!==0)return d;do{const l=f+d>>>1;e(o[l],c)<0?f=l+1:d=l}while(f<d)}return f}function a(o,c,f=0,d=o.length){if(f<d){if(t(c,c)!==0)return d;do{const l=f+d>>>1;e(o[l],c)<=0?f=l+1:d=l}while(f<d)}return f}function u(o,c,f=0,d=o.length){const l=i(o,c,f,d-1);return l>f&&r(o[l-1],c)>-r(o[l],c)?l-1:l}return{left:i,center:u,right:a}}function wn(){return 0}function xn(n){return n===null?NaN:+n}const Nn=sn(T),vn=Nn.right;sn(xn).center;var An=vn,X=Math.sqrt(50),G=Math.sqrt(10),Y=Math.sqrt(2);function Sn(n,t,e){var r,i=-1,a,u,o;if(t=+t,n=+n,e=+e,n===t&&e>0)return[n];if((r=t<n)&&(a=n,n=t,t=a),(o=ln(n,t,e))===0||!isFinite(o))return[];if(o>0){let c=Math.round(n/o),f=Math.round(t/o);for(c*o<n&&++c,f*o>t&&--f,u=new Array(a=f-c+1);++i<a;)u[i]=(c+i)*o}else{o=-o;let c=Math.round(n*o),f=Math.round(t*o);for(c/o<n&&++c,f/o>t&&--f,u=new Array(a=f-c+1);++i<a;)u[i]=(c+i)/o}return r&&u.reverse(),u}function ln(n,t,e){var r=(t-n)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=X?10:a>=G?5:a>=Y?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=X?10:a>=G?5:a>=Y?2:1)}function bn(n,t,e){var r=Math.abs(t-n)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=X?i*=10:a>=G?i*=5:a>=Y&&(i*=2),t<n?-i:i}function zn(n){return n}var O=1,_=2,U=3,V=4,rn=1e-6;function Fn(n){return"translate("+n+",0)"}function Pn(n){return"translate(0,"+n+")"}function jn(n){return t=>+n(t)}function $n(n,t){return t=Math.max(0,n.bandwidth()-t*2)/2,n.round()&&(t=Math.round(t)),e=>+n(e)+t}function En(){return!this.__axis}function hn(n,t){var e=[],r=null,i=null,a=6,u=6,o=3,c=typeof window!="undefined"&&window.devicePixelRatio>1?0:.5,f=n===O||n===V?-1:1,d=n===V||n===_?"x":"y",l=n===O||n===U?Fn:Pn;function s(m){var M=r==null?t.ticks?t.ticks.apply(t,e):t.domain():r,z=i==null?t.tickFormat?t.tickFormat.apply(t,e):zn:i,x=Math.max(a,0)+o,N=t.range(),A=+N[0]+c,k=+N[N.length-1]+c,F=(t.bandwidth?$n:jn)(t.copy(),c),g=m.selection?m.selection():m,S=g.selectAll(".domain").data([null]),w=g.selectAll(".tick").data(M,t).order(),P=w.exit(),j=w.enter().append("g").attr("class","tick"),b=w.select("line"),h=w.select("text");S=S.merge(S.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),w=w.merge(j),b=b.merge(j.append("line").attr("stroke","currentColor").attr(d+"2",f*a)),h=h.merge(j.append("text").attr("fill","currentColor").attr(d,f*x).attr("dy",n===O?"0em":n===U?"0.71em":"0.32em")),m!==g&&(S=S.transition(m),w=w.transition(m),b=b.transition(m),h=h.transition(m),P=P.transition(m).attr("opacity",rn).attr("transform",function(y){return isFinite(y=F(y))?l(y+c):this.getAttribute("transform")}),j.attr("opacity",rn).attr("transform",function(y){var p=this.parentNode.__axis;return l((p&&isFinite(p=p(y))?p:F(y))+c)})),P.remove(),S.attr("d",n===V||n===_?u?"M"+f*u+","+A+"H"+c+"V"+k+"H"+f*u:"M"+c+","+A+"V"+k:u?"M"+A+","+f*u+"V"+c+"H"+k+"V"+f*u:"M"+A+","+c+"H"+k),w.attr("opacity",1).attr("transform",function(y){return l(F(y)+c)}),b.attr(d+"2",f*a),h.attr(d,f*x).text(z),g.filter(En).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===_?"start":n===V?"end":"middle"),g.each(function(){this.__axis=F})}return s.scale=function(m){return arguments.length?(t=m,s):t},s.ticks=function(){return e=Array.from(arguments),s},s.tickArguments=function(m){return arguments.length?(e=m==null?[]:Array.from(m),s):e.slice()},s.tickValues=function(m){return arguments.length?(r=m==null?null:Array.from(m),s):r&&r.slice()},s.tickFormat=function(m){return arguments.length?(i=m,s):i},s.tickSize=function(m){return arguments.length?(a=u=+m,s):a},s.tickSizeInner=function(m){return arguments.length?(a=+m,s):a},s.tickSizeOuter=function(m){return arguments.length?(u=+m,s):u},s.tickPadding=function(m){return arguments.length?(o=+m,s):o},s.offset=function(m){return arguments.length?(c=+m,s):c},s}function ct(n){return hn(U,n)}function st(n){return hn(V,n)}function lt(n){return typeof n=="string"?new W([[document.querySelector(n)]],[document.documentElement]):new W([[n]],pn)}function Rn(n,t){t||(t=[]);var e=n?Math.min(t.length,n.length):0,r=t.slice(),i;return function(a){for(i=0;i<e;++i)r[i]=n[i]*(1-a)+t[i]*a;return r}}function Vn(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function Ln(n,t){var e=t?t.length:0,r=n?Math.min(e,n.length):0,i=new Array(r),a=new Array(e),u;for(u=0;u<r;++u)i[u]=J(n[u],t[u]);for(;u<e;++u)a[u]=t[u];return function(o){for(u=0;u<r;++u)a[u]=i[u](o);return a}}function Cn(n,t){var e=new Date;return n=+n,t=+t,function(r){return e.setTime(n*(1-r)+t*r),e}}function In(n,t){var e={},r={},i;(n===null||typeof n!="object")&&(n={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in n?e[i]=J(n[i],t[i]):r[i]=t[i];return function(a){for(i in e)r[i]=e[i](a);return r}}function J(n,t){var e=typeof t,r;return t==null||e==="boolean"?yn(t):(e==="number"?B:e==="string"?(r=nn(t))?(t=r,tn):Mn:t instanceof nn?tn:t instanceof Date?Cn:Vn(t)?Rn:Array.isArray(t)?Ln:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?In:B)(n,t)}function Dn(n,t){return n=+n,t=+t,function(e){return Math.round(n*(1-e)+t*e)}}function Tn(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function q(n,t){if((e=(n=t?n.toExponential(t-1):n.toExponential()).indexOf("e"))<0)return null;var e,r=n.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+n.slice(e+1)]}function R(n){return n=q(Math.abs(n)),n?n[1]:NaN}function qn(n,t){return function(e,r){for(var i=e.length,a=[],u=0,o=n[0],c=0;i>0&&o>0&&(c+o+1>r&&(o=Math.max(1,r-c)),a.push(e.substring(i-=o,i+o)),!((c+=o+1)>r));)o=n[u=(u+1)%n.length];return a.reverse().join(t)}}function Hn(n){return function(t){return t.replace(/[0-9]/g,function(e){return n[+e]})}}var On=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function H(n){if(!(t=On.exec(n)))throw new Error("invalid format: "+n);var t;return new K({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}H.prototype=K.prototype;function K(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}K.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function _n(n){n:for(var t=n.length,e=1,r=-1,i;e<t;++e)switch(n[e]){case".":r=i=e;break;case"0":r===0&&(r=e),i=e;break;default:if(!+n[e])break n;r>0&&(r=0);break}return r>0?n.slice(0,r)+n.slice(i+1):n}var mn;function Bn(n,t){var e=q(n,t);if(!e)return n+"";var r=e[0],i=e[1],a=i-(mn=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,u=r.length;return a===u?r:a>u?r+new Array(a-u+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+q(n,Math.max(0,t+a-1))[0]}function en(n,t){var e=q(n,t);if(!e)return n+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")}var an={"%":(n,t)=>(n*100).toFixed(t),b:n=>Math.round(n).toString(2),c:n=>n+"",d:Tn,e:(n,t)=>n.toExponential(t),f:(n,t)=>n.toFixed(t),g:(n,t)=>n.toPrecision(t),o:n=>Math.round(n).toString(8),p:(n,t)=>en(n*100,t),r:en,s:Bn,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function un(n){return n}var on=Array.prototype.map,fn=["y","z","a","f","p","n","\xB5","m","","k","M","G","T","P","E","Z","Y"];function Xn(n){var t=n.grouping===void 0||n.thousands===void 0?un:qn(on.call(n.grouping,Number),n.thousands+""),e=n.currency===void 0?"":n.currency[0]+"",r=n.currency===void 0?"":n.currency[1]+"",i=n.decimal===void 0?".":n.decimal+"",a=n.numerals===void 0?un:Hn(on.call(n.numerals,String)),u=n.percent===void 0?"%":n.percent+"",o=n.minus===void 0?"\u2212":n.minus+"",c=n.nan===void 0?"NaN":n.nan+"";function f(l){l=H(l);var s=l.fill,m=l.align,M=l.sign,z=l.symbol,x=l.zero,N=l.width,A=l.comma,k=l.precision,F=l.trim,g=l.type;g==="n"?(A=!0,g="g"):an[g]||(k===void 0&&(k=12),F=!0,g="g"),(x||s==="0"&&m==="=")&&(x=!0,s="0",m="=");var S=z==="$"?e:z==="#"&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",w=z==="$"?r:/[%p]/.test(g)?u:"",P=an[g],j=/[defgprs%]/.test(g);k=k===void 0?6:/[gprs]/.test(g)?Math.max(1,Math.min(21,k)):Math.max(0,Math.min(20,k));function b(h){var y=S,p=w,$,Q,L;if(g==="c")p=P(h)+p,h="";else{h=+h;var C=h<0||1/h<0;if(h=isNaN(h)?c:P(Math.abs(h),k),F&&(h=_n(h)),C&&+h==0&&M!=="+"&&(C=!1),y=(C?M==="("?M:o:M==="-"||M==="("?"":M)+y,p=(g==="s"?fn[8+mn/3]:"")+p+(C&&M==="("?")":""),j){for($=-1,Q=h.length;++$<Q;)if(L=h.charCodeAt($),48>L||L>57){p=(L===46?i+h.slice($+1):h.slice($))+p,h=h.slice(0,$);break}}}A&&!x&&(h=t(h,1/0));var I=y.length+h.length+p.length,v=I<N?new Array(N-I+1).join(s):"";switch(A&&x&&(h=t(v+h,v.length?N-p.length:1/0),v=""),m){case"<":h=y+h+p+v;break;case"=":h=y+v+h+p;break;case"^":h=v.slice(0,I=v.length>>1)+y+h+p+v.slice(I);break;default:h=v+y+h+p;break}return a(h)}return b.toString=function(){return l+""},b}function d(l,s){var m=f((l=H(l),l.type="f",l)),M=Math.max(-8,Math.min(8,Math.floor(R(s)/3)))*3,z=Math.pow(10,-M),x=fn[8+M/3];return function(N){return m(z*N)+x}}return{format:f,formatPrefix:d}}var D,dn,gn;Gn({thousands:",",grouping:[3],currency:["$",""]});function Gn(n){return D=Xn(n),dn=D.format,gn=D.formatPrefix,D}function Yn(n){return Math.max(0,-R(Math.abs(n)))}function Un(n,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(R(t)/3)))*3-R(Math.abs(n)))}function Zn(n,t){return n=Math.abs(n),t=Math.abs(t)-n,Math.max(0,R(t)-R(n))+1}function Jn(n,t){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(t).domain(n);break}return this}function Kn(n){return function(){return n}}function Qn(n){return+n}var cn=[0,1];function E(n){return n}function Z(n,t){return(t-=n=+n)?function(e){return(e-n)/t}:Kn(isNaN(t)?NaN:.5)}function Wn(n,t){var e;return n>t&&(e=n,n=t,t=e),function(r){return Math.max(n,Math.min(t,r))}}function nt(n,t,e){var r=n[0],i=n[1],a=t[0],u=t[1];return i<r?(r=Z(i,r),a=e(u,a)):(r=Z(r,i),a=e(a,u)),function(o){return a(r(o))}}function tt(n,t,e){var r=Math.min(n.length,t.length)-1,i=new Array(r),a=new Array(r),u=-1;for(n[r]<n[0]&&(n=n.slice().reverse(),t=t.slice().reverse());++u<r;)i[u]=Z(n[u],n[u+1]),a[u]=e(t[u],t[u+1]);return function(o){var c=An(n,o,1,r)-1;return a[c](i[c](o))}}function rt(n,t){return t.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function et(){var n=cn,t=cn,e=J,r,i,a,u=E,o,c,f;function d(){var s=Math.min(n.length,t.length);return u!==E&&(u=Wn(n[0],n[s-1])),o=s>2?tt:nt,c=f=null,l}function l(s){return s==null||isNaN(s=+s)?a:(c||(c=o(n.map(r),t,e)))(r(u(s)))}return l.invert=function(s){return u(i((f||(f=o(t,n.map(r),B)))(s)))},l.domain=function(s){return arguments.length?(n=Array.from(s,Qn),d()):n.slice()},l.range=function(s){return arguments.length?(t=Array.from(s),d()):t.slice()},l.rangeRound=function(s){return t=Array.from(s),e=Dn,d()},l.clamp=function(s){return arguments.length?(u=s?!0:E,d()):u!==E},l.interpolate=function(s){return arguments.length?(e=s,d()):e},l.unknown=function(s){return arguments.length?(a=s,l):a},function(s,m){return r=s,i=m,d()}}function it(){return et()(E,E)}function at(n,t,e,r){var i=bn(n,t,e),a;switch(r=H(r==null?",f":r),r.type){case"s":{var u=Math.max(Math.abs(n),Math.abs(t));return r.precision==null&&!isNaN(a=Un(i,u))&&(r.precision=a),gn(r,u)}case"":case"e":case"g":case"p":case"r":{r.precision==null&&!isNaN(a=Zn(i,Math.max(Math.abs(n),Math.abs(t))))&&(r.precision=a-(r.type==="e"));break}case"f":case"%":{r.precision==null&&!isNaN(a=Yn(i))&&(r.precision=a-(r.type==="%")*2);break}}return dn(r)}function ut(n){var t=n.domain;return n.ticks=function(e){var r=t();return Sn(r[0],r[r.length-1],e==null?10:e)},n.tickFormat=function(e,r){var i=t();return at(i[0],i[i.length-1],e==null?10:e,r)},n.nice=function(e){e==null&&(e=10);var r=t(),i=0,a=r.length-1,u=r[i],o=r[a],c,f,d=10;for(o<u&&(f=u,u=o,o=f,f=i,i=a,a=f);d-- >0;){if(f=ln(u,o,e),f===c)return r[i]=u,r[a]=o,t(r);if(f>0)u=Math.floor(u/f)*f,o=Math.ceil(o/f)*f;else if(f<0)u=Math.ceil(u*f)/f,o=Math.floor(o*f)/f;else break;c=f}return n},n}function ot(){var n=it();return n.copy=function(){return rt(n,ot())},Jn.apply(n,arguments),ut(n)}export{st as a,T as b,ct as c,Jn as i,ot as l,lt as s};
