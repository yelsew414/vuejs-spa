import{i as k}from"./linear.68aad3e2.js";class y extends Map{constructor(t,u=I){if(super(),Object.defineProperties(this,{_intern:{value:new Map},_key:{value:u}}),t!=null)for(const[e,r]of t)this.set(e,r)}get(t){return super.get(M(this,t))}has(t){return super.has(M(this,t))}set(t,u){return super.set(v(this,t),u)}delete(t){return super.delete(O(this,t))}}function M({_intern:n,_key:t},u){const e=t(u);return n.has(e)?n.get(e):u}function v({_intern:n,_key:t},u){const e=t(u);return n.has(e)?n.get(e):(n.set(e,u),u)}function O({_intern:n,_key:t},u){const e=t(u);return n.has(e)&&(u=n.get(e),n.delete(e)),u}function I(n){return n!==null&&typeof n=="object"?n.valueOf():n}function R(n,t,u){n=+n,t=+t,u=(r=arguments.length)<2?(t=n,n=0,1):r<3?1:+u;for(var e=-1,r=Math.max(0,Math.ceil((t-n)/u))|0,i=new Array(r);++e<r;)i[e]=n+e*u;return i}const w=Symbol("implicit");function b(){var n=new y,t=[],u=[],e=w;function r(i){let o=n.get(i);if(o===void 0){if(e!==w)return e;n.set(i,o=t.push(i)-1)}return u[o%u.length]}return r.domain=function(i){if(!arguments.length)return t.slice();t=[],n=new y;for(const o of i)n.has(o)||n.set(o,t.push(o)-1);return r},r.range=function(i){return arguments.length?(u=Array.from(i),r):u.slice()},r.unknown=function(i){return arguments.length?(e=i,r):e},r.copy=function(){return b(t,u).unknown(e)},k.apply(r,arguments),r}function j(){var n=b().unknown(void 0),t=n.domain,u=n.range,e=0,r=1,i,o,f=!1,g=0,d=0,l=.5;delete n.unknown;function s(){var a=t().length,h=r<e,c=h?r:e,m=h?e:r;i=(m-c)/Math.max(1,a-g+d*2),f&&(i=Math.floor(i)),c+=(m-c-i*(a-g))*l,o=i*(1-g),f&&(c=Math.round(c),o=Math.round(o));var p=R(a).map(function(x){return c+i*x});return u(h?p.reverse():p)}return n.domain=function(a){return arguments.length?(t(a),s()):t()},n.range=function(a){return arguments.length?([e,r]=a,e=+e,r=+r,s()):[e,r]},n.rangeRound=function(a){return[e,r]=a,e=+e,r=+r,f=!0,s()},n.bandwidth=function(){return o},n.step=function(){return i},n.round=function(a){return arguments.length?(f=!!a,s()):f},n.padding=function(a){return arguments.length?(g=Math.min(1,d=+a),s()):g},n.paddingInner=function(a){return arguments.length?(g=Math.min(1,a),s()):g},n.paddingOuter=function(a){return arguments.length?(d=+a,s()):d},n.align=function(a){return arguments.length?(l=Math.max(0,Math.min(1,a)),s()):l},n.copy=function(){return j(t(),[e,r]).round(f).paddingInner(g).paddingOuter(d).align(l)},k.apply(s(),arguments)}export{j as b};