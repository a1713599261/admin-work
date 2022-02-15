import{d as h,L as v,u as d}from"./useEcharts.5a9cb742.js";import{d as x,l as u,e as y,f as g,a2 as k,r as i,o as a,c as n,w as l,i as m,k as C}from"./vendor.66b1fd00.js";var p=x({name:"DepartmentChart",setup(){const e=u(!0),t=u(null),o=()=>{const s={tooltip:{trigger:"item"},radar:{name:{textStyle:{color:"#333",fontSize:10,backgroundColor:"#f5f5f5",borderRadius:3,padding:[3,5]}},indicator:[{name:"\u9500\u552E",max:50},{name:"\u7BA1\u7406",max:5},{name:"\u6280\u672F",max:4},{name:"\u5BA2\u670D",max:3},{name:"\u4EBA\u8D44",max:5},{name:"\u8FD0\u8425",max:10}],radius:60,nameGap:8},series:[{name:"\u516C\u53F8\u90E8\u95E8\u4EBA\u5458\u914D\u5907",type:"radar",data:[{value:[30,3,4,3,5,8],itemStyle:{color:"#a8efeb"},areaStyle:{opacity:.8,color:new v(0,0,0,1,[{offset:0,color:"rgba(234, 214, 238, 1)"},{offset:1,color:"rgba(168, 239, 235, 1)"}])}}]}]};setTimeout(()=>{e.value=!1,k(()=>{d(t.value).setOption(s)})},1e3)},r=()=>{d(t.value).resize()};return y(o),g(()=>{h(t.value)}),{loading:e,departmentChart:t,updateChart:r}}});const B={key:1,class:"text-sm"},E={class:"chart-item-container"},b={key:1,ref:"departmentChart",class:"chart-item"};function D(e,t,o,r,s,_){const c=i("n-skeleton"),f=i("n-card");return a(),n(f,{"content-style":{padding:"10px"},"header-style":{padding:"10px"},segmented:!0},{header:l(()=>[e.loading?(a(),n(c,{key:0,text:"",style:{width:"50%"}})):(a(),m("div",B,"\u516C\u53F8\u5404\u90E8\u95E8\u4EBA\u5458\u6570\u91CF"))]),default:l(()=>[C("div",E,[e.loading?(a(),n(c,{key:0,text:"",repeat:4})):(a(),m("div",b,null,512))])]),_:1})}p.render=D;p.__scopeId="data-v-6e31943d";export{p as default};
