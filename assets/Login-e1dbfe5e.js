import{u as d,j as l,a,c as u,P as p,b as f}from"./index-93036612.js";import{B as h,T as g,d as x,s as w,a as b}from"./firebase-13046239.js";import{F as y,T as m}from"./formik.esm-026b7356.js";import{u as v}from"./useDispatch-7e63ff9e.js";const k=async i=>await h(g(x,"users")).then(o=>{const e=o.docs.map(s=>s.data()).filter(s=>s.token===i.user.uid);return{name:e[0].name,token:e[0].token,nickname:e[0].nickname,email:e[0].email}}),N="/pokedex-remastered-app/assets/login-ed144f50.svg",T={email:"",password:""},C=()=>{const i=v(),o=d();return l("div",{className:"flex flex-row justify-center w-full h-[89vh] text-center",children:[l("div",{className:"flex flex-col justify-center w-[50%] h-full p-16",children:[a("h1",{className:"text-4xl font-bold",children:"WELCOME BACK"}),a("p",{children:"Login into your acocunt and manage your dahsboard..."}),a(y,{initialValues:T,onSubmit:(e,s)=>{w(b,e.email,e.password).then(async t=>{const n=await k(t);i(u(n)),o(`/${p.PRIVATE}`,{replace:!0})}).catch(t=>console.log("error",t)),s.resetForm()},validationSchema:f,enableReinitialize:!0,children:({handleSubmit:e,handleChange:s,handleBlur:t,touched:n,values:c,errors:r})=>l("form",{onSubmit:e,className:"flex flex-col justify-center w-full py-4 px-10 gap-4",children:[a(m,{type:"text",name:"email",label:"email",value:c.email,onChange:s,onBlur:t,error:!!(n.email&&r.email),helperText:n.email&&r.email}),a(m,{type:"password",name:"password",label:"password",value:c.password,onChange:s,onBlur:t,error:!!(n.password&&r.password),helperText:n.password&&r.password}),a("button",{type:"submit",className:"px-4 py-2 rounded bg-orange-500 text-white font-bold",children:"Login"})]})}),l("p",{children:["Don't have an account?"," ",a("span",{className:"text-orange-500 font-bold hover:cursor-pointer",onClick:()=>o("/register"),children:"Sign up"})]})]}),a("div",{className:"w-[50%] bg-slate-200",children:a("img",{src:N,alt:"login_background",className:"p-6 w-full h-full"})})]})};export{C as default};
