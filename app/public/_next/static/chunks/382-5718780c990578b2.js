"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[382],{86891:function(e,a,n){var s=n(85893),r=n(32644),l=n(32417),t=n(67294),i=n(57851),o=n(72100);a.Z=(0,t.memo)((0,t.forwardRef)(function(e,a){let{size:n="large",label:t,leftElement:d,rightElement:c,rightLabelElement:u,placeholder:m="",isRequired:x=!1,isInvalid:p=!1,error:f,defaultValue:h,type:v="text",id:g="",isElementButton:b=!1,className:j,labelClassName:Z,colorTheme:N="primary",isHideSpinButton:w=!0,...y}=e;return(0,s.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[t&&(0,s.jsxs)(r.Z,{className:"flex flex-row",children:[(0,s.jsxs)("label",{htmlFor:g,className:(0,i.m)("font-bold",Z),children:[t," ",!x&&(0,s.jsx)(l.Z,{className:"font-normal text-gray",children:"(Opsional)"})]}),u]}),(0,s.jsxs)("div",{className:"relative",children:[(0,s.jsx)("input",{id:g,type:v,className:(0,i.m)(d&&"pl-9",c&&"pr-9",(0,o.S)({isInvalid:p,size:n}),"border !rounded-none p-[10px]",w&&"hide-spin-button",j),required:x,placeholder:"".concat(m).concat(x?" *":""),ref:a,defaultValue:h,...y}),d&&(0,s.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-2 ".concat(b?"cursor-pointer":"pointer-events-none"),children:d}),c&&(0,s.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center ".concat(b?"cursor-pointer":"pointer-events-none"),children:c})]}),f&&(0,s.jsx)(l.Z,{className:"text-red-500 text-xs",children:f})]})}))},72100:function(e,a,n){n.d(a,{S:function(){return r}});var s=n(57851);let r=e=>(0,s.m)("\n    !text-sm\n    text-dark\n    block\n    w-full\n    !border\n    !border-gray-300\n    !shadow-sm\n    focus:outline-none\n    !caret-dark\n    placeholder-gray\n    disabled:bg-gray-300\n    disabled:text-gray-700\n\n  ",(null==e?void 0:e.isInvalid)&&"!border-danger focus:!border-danger-lighter focus:!ring-1 focus:!ring-danger-light",(null==e?void 0:e.size)==="large"?"!py-2 !px-2":"!py-1 !px-1")},90803:function(e,a,n){n.d(a,{Z:function(){return s.Z}});var s=n(76846)},21964:function(e,a,n){n.d(a,{Z:function(){return s.Z}});var s=n(87391)},382:function(e,a,n){n.d(a,{Z:function(){return E}});var s=n(85893),r=n(32644),l=n(47181),t=n(32417),i=n(61238),o=n(41664),d=n.n(o),c=n(57851),u=n(11458),m=n(94478),x=n(86891),p=n(90803),f=n(21964),h=n(16409),v=n(11163),g=n(67294),b=n(45249),j=n(39287),Z=n(78276),N=n(37518),w=n(4346);let y=(0,w.Z)({baseURL:"".concat("https://www.googleapis.com/oauth2","/v3")}),k=async e=>(0,N.Z)(()=>y.get("/userinfo",{headers:{Authorization:"Bearer ".concat(e)}}));var C=n(86426),S=function(e){let{className:a=""}=e;return(0,s.jsxs)("svg",{className:a,width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.6666 7.15465C13.6666 6.67189 13.6233 6.20771 13.5428 5.76208H7.13086V8.39558H10.7949C10.637 9.24659 10.1574 9.96763 9.43633 10.4504V12.1586H11.6366C12.9239 10.9734 13.6666 9.22802 13.6666 7.15465Z",fill:"#fff"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.13083 13.8081C8.96902 13.8081 10.5101 13.1984 11.6366 12.1587L9.4363 10.4504C8.82667 10.8589 8.04683 11.1003 7.13083 11.1003C5.35764 11.1003 3.85676 9.9027 3.3214 8.29352H1.04688V10.0574C2.16712 12.2824 4.46949 13.8081 7.13083 13.8081Z",fill:"#fff"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.32092 8.29337C3.18476 7.88489 3.10739 7.44855 3.10739 6.99983C3.10739 6.55112 3.18476 6.11478 3.32092 5.7063V3.94238H1.0464C0.585305 4.86148 0.322266 5.90126 0.322266 6.99983C0.322266 8.09841 0.585305 9.13819 1.0464 10.0573L3.32092 8.29337Z",fill:"#fff"}),(0,s.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.13083 2.89972C8.13038 2.89972 9.02781 3.24322 9.73338 3.91784L11.6861 1.96515C10.507 0.866576 8.96592 0.191956 7.13083 0.191956C4.46949 0.191956 2.16712 1.71759 1.04688 3.9426L3.3214 5.70651C3.85676 4.09732 5.35763 2.89972 7.13083 2.89972Z",fill:"#fff"})]})};function R(){let{isLogin:e}=(0,i.Kw)(e=>e),{setAppAlert:a}=(0,i.WX)(e=>e),{afterSuccessLogin:n}=(0,Z.Eu)(),[o,d]=(0,g.useState)(!1),[N,w]=(0,g.useState)(!1),[y,R]=(0,g.useState)(!1),E=(0,v.useRouter)(),[L,M]=(0,g.useState)(""),[H,q]=(0,g.useState)("");(0,g.useEffect)(()=>{if("/login"===E.pathname&&e){if(E.query.redirect){E.push("/".concat(E.query.redirect));return}E.push("/")}},[E.pathname,e,E]);let A=async e=>{var a,n,s;let r=await(0,u.EB)("id"),l=null==e?void 0:null===(a=e.data)||void 0===a?void 0:a.errorCode,t=null==r?void 0:null===(n=r.data)||void 0===n?void 0:n.filter(e=>(null==e?void 0:e.code)===l);return t&&(null==t?void 0:t.length)>0?null===(s=t[0])||void 0===s?void 0:s.message:null==e?void 0:e.error_message},_=async e=>{M(""),q(""),d(!0);try{let a={...e,type:"password"},s=await(0,j.mT)(a);if(!s.data)return;let{token:r}=s.data;q(s.message),M(""),n(r,null==e?void 0:e.identifier)}catch(a){let e=await A(a);M(e),q("")}finally{d(!1)}},B=async(e,a,s)=>{M(""),q("");try{w(!0);let r=await(0,j.Lq)({token:e,type:a});if(!r.data)return;let{token:l}=r.data;q("Login dengan ".concat(a," berhasil")),M(""),n(l,s)}catch(e){M(e.message),q("")}finally{w(!1)}},V=async e=>{let a=(null==e?void 0:e.access_token)||"",{email:n}=await k(a);B(a,"google",n)},z=(0,C.Nq)({onSuccess:V,onError:()=>{a({isShow:!0,message:"Maaf permohonan Anda tidak dapat diproses. Silahkan coba beberapa saat lagi.",variant:"danger"})}});return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.Z,{className:"px-4",children:(0,s.jsx)(l.Z,{type:"button",disabled:o||N,isLoading:N,onClick:()=>z(),className:(0,c.m)("bg-[#dd4b39] mb-2.5 uppercase flex items-center w-full h-10 border py-3 px-4 border-gray-300 font-bold text-sm text-white text-left hover:outline-none focus:outline-none hover:bg-[#b33c2d]",N?"justify-center":"justify-start"),children:(0,s.jsxs)(r.Z,{className:"flex gap-2",children:[(0,s.jsx)(S,{}),(0,s.jsx)("span",{className:"font-bold text-sm uppercase",children:"Masuk Dengan Google"})]})})}),(0,s.jsx)(r.Z,{className:"px-0 pt-5 pb-2",children:(0,s.jsx)(r.Z,{className:"pb-2 pt-6 px-4",children:(0,s.jsx)(t.Z,{className:"text-sm",children:"Jika anda memiliki akun, masuk dengan email atau no handphone anda."})})}),(0,s.jsx)(r.Z,{children:(0,s.jsx)(b.l0,{onSubmit:_,render:e=>{let{submitError:a,handleSubmit:n,values:t}=e;return(0,s.jsxs)("form",{onSubmit:n,children:[(0,s.jsxs)(r.Z,{className:"px-4",children:[(0,s.jsx)(b.gN,{name:"identifier",validate:(0,h.A3)(h.C1,h.PK),children:e=>{let{input:a,meta:n}=e;return(0,s.jsx)(r.Z,{className:"mb-3",children:(0,s.jsx)(x.Z,{className:"px-4",id:"identifier",type:"text",placeholder:"Masukkan no. Handphone atau emailmu",isRequired:!0,isInvalid:!!t.identifier,label:"Email atau No Handphone",...a,error:"".concat((n.error||n.submitError)&&n.touched?n.error||n.submitError:"")})})}}),(0,s.jsx)(b.gN,{name:"password",validate:h.C1,children:e=>{let{input:a,meta:n}=e;return(0,s.jsx)(r.Z,{className:"relative mb-1",children:(0,s.jsx)(x.Z,{className:"px-4",id:"password",type:y?"text":"password",placeholder:"Masukkan passwordmu",isRequired:!0,isInvalid:!!t.password,label:"Password",rightElement:(0,s.jsx)(p.Z,{icon:(0,s.jsx)(f.Z,{name:y?"eye-close":"eye-open",className:"w-4 h-4 text-gray-500"}),ariaLabel:"",onClick:()=>R(!y)}),isElementButton:!0,...a,error:"".concat(n.error&&n.touched?n.error:"")})})}}),H&&(0,s.jsx)(r.Z,{className:"py-2",children:(0,s.jsx)(m.Z,{variant:"success",children:H})}),L&&(0,s.jsx)(r.Z,{className:"py-2",children:(0,s.jsx)(m.Z,{variant:"danger",children:L})})]}),(0,s.jsx)(r.Z,{className:"opacity-80 w-full mt-6 border-b-[1px] border-gray-300"}),(0,s.jsxs)(r.Z,{className:"px-4 pb-4",children:[a&&(0,s.jsx)("div",{className:"error",children:a}),(0,s.jsx)(r.Z,{className:"pt-1",children:(0,s.jsx)(l.Z,{disabled:o||N,size:"large",className:"ml-auto w-full mt-4 bg-black disabled:bg-black",type:"submit",id:"mcis-button-login",isLoading:o,children:"MASUK"})})]})]})}})})]})}function E(e){let{className:a}=e,{setIsShowLoginForm:n}=(0,i.WX)(e=>e);return(0,s.jsx)(r.Z,{className:(0,c.m)("w-full max-w-[375px] mx-auto shadow-xl mt-[40px] md:mt-[150px]",a),children:(0,s.jsx)(r.Z,{className:"text-left",children:(0,s.jsxs)(r.Z,{children:[(0,s.jsx)(R,{}),(0,s.jsxs)(r.Z,{className:"text-center pb-2 text-sm",children:["Belum punya akun?"," ",(0,s.jsx)(d(),{href:"/register",onClick:()=>n(!1),children:(0,s.jsx)(l.Z,{size:"large",variant:"link-text",className:"normal-case",children:"Daftar disini"})})]}),(0,s.jsx)(r.Z,{className:"text-center",children:(0,s.jsx)(d(),{href:"/forgot-password",className:"pt-3 pb-4 inline-block",onClick:()=>n(!1),children:(0,s.jsx)(t.Z,{className:"text-xs font-semibold cursor-pointer uppercase",children:"Lupa Password?"})})})]})})})}},16409:function(e,a,n){n.d(a,{A3:function(){return i},C1:function(){return r},PK:function(){return t},Qs:function(){return l}});var s=n(77987);let r=e=>e?void 0:s.UY,l=e=>(null==e?void 0:e.match(s.ab))?void 0:s.ui,t=e=>{var a;return(null==e?void 0:e.match(s.ab))||(null===(a=String(e))||void 0===a?void 0:a.match(s.HF))?void 0:s.jo},i=function(){for(var e=arguments.length,a=Array(e),n=0;n<e;n++)a[n]=arguments[n];return e=>a.reduce((a,n)=>a||n(e),void 0)}}}]);