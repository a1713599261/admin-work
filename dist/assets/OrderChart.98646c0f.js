import{d as i,L as l,u as a}from"./useEcharts.5a9cb742.js";import{d as c,l as n,e as p,f as d,a2 as u,o as f,i as h}from"./vendor.66b1fd00.js";var m=c({name:"OrderChart",setup(){const t=n(!0),e=n(null),o=()=>{const s={tooltip:{trigger:"item",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},grid:{x:"-5%",y:0,x2:"-5%",y2:0},xAxis:{type:"category",splitLine:{show:!1}},yAxis:[{type:"value",splitLine:{show:!1}}],series:[{data:[82,93,90,74,82,60,50],type:"line",smooth:!0,lineStyle:{width:0},showSymbol:!1,areaStyle:{opacity:.8,color:new l(0,0,0,1,[{offset:0,color:"rgba(128, 255, 165)"},{offset:1,color:"rgba(1, 191, 236)"}])}}]};setTimeout(()=>{t.value=!1,u(()=>{a(e.value).setOption(s)})},100)},r=()=>{a(e.value).resize()};return p(o),d(()=>{i(e.value)}),{loading:t,orderChartWrapper:e,updateChart:r}}});const y={ref:"orderChartWrapper",style:{height:"100%"}};function g(t,e,o,r,s,x){return f(),h("div",y,null,512)}m.render=g;export{m as default};
