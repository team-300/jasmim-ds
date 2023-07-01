import{a as p,F as N,j as o}from"./jsx-runtime-bc5d6cf6.js";import{c as t,I as n}from"./IconButton-327457c9.js";import"./index-c013ead5.js";import"./index-36f1bf24.js";import"./_commonjsHelpers-725317a4.js";const S=({application:a="on-white",kind:r="back-full",size:e="md",...B})=>p("button",{type:"button",className:t("group flex items-center transition-all duration-300",{"h-10 gap-[6px] pr-4 font-medium ":r==="back-full","text-gray-5 hover:text-gray-6":r==="back-full"&&a==="on-white","text-white hover:text-gray-4 focus:text-gray-5":r==="back-full"&&a==="on-dark","border-gray-3 hover:border-none hover:bg-transparent-dark-1 focus:border-none focus:bg-transparent-dark-2":["back-single","back-arrow","close"].includes(r)&&a==="on-white","border-transparent-light-1 hover:border-none hover:bg-transparent-light-1 focus:border-none focus:bg-transparent-light-2":["back-single","back-arrow","close"].includes(r)&&a==="on-dark","justify-center rounded-lg border ":["back-single","back-arrow","close"].includes(r),"h-10 w-10":["back-single","back-arrow","close"].includes(r)&&e==="md","h-8 w-8":["back-single","back-arrow","close"].includes(r)&&e==="sm"}),...B,children:[r==="back-full"&&p(N,{children:[o(n,{className:"icon-arrow-r rotate-180 text-gray-5 transition-all duration-300 group-hover:text-gray-6 text-[20px]"}),"Voltar"]}),r==="back-arrow"&&o(n,{className:t("rotate-180 icon-arrow-r",{"text-gray-5":a==="on-white","text-gray-6":a==="on-dark","text-[28px]":e==="md","text-[22.4px]":e==="sm"})}),r==="back-single"&&o(n,{className:t("icon-chev-l text-gray-5",{"text-[28px]":e==="md","text-[22.4px]":e==="sm"})}),r==="close"&&o(n,{className:t("icon-close-md text-gray-5",{"text-[28px]":e==="md","text-[22.4px]":e==="sm"})})]}),C={title:"Base/NavButton",component:S,argTypes:{application:{options:["on-dark","on-white"],control:{type:"inline-radio"}},size:{options:["md","sm"],control:{type:"inline-radio"}},kind:{options:["back-single","back-full","back-arrow","close"],control:{type:"inline-radio"}}}},s={args:{application:"on-white",kind:"back-single",size:"md"}},c={args:{application:"on-white",kind:"back-full",size:"md"}},i={args:{application:"on-white",kind:"back-arrow",size:"md"}},l={args:{application:"on-white",kind:"close",size:"md"}};var d,m,g;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    application: 'on-white',
    kind: 'back-single',
    size: 'md'
  }
}`,...(g=(m=s.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var u,b,k;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    application: 'on-white',
    kind: 'back-full',
    size: 'md'
  }
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var x,h,w;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    application: 'on-white',
    kind: 'back-arrow',
    size: 'md'
  }
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};var f,y,v;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    application: 'on-white',
    kind: 'close',
    size: 'md'
  }
}`,...(v=(y=l.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};const I=["BackSingle","BackFull","BackArrow","Close"];export{i as BackArrow,c as BackFull,s as BackSingle,l as Close,I as __namedExportsOrder,C as default};
//# sourceMappingURL=NavButton.stories-39496bd4.js.map
