import{d as a,t as e,v as t,r as s,o as l,c as o,a as n,C as d,k as r,D as p}from"./vendor.02de9c8e.js";var u=a({name:"PasswordInfo",props:{accountInfo:{type:Object,default:()=>({})}},emits:["pre-step","next-step"],data:()=>({passwordModel:{payPassword:""},passwordRule:{payPassword:[{required:!0,message:"请输入支付密码",trigger:"blur"}]},loadingStatus:!1}),methods:{preStep(){this.loadingStatus=!1,this.passwordModel.payPassword="",this.$emit("pre-step")},nextStep(){this.$refs.stepTwoForm.validate((a=>{a||(this.loadingStatus=!0,setTimeout((()=>{this.$emit("next-step"),this.loadingStatus=!1}),3e3))}))}}});const i=r();e("data-v-a8553c4c");const c={class:"flex justify-end mt-2 mb-2"},f=p("上一步"),m=p(" 下一步 ");t();const w=i(((a,e,t,r,p,u)=>{const w=s("n-form-item"),y=s("n-input"),b=s("n-button"),g=s("n-space"),h=s("n-form"),_=s("n-card");return l(),o(_,{"content-style":{padding:"10px"}},{default:i((()=>[n(h,{ref:"stepTwoForm",model:a.passwordModel,rules:a.passwordRule,"label-width":"120px","label-placement":"left"},{default:i((()=>[n(w,{label:"付款账户："},{default:i((()=>[n("span",null,d(a.accountInfo.account),1)])),_:1}),n(w,{label:"收款账户："},{default:i((()=>[n("span",null,d(a.accountInfo.otherAccount),1)])),_:1}),n(w,{label:"收款人姓名："},{default:i((()=>[n("span",null,d(a.accountInfo.receiveName),1)])),_:1}),n(w,{label:"转账金额："},{default:i((()=>[n("span",null,d("￥"+Number(a.accountInfo.money).toFixed(2)),1)])),_:1}),n(w,{label:"支付密码",path:"payPassword"},{default:i((()=>[n(y,{value:a.passwordModel.payPassword,"onUpdate:value":e[1]||(e[1]=e=>a.passwordModel.payPassword=e),placeholder:"请输入支付密码"},null,8,["value"])])),_:1}),n("div",c,[n(g,null,{default:i((()=>[n(b,{size:"small",type:"warning",onClick:a.preStep},{default:i((()=>[f])),_:1},8,["onClick"]),n(b,{onClick:a.nextStep,size:"small",type:"primary",loading:a.loadingStatus},{default:i((()=>[m])),_:1},8,["onClick","loading"])])),_:1})])])),_:1},8,["model","rules"])])),_:1})}));u.render=w,u.__scopeId="data-v-a8553c4c";export default u;