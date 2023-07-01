import{a as i,j as e}from"./jsx-runtime-bc5d6cf6.js";import{c as r}from"./IconButton-327457c9.js";import{r as m}from"./index-c013ead5.js";import"./index-36f1bf24.js";import"./_commonjsHelpers-725317a4.js";const f=({label:o,labelDir:a="left",description:n,disabled:t=!1})=>{const[l,g]=m.useState(!1);return i("div",{className:r("flex cursor-pointer items-center gap-3",a==="left"&&"justify-between"),onClick:()=>!t&&g(!l),children:[a==="left"&&i("div",{children:[e("p",{className:r("text-body-2-regular",t?"text-gray-5":"text-gray-8"),children:o}),n&&e("p",{className:r("font-nunito-sans text-body-3-regular",t?"text-gray-5":"text-gray-6"),children:n})]}),e("div",{className:r("flex h-6 w-[42px] cursor-pointer items-center rounded-full px-[3px] transition duration-300",l&&"justify-end bg-brand-medium-2",t?"bg-gray-3":"bg-gray-4"),children:e("div",{className:"h-[18px] w-[18px] rounded-full bg-white"})}),a==="right"&&e("div",{children:e("p",{className:r("text-body-3-regular ",t?"text-gray-5":"text-gray-8"),children:o})})]})},w={title:"Base/ToggleSwitch",component:f,argTypes:{disabled:{control:"boolean"}}},s={args:{label:"Label",description:"Description",disabled:!1,labelDir:"left"}};var c,d,p;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Label',
    description: 'Description',
    disabled: false,
    labelDir: 'left'
  }
}`,...(p=(d=s.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};const L=["LabelLeft"];export{s as LabelLeft,L as __namedExportsOrder,w as default};
//# sourceMappingURL=ToggleSwitch.stories-054204b8.js.map
