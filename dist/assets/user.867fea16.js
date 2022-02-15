var T=Object.defineProperty,x=Object.defineProperties;var K=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,z=Object.prototype.propertyIsEnumerable;var F=(e,a,n)=>a in e?T(e,a,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[a]=n,v=(e,a)=>{for(var n in a||(a={}))R.call(a,n)&&F(e,n,a[n]);if(_)for(var n of _(a))z.call(a,n)&&F(e,n,a[n]);return e},C=(e,a)=>x(e,K(a));import{p as L,e as S}from"./index.3630a3e9.js";import{g as I}from"./form.76809a74.js";import{a as N,b as U,u as H,c as $,d as j,e as P}from"./table.05028df1.js";import{d as J,D as O,y as M,m as A,as as V,l as w,X,J as q,e as G,bK as Q,r as l,o as W,i as Y,a as u,w as o,k as B,_ as Z}from"./vendor.66b1fd00.js";var D=J({name:"UserList",setup(){const e=N(),a=U("id"),n=O(),m=M(),i=H(y),r=[],c=[{label:"\u4E1C\u90E8\u5730\u533A",key:1,children:[{label:"\u603B\u88C1\u90E8",key:11},{label:"\u8D22\u52A1\u90E8",key:12},{label:"\u6280\u672F\u90E8",key:13},{label:"\u9500\u552E\u90E8",key:14}]},{label:"\u897F\u90E8\u5730\u533A",key:2,children:[{label:"\u603B\u88C1\u90E8",key:21},{label:"\u8D22\u52A1\u90E8",key:22},{label:"\u6280\u672F\u90E8",key:23},{label:"\u9500\u552E\u90E8",key:24}]},{label:"\u5357\u90E8\u5730\u533A",key:3,children:[{label:"\u603B\u88C1\u90E8",key:31},{label:"\u8D22\u52A1\u90E8",key:32},{label:"\u6280\u672F\u90E8",key:33},{label:"\u9500\u552E\u90E8",key:34}]},{label:"\u5317\u90E8\u5730\u533A",key:4,children:[{label:"\u603B\u88C1\u90E8",key:41},{label:"\u8D22\u52A1\u90E8",key:42},{label:"\u6280\u672F\u90E8",key:43},{label:"\u9500\u552E\u90E8",key:44}]}],b=$([e.selectionColumn,e.indexColumn,{title:"\u540D\u79F0",key:"nickName"},{title:"\u6027\u522B",key:"gender",width:80,render:t=>A("div",t.gender===0?"\u7537":"\u5973")},{title:"\u5934\u50CF",key:"avatar",render:t=>A(V,{circle:!0,size:"small",src:t.avatar||""})},{title:"\u5730\u5740",key:"address"},{title:"\u540D\u79F0",key:"nickName"},{title:"\u4E0A\u6B21\u767B\u5F55\u65F6\u95F4",key:"lastLoginTime",fixed:"right",width:120},{title:"\u4E0A\u6B21\u767B\u5F55IP",key:"lastLoginIp",width:100,fixed:"right"},{title:"\u72B6\u6001",key:"status",fixed:"right",width:80,render:t=>I(t.status?"\u6B63\u5E38":"\u7981\u7528",{type:t.status?"success":"error",size:"small"})},{title:"\u64CD\u4F5C",key:"actions",fixed:"right",width:80,render:t=>j([{label:"\u5220\u9664",type:"error",onClick:k.bind(null,t)}])}],{align:"center"}),p=w(!1);function y(){L({url:S,data:()=>({page:i.page,pageSize:i.pageSize})}).then(t=>{e.handleSuccess(t),i.setTotalSize(t.totalSize)}).catch(console.log)}function g(){n.warning({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F",positiveText:"\u786E\u5B9A",onPositiveClick:()=>{m.success("\u6570\u636E\u6A21\u62DF\u5220\u9664\u6210\u529F\uFF0C\u53C2\u6570\u4E3A\uFF1A"+JSON.stringify(r))}})}function k(t){n.warning({title:"\u63D0\u793A",content:"\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6570\u636E\u5417\uFF1F",positiveText:"\u786E\u5B9A",onPositiveClick:()=>{e.dataList.splice(e.dataList.indexOf(t),1)}})}function h(t){r.length=0,r.push(...t)}function f(t){s.length=0,s.push(...t)}function E(t){m.success("\u9009\u4E2D\u7684\u503C\u4E3A--->"+JSON.stringify(t))}const s=X([]);return q(()=>p.value,t=>{t?s.push(...c.map(d=>d.key)):s.length=0}),G(async()=>{e.tableHeight.value=await P(Q()),y()}),C(v({},e),{rowKey:a,pattern:w(""),expandAllFlag:p,departmentData:c,tableColumns:b,pagination:i,onDeleteItem:k,onDeleteItems:g,onRowCheck:h,getExpandedKeys:s,onUpdateExpandedKeys:f,onCheckedKeys:E})}});const ee={class:"flex items-center"};function te(e,a,n,m,i,r){const c=l("n-input"),b=l("n-switch"),p=l("n-tree"),y=l("n-card"),g=l("n-grid-item"),k=l("DeleteButton"),h=l("TableHeader"),f=l("n-data-table"),E=l("TableBody"),s=l("TableFooter"),t=l("n-grid");return W(),Y("div",null,[u(t,{"x-gap":10},{default:o(()=>[u(g,{span:5},{default:o(()=>[u(y,{class:"h-full","content-style":{padding:"5px"},"header-style":{padding:"5px"},segmented:!0},{header:o(()=>[B("div",ee,[u(c,{class:"mr-2",value:e.pattern,"onUpdate:value":a[0]||(a[0]=d=>e.pattern=d),placeholder:"\u641C\u7D22",size:"small"},null,8,["value"]),u(b,{size:"small",value:e.expandAllFlag,"onUpdate:value":a[1]||(a[1]=d=>e.expandAllFlag=d)},null,8,["value"])])]),default:o(()=>[u(p,{"expanded-keys":e.getExpandedKeys,"block-line":"",pattern:e.pattern,data:e.departmentData,selectable:"","on-update:expanded-keys":e.onUpdateExpandedKeys,"on-update:selected-keys":e.onCheckedKeys},null,8,["expanded-keys","pattern","data","on-update:expanded-keys","on-update:selected-keys"])]),_:1})]),_:1}),u(g,{span:19},{default:o(()=>[B("div",null,[u(h,{ref:"tableHeaderRef","show-filter":!1},{"top-right":o(()=>[u(k,{onDelete:e.onDeleteItems},null,8,["onDelete"])]),_:1},512),u(E,null,{default:o(()=>[u(f,{loading:e.tableLoading,data:e.dataList,"row-key":e.rowKey,columns:e.tableColumns,"scroll-x":1e3,style:Z({height:`${e.tableHeight}px`}),"flex-height":!0,"onUpdate:checkedRowKeys":e.onRowCheck},null,8,["loading","data","row-key","columns","style","onUpdate:checkedRowKeys"])]),_:1}),u(s,{ref:"tableFooterRef",pagination:e.pagination},null,8,["pagination"])])]),_:1})]),_:1})])}D.render=te;D.__scopeId="data-v-32bd385f";export{D as default};
