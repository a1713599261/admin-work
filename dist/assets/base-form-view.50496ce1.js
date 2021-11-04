import{r as e,a as l,b as a,c as r,d as t,e as n,f as u}from"./form.53265fa5.js";import{d as o,A as s,m as v,t as d,v as i,r as m,o as b,c,a as p,k as f,D as y}from"./vendor.02de9c8e.js";var g=o({name:"BaseFormView",setup(){const o=s(),d=v(null);const i=[{label:"会议名称",key:"name",required:!0,value:v(null),render:l=>e(l.value,{placeholder:"请输入会议名称",clearable:!0}),validator:(e,l)=>!!e.value.value||(l.error("请输入会议名称"),!1)},{label:"与会领导",key:"leader",value:v(null),render:e=>l(e.value,[{label:"张总",value:"张总"},{label:"王总",value:"王总"},{label:"各种总",value:"各种总"}])},{label:"会议类型",key:"meetType",required:!0,value:v(null),optionItems:[{label:"普通",value:"0"},{label:"紧急",value:"1"}],render:e=>a(e.value,e.optionItems,{placeholder:"请选择会议类型",clearable:!0})},{label:"是否远程",key:"remote",value:v(null),render:e=>r(e.value,"不需要")},{label:"所需设备",key:"equipment",value:v(["tv"]),render:e=>t(e.value,[{label:"电视",value:"tv"},{label:"投影仪",value:"touying"},{label:"电脑",value:"compute"}])},{label:"会议内容",key:"content",value:v(null),render:l=>e(l.value,{placeholder:"请输入会议内容",maxlength:10})},{label:"起止日期",key:"startEndDate",value:v([Date.now(),Date.now()]),render:e=>n(e.value,{type:"daterange",style:"width: 100%"})},{label:"开始时间",key:"startTime",value:v(null),render:e=>u(e.value)},{label:"起止地点",key:"address",value:v(null),optionItems:[{label:"会议一室",value:1},{label:"会议二室",value:2},{label:"会议三室",value:3},{label:"会议四室",value:4}],render:e=>a(e.value,e.optionItems,{placeholder:"请选择会议地点",clearable:!0})},{label:"与会人员",key:"joinMemeber",value:v(null),optionItems:[{label:"张三",value:1},{label:"李四",value:2},{label:"王五",value:3},{label:"赵六",value:4}],render:e=>a(e.value,e.optionItems,{placeholder:"请选择与会人员",clearable:!0})},{label:"会议备注",key:"remark",value:v(null),render:l=>e(l.value,{placeholder:"请输入会议备注",type:"textarea",rows:3})}],m=v(!1);return{dataForm:d,formConfig:{labelWidth:100,size:"medium",labelAlign:"right"},formItems:i,submitLoading:m,submit:function(){var e;(null==(e=d.value)?void 0:e.validator())&&(m.value=!0,setTimeout((()=>{var e;m.value=!1,o.success("提交成功，参数为："+JSON.stringify(null==(e=d.value)?void 0:e.generatorParams()))}),3e3))}}}});const k=f();d("data-v-28619ebb");const h={class:"form-wrapper"},I={class:"flex justify-end"},w=y(" 提交 ");i();const x=k(((e,l,a,r,t,n)=>{const u=m("DataForm"),o=m("n-button"),s=m("n-card");return b(),c("div",null,[p(s,{title:"请填写会议基本信息，（以下表单信息是动态生成）","content-style":{padding:"10px"},"header-style":{padding:"10px"},segmented:!0},{default:k((()=>[p("div",h,[p(u,{ref:"dataForm",options:e.formItems,"form-config":e.formConfig},null,8,["options","form-config"]),p("div",I,[p(o,{loading:e.submitLoading,type:"primary",size:"small",onClick:e.submit},{default:k((()=>[w])),_:1},8,["loading","onClick"])])])])),_:1})])}));g.render=x,g.__scopeId="data-v-28619ebb";export default g;