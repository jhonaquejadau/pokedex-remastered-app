import{u as r,a2 as l,r as u,j as s,a as i,a3 as h,a4 as m}from"./index-75c7769e.js";import{o as d,b as f,a}from"./firebase-13046239.js";import{u as g}from"./useDispatch-493e1518.js";const N=()=>{const o=r(),n=g(),t=l(e=>e.user),c=()=>{f(a).then(()=>{console.log("Sign out successfully"),n(h()),o(`/${m.LOGIN}`,{replace:!0})}).catch(e=>{console.log(e.message)})};return u.useEffect(()=>{const e=d(a,p=>{});return()=>{e()}},[]),s("div",{className:"w-full h-[89vh] text-center flex flex-col justify-center items-center",children:[s("p",{className:"text-4xl",children:["WELCOME BACK TO YOUR DASHBOARD, ",t==null?void 0:t.nickname," "]}),i("button",{onClick:c,className:"bg-orange-500 text-white font-bold px-6 py-2 rounded mt-4",children:"Logout"})]})};export{N as default};