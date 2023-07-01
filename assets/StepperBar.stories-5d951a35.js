import{j as r,a as d}from"./jsx-runtime-bc5d6cf6.js";import{c as a,I as n}from"./IconButton-327457c9.js";import{r as b}from"./index-c013ead5.js";import"./index-36f1bf24.js";import"./_commonjsHelpers-725317a4.js";const S=({steps:o,currentStep:l=1})=>{const[t,i]=b.useState(l);return r("ul",{className:"flex items-center gap-3",children:o.map((u,e)=>d("li",{className:a("flex cursor-pointer items-center gap-3",{"text-brand-medium-2":t>e+1}),onClick:()=>i(e+1),children:[r("span",{className:a("flex h-6 w-6 items-center justify-center rounded-full border border-gray-5 font-work-sans text-body-2-semibold text-gray-5",{"border-none bg-brand-pure":t>e+1,"border !border-brand-medium-2 !text-brand-medium-2":t===e+1}),children:t>e+1?r(n,{className:"icon-check text-white text-[24px]"}):e+1}),r("span",{className:a("font-work-sans text-body-2-medium text-gray-5",{"!text-brand-medium-2":t>=e+1}),children:u.title}),e<o.length-1&&r(n,{className:a("icon-chev-r text-gray-5 text-[16px]",{"!text-brand-medium-2":t>e+1})})]},e+1))})},B={title:"Base/StepperBar",component:S},s={args:{steps:[{title:"Step 1"},{title:"Step 2"},{title:"Step 3"}],currentStep:1}};var c,p,m;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    steps: [{
      title: 'Step 1'
    }, {
      title: 'Step 2'
    }, {
      title: 'Step 3'
    }],
    currentStep: 1
  }
}`,...(m=(p=s.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const N=["Default"];export{s as Default,N as __namedExportsOrder,B as default};
//# sourceMappingURL=StepperBar.stories-5d951a35.js.map
