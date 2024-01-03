"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5403],{94478:function(e,r,a){a.d(r,{Z:function(){return u}});var n=a(85893),t=a(32644),l=a(76846),s=a(32417),i=a(23826),o=a(61238),c=a(67294),d=a(57851);let m={info:"text-[#0c5460] bg-[#d1ecf1] border-[#C1E5EF]",success:"text-[#155724] bg-[#d4edda] border-[#c3e6cb]",danger:"text-[##721c24] bg-[#f8d7da] border-[#f5c6cb]",warning:"text-[#856404] bg-[#fff3cd] border-[#ffeeba]"},x={small:"text-xs p-2.5",large:"text-sm p-3.5"};function u(e){let{children:r,title:a,icon:u,size:f="small",variant:p,isCloseable:b,className:h,id:g="alert",...y}=e,[v,w]=(0,c.useState)(!0),{setAppAlert:j}=(0,o.WX)(e=>e),N=()=>{w(!1),j(null)},k=(0,d.m)("w-full rounded border text-dark flex justify-between",x[f],m[p],a?"items-start":"items-center",h);return((0,c.useEffect)(()=>{r&&w(!0)},[r]),v)?(0,n.jsxs)("div",{className:k,...y,id:g,children:[(0,n.jsxs)(t.Z,{className:(0,d.m)("flex gap-3 w-full",a?"items-start":"items-center"),children:[u&&(0,n.jsx)(t.Z,{children:u}),(0,n.jsxs)(t.Z,{className:"flex flex-col gap-1 w-full",children:[a&&(0,n.jsx)(s.Z,{className:"font-bold",children:a}),r&&(0,n.jsx)(t.Z,{className:b?"pr-4":"",children:r})]})]}),b&&(0,n.jsx)(t.Z,{className:"flex items-center",children:(0,n.jsx)(l.Z,{size:"small",onClick:N,variant:"ghost",icon:(0,n.jsx)(i.Z,{className:"w-4 h-4"}),ariaLabel:"Close",isWrapElement:!0})})]}):null}},47181:function(e,r,a){a.d(r,{Z:function(){return f}});var n=a(85893),t=a(99035),l=a(32417),s=a(67294),i=a(57851);let o={default:"border-dark",primary:"border-white",primaryErafone:"border-white",primaryUrban:"border-white",secondary:"border-primary",outline:"border-dark","outline-chip":"border-dark","outline-primary":"border-primary","outline-primaryErafone":"border-primaryErafone","outline-primaryUrban":"border-primaryUrban",link:"border-primary","link-text":"border-primary",linkErafone:"border-primaryErafone",linkUrban:"border-primaryUrban",ghost:"border-dark",unstyled:"border-dark"},c="bg-white hover:bg-gray-200 focus:bg-white focus:ring-stroke active:bg-gray-300 border-1.5 border-stroke text-dark/75",d="bg-transparent focus:bg-transparent focus:ring-transparent border-1.5 border-transparent px-1",m={default:"".concat(c," bg-stroke focus:bg-gray"),primary:"bg-primary hover:bg-primary-lighter focus:bg-primary focus:ring-primary-light active:bg-primary-darker border-1.5 border-transparent text-white",primaryErafone:"bg-primaryErafone hover:bg-primaryErafone-lighter focus:bg-primaryErafone focus:ring-primaryErafone-lighter active:bg-primaryErafone-darker border-1.5 border-transparent text-white",primaryUrban:"bg-primaryUrban hover:bg-primaryUrban-lighter focus:bg-primaryUrban focus:ring-primaryUrban-lighter active:bg-primaryUrban-darker border-1.5 border-transparent text-white",secondary:"bg-secondary hover:bg-secondary-lighter focus:bg-secondary focus:ring-secondary-light active:bg-secondary-darker border-1.5 border-transparent text-primary",outline:c,"outline-chip":"".concat(c," font-normal"),"outline-primary":"bg-white hover:bg-gray-200 focus:bg-white focus:ring-primary-light active:bg-gray-300 border-1.5 border-primary text-primary","outline-primaryErafone":"bg-white hover:bg-primaryErafone-light focus:bg-white focus:ring-primaryErafone-lighter active:bg-primaryErafone-light border-1.5 border-primaryErafone text-primaryErafone","outline-primaryUrban":"bg-white hover:bg-primaryUrban-light focus:bg-white focus:ring-primaryUrban-lighter active:bg-primaryUrban-light border-1.5 border-primaryUrban text-primaryUrban",link:"".concat(d," text-primary focus:text-primary/75"),"link-text":"".concat(d," text-primary focus:text-primary/75 !h-auto !w-auto !min-w-fit !px-0 !py-0.5"),linkErafone:"".concat(d," text-primaryErafone focus:text-primaryErafone/75"),linkUrban:"".concat(d," text-primaryUrban focus:text-primaryUrban/75"),ghost:"bg-transparent focus:text-dark/50 focus:ring-transparent border-1.5 border-transparent text-dark/75",unstyled:"bg-transparent focus:ring-transparent border-1.5 border-transparent px-1"},x={"x-small":"px-3 h-6 text-2xs",small:"px-3 h-8 text-xs",large:"px-4 h-10 text-sm"},u={"x-small":"w-4 h-4",small:"w-4 h-4",large:"w-5 h-5"};function f(e){var r;let{children:a,size:c="small",variant:d="primary",isLoading:f=!1,loadingText:p,icon:b,className:h,onClick:g,type:y="button",id:v,fullWidth:w=!1,...j}=e,N=(0,i.m)("min-w-[78px] capitalize tracking-wide font-bold inline-flex flex-grow-0 flex-shrink-0 justify-center items-center focus:outline-none focus:ring-1 active:ring-0 focus:ring-offset-0 disabled:bg-stroke disabled:text-gray disabled:cursor-not-allowed space-x-2",x[c],m[d],w&&"!w-full",h);return(0,n.jsxs)("button",{onClick:f?void 0:g,className:N,...j,type:y,id:v,children:[b?(0,s.cloneElement)(b,{className:(0,i.m)("-ml-1",u[c],null===(r=b.props)||void 0===r?void 0:r.className)}):null,f?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.Z,{spinnerColor:o[d]}),p&&(0,n.jsx)(l.Z,{className:"leading-none",children:p})]}):(0,n.jsx)(l.Z,{className:"leading-none",children:a})]})}},86891:function(e,r,a){var n=a(85893),t=a(32644),l=a(32417),s=a(67294),i=a(57851),o=a(72100);r.Z=(0,s.memo)((0,s.forwardRef)(function(e,r){let{size:a="large",label:s,leftElement:c,rightElement:d,rightLabelElement:m,placeholder:x="",isRequired:u=!1,isInvalid:f=!1,error:p,defaultValue:b,type:h="text",id:g="",isElementButton:y=!1,className:v,labelClassName:w,colorTheme:j="primary",isHideSpinButton:N=!0,...k}=e;return(0,n.jsxs)("div",{className:"flex flex-col gap-1 w-full",children:[s&&(0,n.jsxs)(t.Z,{className:"flex flex-row",children:[(0,n.jsxs)("label",{htmlFor:g,className:(0,i.m)("font-bold",w),children:[s," ",!u&&(0,n.jsx)(l.Z,{className:"font-normal text-gray",children:"(Opsional)"})]}),m]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",{id:g,type:h,className:(0,i.m)(c&&"pl-9",d&&"pr-9",(0,o.S)({isInvalid:f,size:a}),"border !rounded-none p-[10px]",N&&"hide-spin-button",v),required:u,placeholder:"".concat(x).concat(u?" *":""),ref:r,defaultValue:b,...k}),c&&(0,n.jsx)("div",{className:"absolute inset-y-0 left-0 flex items-center pl-2 ".concat(y?"cursor-pointer":"pointer-events-none"),children:c}),d&&(0,n.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center ".concat(y?"cursor-pointer":"pointer-events-none"),children:d})]}),p&&(0,n.jsx)(l.Z,{className:"text-red-500 text-xs",children:p})]})}))},72100:function(e,r,a){a.d(r,{S:function(){return t}});var n=a(57851);let t=e=>(0,n.m)("\n    !text-sm\n    text-dark\n    block\n    w-full\n    !border\n    !border-gray-300\n    !shadow-sm\n    focus:outline-none\n    !caret-dark\n    placeholder-gray\n    disabled:bg-gray-300\n    disabled:text-gray-700\n\n  ",(null==e?void 0:e.isInvalid)&&"!border-danger focus:!border-danger-lighter focus:!ring-1 focus:!ring-danger-light",(null==e?void 0:e.size)==="large"?"!py-2 !px-2":"!py-1 !px-1")},79406:function(e,r,a){a.d(r,{Z:function(){return s}});var n=a(85893),t=a(57851);let l={sm:"text-sm",md:"text-base",lg:"text-xl",xl:"text-2xl","2xl":"text-[32px] leading-none","3xl":"text-4xl"};function s(e){let{children:r,as:a="h2",className:s,size:i="md",...o}=e,c=l[i],d=(0,t.m)("font-bold tracking-normal",c,s);switch(a){case"h1":return(0,n.jsx)("h1",{...o,className:d,children:r});case"h2":return(0,n.jsx)("h2",{...o,className:d,children:r});case"h3":return(0,n.jsx)("h3",{...o,className:d,children:r});case"h4":return(0,n.jsx)("h4",{...o,className:d,children:r});case"h5":return(0,n.jsx)("h5",{...o,className:d,children:r});case"h6":return(0,n.jsx)("h6",{...o,className:d,children:r});default:throw Error("Invalid heading level type")}}},74260:function(e,r,a){a.d(r,{Z:function(){return n.Z}});var n=a(79406)},76846:function(e,r,a){a.d(r,{Z:function(){return c}});var n=a(85893),t=a(67294),l=a(57851),s=a(47181);let i={"x-small":"min-w-6 w-6 h-6",small:"min-w-8 w-8 h-8",large:"min-w-10 w-10 h-10"},o={"x-small":"w-4 h-4",small:"w-5 h-5",large:"w-6 h-6"};function c(e){let{icon:r,ariaLabel:a,size:c="small",className:d,isLoading:m,id:x,isWrapElement:u=!1,...f}=e,p=(0,l.m)("px-0 py-0 flex-shrink-0 flex-grow-0 rounded-lg",i[c]);return(0,n.jsx)(s.Z,{"aria-label":a,className:(0,l.m)(p,d,u&&"!min-w-0 w-max h-max"),isLoading:m,id:x,...f,children:m?null:(0,t.cloneElement)(r,{className:(0,l.m)(o[c],r.props.className)})})}},90803:function(e,r,a){a.d(r,{Z:function(){return n.Z}});var n=a(76846)},2059:function(e,r,a){var n=a(85893),t=a(77987),l=a(74431),s=a(92764),i=a(31470),o=a(67294),c=a(57851),d=a(74260),m=a(90803),x=a(87391),u=a(90380);let f={sm:"!max-w-[350px]",md:"!max-w-[384px]",lg:"!max-w-[500px]",xl:"!max-w-[500px]","2xl":"!max-w-2xl","4xl":"!max-w-4xl",full:"!max-w-[100vw] rounded-none"},p={sm:"!h-[384px] !max-w-[350px]",md:"!h-[448px] !max-w-[384px]",lg:"!h-[512px] !max-w-[500px]",xl:"!h-[672px] !max-w-[500px]","2xl":"!h-[768px] !max-w-2xl","4xl":"!h-[864px] !max-w-4xl",full:"!h-screen !min-h-screen !max-w-screen"};r.Z=(0,o.memo)(function(e){let r=(0,l.Z)(),{children:a,isOpen:o,size:b,header:h,headerHasSeparator:g,headerClassName:y,headerWrapperClassName:v,headerTextClassName:w,footer:j,footerHasSeparator:N,footerClassName:k,leftIcon:Z,rightIcon:E,widthSize:C,heightSize:U,withOverlay:z=!0,closeOnOverlayClick:F=!1,className:L,onClose:S=()=>{},dataLabel:P,isNoPadding:V=!1}=e;return o?(0,n.jsxs)(n.Fragment,{children:[z&&(0,n.jsx)("div",{className:"fixed inset-0 bg-black opacity-25 z-30"}),(0,n.jsx)(i.V,{open:o,as:"div",className:(0,c.m)(t.Mf,"relative"),onClose:F?S:()=>{},children:(0,n.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,n.jsx)("div",{className:(0,c.m)("flex min-h-screen items-center justify-center text-center",r&&"px-5"),children:(0,n.jsxs)(i.V.Panel,{className:(0,c.m)("flex flex-col bg-white h-full relative overflow-y-auto w-full !max-h-[95vh] max-w-md transform rounded-lg text-left align-middle shadow-xl transition-all",b&&"".concat(f[b]," ").concat(p[b]),C&&f[C],U&&p[U],L),"data-label":P,children:[Z||E?(0,n.jsxs)("div",{className:"absolute w-full flex items-center justify-between",children:[Z&&(0,n.jsx)(m.Z,{ariaLabel:(0,s.kC)(Z.name),variant:"unstyled",className:"relative top-1 left-1",icon:(0,n.jsx)(x.Z,{name:Z.name}),onClick:Z.onClick}),E&&(0,n.jsx)(m.Z,{ariaLabel:(0,s.kC)(E.name),className:"ml-auto relative top-1 right-1",variant:"unstyled",icon:(0,n.jsx)(x.Z,{name:E.name}),onClick:E.onClick})]}):null,h&&(0,n.jsx)("div",{className:(0,c.m)("px-6",Z||E?"":"pt-4",E&&"mt-8",Z&&"mt-[48px]",v),children:"string"==typeof h?(0,n.jsx)(i.V.Title,{as:"div",className:(0,c.m)("mb-2 shrink-0 flex items-center text-left text-lg font-semibold leading-6 text-gray-900",g&&"border-b border-line pb-2 -mx-5 px-5",y),children:(0,n.jsx)(d.Z,{className:w,size:"lg",children:h})}):(0,n.jsx)("div",{className:y,children:h})}),(0,n.jsxs)("div",{className:(0,c.m)("px-6 pb-4 overflow-y-auto max-h-[95vh]",h||Z||E?"pt-2":"pt-5",!h&&(Z||E)&&"mt-10",V&&"p-0"),children:[a,j&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"h-[80px]"}),(0,n.jsxs)("div",{className:(0,c.m)("mt-5 absolute bottom-0 left-0 right-0 px-5 pb-5 pt-0 bg-white",k),children:[N&&(0,n.jsx)("div",{className:"-mx-5 mb-4",children:(0,n.jsx)(u.Z,{className:"mt-0"})}),j]})]})]})]})})})})]}):null})},7089:function(e,r,a){a.d(r,{W:function(){return x},Z:function(){return u.Z}});var n=a(85893),t=a(62774),l=a(90803),s=a(32417),i=a(87391),o=a(67294),c=a(94289),d=a(57851);let m=e=>{let{header:r,isOpen:a,onClose:m,children:x,closeOnOverlayClick:u,inputOnFocus:f}=e,p=(0,o.useRef)(),b=/iPad|iPhone|iPod/.test(navigator.userAgent);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(c.Z,{ref:p,isOpen:a,onClose:m,tweenConfig:{ease:"easeIn",duration:.3},detent:"content-height",children:(0,n.jsxs)(c.Z.Container,{className:(0,d.m)("relative pb-5 !rounded-xl",b&&f?"!top-0":""),children:[(0,n.jsx)("span",{className:"absolute top-2 h-1 w-8 rounded-[48px] bg-gray-200 left-2/4 -translate-x-2/4"}),r&&(0,n.jsx)(c.Z.Header,{children:(0,n.jsx)(t.Z,{className:"flex items-center gap-3 ml-2 truncate pt-4",children:"string"==typeof r?(0,n.jsx)(s.Z,{className:"text-xl font-bold",children:r}):(0,n.jsxs)(o.Fragment,{children:[(0,n.jsx)(l.Z,{ariaLabel:"Close",onClick:r.iconOnClick,variant:"unstyled",icon:(0,n.jsx)(i.Z,{name:r.icon||"close"})}),(0,n.jsx)(s.Z,{className:"text-[20px] font-bold capitalize",children:r.label})]})})}),(0,n.jsx)(c.Z.Content,{children:(0,n.jsx)(c.Z.Scroller,{draggableAt:"both",children:(0,n.jsx)("div",{className:(0,d.m)("pt-5 px-5 overflow-y-scroll",b&&f?"!pb-10 md:pb-0":""),children:x})})})]})}),a&&(0,n.jsx)("div",{className:"fixed inset-0 w-full h-[100vh] bg-black opacity-50 z-20",onClick:u?m:()=>{}})]})},x=o.memo(m);var u=a(2059)},90380:function(e,r,a){a.d(r,{Z:function(){return l}});var n=a(85893),t=a(57851);function l(e){let{className:r}=e;return(0,n.jsx)("hr",{className:(0,t.m)("border-gray-300 my-3",r)})}},32080:function(e,r,a){a.d(r,{Z:function(){return n.Z}});var n=a(32417)},74403:function(e,r,a){a.d(r,{Z:function(){return t}});var n=a(67294);function t(e){let[r,a]=(0,n.useState)(e||!1),t=()=>a(!0),l=()=>a(!1),s=()=>a(!r);return{isOpen:r,onOpen:t,onClose:l,onToggle:s}}}}]);