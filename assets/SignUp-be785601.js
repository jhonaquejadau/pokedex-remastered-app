import{u as c,j as l,a as n,S as p}from"./index-93036612.js";import{c as d,a as f,Q as w,T as x,d as u}from"./firebase-13046239.js";import{F as b,T as i}from"./formik.esm-026b7356.js";const y={name:"",nickname:"",email:"",password:"",confirmPassword:""},T=()=>{const m=c();return l("div",{className:"w-full h-[89vh] flex flex-col justify-center items-center",children:[n("h1",{className:"text-4xl font-bold",children:"Oooh you hasn't acocunt yet!!"}),n("p",{children:"Create your pokemon account and enjoy this powerful pokedex application..."}),n(b,{initialValues:y,onSubmit:(s,r)=>{d(f,s.email,s.password).then(async o=>{try{await w(x(u,"users"),{...s,token:o.user.uid})}catch(e){console.error("Error adding user to database",e)}}).catch(o=>{console.log(o)}),m("/login"),r.resetForm()},validationSchema:p,enableReinitialize:!0,children:({handleSubmit:s,handleChange:r,handleBlur:o,touched:e,errors:a,values:t})=>l("form",{onSubmit:s,className:"flex flex-col justify-center w-[50%] gap-4 shadow-xl p-4",children:[n(i,{type:"text",name:"name",label:"name",value:t.name,onChange:r,onBlur:o,error:!!(e.name&&a.name),helperText:e.name&&a.name}),n(i,{type:"text",name:"nickname",label:"nickname",value:t.nickname,onChange:r,onBlur:o,error:!!(e.nickname&&a.nickname),helperText:e.nickname&&a.nickname}),n(i,{type:"text",name:"email",label:"email",value:t.email,onChange:r,onBlur:o,error:!!(e.email&&a.email),helperText:e.email&&a.email}),n(i,{type:"password",name:"password",label:"password",value:t.password,onChange:r,onBlur:o,error:!!(e.password&&a.password),helperText:e.password&&a.password}),n(i,{type:"password",name:"confirmPassword",label:"confirm password",value:t.confirmPassword,onChange:r,onBlur:o,error:!!(e.confirmPassword&&a.confirmPassword),helperText:e.confirmPassword&&a.confirmPassword}),n("button",{className:"w-[50%] mx-auto px-4 py-2 font-bold bg-orange-500 text-white rounded ",children:"Create user"}),l("p",{className:"text-center",children:["Already have an account?"," ",n("span",{className:"font-bold text-orange-400 hover:cursor-pointer",onClick:()=>m("/login"),children:"Sign In"})]})]})})]})};export{T as default};
