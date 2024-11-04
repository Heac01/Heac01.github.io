"use strict";(self.webpackChunkheac_framework_docs=self.webpackChunkheac_framework_docs||[]).push([[6136],{8628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=n(7624),a=n(2172),r=n(6788);const l={},i="Value Sets Manager",c={id:"HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/Value-Sets-Manager",title:"Value Sets Manager",description:"Quick Explanation",source:"@site/docs/01-HF-Stats/04-Stats/02-Complex-Stat/01-Value-Sets-Manager/01-Value-Sets-Manager.md",sourceDirName:"01-HF-Stats/04-Stats/02-Complex-Stat/01-Value-Sets-Manager",slug:"/HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/",permalink:"/docs/HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"hfstatsSidebar",previous:{title:"Complex Stat",permalink:"/docs/HF-Stats/Stats/Complex-Stat/"},next:{title:"Setup",permalink:"/docs/HF-Stats/Stats/Complex-Stat/Value-Sets-Manager/Setup"}},o={},d=[{value:"Quick Explanation",id:"quick-explanation",level:2},{value:"Illustration",id:"illustration",level:2},{value:"More",id:"more",level:2}];function u(e){const t={br:"br",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"value-sets-manager",children:"Value Sets Manager"}),"\n",(0,s.jsx)(t.h2,{id:"quick-explanation",children:"Quick Explanation"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)("span",{class:"ValueSetsManager",children:(0,s.jsx)(t.strong,{children:"Value Sets Manager"})})," is a UObject class with a ",(0,s.jsx)(t.strong,{children:"Value Total"})," that will be clamped to determine the\r\nFinal Value of a ",(0,s.jsx)(t.strong,{children:"Complex Stat"})," and is composed of multiple values:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(t.strong,{children:"Value Set"})}),": a value with a ",(0,s.jsx)(t.strong,{children:"Mode"})," (e.g. Regular, Multiplier, Super Multiplier, etc.)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(t.strong,{children:"Value Type"})}),": a value tied to a ",(0,s.jsx)(t.strong,{children:"Gameplay Tag"})," (e.g. Base, Equipment, Value Influence, etc.)"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)("span",{class:"IDValue",children:(0,s.jsx)(t.strong,{children:"ID Value"})}),": a value tied to an ",(0,s.jsx)(t.strong,{children:"ID"}),' (e.g. "MyModifier", "MyItem", "MyInfluence", etc.)']}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)("span",{class:"ValueSetsManager",children:(0,s.jsx)(t.strong,{children:"Value Sets Manager"})}),"'s Value Total is determined by its\r\n",(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(t.strong,{children:"Value Sets"})}),".",(0,s.jsx)(t.br,{}),"\n","The ",(0,s.jsx)("span",{class:"ValueSet",children:(0,s.jsx)(t.strong,{children:"Value Sets"})})," are determined by their ",(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(t.strong,{children:"Value Types"})}),".",(0,s.jsx)(t.br,{}),"\n","The ",(0,s.jsx)("span",{class:"ValueType",children:(0,s.jsx)(t.strong,{children:"Value Types"})})," are determined by their ",(0,s.jsx)("span",{class:"IDValue",children:(0,s.jsx)(t.strong,{children:"ID Values"})}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["Whenever we modify the value of a Complex Stat, it's ",(0,s.jsx)(t.strong,{children:"always"})," through ",(0,s.jsx)("span",{class:"IDValue",children:(0,s.jsx)(t.strong,{children:"ID Values"})}),",\r\nthe most fundamental values."]}),"\n",(0,s.jsx)(t.h2,{id:"illustration",children:"Illustration"}),"\n",(0,s.jsx)("img",{src:"/img/doc/HF-Stats/ValueSetsManagerMap.jpg"}),"\n",(0,s.jsx)(t.h2,{id:"more",children:"More"}),"\n","\n","\n",(0,s.jsx)(r.c,{})]})}function h(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},6788:(e,t,n)=>{n.d(t,{c:()=>g});n(1504);var s=n(5456),a=n(9940),r=n(867),l=n(8136),i=n(4357),c=n(6448);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(7624);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(r.c,{href:t,className:(0,s.c)("card padding--lg",o.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:a,description:r}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(c.c,{as:"h2",className:(0,s.c)("text--truncate",o.cardTitle),title:a,children:[n," ",a]}),r&&(0,d.jsx)("p",{className:(0,s.c)("text--truncate",o.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const n=(0,a.Gw)(t);return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,i.G)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function x(e){let{item:t}=e;const n=(0,l.c)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,a._4)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function m(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(x,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function j(e){let{className:t}=e;const n=(0,a.wt)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(j,{...e});const r=(0,a.ML)(t);return(0,d.jsx)("section",{className:(0,s.c)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(m,{item:e})},t)))})}},2172:(e,t,n)=>{n.d(t,{I:()=>i,M:()=>l});var s=n(1504);const a={},r=s.createContext(a);function l(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);