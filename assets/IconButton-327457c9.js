import{j as a,a as c}from"./jsx-runtime-bc5d6cf6.js";import{r as u}from"./index-c013ead5.js";import{c as l}from"./index-36f1bf24.js";function h(r){var t,s,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r))for(t=0;t<r.length;t++)r[t]&&(s=h(r[t]))&&(e&&(e+=" "),e+=s);else for(t in r)r[t]&&(e&&(e+=" "),e+=t);return e}function g(){for(var r,t,s=0,e="";s<arguments.length;)(r=arguments[s++])&&(t=h(r))&&(e&&(e+=" "),e+=t);return e}const p=({className:r,...t})=>a("i",{className:r,...t});p.displayName="Icon";function f(){return c("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"100%",fill:"none",viewBox:"0 0 45 44",children:[c("g",{clipPath:"url(#clip0_1_5)",children:[a("path",{fill:"#E9EBF0",d:"M0.087 0H44.087V44H0.087z"}),a("path",{fill:"#fff",d:"M37.255 35.111a3.424 3.424 0 00-.896-.472c-2.462-.891-5.295-2.19-8.498-3.895-.93-.496-1.508-1.425-1.508-2.433v-1.8c0-.109.048-.208.113-.299.491-.697 1.031-1.176 1.47-2.23.407-.976.382-1.826.64-2.928.312.327.973-.663 1.23-2.982.087-.785-.287-1.145-.743-1.076-.07.011-.13-.043-.123-.11l.183-1.622a6.61 6.61 0 00.09-1.086c0-3.772-2.877-6.708-7.107-6.828h-.039c-3.884-.28-7.107 3.057-7.107 6.828 0 .37.031.732.09 1.085l.184 1.624c.007.066-.054.12-.124.11-.455-.07-.83.29-.743 1.075.257 2.32.919 3.309 1.23 2.982.258 1.102.243 1.886.65 2.861.44 1.055.97 1.6 1.46 2.297.065.09.113.19.113.3v1.799c0 1.008-.578 1.937-1.508 2.433-3.203 1.704-6.036 3.004-8.498 3.895-.321.116-.626.27-.896.472-.835.628-1.336 1.59-1.331 2.623L5.619 44h32.936l.032-6.266c.005-1.033-.496-1.995-1.332-2.623z",opacity:"0.8"})]}),a("path",{stroke:"#E9EBF0",d:"M0.587 0.5H43.587V43.5H0.587z"}),a("defs",{children:a("clipPath",{id:"clip0_1_5",children:a("path",{fill:"#fff",d:"M0.087 0H44.087V44H0.087z"})})})]})}const y=({size:r="sm",avatarName:t,avatarUrl:s})=>{const[e,o]=u.useState(!0);return e&&s?a("img",{src:s,className:g("rounded-full border-gray-3",r==="sm"&&"h-11 w-11 border",r==="lg"&&"h-36 w-36 border-[2.91px]"),alt:t||"Avatar",onError:()=>o(!1),onLoad:()=>o(!0)}):a("div",{className:g("rounded-full border-gray-3 overflow-hidden",r==="sm"&&"h-11 w-11 border",r==="lg"&&"h-36 w-36 border-[2.91px]"),children:a("div",{className:"scale-[1.1]",children:a(f,{})})})};y.displayName="AvatarProfile";const x=({className:r,spinColor:t="black",elipseColor:s="gray"})=>{const e={spinColors:{black:l.black,green:l["brand-pure"],white:l.white},eliseColors:{gray:l["gray-3"],"dark-gray":l["gray-7"],success:l["brand-light-2"]}};return c("svg",{width:"28",height:"28",viewBox:"0 0 28 28",className:`animate-spin ${r}`,fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a("path",{d:"M-6.8343e-07 14C-7.4779e-09 6.26801 6.26801 -3.80722e-06 14 -3.13127e-06C21.732 -2.45532e-06 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 -1.35938e-06 21.732 -6.8343e-07 14ZM25.2 14C25.2 7.81441 20.1856 2.8 14 2.8C7.81441 2.8 2.8 7.81441 2.8 14C2.8 20.1856 7.81441 25.2 14 25.2C20.1856 25.2 25.2 20.1856 25.2 14Z",fill:e.eliseColors[s]}),a("path",{d:"M26.6 14C27.3732 14 28.0073 13.3716 27.9301 12.6023C27.7018 10.3272 26.9188 8.13498 25.6406 6.22202C24.1022 3.91973 21.9157 2.12531 19.3576 1.06568C16.7994 0.00605676 13.9845 -0.27119 11.2687 0.269003C8.553 0.809195 6.05844 2.14256 4.10051 4.1005C2.14257 6.05844 0.8092 8.553 0.269006 11.2687C-0.271188 13.9845 0.00605872 16.7994 1.06568 19.3576C2.12531 21.9157 3.91973 24.1022 6.22201 25.6406C8.13498 26.9188 10.3272 27.7018 12.6023 27.9301C13.3716 28.0073 14 27.3732 14 26.6C14 25.8268 13.3708 25.209 12.6036 25.1126C10.8833 24.8964 9.22985 24.2828 7.77761 23.3125C5.93578 22.0818 4.50025 20.3326 3.65255 18.2861C2.80485 16.2395 2.58305 13.9876 3.0152 11.815C3.44736 9.6424 4.51406 7.64675 6.0804 6.0804C7.64675 4.51405 9.6424 3.44736 11.815 3.0152C13.9876 2.58305 16.2395 2.80484 18.2861 3.65255C20.3326 4.50025 22.0818 5.93578 23.3125 7.77761C24.2828 9.22986 24.8964 10.8833 25.1126 12.6036C25.209 13.3708 25.8268 14 26.6 14Z",fill:e.spinColors[t]})]})},C=({children:r,size:t,leftIcon:s,rightIcon:e,fullSize:o,variation:d="primary",isLoading:n=!1,...b})=>{const i={lg:"text-[28px]",md:"text-[24px]",sm:"text-[16px]"},m={lg:"w-7 h-7",md:"w-6 h-6",sm:"w-4 h-4"};return c("button",{className:g({"h-14 px-7":t==="lg","h-12 px-5":t==="md","h-10 px-4":t==="sm","w-full":o,"bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2 text-body-1-semibold":d==="primary","border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 text-body-2-medium":d==="secondary","text-brand-medium-2 hover:text-brand-dark focus:text-brand-pure disabled:text-gray-7 text-body-2-medium":d==="tertiary","disabled:!opacity-100":d==="primary"&&n},"flex items-center justify-center gap-2 rounded-md transition-all duration-200 disabled:opacity-[0.4]"),disabled:n,...b,children:[s&&a(p,{className:`icon-${s} ${i[t]}`}),n&&a(x,{className:m[t],spinColor:d==="primary"?"black":"green",elipseColor:d==="primary"?"success":"gray"}),r&&a("p",{children:r}),e&&a(p,{className:`icon-${e} ${i[t]}`})]})};C.displayName="Button";const k=({size:r,icon:t,variation:s="primary",mode:e="light",appearance:o="square",...d})=>{const n={lg:"p-2",md:"p-[6px]",sm:"p-[6px]"},b={lg:"text-[40px]",md:"text-[32px]",sm:"text-[22px]"},i={background:{primary:{light:"bg-gray-8 hover:bg-gray-7 focus:bg-black disabled:bg-gray-8",dark:"bg-white hover:bg-gray-3 focus:bg-gray-5"},secondary:{light:"bg-white border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 disabled:bg-transparent-dark-1",dark:"border-[1.3px] border-transparent-light-3 hover:bg-transparent-light-1 focus:bg-transparent-light-2"},tertiary:{light:"bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2 disabled:bg-brand-medium-1",dark:"hover:bg-transparent-light-1 focus:bg-transparent-light-2"},quaternary:{light:"hover:bg-transparent-dark-1 focus:bg-transparent-dark-2",dark:""}},iconColor:{primary:{light:"text-white",dark:"text-gray-8"},secondary:{light:"text-gray-7",dark:"text-white"},tertiary:{light:"text-black",dark:"text-white"},quaternary:{light:"text-gray-6",dark:""}}};return a("button",{className:g("flex items-center justify-center transition-all duration-200 disabled:opacity-[0.4]",o==="square"&&r!=="sm"&&"rounded-lg",o==="square"&&r==="sm"&&"rounded-md",o==="circle"&&"rounded-full",n[r],i.background[s][e]),...d,children:a(p,{className:`${t} ${i.iconColor[s][e]} ${b[r]}`})})};k.displayName="IconButton";export{y as A,C as B,p as I,k as a,g as c};
//# sourceMappingURL=IconButton-327457c9.js.map
