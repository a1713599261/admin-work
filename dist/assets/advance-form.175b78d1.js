import{d as e,m as l,A as a,t,v as d,r as n,o as u,c as o,a as s,k as r,D as i}from"./vendor.02de9c8e.js";var f=e({name:"AdvanceForm",setup(){const e=l(null),t=l({name:null,isOnLine:null,joinType:null,address:null,remark:null}),d=a();const n=l(2);return{verifyForm:e,baseInfoModel:t,rules:{name:{required:!0,message:"请输入学校名称",trigger:"blur"},isOnLine:{required:!0,message:"请选择线上线下",trigger:"change"},joinType:{required:!0,message:"请选择加盟方式",trigger:"change"},address:{required:!0,message:"请输入学校地址",trigger:"blur"}},onVerifyForm:function(){var l;null==(l=e.value)||l.validate((e=>{e?d.error("验证失败"):d.success("验证成功")}))},cols:n}}});const b=r();t("data-v-5cd787fb");const p={class:"main-container"},m=i("验证"),v=i("线下"),c=i("线上"),_=i("普通"),h=i("独家"),y=i("代理"),g=i("普通"),I=i("独家"),w=i("代理"),M={class:"mt-2"},x=i("线下"),k=i("线上"),j=i("普通"),L=i("独家"),T=i("代理");d();const U=b(((e,l,a,t,d,r)=>{const i=n("n-button"),f=n("n-input"),U=n("n-form-item"),O=n("n-radio"),F=n("n-radio-group"),V=n("n-radio-button"),q=n("n-form"),z=n("n-card"),A=n("n-input-number"),C=n("n-select"),D=n("n-form-item-gi"),B=n("n-checkbox"),E=n("n-space"),G=n("n-checkbox-group"),H=n("n-date-picker"),J=n("n-time-picker"),K=n("n-switch"),N=n("n-grid");return u(),o("div",p,[s("div",null,[s(z,{title:"表单验证","header-style":{padding:"10px"},segmented:!0},{"header-extra":b((()=>[s(i,{size:"small",type:"primary",onClick:e.onVerifyForm},{default:b((()=>[m])),_:1},8,["onClick"])])),default:b((()=>[s(q,{ref:"verifyForm",model:e.baseInfoModel,rules:e.rules,"label-width":"80px",class:"form-wrapper","label-align":"left"},{default:b((()=>[s(U,{label:"学校名称",path:"name"},{default:b((()=>[s(f,{value:e.baseInfoModel.name,"onUpdate:value":l[1]||(l[1]=l=>e.baseInfoModel.name=l),placeholder:"请输入学校名称"},null,8,["value"])])),_:1}),s(U,{label:"在线状态",path:"isOnLine"},{default:b((()=>[s(F,{value:e.baseInfoModel.isOnLine,"onUpdate:value":l[2]||(l[2]=l=>e.baseInfoModel.isOnLine=l),name:"isOnLine"},{default:b((()=>[s(O,{value:"onLine"},{default:b((()=>[v])),_:1}),s(O,{value:"offLine"},{default:b((()=>[c])),_:1})])),_:1},8,["value"])])),_:1}),s(U,{label:"加盟方式",path:"joinType"},{default:b((()=>[s(F,{value:e.baseInfoModel.joinType,"onUpdate:value":l[3]||(l[3]=l=>e.baseInfoModel.joinType=l),name:"joinType"},{default:b((()=>[s(V,{value:"normal"},{default:b((()=>[_])),_:1}),s(V,{value:"single"},{default:b((()=>[h])),_:1}),s(V,{value:"proxy"},{default:b((()=>[y])),_:1})])),_:1},8,["value"])])),_:1}),s(U,{label:"学校地址",path:"address"},{default:b((()=>[s(f,{value:e.baseInfoModel.address,"onUpdate:value":l[4]||(l[4]=l=>e.baseInfoModel.address=l),placeholder:"请输入学校地址"},null,8,["value"])])),_:1}),s(U,{label:"学校备注",path:"remark"},{default:b((()=>[s(f,{value:e.baseInfoModel.remark,"onUpdate:value":l[5]||(l[5]=l=>e.baseInfoModel.remark=l),placeholder:"请输入学校备注",type:"textarea",rows:3},null,8,["value"])])),_:1})])),_:1},8,["model","rules"])])),_:1})]),s(z,{title:"栅格化表单"+e.cols+"列","header-style":{padding:"10px"},class:"mt-2",segmented:!0},{"header-extra":b((()=>[s(A,{value:e.cols,"onUpdate:value":l[6]||(l[6]=l=>e.cols=l),max:4,min:2},null,8,["value"])])),default:b((()=>[s(q,{"label-width":"80",size:"small","label-placement":"left"},{default:b((()=>[s(N,{cols:e.cols,"x-gap":"20","y-gap":"10"},{default:b((()=>[s(D,{label:"下拉选择"},{default:b((()=>[s(C,{placeholder:"请选择一个吧",options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3},{label:"选项四",value:4}]})])),_:1}),s(D,{label:"加减数量"},{default:b((()=>[s(A,{style:{width:"100%"}})])),_:1}),s(D,{label:"输入框"},{default:b((()=>[s(f)])),_:1}),s(D,{label:"复选框"},{default:b((()=>[s(G,null,{default:b((()=>[s(E,null,{default:b((()=>[s(B,{value:"1"},{default:b((()=>[g])),_:1}),s(B,{value:"2"},{default:b((()=>[I])),_:1}),s(B,{value:"3"},{default:b((()=>[w])),_:1})])),_:1})])),_:1})])),_:1}),s(D,{label:"选择日期"},{default:b((()=>[s(H,{style:{width:"100%"}})])),_:1}),s(D,{label:"日期范围"},{default:b((()=>[s(H,{type:"daterange",style:{width:"100%"}})])),_:1}),s(D,{label:"选择时间"},{default:b((()=>[s(J,{style:{width:"100%"}})])),_:1}),s(D,{label:"开关按钮"},{default:b((()=>[s(K)])),_:1})])),_:1},8,["cols"])])),_:1})])),_:1},8,["title"]),s("div",M,[s(z,{title:"行内表单","header-style":{padding:"10px"},segmented:!0},{default:b((()=>[s(q,{inline:"","label-width":"80",size:"small","label-align":"left"},{default:b((()=>[s(U,{label:"输入框",style:{width:"20%"}},{default:b((()=>[s(f,{value:e.baseInfoModel.name,"onUpdate:value":l[7]||(l[7]=l=>e.baseInfoModel.name=l),placeholder:"请输入一定内容"},null,8,["value"])])),_:1}),s(U,{label:"单选组",style:{width:"20%"}},{default:b((()=>[s(F,null,{default:b((()=>[s(O,{label:0},{default:b((()=>[x])),_:1}),s(O,{label:1},{default:b((()=>[k])),_:1})])),_:1})])),_:1}),s(U,{label:"下拉选择",style:{width:"20%"}},{default:b((()=>[s(C,{options:[{label:"选项一",value:1},{label:"选项二",value:2},{label:"选项三",value:3}]})])),_:1}),s(U,{label:"多选组",style:{width:"20%"}},{default:b((()=>[s(G,{modelValue:e.baseInfoModel.joinType,"onUpdate:modelValue":l[8]||(l[8]=l=>e.baseInfoModel.joinType=l)},{default:b((()=>[s(E,null,{default:b((()=>[s(B,{value:"1"},{default:b((()=>[j])),_:1}),s(B,{value:"2"},{default:b((()=>[L])),_:1}),s(B,{value:"3"},{default:b((()=>[T])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1}),s(U,{label:"多行输入",style:{width:"20%"}},{default:b((()=>[s(f,{placeholder:"请输入多行输入",type:"textarea",rows:3})])),_:1})])),_:1})])),_:1})])])}));f.render=U,f.__scopeId="data-v-5cd787fb";export default f;