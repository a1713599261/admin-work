import{I as f,_ as g}from"./index.d023bfa5.js";import{d as b,aI as v,i as y,k as h,r as C,o as $,q as k,a as s,w as r,f as _,B,y as E,H as x,am as D,G as I}from"./vendor.88197545.js";var p=b({name:"CardDraggable",components:{draggable:v},setup(){const o=f.glyphs.slice(0,100),e=y([]),i=!1,l=["#e54d42","#f37b1d","#fbbd08","#8dc63f","#39b54a","#1cbbb4","#0081ff","#6739b6","#9c26b0","#e03997","#a5673f","#8799a3"],c=()=>l[Math.floor(Math.random()*l.length)],d=()=>{e.length=0,e.push(...o.map((n,t)=>({label:`\u7B2C ${t+1} \u4E2A\u5143\u7D20`,icon:n.font_class,id:n.icon_id,color:c()})))};return h(()=>{e.push(...o.map((n,t)=>({label:`\u7B2C ${t+1} \u4E2A\u5143\u7D20`,icon:n.font_class,id:n.icon_id,color:c()})))}),{drag:i,list:e,resetElements:d}}});const S={class:"main-container"},z=x("\u91CD\u7F6E\u5143\u7D20\u4F4D\u7F6E"),M={class:"card-item"},N={class:"label"};function V(o,e,i,l,c,d){const n=D,t=g,u=C("draggable"),m=I;return $(),k("div",S,[s(m,{title:"\u62D6\u52A8\u66F4\u6362\u56FE\u6807\u4F4D\u7F6E"},{"header-extra":r(()=>[s(n,{size:"small",type:"primary",onClick:o.resetElements},{default:r(()=>[z]),_:1},8,["onClick"])]),default:r(()=>[s(u,{list:o.list,animation:"500",onStart:e[0]||(e[0]=a=>o.drag=!0),onEnd:e[1]||(e[1]=a=>o.drag=!1),"item-key":"id",tag:"ul"},{item:r(({element:a})=>[_("li",M,[s(t,{prefix:"iconfont",name:a.icon,style:B([{"font-size":"30px"},{color:a.color}])},null,8,["name","style"]),_("div",N,E(a.label),1)])]),_:1},8,["list"])]),_:1})])}p.render=V;p.__scopeId="data-v-02f9cf28";export{p as default};