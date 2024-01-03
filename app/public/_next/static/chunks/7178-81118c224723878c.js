(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7178],{29422:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(71002),s=n(77349),a=n(11640),u=n(19013),l=n(13882),i=n(83946);function o(e,t){if((0,l.Z)(2,arguments),!t||"object"!==(0,r.Z)(t))return new Date(NaN);var n=t.years?(0,i.Z)(t.years):0,o=t.months?(0,i.Z)(t.months):0,c=t.weeks?(0,i.Z)(t.weeks):0,d=t.days?(0,i.Z)(t.days):0,p=t.hours?(0,i.Z)(t.hours):0,f=t.minutes?(0,i.Z)(t.minutes):0,h=t.seconds?(0,i.Z)(t.seconds):0,b=(0,u.default)(e),v=o||n?(0,a.default)(b,o+12*n):b,m=d||c?(0,s.default)(v,d+7*c):v;return new Date(m.getTime()+1e3*(h+60*(f+60*p)))}},77349:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(83946),s=n(19013),a=n(13882);function u(e,t){(0,a.Z)(2,arguments);var n=(0,s.default)(e),u=(0,r.Z)(t);return isNaN(u)?new Date(NaN):(u&&n.setDate(n.getDate()+u),n)}},11640:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=n(83946),s=n(19013),a=n(13882);function u(e,t){(0,a.Z)(2,arguments);var n=(0,s.default)(e),u=(0,r.Z)(t);if(isNaN(u))return new Date(NaN);if(!u)return n;var l=n.getDate(),i=new Date(n.getTime());return(i.setMonth(n.getMonth()+u+1,0),l>=i.getDate())?i:(n.setFullYear(i.getFullYear(),i.getMonth(),l),n)}},9008:function(e,t,n){e.exports=n(42636)},28368:function(e,t,n){"use strict";n.d(t,{p:function(){return M}});var r,s,a,u=n(67294),l=n(32984),i=n(12351),o=n(23784),c=n(19946),d=n(61363),p=n(64103),f=n(16567),h=n(14157),b=n(15466),v=n(73781);let m=null!=(a=u.startTransition)?a:function(e){e()};var g=((r=g||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),x=((s=x||{})[s.ToggleDisclosure=0]="ToggleDisclosure",s[s.CloseDisclosure=1]="CloseDisclosure",s[s.SetButtonId=2]="SetButtonId",s[s.SetPanelId=3]="SetPanelId",s[s.LinkPanel=4]="LinkPanel",s[s.UnlinkPanel=5]="UnlinkPanel",s);let y={0:e=>({...e,disclosureState:(0,l.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},E=(0,u.createContext)(null);function T(e){let t=(0,u.useContext)(E);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}E.displayName="DisclosureContext";let R=(0,u.createContext)(null);R.displayName="DisclosureAPIContext";let P=(0,u.createContext)(null);function I(e,t){return(0,l.E)(t.type,y,e,t)}P.displayName="DisclosurePanelContext";let S=u.Fragment,O=i.AN.RenderStrategy|i.AN.Static,M=Object.assign((0,i.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,s=(0,u.useRef)(null),a=(0,o.T)(t,(0,o.h)(e=>{s.current=e},void 0===e.as||e.as===u.Fragment)),c=(0,u.useRef)(null),d=(0,u.useRef)(null),p=(0,u.useReducer)(I,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:h,buttonId:m},g]=p,x=(0,v.z)(e=>{g({type:1});let t=(0,b.r)(s);if(!t||!m)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(m):t.getElementById(m);null==n||n.focus()}),y=(0,u.useMemo)(()=>({close:x}),[x]),T=(0,u.useMemo)(()=>({open:0===h,close:x}),[h,x]);return u.createElement(E.Provider,{value:p},u.createElement(R.Provider,{value:y},u.createElement(f.up,{value:(0,l.E)(h,{0:f.ZM.Open,1:f.ZM.Closed})},(0,i.sY)({ourProps:{ref:a},theirProps:r,slot:T,defaultTag:S,name:"Disclosure"}))))}),{Button:(0,i.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-button-${n}`,...s}=e,[a,l]=T("Disclosure.Button"),f=(0,u.useContext)(P),b=null!==f&&f===a.panelId,m=(0,u.useRef)(null),g=(0,o.T)(m,t,b?null:a.buttonRef);(0,u.useEffect)(()=>{if(!b)return l({type:2,buttonId:r}),()=>{l({type:2,buttonId:null})}},[r,l,b]);let x=(0,v.z)(e=>{var t;if(b){if(1===a.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0}),null==(t=a.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),l({type:0})}}),y=(0,v.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),E=(0,v.z)(t=>{var n;(0,p.P)(t.currentTarget)||e.disabled||(b?(l({type:0}),null==(n=a.buttonRef.current)||n.focus()):l({type:0}))}),R=(0,u.useMemo)(()=>({open:0===a.disclosureState}),[a]),I=(0,h.f)(e,m),S=b?{ref:g,type:I,onKeyDown:x,onClick:E}:{ref:g,id:r,type:I,"aria-expanded":0===a.disclosureState,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:x,onKeyUp:y,onClick:E};return(0,i.sY)({ourProps:S,theirProps:s,slot:R,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,i.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...s}=e,[a,l]=T("Disclosure.Panel"),{close:d}=function e(t){let n=(0,u.useContext)(R);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),p=(0,o.T)(t,a.panelRef,e=>{m(()=>l({type:e?4:5}))});(0,u.useEffect)(()=>(l({type:3,panelId:r}),()=>{l({type:3,panelId:null})}),[r,l]);let h=(0,f.oJ)(),b=null!==h?(h&f.ZM.Open)===f.ZM.Open:0===a.disclosureState,v=(0,u.useMemo)(()=>({open:0===a.disclosureState,close:d}),[a,d]);return u.createElement(P.Provider,{value:a.panelId},(0,i.sY)({ourProps:{ref:p,id:r},theirProps:s,slot:v,defaultTag:"div",features:O,visible:b,name:"Disclosure.Panel"}))})})},59965:function(e,t,n){"use strict";n.d(t,{O:function(){return z}});var r,s,a,u=n(67294),l=n(12351),i=n(19946),o=n(32984),c=n(61363),d=n(84575),p=n(16723),f=n(23784),h=n(14157),b=n(3855),v=n(14879),m=n(46045);function g({onFocus:e}){let[t,n]=(0,u.useState)(!0),r=(0,v.t)();return t?u.createElement(m._,{as:"button",type:"button",features:m.A.Focusable,onFocus:t=>{t.preventDefault();let s,a=50;s=requestAnimationFrame(function t(){if(a--<=0){s&&cancelAnimationFrame(s);return}if(e()){if(cancelAnimationFrame(s),!r.current)return;n(!1);return}s=requestAnimationFrame(t)})}}):null}var x=n(73781),y=n(81021),E=n(15466);let T=u.createContext(null);function R({children:e}){let t=u.useRef({groups:new Map,get(e,t){var n;let r=this.groups.get(e);r||(r=new Map,this.groups.set(e,r));let s=null!=(n=r.get(t))?n:0;return r.set(t,s+1),[Array.from(r.keys()).indexOf(t),function(){let e=r.get(t);e>1?r.set(t,e-1):r.delete(t)}]}});return u.createElement(T.Provider,{value:t},e)}function P(e){let t=u.useContext(T);if(!t)throw Error("You must wrap your component in a <StableCollection>");let n=function(){var e,t,n;let r=null!=(n=null==(t=null==(e=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?void 0:e.ReactCurrentOwner)?void 0:t.current)?n:null;if(!r)return Symbol();let s=[],a=r;for(;a;)s.push(a.index),a=a.return;return"$."+s.join(".")}(),[r,s]=t.current.get(e,n);return u.useEffect(()=>s,[]),r}var I=((r=I||{})[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r),S=((s=S||{})[s.Less=-1]="Less",s[s.Equal=0]="Equal",s[s.Greater=1]="Greater",s),O=((a=O||{})[a.SetSelectedIndex=0]="SetSelectedIndex",a[a.RegisterTab=1]="RegisterTab",a[a.UnregisterTab=2]="UnregisterTab",a[a.RegisterPanel=3]="RegisterPanel",a[a.UnregisterPanel=4]="UnregisterPanel",a);let M={0(e,t){var n;let r=(0,d.z2)(e.tabs,e=>e.current),s=(0,d.z2)(e.panels,e=>e.current),a=r.filter(e=>{var t;return!(null!=(t=e.current)&&t.hasAttribute("disabled"))}),u={...e,tabs:r,panels:s};if(t.index<0||t.index>r.length-1){let n=(0,o.E)(Math.sign(t.index-e.selectedIndex),{[-1]:()=>1,0:()=>(0,o.E)(Math.sign(t.index),{[-1]:()=>0,0:()=>0,1:()=>1}),1:()=>0});if(0===a.length)return u;let s=(0,o.E)(n,{0:()=>r.indexOf(a[0]),1:()=>r.indexOf(a[a.length-1])});return{...u,selectedIndex:-1===s?e.selectedIndex:s}}let l=r.slice(0,t.index),i=[...r.slice(t.index),...l].find(e=>a.includes(e));if(!i)return u;let c=null!=(n=r.indexOf(i))?n:e.selectedIndex;return-1===c&&(c=e.selectedIndex),{...u,selectedIndex:c}},1(e,t){var n;if(e.tabs.includes(t.tab))return e;let r=e.tabs[e.selectedIndex],s=(0,d.z2)([...e.tabs,t.tab],e=>e.current),a=null!=(n=s.indexOf(r))?n:e.selectedIndex;return-1===a&&(a=e.selectedIndex),{...e,tabs:s,selectedIndex:a}},2:(e,t)=>({...e,tabs:e.tabs.filter(e=>e!==t.tab)}),3:(e,t)=>e.panels.includes(t.panel)?e:{...e,panels:(0,d.z2)([...e.panels,t.panel],e=>e.current)},4:(e,t)=>({...e,panels:e.panels.filter(e=>e!==t.panel)})},D=(0,u.createContext)(null);function k(e){let t=(0,u.useContext)(D);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,k),t}return t}D.displayName="TabsDataContext";let C=(0,u.createContext)(null);function w(e){let t=(0,u.useContext)(C);if(null===t){let t=Error(`<${e} /> is missing a parent <Tab.Group /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,w),t}return t}function A(e,t){return(0,o.E)(t.type,M,e,t)}C.displayName="TabsActionsContext";let N=u.Fragment,L=l.AN.RenderStrategy|l.AN.Static,z=Object.assign((0,l.yV)(function(e,t){var n,r;let s=(0,i.M)(),{id:a=`headlessui-tabs-tab-${s}`,...b}=e,{orientation:v,activation:m,selectedIndex:g,tabs:T,panels:R}=k("Tab"),I=w("Tab"),S=k("Tab"),O=(0,u.useRef)(null),M=(0,f.T)(O,t);(0,p.e)(()=>I.registerTab(O),[I,O]);let D=P("tabs"),C=T.indexOf(O);-1===C&&(C=D);let A=C===g,N=(0,x.z)(e=>{var t;let n=e();if(n===d.fE.Success&&"auto"===m){let e=null==(t=(0,E.r)(O))?void 0:t.activeElement,n=S.tabs.findIndex(t=>t.current===e);-1!==n&&I.change(n)}return n}),L=(0,x.z)(e=>{let t=T.map(e=>e.current).filter(Boolean);if(e.key===c.R.Space||e.key===c.R.Enter){e.preventDefault(),e.stopPropagation(),I.change(C);return}switch(e.key){case c.R.Home:case c.R.PageUp:return e.preventDefault(),e.stopPropagation(),N(()=>(0,d.jA)(t,d.TO.First));case c.R.End:case c.R.PageDown:return e.preventDefault(),e.stopPropagation(),N(()=>(0,d.jA)(t,d.TO.Last))}if(N(()=>(0,o.E)(v,{vertical:()=>e.key===c.R.ArrowUp?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowDown?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error,horizontal:()=>e.key===c.R.ArrowLeft?(0,d.jA)(t,d.TO.Previous|d.TO.WrapAround):e.key===c.R.ArrowRight?(0,d.jA)(t,d.TO.Next|d.TO.WrapAround):d.fE.Error}))===d.fE.Success)return e.preventDefault()}),z=(0,u.useRef)(!1),Z=(0,x.z)(()=>{var e;z.current||(z.current=!0,null==(e=O.current)||e.focus({preventScroll:!0}),I.change(C),(0,y.Y)(()=>{z.current=!1}))}),F=(0,x.z)(e=>{e.preventDefault()}),_=(0,u.useMemo)(()=>({selected:A}),[A]),U={ref:M,onKeyDown:L,onMouseDown:F,onClick:Z,id:a,role:"tab",type:(0,h.f)(e,O),"aria-controls":null==(r=null==(n=R[C])?void 0:n.current)?void 0:r.id,"aria-selected":A,tabIndex:A?0:-1};return(0,l.sY)({ourProps:U,theirProps:b,slot:_,defaultTag:"button",name:"Tabs.Tab"})}),{Group:(0,l.yV)(function(e,t){let{defaultIndex:n=0,vertical:r=!1,manual:s=!1,onChange:a,selectedIndex:i=null,...o}=e,c=r?"vertical":"horizontal",h=s?"manual":"auto",v=null!==i,m=(0,f.T)(t),[y,E]=(0,u.useReducer)(A,{selectedIndex:null!=i?i:n,tabs:[],panels:[]}),T=(0,u.useMemo)(()=>({selectedIndex:y.selectedIndex}),[y.selectedIndex]),P=(0,b.E)(a||(()=>{})),I=(0,b.E)(y.tabs),S=(0,u.useMemo)(()=>({orientation:c,activation:h,...y}),[c,h,y]),O=(0,x.z)(e=>(E({type:1,tab:e}),()=>E({type:2,tab:e}))),M=(0,x.z)(e=>(E({type:3,panel:e}),()=>E({type:4,panel:e}))),k=(0,x.z)(e=>{w.current!==e&&P.current(e),v||E({type:0,index:e})}),w=(0,b.E)(v?e.selectedIndex:y.selectedIndex),L=(0,u.useMemo)(()=>({registerTab:O,registerPanel:M,change:k}),[]);return(0,p.e)(()=>{E({type:0,index:null!=i?i:n})},[i]),(0,p.e)(()=>{if(void 0===w.current||y.tabs.length<=0)return;let e=(0,d.z2)(y.tabs,e=>e.current);e.some((e,t)=>y.tabs[t]!==e)&&k(e.indexOf(y.tabs[w.current]))}),u.createElement(R,null,u.createElement(C.Provider,{value:L},u.createElement(D.Provider,{value:S},S.tabs.length<=0&&u.createElement(g,{onFocus:()=>{var e,t;for(let n of I.current)if((null==(e=n.current)?void 0:e.tabIndex)===0)return null==(t=n.current)||t.focus(),!0;return!1}}),(0,l.sY)({ourProps:{ref:m},theirProps:o,slot:T,defaultTag:N,name:"Tabs"}))))}),List:(0,l.yV)(function(e,t){let{orientation:n,selectedIndex:r}=k("Tab.List"),s=(0,f.T)(t);return(0,l.sY)({ourProps:{ref:s,role:"tablist","aria-orientation":n},theirProps:e,slot:{selectedIndex:r},defaultTag:"div",name:"Tabs.List"})}),Panels:(0,l.yV)(function(e,t){let{selectedIndex:n}=k("Tab.Panels"),r=(0,f.T)(t),s=(0,u.useMemo)(()=>({selectedIndex:n}),[n]);return(0,l.sY)({ourProps:{ref:r},theirProps:e,slot:s,defaultTag:"div",name:"Tabs.Panels"})}),Panel:(0,l.yV)(function(e,t){var n,r,s,a;let o=(0,i.M)(),{id:c=`headlessui-tabs-panel-${o}`,tabIndex:d=0,...h}=e,{selectedIndex:b,tabs:v,panels:g}=k("Tab.Panel"),x=w("Tab.Panel"),y=(0,u.useRef)(null),E=(0,f.T)(y,t);(0,p.e)(()=>x.registerPanel(y),[x,y]);let T=P("panels"),R=g.indexOf(y);-1===R&&(R=T);let I=R===b,S=(0,u.useMemo)(()=>({selected:I}),[I]),O={ref:E,id:c,role:"tabpanel","aria-labelledby":null==(r=null==(n=v[R])?void 0:n.current)?void 0:r.id,tabIndex:I?d:-1};return I||null!=(s=h.unmount)&&!s||null!=(a=h.static)&&a?(0,l.sY)({ourProps:O,theirProps:h,slot:S,defaultTag:"div",features:L,visible:I,name:"Tabs.Panel"}):u.createElement(m._,{as:"span",...O})})})},14157:function(e,t,n){"use strict";n.d(t,{f:function(){return u}});var r=n(67294),s=n(16723);function a(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function u(e,t){let[n,u]=(0,r.useState)(()=>a(e));return(0,s.e)(()=>{u(a(e))},[e.type,e.as]),(0,s.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&u("button")},[n,t]),n}},48228:function(e,t,n){"use strict";n.d(t,{D:function(){return p}});var r=n(67294),s=n(32161),a=n(89886),u=n(30081),l=n(33989);class i extends l.l{constructor(e,t){super(),this.client=e,this.setOptions(t),this.bindMethods(),this.updateResult()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(e){var t;let n=this.options;this.options=this.client.defaultMutationOptions(e),(0,s.VS)(n,this.options)||this.client.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.currentMutation,observer:this}),null==(t=this.currentMutation)||t.setOptions(this.options)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.currentMutation)||e.removeObserver(this)}}onMutationUpdate(e){this.updateResult();let t={listeners:!0};"success"===e.type?t.onSuccess=!0:"error"===e.type&&(t.onError=!0),this.notify(t)}getCurrentResult(){return this.currentResult}reset(){this.currentMutation=void 0,this.updateResult(),this.notify({listeners:!0})}mutate(e,t){return this.mutateOptions=t,this.currentMutation&&this.currentMutation.removeObserver(this),this.currentMutation=this.client.getMutationCache().build(this.client,{...this.options,variables:void 0!==e?e:this.options.variables}),this.currentMutation.addObserver(this),this.currentMutation.execute()}updateResult(){let e=this.currentMutation?this.currentMutation.state:(0,a.R)(),t={...e,isLoading:"loading"===e.status,isSuccess:"success"===e.status,isError:"error"===e.status,isIdle:"idle"===e.status,mutate:this.mutate,reset:this.reset};this.currentResult=t}notify(e){u.V.batch(()=>{if(this.mutateOptions&&this.hasListeners()){var t,n,r,s,a,u,l,i;e.onSuccess?(null==(t=(n=this.mutateOptions).onSuccess)||t.call(n,this.currentResult.data,this.currentResult.variables,this.currentResult.context),null==(r=(s=this.mutateOptions).onSettled)||r.call(s,this.currentResult.data,null,this.currentResult.variables,this.currentResult.context)):e.onError&&(null==(a=(u=this.mutateOptions).onError)||a.call(u,this.currentResult.error,this.currentResult.variables,this.currentResult.context),null==(l=(i=this.mutateOptions).onSettled)||l.call(i,void 0,this.currentResult.error,this.currentResult.variables,this.currentResult.context))}e.listeners&&this.listeners.forEach(({listener:e})=>{e(this.currentResult)})})}}var o=n(464),c=n(85945),d=n(24798);function p(e,t,n){let a=(0,s.lV)(e,t,n),l=(0,c.NL)({context:a.context}),[p]=r.useState(()=>new i(l,a));r.useEffect(()=>{p.setOptions(a)},[p,a]);let h=(0,o.$)(r.useCallback(e=>p.subscribe(u.V.batchCalls(e)),[p]),()=>p.getCurrentResult(),()=>p.getCurrentResult()),b=r.useCallback((e,t)=>{p.mutate(e,t).catch(f)},[p]);if(h.error&&(0,d.L)(p.options.useErrorBoundary,[h.error]))throw h.error;return{...h,mutate:b,mutateAsync:h.mutate}}function f(){}}}]);