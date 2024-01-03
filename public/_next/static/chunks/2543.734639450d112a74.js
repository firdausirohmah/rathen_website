"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2543],{13882:function(e,t,s){s.d(t,{Z:function(){return a}});function a(e,t){if(t.length<e)throw TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}},83946:function(e,t,s){s.d(t,{Z:function(){return a}});function a(e){if(null===e||!0===e||!1===e)return NaN;var t=Number(e);return isNaN(t)?t:t<0?Math.ceil(t):Math.floor(t)}},51820:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(83946),n=s(19013),l=s(13882);function r(e,t){(0,l.Z)(2,arguments);var s=(0,n.default)(e).getTime(),r=(0,a.Z)(t);return new Date(s+r)}},58545:function(e,t,s){s.r(t),s.d(t,{default:function(){return r}});var a=s(83946),n=s(51820),l=s(13882);function r(e,t){(0,l.Z)(2,arguments);var s=(0,a.Z)(t);return(0,n.Z)(e,6e4*s)}},19013:function(e,t,s){s.r(t),s.d(t,{default:function(){return l}});var a=s(71002),n=s(13882);function l(e){(0,n.Z)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,a.Z)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):(("string"==typeof e||"[object String]"===t)&&"undefined"!=typeof console&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn(Error().stack)),new Date(NaN))}},86433:function(e,t,s){var a=s(85893);s(67294);var n=s(32080),l=s(57851),r=s(99035);let i=e=>{let{children:t,count:s,isMobile:i,isLoading:c=!1}=e,d=(0,l.m)("absolute rounded-[50px] w-5 h-5 top-[-9px] bg-[#ff8303] text-center flex items-center justify-center border-2 border-black",i?"right-[-15px]":"right-[-16px]");return(0,a.jsxs)("div",{className:"relative",children:[s&&s>0?(0,a.jsx)("div",{className:d,children:(0,a.jsx)(n.Z,{className:"text-xs text-white",children:s})}):c?(0,a.jsx)("div",{className:d,children:(0,a.jsx)(r.Z,{})}):(0,a.jsx)(a.Fragment,{}),t]})};t.Z=i},35076:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(85893),n=s(67294);let l=e=>{if(!e)return null;let t=+e-+new Date;if(t<0)return null;let s=Math.floor(t/864e5)||0,a=s<10?"0".concat(s):s.toString(),n=Math.floor(t/36e5%24)||0,l=n<10?"0".concat(n):n.toString(),r=Math.floor(t/1e3/60%60)||0,i=r<10?"0".concat(r):r.toString(),c=Math.floor(t/1e3%60)||0,d=c<10?"0".concat(c):c.toString();return{days:a,hours:l,minutes:i,seconds:d,difference:t}};function r(e){let{endDateTime:t,children:s,finishComponent:r,onFinish:i=()=>{},callback:c}=e,[d,o]=(0,n.useState)(!1),[x,m]=(0,n.useState)(null),u=()=>{let e=l(t);if(!e){o(!0),i();return}m(e),c&&c(e.difference)};return(0,n.useEffect)(()=>{if(!t){o(!0),i();return}u()},[t]),(0,n.useEffect)(()=>{if(d)return;let e=setTimeout(u,1e3);return()=>clearTimeout(e)}),(0,a.jsx)("div",{children:d?r:x?(0,a.jsx)("div",{children:s(x)}):null})}},79406:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(85893),n=s(57851);let l={sm:"text-sm",md:"text-base",lg:"text-xl",xl:"text-2xl","2xl":"text-[32px] leading-none","3xl":"text-4xl"};function r(e){let{children:t,as:s="h2",className:r,size:i="md",...c}=e,d=l[i],o=(0,n.m)("font-bold tracking-normal",d,r);switch(s){case"h1":return(0,a.jsx)("h1",{...c,className:o,children:t});case"h2":return(0,a.jsx)("h2",{...c,className:o,children:t});case"h3":return(0,a.jsx)("h3",{...c,className:o,children:t});case"h4":return(0,a.jsx)("h4",{...c,className:o,children:t});case"h5":return(0,a.jsx)("h5",{...c,className:o,children:t});case"h6":return(0,a.jsx)("h6",{...c,className:o,children:t});default:throw Error("Invalid heading level type")}}},74260:function(e,t,s){s.d(t,{Z:function(){return a.Z}});var a=s(79406)},2059:function(e,t,s){var a=s(85893),n=s(77987),l=s(74431),r=s(92764),i=s(31470),c=s(67294),d=s(57851),o=s(74260),x=s(90803),m=s(87391),u=s(90380);let h={sm:"!max-w-[350px]",md:"!max-w-[384px]",lg:"!max-w-[500px]",xl:"!max-w-[500px]","2xl":"!max-w-2xl","4xl":"!max-w-4xl",full:"!max-w-[100vw] rounded-none"},j={sm:"!h-[384px] !max-w-[350px]",md:"!h-[448px] !max-w-[384px]",lg:"!h-[512px] !max-w-[500px]",xl:"!h-[672px] !max-w-[500px]","2xl":"!h-[768px] !max-w-2xl","4xl":"!h-[864px] !max-w-4xl",full:"!h-screen !min-h-screen !max-w-screen"};t.Z=(0,c.memo)(function(e){let t=(0,l.Z)(),{children:s,isOpen:c,size:p,header:f,headerHasSeparator:g,headerClassName:v,headerWrapperClassName:b,headerTextClassName:N,footer:w,footerHasSeparator:Z,footerClassName:y,leftIcon:k,rightIcon:C,widthSize:S,heightSize:E,withOverlay:M=!0,closeOnOverlayClick:_=!1,className:L,onClose:T=()=>{},dataLabel:D,isNoPadding:F=!1}=e;return c?(0,a.jsxs)(a.Fragment,{children:[M&&(0,a.jsx)("div",{className:"fixed inset-0 bg-black opacity-25 z-30"}),(0,a.jsx)(i.V,{open:c,as:"div",className:(0,d.m)(n.Mf,"relative"),onClose:_?T:()=>{},children:(0,a.jsx)("div",{className:"fixed inset-0 overflow-y-auto",children:(0,a.jsx)("div",{className:(0,d.m)("flex min-h-screen items-center justify-center text-center",t&&"px-5"),children:(0,a.jsxs)(i.V.Panel,{className:(0,d.m)("flex flex-col bg-white h-full relative overflow-y-auto w-full !max-h-[95vh] max-w-md transform rounded-lg text-left align-middle shadow-xl transition-all",p&&"".concat(h[p]," ").concat(j[p]),S&&h[S],E&&j[E],L),"data-label":D,children:[k||C?(0,a.jsxs)("div",{className:"absolute w-full flex items-center justify-between",children:[k&&(0,a.jsx)(x.Z,{ariaLabel:(0,r.kC)(k.name),variant:"unstyled",className:"relative top-1 left-1",icon:(0,a.jsx)(m.Z,{name:k.name}),onClick:k.onClick}),C&&(0,a.jsx)(x.Z,{ariaLabel:(0,r.kC)(C.name),className:"ml-auto relative top-1 right-1",variant:"unstyled",icon:(0,a.jsx)(m.Z,{name:C.name}),onClick:C.onClick})]}):null,f&&(0,a.jsx)("div",{className:(0,d.m)("px-6",k||C?"":"pt-4",C&&"mt-8",k&&"mt-[48px]",b),children:"string"==typeof f?(0,a.jsx)(i.V.Title,{as:"div",className:(0,d.m)("mb-2 shrink-0 flex items-center text-left text-lg font-semibold leading-6 text-gray-900",g&&"border-b border-line pb-2 -mx-5 px-5",v),children:(0,a.jsx)(o.Z,{className:N,size:"lg",children:f})}):(0,a.jsx)("div",{className:v,children:f})}),(0,a.jsxs)("div",{className:(0,d.m)("px-6 pb-4 overflow-y-auto max-h-[95vh]",f||k||C?"pt-2":"pt-5",!f&&(k||C)&&"mt-10",F&&"p-0"),children:[s,w&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"h-[80px]"}),(0,a.jsxs)("div",{className:(0,d.m)("mt-5 absolute bottom-0 left-0 right-0 px-5 pb-5 pt-0 bg-white",y),children:[Z&&(0,a.jsx)("div",{className:"-mx-5 mb-4",children:(0,a.jsx)(u.Z,{className:"mt-0"})}),w]})]})]})]})})})})]}):null})},7089:function(e,t,s){s.d(t,{W:function(){return m},Z:function(){return u.Z}});var a=s(85893),n=s(62774),l=s(90803),r=s(32417),i=s(87391),c=s(67294),d=s(94289),o=s(57851);let x=e=>{let{header:t,isOpen:s,onClose:x,children:m,closeOnOverlayClick:u,inputOnFocus:h}=e,j=(0,c.useRef)(),p=/iPad|iPhone|iPod/.test(navigator.userAgent);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(d.Z,{ref:j,isOpen:s,onClose:x,tweenConfig:{ease:"easeIn",duration:.3},detent:"content-height",children:(0,a.jsxs)(d.Z.Container,{className:(0,o.m)("relative pb-5 !rounded-xl",p&&h?"!top-0":""),children:[(0,a.jsx)("span",{className:"absolute top-2 h-1 w-8 rounded-[48px] bg-gray-200 left-2/4 -translate-x-2/4"}),t&&(0,a.jsx)(d.Z.Header,{children:(0,a.jsx)(n.Z,{className:"flex items-center gap-3 ml-2 truncate pt-4",children:"string"==typeof t?(0,a.jsx)(r.Z,{className:"text-xl font-bold",children:t}):(0,a.jsxs)(c.Fragment,{children:[(0,a.jsx)(l.Z,{ariaLabel:"Close",onClick:t.iconOnClick,variant:"unstyled",icon:(0,a.jsx)(i.Z,{name:t.icon||"close"})}),(0,a.jsx)(r.Z,{className:"text-[20px] font-bold capitalize",children:t.label})]})})}),(0,a.jsx)(d.Z.Content,{children:(0,a.jsx)(d.Z.Scroller,{draggableAt:"both",children:(0,a.jsx)("div",{className:(0,o.m)("pt-5 px-5 overflow-y-scroll",p&&h?"!pb-10 md:pb-0":""),children:m})})})]})}),s&&(0,a.jsx)("div",{className:"fixed inset-0 w-full h-[100vh] bg-black opacity-50 z-20",onClick:u?x:()=>{}})]})},m=c.memo(x);var u=s(2059)},69600:function(e,t,s){s.d(t,{Z:function(){return u}});var a=s(85893),n=s(67294),l=s(86501),r=s(57851),i=s(62774),c=s(90803),d=s(21964),o=s(32080);let x={default:"bg-[#3A3D40]",error:"bg-[#E94335]"},m={paddingTop:0,paddingBottom:0,background:"transparent",boxShadow:"none",width:"100%",maxWidth:"800px",minHeight:"43px"};function u(e){let{isShow:t,message:s,position:u,className:h,variant:j="default",onClose:p}=e,f=()=>{l.ZP.dismiss(),p()},g=(0,n.useCallback)(()=>{(0,l.ZP)((0,a.jsxs)("div",{className:(0,r.m)("flex gap-3 justify-between items-center bg-white py-2 pl-4 shadow-md rounded w-full min-h-[43px] pr-4",x[j],(null==u?void 0:u.includes("top"))?"relative top-40":"",h),children:[(0,a.jsx)(o.Z,{className:(0,r.m)("text-white leading-none"),children:s}),(0,a.jsx)(i.Z,{className:"flex",children:(0,a.jsx)(c.Z,{ariaLabel:"Close",size:"x-small",variant:"unstyled",onClick:()=>f(),className:"justify-end min-w-fit relative -top-1",icon:(0,a.jsx)(d.Z,{name:"close",className:"text-white"})})})]}),{position:u,style:m,duration:1/0})},[s,u,j]);return(0,n.useEffect)(()=>{t?g():l.ZP.dismiss()},[t,g]),null}},84763:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(85893),n=s(61238);let l=()=>{let e=(0,n.Kw)(e=>e.isAppLoading);return e?(0,a.jsx)("div",{className:"preloader",children:(0,a.jsx)("div",{className:"loader"})}):(0,a.jsx)(a.Fragment,{})};var r=l},90380:function(e,t,s){s.d(t,{Z:function(){return l}});var a=s(85893),n=s(57851);function l(e){let{className:t}=e;return(0,a.jsx)("hr",{className:(0,n.m)("border-gray-300 my-3",t)})}},52543:function(e,t,s){s.r(t),s.d(t,{default:function(){return eo}});var a=s(85893),n=s(84763),l=s(382),r=s(77987),i=s(71171),c=s(61238),d=s(11163),o=s(67294),x=s(62774),m=s(78694),u=s(2766),h=s(57851);function j(e){let{children:t,className:s="",onClick:n,onMouseOver:l,onMouseLeave:r}=e;return(0,a.jsx)(x.Z,{onClick:n,onMouseOver:l,onMouseLeave:r,className:(0,h.m)("w-full right-0 left-0",s),children:t})}var p=s(40096);function f(){return(0,a.jsx)(x.Z,{children:(0,a.jsx)(x.Z,{className:"py-5 px-16",children:(0,a.jsx)(u.Z,{width:"100%",height:92})})})}function g(){return(0,a.jsx)(j,{className:"bg-[#252525]",children:(0,a.jsx)(m.Z,{className:"px-5 sm:px-16",children:(0,a.jsx)(p.Z,{className:"",identifier:"rev-footer-ibox",loadingComponent:(0,a.jsx)(f,{}),options:{staleTime:1/0}})})})}var v=s(32080);let b=()=>(0,a.jsx)(j,{className:"bg-white",children:(0,a.jsx)(m.Z,{className:"px-5 sm:px-16",children:(0,a.jsx)(p.Z,{className:"",identifier:"rev-footer-ibox-bottom",options:{staleTime:1/0}})})});var N=s(11335);let w=()=>{let e=new Date().getFullYear();return(0,a.jsx)(x.Z,{className:"bg-black",children:(0,a.jsx)(m.Z,{className:"px-16 py-3",children:(0,a.jsxs)(v.Z,{className:"text-center text-white text-[10px]",asParagraph:!0,children:["COPYRIGHT \xa9 2019-",e," IBOX. ALL RIGHTS RESERVED."]})})})};function Z(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g,{}),(0,a.jsx)(N.Z,{}),(0,a.jsx)(b,{}),(0,a.jsx)(w,{})]})}function y(){return(0,a.jsx)(Z,{})}var k=s(7089),C=s(86433),S=s(47181),E=s(86891),M=s(51175);let _=e=>{let{className:t="",width:s,height:n}=e;return(0,a.jsx)("img",{className:t,width:s,height:n,src:"/icons/icon-tracking.png"})};var L=s(47750);let T=e=>{let{className:t="",width:s,height:n}=e;return(0,a.jsx)("img",{className:t,width:s,height:n,src:"/icons/icon-user.png"})};var D=s(73559),F=s(54832),I=s(41664),P=s.n(I),z=s(80054),A=s(57911),K=s(76846),H=s(23826),O=s(49624),R=s(3280),B=s(48228);let W=e=>{let{qty:t,total_formated:s,name:n,image_url:l,id:i,url_key:c,bundling:d,price:o,sku:m}=e.data,{mutate:u}=(0,B.D)(e=>(0,A.e1)(e)),h=(0,F.H0)(),j=async e=>{u(e,{onSettled:()=>{h(),(0,O.Ed)({name:n,price:o,qty:t,sku:m,url_key:c}),(0,O.Y2)({name:n,price:o,qty:t,sku:m,url_key:c})}})};return(0,a.jsx)(x.Z,{className:"p-2 border-b border-[#464646]",children:(0,a.jsxs)(x.Z,{className:"flex items-start",children:[(0,a.jsx)("a",{href:"/product/".concat(c),children:(0,a.jsx)("img",{src:l||r.Lw,alt:"img-".concat(c),width:"50",height:"50",className:"mr-3"})}),(0,a.jsxs)(x.Z,{className:"flex-1",children:[(0,a.jsx)("a",{href:"/product/".concat(c),children:(0,a.jsx)("p",{className:"text-xs font-bold leading-[1.5]",children:n})}),(0,a.jsxs)(v.Z,{className:"text-xs text-[#bfbfbf]",children:[s,"| Qty: ",t]}),d.length>0&&(0,a.jsxs)(x.Z,{className:"pt-3",children:[(0,a.jsx)("p",{className:"text-xs leading-[1.5]",children:"Bundling dengan: "}),(0,a.jsx)("ul",{children:d.map(e=>(0,a.jsxs)("li",{children:[(0,a.jsx)("p",{className:"text-xs font-bold leading-[1.5]",children:e.name}),(0,a.jsxs)(v.Z,{className:"text-xs text-[#bfbfbf]",children:[(0,R.b7)(e.final_price),"| Qty: ",e.qty]})]},e.sku))})]})]}),(0,a.jsx)(x.Z,{className:"flex-shrink",children:(0,a.jsx)(K.Z,{size:"x-small",icon:(0,a.jsx)(H.Z,{}),ariaLabel:"",onClick:()=>j(i)})})]})})};var V=s(76697),X=(0,o.memo)(function(){var e,t;let{data:s,isError:n}=(0,F.jD)(),l=(0,c.Kw)(e=>e.isLogin),r=(0,o.useMemo)(()=>{var e;let t=(null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.items)||[];return n?[]:t},[s,n]),i=(0,o.useMemo)(()=>{var e,t;let a=(null==s?void 0:null===(e=s.data)||void 0===e?void 0:null===(t=e.items)||void 0===t?void 0:t.map(e=>e.url_key))||[];return a},[s,n]);return!l||r.length<1?(0,a.jsx)(x.Z,{className:"p-3",children:(0,a.jsx)("p",{className:"text-sm text-white",children:"Anda belum memiliki produk di keranjang belanja."})}):(0,a.jsx)(x.Z,{className:"text-white w-[600px] cursor-default",children:(0,a.jsxs)(x.Z,{className:"grid grid-cols-2",children:[(0,a.jsx)(x.Z,{id:"mcis-related-product-minicart",className:"border-r-2 border-[#3c3c3c] px-4 max-h-[600px] overflow-scroll",children:(0,a.jsx)(V.Z,{urlKeyList:i,source:"minicart"})}),(0,a.jsxs)(x.Z,{className:"px-6 py-3",children:[(0,a.jsxs)("p",{className:"text-xs pb-7",children:["Ada ",null==s?void 0:null===(e=s.data)||void 0===e?void 0:e.items_count," produk di keranjang anda"]}),(0,a.jsx)(x.Z,{id:"list-cart-item",className:"max-h-[500px] overflow-scroll",children:r.length>0&&r.map(e=>(0,a.jsx)(W,{data:e},e.sku))}),(0,a.jsxs)(x.Z,{className:"pt-7 pb-4",children:[(0,a.jsxs)(x.Z,{className:"flex items-center justify-between mb-3",children:[(0,a.jsx)(v.Z,{className:"text-xs",children:"Subtotal:"}),(0,a.jsx)(v.Z,{className:"text-xs font-bold",children:null==s?void 0:null===(t=s.data)||void 0===t?void 0:t.grandtotal_formated})]}),(0,a.jsx)(P(),{href:"/checkout/shipping",children:(0,a.jsx)(z.Z,{className:"!w-full bg-[#bfbfbf] text-[#464646] mb-4",size:"large",children:"LANJUT KE CHECKOUT"})}),(0,a.jsx)(P(),{href:"/checkout/cart",children:(0,a.jsx)(z.Z,{variant:"link-text",size:"large",className:"!w-full text-center",children:"LIHAT KERANJANG"})})]})]})]})})}),G=s(99814),Q=s(70214),J=s(75711),U=s(90301),Y=s(92764),q=s(78276),$=s(16334);let ee=e=>{let{href:t="#",isDropdown:s=!1,dropdownContent:n,dropdownPosition:l="left",children:r,className:i,dropdownContentChild:c,isShowDropdownContentChild:d=!1}=e;return s?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"cursor-pointer group relative",children:[(0,a.jsx)("div",{className:"text-white px-[20px] py-[30px] text-xs font-bold group-hover:opacity-70 group-hover:bg-[#2e2e2e]",children:r}),(0,a.jsxs)("div",{className:(0,h.m)("flex absolute z-10","left"===l?"left-0":"right-0"),children:[(0,a.jsx)("div",{className:"hidden min-w-[280px] bg-[#2e2e2e] group-hover:block p-3 rounded-b-md",children:n}),d&&(0,a.jsx)("div",{className:"hidden min-w-[280px] bg-[#2e2e2e] group-hover:block p-3 rounded-b-md",children:c})]})]})}):(0,a.jsx)(P(),{href:t,className:(0,h.m)("px-[20px] py-[30px] text-xs font-bold hover:opacity-70 hover:bg-[#2e2e2e] text-white",i),children:r})},et=()=>{let e=(0,d.useRouter)(),[t,s]=(0,o.useState)(""),n=s=>{"Enter"===s.key&&t&&((0,O.fF)(t),e.push("/catalogsearch/".concat(t)))};return(0,a.jsx)(E.Z,{className:"!bg-[#454545] !text-white !border-0",size:"small",rightElement:(0,a.jsx)(L.Z,{className:"w-3 mr-2",width:12,height:12}),isElementButton:!0,placeholder:"Cari Produk di iBox...",onChange:e=>s(e.target.value),onKeyDown:e=>n(e)})},es=e=>{let{data:t,parentName:s,onHover:n,isClickable:l}=e;return(0,a.jsx)(a.Fragment,{children:t.map(e=>(0,a.jsx)(x.Z,{className:"p-3 text-[14px] hover:text-[#dadada] hover:bg-[#202020] text-white rounded-lg transition-all ease-in-out",onMouseEnter:()=>n(e.name),children:l?(0,a.jsx)("a",{href:"/catalog/".concat((0,U.zd)(s),"/").concat((0,U.zd)(e.name),"-").concat(e.id),children:e.name}):(0,a.jsx)(a.Fragment,{children:e.name})},e.name))})},ea=e=>{let{data:t}=e;return(0,a.jsx)(a.Fragment,{children:t.map(e=>(0,a.jsx)(x.Z,{className:"p-3 text-[14px] hover:text-[#dadada] hover:bg-[#202020] text-white rounded-lg transition-all ease-in-out",children:(0,a.jsx)("a",{href:"/product/".concat(e.sku),children:e.name})},e.name))})},en=e=>{var t;let{item:s}=e,[n,l]=(0,o.useState)(null===(t=null==s?void 0:s.children_data[0])||void 0===t?void 0:t.name),r=(0,o.useMemo)(()=>{var e;let t=s.children_data.find(e=>e.name===n),a=null!==(e=null==t?void 0:t.description)&&void 0!==e?e:"";return a&&(0,Y.tp)(a)?JSON.parse(a):[]},[s,n]);return(0,a.jsx)(ee,{href:"/catalog/".concat((0,U.zd)(s.name),"-").concat(s.id),isDropdown:s.children_data.length>0,dropdownContent:(0,a.jsx)(es,{data:s.children_data,parentName:s.name,onHover:e=>l(e),isClickable:0===r.length}),isShowDropdownContentChild:r.length>0,dropdownContentChild:(0,a.jsx)(ea,{data:r}),children:s.name},s.name)},el=e=>{let{isLoading:t,dataCategories:s}=e;return t||!s?(0,a.jsx)(a.Fragment,{}):(0,a.jsx)(a.Fragment,{children:s.map(e=>(0,a.jsx)(en,{item:e},e.name))})},er=()=>{var e,t;let s=(0,d.useRouter)(),n=(0,c.Kw)(e=>e.isLogin),l=(0,c.WX)(e=>e.setIsShowLoginForm),{logout:u}=(0,q.Eu)(),{data:h,isLoading:j}=(0,G.Zo)(),{data:f,isLoading:g}=(0,J.L)(),{data:v,isError:b}=(0,F.jD)(),{data:N,isError:w}=(0,Q.E)(),Z=(0,i.Z)(),y=(0,o.useMemo)(()=>{var e;return b?0:(null==v?void 0:null===(e=v.data)||void 0===e?void 0:e.items_count)||0},[v,b]),k=(0,o.useMemo)(()=>{var e;return w?0:(null==N?void 0:null===(e=N.data)||void 0===e?void 0:e.length)||0},[N,w]);return(0,a.jsx)(x.Z,{className:"fixed top-0 z-20 w-full",children:(0,a.jsxs)(x.Z,{className:"bg-black",children:[(0,a.jsx)(m.Z,{className:"px-16",children:(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(P(),{href:"/",className:"my-auto mr-4",children:(0,a.jsx)("img",{src:"/images/logo/ibox_logo.svg",alt:"logo-ibox",width:"100",height:"41"})}),(0,a.jsx)(el,{isLoading:g,dataCategories:f}),(0,a.jsx)(ee,{href:"/page/event",children:"Event & Promo"}),(0,a.jsx)(ee,{href:"/page/small-business",children:"Bisnis"}),(0,a.jsx)(p.Z,{identifier:"ibox-dropdown-layanan-desktop-revamp"})]}),(0,a.jsxs)("div",{className:"flex items-center",children:[(0,a.jsx)(ee,{isDropdown:!0,dropdownPosition:"right",dropdownContent:(0,a.jsx)(et,{}),children:(0,a.jsx)(L.Z,{className:"w-5",width:20,height:20})}),(0,a.jsx)(ee,{href:"/akun/favorite",children:(0,a.jsx)(C.Z,{count:k,children:(0,a.jsx)(D.Z,{className:"w-5"})})}),(0,a.jsx)(ee,{href:"/lacak-pesanan",children:(0,a.jsx)(_,{className:"w-5"})}),(0,a.jsx)(ee,{isDropdown:!0,dropdownPosition:"right",dropdownContent:(0,a.jsx)(X,{}),href:"/checkout/cart",children:(0,a.jsx)(C.Z,{count:y,children:(0,a.jsx)(M.Z,{className:"w-5",width:20,height:20})})}),(0,a.jsx)(ee,{isDropdown:!0,dropdownPosition:"right",dropdownContent:n?(0,a.jsxs)(x.Z,{className:"p-3 text-white",children:[(0,a.jsxs)(x.Z,{className:"py-4 border-b border-white mb-2",children:[(0,a.jsx)("p",{className:"text-[10px] mb-1",children:"Welcome"}),!j&&(0,a.jsx)(P(),{href:"/akun/dashboard",children:(0,a.jsx)("p",{className:"text-xs font-bold mb-3",children:"".concat(null==h?void 0:null===(e=h.data)||void 0===e?void 0:e.firstname," ").concat(null==h?void 0:null===(t=h.data)||void 0===t?void 0:t.lastname)})})]}),(0,a.jsx)(x.Z,{className:"py-3 text-[14px] hover:text-[#dadada] text-white",children:(0,a.jsxs)(P(),{href:"/akun/favorite",children:["Favorit ",k?"(".concat(k," Item)"):null]})}),(0,a.jsx)(x.Z,{className:"py-3 text-[14px] hover:text-[#dadada] text-white",children:(0,a.jsx)(P(),{href:"/akun/transaksi",children:"Riwayat Pesanan"})}),(0,a.jsx)(x.Z,{className:"py-3 text-[14px] hover:text-[#dadada] text-white",children:(0,a.jsx)(S.Z,{variant:"link-text",className:"font-normal text-sm",onClick:u,children:"Keluar"})})]}):(0,a.jsx)(x.Z,{className:"p-3",children:(0,a.jsx)(x.Z,{onClick:()=>l(!0),className:"text-sm text-white",children:"Login atau Mendaftar"})}),href:"/akun/dashboard",children:(0,a.jsx)(T,{className:"w-5"})})]})]})}),Z&&!s.asPath.includes(r.yy.payment_success||r.yy.payment_failure)&&(0,a.jsx)(m.Z,{className:"px-16 py-4",children:(0,a.jsx)($.Z,{})})]})})};var ei=s(79837),ec=s(69600);let ed=e=>{let{children:t}=e,s=(0,d.useRouter)(),{pathname:x}=s,m=(0,i.Z)(),{isShowLoginForm:u,appToast:j}=(0,c.Kw)(e=>e),{setIsShowLoginForm:p,setAppToast:f}=(0,c.WX)(e=>e),{isShow:g,message:v,variant:b,className:N}=j,w=()=>p(!1),Z=()=>{f({isShow:!1,message:"",variant:"default"})};return((0,o.useEffect)(()=>{let e;return g&&(e=setTimeout(()=>f({isShow:!1,message:"",variant:"default"}),3e3)),()=>clearTimeout(e)},[g]),x.includes(r.yy.invoice))?(0,a.jsx)(a.Fragment,{children:t}):[r.yy.shipping,r.yy.shipping_cnp].includes(x)?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Z,{}),(0,a.jsx)(ei.default,{isMobile:!1}),(0,a.jsx)("div",{className:(0,h.m)(m&&"mt-[180px]"),children:t})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(ec.Z,{isShow:g,message:v,onClose:Z,position:"top-center",variant:b,className:N}),(0,a.jsx)(er,{}),(0,a.jsx)(n.Z,{}),u&&(0,a.jsx)(k.Z,{isOpen:u,onClose:w,closeOnOverlayClick:!0,isNoPadding:!0,header:"Pelanggan Sudah Terdaftar",headerClassName:"mb-5",headerWrapperClassName:"px-4",headerTextClassName:"text-base uppercase font-bold py-1",headerHasSeparator:!0,children:(0,a.jsx)(l.Z,{className:"!m-0 max-w-none p-0"})}),(0,a.jsx)("div",{className:(0,h.m)(m?"mt-[160px]":"mt-[80px]",x!==r.yy.home_ibox&&"pb-[150px]",x.includes(r.yy.invoice)&&"mt-0"),children:t}),(0,a.jsx)(y,{})]})};var eo=ed},16334:function(e,t,s){s.d(t,{Z:function(){return j}});var a=s(85893),n=s(67294),l=s(35076),r=s(58545),i=s(57851);let c={small:"w-6 h-6 text-xs",large:"w-7 h-7 text-sm"};function d(e){let{value:t,className:s="",size:n="small"}=e,l=c[n];return(0,a.jsx)("div",{className:(0,i.m)("font-bold rounded flex items-center justify-center",s,l),children:t})}var o=s(77987),x=s(61238),m=s(11163);let u=e=>{let{endTime:t,callback:s}=e,n=(0,x.WX)(e=>e.setIsShowHeaderCountdown),r=(0,m.useRouter)(),i=()=>{localStorage.removeItem(o.uv),localStorage.removeItem(o._w),n(!1),r.push("/page/expired-page-countdown",void 0,{shallow:!0})};return(0,a.jsx)(l.Z,{endDateTime:t,callback:s,onFinish:i,children:e=>(0,a.jsxs)("div",{className:"flex items-center gap-2",children:[(0,a.jsx)(d,{size:"small",value:e.minutes,className:"bg-danger text-white"}),(0,a.jsx)("p",{className:"text-white",children:":"}),(0,a.jsx)(d,{size:"small",value:e.seconds,className:"bg-danger text-white"})]})})},h=()=>{let[e,t]=(0,n.useState)(0),[s,l]=(0,n.useState)(null),i=(0,n.useMemo)(()=>e?Math.ceil(e/6e5*100):0,[e]),c=e=>{t(e)};return(0,n.useEffect)(()=>{if(localStorage.getItem(o._w)){let e=localStorage.getItem(o._w)||"";l(new Date(+e))}else{let e=new Date,t=(0,r.default)(e,10);localStorage.setItem(o._w,(+t).toString()),l(t)}},[]),(0,n.useEffect)(()=>{let e=localStorage.getItem(o._w)||"";e&&+new Date>+e&&localStorage.removeItem(o._w)},[]),(0,a.jsxs)("div",{className:"flex flex-col gap-5 ",children:[(0,a.jsx)("div",{className:"h-2 bg-gray-300/20 w-full rounded-full relative",children:(0,a.jsx)("div",{className:"h-full bg-white rounded-full transition-all duration-500 ease-out",style:{width:"".concat(i,"%")}})}),(0,a.jsxs)("div",{className:"flex items-center justify-between",children:[(0,a.jsx)("p",{className:"text-white text-sm lg:text-base",children:"Waktu Transaksi Pre-Order iPhone 15"}),s&&(0,a.jsx)(u,{endTime:s,callback:c})]})]})};var j=h},79837:function(e,t,s){s.r(t),s.d(t,{default:function(){return x}});var a=s(85893),n=s(62774),l=s(78694),r=s(41664),i=s.n(r),c=s(71171),d=s(16334),o=s(57851);function x(e){let{isMobile:t}=e,s=(0,c.Z)();return(0,a.jsxs)(n.Z,{className:"fixed top-0 z-20 w-full",children:[(0,a.jsx)(n.Z,{className:"bg-white",children:(0,a.jsx)(l.Z,{className:t?"px-3":"px-16",children:(0,a.jsxs)(n.Z,{className:"flex items-center justify-between h-[49px] md:h-[80px]",children:[(0,a.jsx)("div",{className:"flex items-center",children:(0,a.jsx)(i(),{href:"/",className:"my-auto mr-4",children:(0,a.jsx)("img",{src:"/images/logo/ibox_logo_black.png",alt:"logo-ibox",width:t?"70":"100"})})}),(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)("img",{src:"/icons/lock.svg",alt:"",width:t?"15":"19"}),(0,a.jsx)("span",{className:"text-xs md:text-[15px] font-bold pl-1",children:"Transaksi Aman"})]})]})})}),(0,a.jsx)(n.Z,{className:"bg-black",children:s&&(0,a.jsx)(l.Z,{className:(0,o.m)("py-4",t?"px-4":"px-16"),children:(0,a.jsx)(d.Z,{})})})]})}},11335:function(e,t,s){var a=s(85893),n=s(39287),l=s(62774),r=s(47181),i=s(78694),c=s(22471),d=s(86891),o=s(16409),x=s(61238),m=s(67294),u=s(45249);let h=()=>{let e=(0,x.Kw)(e=>e.isMobile),[t,s]=(0,m.useState)(!1),[h,j]=(0,m.useState)(""),[p,f]=(0,m.useState)(""),g=async e=>{try{s(!0),f(""),j("");let t=await(0,n.lg)(e);200===t.status&&j("Anda telah berhasil berlangganan newsletter kami.")}catch(e){f(e.message)}finally{s(!1),setTimeout(()=>{f(""),j("")},6e3)}},v=()=>(0,a.jsx)(r.Z,{type:"submit",className:"text-black border-l border-[#ecebeb]",id:"mcis-newsletter-button",children:"KIRIM"}),b=()=>(0,a.jsx)(l.Z,{className:"bg-black",children:(0,a.jsx)(i.Z,{className:"px-16 py-5",children:(0,a.jsx)(u.l0,{onSubmit:g,render:e=>{let{handleSubmit:s}=e;return(0,a.jsx)("form",{onSubmit:s,children:(0,a.jsxs)(l.Z,{className:"grid grid-cols-2 items-center",children:[(0,a.jsx)("p",{className:"text-white text-xs font-bold",children:"Mulai berlangganan newsletter dan dapatkan informasi dan promo terbaru"}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(u.gN,{name:"email",validate:(0,o.A3)(o.C1,o.Qs),children:e=>{let{input:t}=e;return(0,a.jsx)(d.Z,{id:"mcis-newsletter-input",rightElement:(0,a.jsx)(v,{}),isElementButton:!0,type:"email",placeholder:"Masukkan email anda",...t})}}),(0,a.jsxs)(l.Z,{className:"mt-2",children:[t&&(0,a.jsx)("p",{className:"text-white text-xs",children:"Mengirim permintaan..."}),p&&(0,a.jsx)("p",{className:"text-[#f9d40c] text-xs",children:p}),h&&(0,a.jsx)("p",{id:"mcis-newsletter-success",className:"text-[#6ef214] text-xs",children:h})]})]})]})})}})})}),N=()=>(0,a.jsx)(l.Z,{className:"bg-black",children:(0,a.jsx)(c.Z,{className:"p-4",children:(0,a.jsx)(u.l0,{onSubmit:g,render:e=>{let{handleSubmit:s}=e;return(0,a.jsx)("form",{onSubmit:s,children:(0,a.jsxs)(l.Z,{children:[(0,a.jsx)("p",{className:"text-white text-xs font-bold mb-2",children:"Mulai berlangganan newsletter dan dapatkan informasi dan promo terbaru"}),(0,a.jsxs)(l.Z,{children:[(0,a.jsx)(u.gN,{name:"email",validate:(0,o.A3)(o.C1,o.Qs),children:e=>{let{input:t}=e;return(0,a.jsx)(d.Z,{rightElement:(0,a.jsx)(v,{}),isElementButton:!0,type:"email",placeholder:"Masukkan email anda",...t})}}),(0,a.jsxs)(l.Z,{className:"mt-2",children:[t&&(0,a.jsx)("p",{className:"text-white text-xs",children:"Mengirim permintaan..."}),p&&(0,a.jsx)("p",{className:"text-[#f9d40c] text-xs",children:p}),h&&(0,a.jsx)("p",{className:"text-[#6ef214] text-xs",children:h})]})]})]})})}})})});return e?(0,a.jsx)(N,{}):(0,a.jsx)(b,{})};t.Z=h},74431:function(e,t,s){s.d(t,{Z:function(){return n}});var a=s(61238);function n(){return(0,a.Kw)(e=>e.isMobile)}},71171:function(e,t,s){s.d(t,{Z:function(){return r}});var a=s(77987),n=s(67294),l=s(61238);function r(){let e=(0,l.Kw)(e=>e.isShowHeaderCountdown),t=(0,l.WX)(e=>e.setIsShowHeaderCountdown);return(0,n.useEffect)(()=>{t("true"===localStorage.getItem(a.uv))},[e]),e}},75711:function(e,t,s){s.d(t,{L:function(){return c}});var a=s(36492),n=s(37518),l=s(4346);let r=(0,l.Z)({baseURL:"".concat("https://jeanne.eraspace.com/products","/api/v1")}),i=()=>(0,n.Z)(()=>r.get("/categories/")),c=()=>(0,a.a)(["categories"],()=>i(),{select:e=>{let t=e.data.children_data.find(e=>"iBox"===e.name);return null==t?void 0:t.children_data}})},40096:function(e,t,s){s.d(t,{Z:function(){return d}});var a=s(85893),n=s(62774),l=s(90301),r=s(36492),i=s(64186);let c=(e,t,s)=>{var a;return(0,r.a)(["products","blocks",{identifier:e,isBanner:t}],()=>(0,i.Vl)(e,t),{...s,enabled:!!e&&(null===(a=null==s?void 0:s.enabled)||void 0===a||a)})};function d(e){var t,s,r,i,d,o,x,m;let{identifier:u,isBanner:h=!1,loadingComponent:j,options:p,className:f="",children:g}=e,v=c(u,h,p);return g?v.isLoading&&j?j:(0,a.jsx)(a.Fragment,{children:g(null===(x=v.data)||void 0===x?void 0:null===(m=x.data)||void 0===m?void 0:m.items,v.isLoading)}):v.isLoading?(0,a.jsx)(n.Z,{className:f,children:j}):(0,a.jsx)(n.Z,{className:(null===(t=v.data)||void 0===t?void 0:null===(s=t.data)||void 0===s?void 0:null===(r=s.items)||void 0===r?void 0:r.content)?f:"",dangerouslySetInnerHTML:(0,l.rg)((null===(i=v.data)||void 0===i?void 0:null===(d=i.data)||void 0===d?void 0:null===(o=d.items)||void 0===o?void 0:o.content)||"")})}}}]);