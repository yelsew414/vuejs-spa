import{_ as u,o as h,c as m,a as c}from"./index.097e45be.js";import{s as o,l as v,a as f,c as g}from"./linear.4edfb20f.js";import{b as _}from"./band.dcb3d64f.js";import{s as d}from"./selectAll.9793708c.js";const b={mounted(){const t={top:30,right:30,bottom:50,left:60},a=700-t.left-t.right,r=500-t.top-t.bottom;var n=o("svg#interactiveBar").append("svg").attr("width",a+t.left+t.right).attr("height",r+t.top+t.bottom).append("g").attr("transform","translate("+t.left+","+t.top+")");let i=[{value:98,label:"A"},{value:27,label:"B"}],l=v().domain([0,100]).range([r,0]);n.append("g").call(f(l)),n.append("text").attr("x",a/2).attr("y",0-t.top/5).attr("text-anchor","middle").attr("font-size","35px").text("Interactive Bar Chart");let s=_().domain(i.map(e=>e.label)).range([0,a]).padding(.2);n.append("g").attr("transform","translate( 0,"+r+")").call(g(s)),n.selectAll("rect").data(i).enter().append("rect").attr("x",e=>s(e.label)).attr("y",e=>l(e.value)).attr("width",s.bandwidth()).attr("height",e=>r-l(e.value)).attr("fill","red"),o("input#barRange").on("input",function(){i[0].value=this.value,i[1].value=100-this.value,n.selectAll("rect").data(i).join("rect").attr("height",e=>r-l(e.value)).attr("y",e=>l(e.value))}),d("svg#interactiveBar rect").on("mouseover",function(e){o(this).transition().duration(500).attr("fill","darkred")}),d("svg#interactiveBar rect").on("mouseout",function(e){o(this).transition().duration(500).attr("fill","red")})},data(){return{greeting:"Hello World!"}},methods:{linearFunction:function(t){return[t,Math.pow(t-.5,2)*40]},lineData:function(){let t=[];for(let a=0;a<=100;a++)t.push(this.linearFunction(a));return t}}},x=c("svg",{id:"interactiveBar"},null,-1),B=c("div",{class:"slidecontainer"},[c("input",{type:"range",min:"0",max:"100",value:"0",class:"slider",id:"barRange"})],-1),w=[x,B];function y(t,a,r,n,i,l){return h(),m("div",null,w)}var I=u(b,[["render",y]]);export{I as default};
