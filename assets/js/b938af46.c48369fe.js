"use strict";(self.webpackChunkheac_framework_docs=self.webpackChunkheac_framework_docs||[]).push([[5318],{44:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var a=t(7624),l=t(2172);const s={},i="Value Influence",r={id:"HF-Stats/StatsComponent/Value-Influence",title:"Value Influence",description:"Value Influences are used to make the value of a Complex Stat inherit from the values of other Complex Stats.",source:"@site/docs/01-HF-Stats/03-StatsComponent/09-Value-Influence.md",sourceDirName:"01-HF-Stats/03-StatsComponent",slug:"/HF-Stats/StatsComponent/Value-Influence",permalink:"/docs/HF-Stats/StatsComponent/Value-Influence",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{},sidebar:"hfstatsSidebar",previous:{title:"String Operation",permalink:"/docs/HF-Stats/StatsComponent/String-Operation"},next:{title:"Preview StatsComponent",permalink:"/docs/HF-Stats/StatsComponent/Preview-StatsComponent"}},u={},o=[{value:"Composition",id:"composition",level:2},{value:"Add Value Influences",id:"add-value-influences",level:2},{value:"Through the Default Values",id:"through-the-default-values",level:3},{value:"Through a custom structure (and Data Tables)",id:"through-a-custom-structure-and-data-tables",level:3},{value:"ValueInfluence",id:"valueinfluence",level:4},{value:"ValueInfluencesByID",id:"valueinfluencesbyid",level:4},{value:"Manually",id:"manually",level:3},{value:"Remove Value Influences",id:"remove-value-influences",level:2},{value:"Adding Value Influences to Stats that don&#39;t exist",id:"adding-value-influences-to-stats-that-dont-exist",level:2}];function c(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"value-influence",children:"Value Influence"}),"\n",(0,a.jsxs)(n.p,{children:["Value Influences are used to make the value of a Complex Stat ",(0,a.jsx)(n.strong,{children:"inherit"})," from the values of other Complex Stats."]}),"\n",(0,a.jsx)(n.p,{children:"They can capture values from other stats in a string operation and calculate the result. The result will then be added to the\r\nInfluenced Stat through an ID Value that will be automatically updated whenever a captured Stat value changes."}),"\n",(0,a.jsx)(n.h2,{id:"composition",children:"Composition"}),"\n",(0,a.jsx)(n.p,{children:"A Value Influence contains:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The ID of the Value Influence, which will be used to modify the Value Set of the Target Stat"}),"\n",(0,a.jsx)(n.li,{children:"The target Complex Stat that will be influenced"}),"\n",(0,a.jsx)(n.li,{children:"The String Operation"}),"\n",(0,a.jsx)(n.li,{children:"(Optional) A Curve that will transform the result X into the Y value"}),"\n",(0,a.jsx)(n.li,{children:"(Optional) Custom Values used in the Operation"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["To learn more about String Operations, see ",(0,a.jsx)(n.a,{href:"String-Operation",children:"String Operation"}),"."]}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/ValueInfluenceStructure.jpg"}),"\n",(0,a.jsx)(n.h2,{id:"add-value-influences",children:"Add Value Influences"}),"\n",(0,a.jsx)(n.h3,{id:"through-the-default-values",children:"Through the Default Values"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SDV_Base"})," structure contains the informations about Value Influences for each Stat.",(0,a.jsx)(n.br,{}),"\n","It is present in both ",(0,a.jsx)(n.strong,{children:"SDV_Minimal"})," and ",(0,a.jsx)(n.strong,{children:"SDV_Advanced"})," (see ",(0,a.jsx)(n.a,{href:"../Default-Values/Stat-Default-Values",children:"Stat Default Values"}),").",(0,a.jsx)(n.br,{}),"\n",'Adding Value Influences through the Default Values Table will register them under the ID "DefaultInfluence".']}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/ValueInfluencesFromDefaultValues.jpg"}),"\n",(0,a.jsx)(n.h3,{id:"through-a-custom-structure-and-data-tables",children:"Through a custom structure (and Data Tables)"}),"\n",(0,a.jsx)(n.p,{children:"There are two types of Value Influence structures that you can use:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ValueInfluence"}),"\n",(0,a.jsx)(n.li,{children:"ValueInfluencesByID"}),"\n"]}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/ValueInfluenceStructures.jpg"}),"\n",(0,a.jsx)(n.h4,{id:"valueinfluence",children:"ValueInfluence"}),"\n",(0,a.jsx)(n.p,{children:"This structure is useful if you already have an ID for your influence."}),"\n",(0,a.jsxs)(n.admonition,{title:"Example",type:"note",children:[(0,a.jsx)(n.p,{children:"When designing a Perks system, I create a structure containing the Perk infos and an array of the ValueInfluence structure."}),(0,a.jsx)("img",{src:"/img/doc/HF-Stats/PerkInfos.jpg"}),(0,a.jsx)(n.p,{children:"I can then create a Data Table from this new structure and fill the infos."}),(0,a.jsx)("img",{src:"/img/doc/HF-Stats/PerksTable.jpg"}),(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:'Here, "Perk_MyOtherPerk" will make the AttackPower inherit from 50% of the Strength value.'})}),(0,a.jsx)(n.p,{children:"Since I already have the ID of the Perk, I don't need an additional ID for my Value Influences."}),(0,a.jsx)("img",{src:"/img/doc/HF-Stats/AddPerkInfluence.jpg"}),(0,a.jsx)(n.p,{children:'When I remove my perk, I then just have to call "RemoveValueInfluence" using the Perk ID.'}),(0,a.jsx)("img",{src:"/img/doc/HF-Stats/RemovePerkInfluence.jpg"})]}),"\n",(0,a.jsx)(n.h4,{id:"valueinfluencesbyid",children:"ValueInfluencesByID"}),"\n",(0,a.jsx)(n.p,{children:"This structure is useful when you don't already have an ID for your Value Influence, or want to apply multiple IDs at the same time."}),"\n",(0,a.jsx)(n.h3,{id:"manually",children:"Manually"}),"\n",(0,a.jsxs)(n.p,{children:["During gameplay, you can use ",(0,a.jsx)("span",{class:"function",children:"AddValueInfluences()"})," to add multiple influences in one function."]}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/AddValueInfluences.jpg"}),"\n",(0,a.jsxs)(n.p,{children:["If you only want to target one Complex Stat, you can also use ",(0,a.jsx)("span",{class:"function",children:"AddValueInfluenceToComplexStat()"}),"."]}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/AddValueInfluence.jpg"}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"If a Complex Stat already has a Value Influence under that ID, it will override it."})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsx)(n.p,{children:"Split the structure pins to make the data more readable."}),(0,a.jsx)("img",{src:"/img/doc/HF-Stats/SplitStructPin3.jpg"})]}),"\n",(0,a.jsx)(n.h2,{id:"remove-value-influences",children:"Remove Value Influences"}),"\n",(0,a.jsxs)(n.p,{children:["You can remove a Value Influence by ID in every Stat with ",(0,a.jsx)("span",{class:"function",children:"RemoveValueInfluences()"}),"."]}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/RemoveValueInfluence.jpg"}),"\n",(0,a.jsxs)(n.p,{children:["Or for a specific Stat with ",(0,a.jsx)("span",{class:"function",children:"RemoveValueInfluenceFromComplexStat()"}),"."]}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/RemoveValueInfluenceFromComplexStat.jpg"}),"\n",(0,a.jsx)(n.h2,{id:"adding-value-influences-to-stats-that-dont-exist",children:"Adding Value Influences to Stats that don't exist"}),"\n",(0,a.jsx)(n.p,{children:"Adding Value Influences also work if the influenced Stat doesn't exist, or if the Stats used in the operation don't exist."}),"\n",(0,a.jsxs)(n.p,{children:["For example, consider the following Value Influence:\r\n",(0,a.jsx)(n.code,{children:"AttackPower = {Strength}"}),"."]}),"\n",(0,a.jsx)("img",{src:"/img/doc/HF-Stats/AgilityFromStrength.jpg"}),"\n",(0,a.jsx)(n.p,{children:'If Attack Power and Strength don\'t exist, then the Value Influence will remain "asleep".'}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"When the Attack Power stat is added, the AttackPower_FromStrength will update and return 0, since Strength doesn't exist."}),"\n",(0,a.jsx)(n.li,{children:"When the Strength stat is added, AttackPower_FromStrength will automatically update and return the value of Strength."}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},2172:(e,n,t)=>{t.d(n,{I:()=>r,M:()=>i});var a=t(1504);const l={},s=a.createContext(l);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);