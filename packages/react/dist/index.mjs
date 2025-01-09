var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// src/components/base/AtentionButton.tsx
import { clsx } from "clsx";

// src/components/base/Icon.tsx
import { jsx } from "react/jsx-runtime";
var Icon = (_a) => {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ jsx("i", __spreadValues({ className }, rest));
};
Icon.displayName = "Icon";

// src/components/base/AtentionButton.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var AtentionButton = (_a) => {
  var _b = _a, {
    children,
    icon,
    variation = "primary",
    fullSize = false,
    title
  } = _b, rest = __objRest(_b, [
    "children",
    "icon",
    "variation",
    "fullSize",
    "title"
  ]);
  return /* @__PURE__ */ jsxs(
    "button",
    __spreadProps(__spreadValues({
      className: clsx(
        {
          "text-gray-8 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 disabled:bg-transparent-dark-1 disabled:text-gray-7": variation === "primary",
          "text-brand-medium-2 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2": variation === "secondary",
          "w-full": fullSize
        },
        `flex items-center justify-center gap-[14px] rounded-lg border-[1.3px] border-gray-3 py-4 pl-5 pr-2 font-work-sans text-body-1-medium transition-all duration-200 disabled:opacity-40`
      )
    }, rest), {
      children: [
        icon && /* @__PURE__ */ jsx2(
          Icon,
          {
            className: clsx(
              `${icon} text-[24px]`,
              variation === "primary" ? "text-gray-7" : "text-brand-medium-2"
            )
          }
        ),
        title && /* @__PURE__ */ jsx2("p", { className: "flex-1 text-left", children: title }),
        /* @__PURE__ */ jsx2(
          Icon,
          {
            className: clsx(
              "icon-chev-r text-[32px]",
              variation === "primary" ? "text-gray-5" : "text-brand-medium-2"
            )
          }
        )
      ]
    })
  );
};

// src/components/base/AvatarProfile.tsx
import { useState } from "react";
import clsx2 from "clsx";
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Placeholder() {
  return /* @__PURE__ */ jsxs2(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "100%",
      height: "100%",
      fill: "none",
      viewBox: "0 0 45 44",
      children: [
        /* @__PURE__ */ jsxs2("g", { clipPath: "url(#clip0_1_5)", children: [
          /* @__PURE__ */ jsx3("path", { fill: "#E9EBF0", d: "M0.087 0H44.087V44H0.087z" }),
          /* @__PURE__ */ jsx3(
            "path",
            {
              fill: "#fff",
              d: "M37.255 35.111a3.424 3.424 0 00-.896-.472c-2.462-.891-5.295-2.19-8.498-3.895-.93-.496-1.508-1.425-1.508-2.433v-1.8c0-.109.048-.208.113-.299.491-.697 1.031-1.176 1.47-2.23.407-.976.382-1.826.64-2.928.312.327.973-.663 1.23-2.982.087-.785-.287-1.145-.743-1.076-.07.011-.13-.043-.123-.11l.183-1.622a6.61 6.61 0 00.09-1.086c0-3.772-2.877-6.708-7.107-6.828h-.039c-3.884-.28-7.107 3.057-7.107 6.828 0 .37.031.732.09 1.085l.184 1.624c.007.066-.054.12-.124.11-.455-.07-.83.29-.743 1.075.257 2.32.919 3.309 1.23 2.982.258 1.102.243 1.886.65 2.861.44 1.055.97 1.6 1.46 2.297.065.09.113.19.113.3v1.799c0 1.008-.578 1.937-1.508 2.433-3.203 1.704-6.036 3.004-8.498 3.895-.321.116-.626.27-.896.472-.835.628-1.336 1.59-1.331 2.623L5.619 44h32.936l.032-6.266c.005-1.033-.496-1.995-1.332-2.623z",
              opacity: "0.8"
            }
          )
        ] }),
        /* @__PURE__ */ jsx3("path", { stroke: "#E9EBF0", d: "M0.587 0.5H43.587V43.5H0.587z" }),
        /* @__PURE__ */ jsx3("defs", { children: /* @__PURE__ */ jsx3("clipPath", { id: "clip0_1_5", children: /* @__PURE__ */ jsx3("path", { fill: "#fff", d: "M0.087 0H44.087V44H0.087z" }) }) })
      ]
    }
  );
}
var AvatarProfile = ({
  size = "sm",
  avatarName,
  avatarUrl
}) => {
  const [isLoaded, setIsLoaded] = useState(true);
  return isLoaded && !!avatarUrl !== false ? /* @__PURE__ */ jsx3(
    "img",
    {
      src: avatarUrl,
      className: clsx2(
        "rounded-full border-gray-3",
        size === "sm" && "h-11 w-11 border",
        size === "lg" && "h-36 w-36 border-[2.91px]"
      ),
      alt: avatarName || "Avatar",
      onError: () => setIsLoaded(false),
      onLoad: () => setIsLoaded(true)
    }
  ) : /* @__PURE__ */ jsx3(
    "div",
    {
      className: clsx2(
        "rounded-full border-gray-3 overflow-hidden",
        size === "sm" && "h-11 w-11 border",
        size === "lg" && "h-36 w-36 border-[2.91px]"
      ),
      children: /* @__PURE__ */ jsx3("div", { className: "scale-[1.1]", children: /* @__PURE__ */ jsx3(Placeholder, {}) })
    }
  );
};
AvatarProfile.displayName = "AvatarProfile";

// src/components/base/Button.tsx
import { clsx as clsx3 } from "clsx";

// ../tokens/dist/index.mjs
var colors = {
  "brand-pure": "#14D46D",
  "brand-dark": "#08803F",
  "brand-medium-2": "#12B85F",
  "brand-medium-1": "#17EB7A",
  "brand-light-2": "#B5F5D3",
  "brand-light-1": "#F1FEF7",
  black: "#0C0E0F",
  "gray-8": "#162024",
  "gray-7": "#3F4D54",
  "gray-6": "#79818A",
  "gray-5": "#A0A6AD",
  "gray-4": "#DADEE3",
  "gray-3": "#E9EBF0",
  "gray-2": "#F2F4F7",
  "gray-1": "#F9FAFB",
  white: "#FFFFFF",
  "transparent-light-3": "rgba(255, 255, 255, 0.32)",
  "transparent-light-2": "rgba(255, 255, 255, 0.14)",
  "transparent-light-1": "rgba(255, 255, 255, 0.08)",
  "transparent-dark-3": "rgba(63, 77, 84, 0.18)",
  "transparent-dark-2": "rgba(63, 77, 84, 0.12)",
  "transparent-dark-1": "rgba(63, 77, 84, 0.06)",
  "info-pure": "#1982FA",
  "info-dark": "#004BA1",
  "info-medium-2": "#005FCC",
  "info-medium-1": "#A3CEFF",
  "info-light": "#E8F2FC",
  "warning-pure": "#FFB013",
  "warning-dark": "#AB7200",
  "warning-medium-2": "#E09500",
  "warning-medium-1": "#FFDFA0",
  "warning-light": "#FAF3E6",
  "danger-pure": "#F2364C",
  "danger-dark": "#9E0517",
  "danger-medium-2": "#DD0E26",
  "danger-medium-1": "#FF929F",
  "danger-light": "#FCF0F1",
  "gray-dark": "#162024",
  "gray-medium": "#46555D",
  "gray-pure": "#828992",
  "blue-dark": "#004799",
  "blue-medium": "#005FCC",
  "blue-pure": "#0677F9",
  "green-dark": "#08803F",
  "green-medium": "#0FB95E",
  "green-pure": "#11D66D",
  "red-dark": "#940515",
  "red-medium": "#CE1C31",
  "red-pure": "#EE3A4F"
};

// src/components/base/Loading.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
var Loading = ({
  className,
  spinColor = "black",
  elipseColor = "gray"
}) => {
  const colors2 = {
    spinColors: {
      black: colors.black,
      green: colors["brand-pure"],
      white: colors.white
    },
    eliseColors: {
      gray: colors["gray-3"],
      "dark-gray": colors["gray-7"],
      success: colors["brand-light-2"]
    }
  };
  return /* @__PURE__ */ jsxs3(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      className: `animate-spin ${className}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M-6.8343e-07 14C-7.4779e-09 6.26801 6.26801 -3.80722e-06 14 -3.13127e-06C21.732 -2.45532e-06 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 -1.35938e-06 21.732 -6.8343e-07 14ZM25.2 14C25.2 7.81441 20.1856 2.8 14 2.8C7.81441 2.8 2.8 7.81441 2.8 14C2.8 20.1856 7.81441 25.2 14 25.2C20.1856 25.2 25.2 20.1856 25.2 14Z",
            fill: colors2.eliseColors[elipseColor]
          }
        ),
        /* @__PURE__ */ jsx4(
          "path",
          {
            d: "M26.6 14C27.3732 14 28.0073 13.3716 27.9301 12.6023C27.7018 10.3272 26.9188 8.13498 25.6406 6.22202C24.1022 3.91973 21.9157 2.12531 19.3576 1.06568C16.7994 0.00605676 13.9845 -0.27119 11.2687 0.269003C8.553 0.809195 6.05844 2.14256 4.10051 4.1005C2.14257 6.05844 0.8092 8.553 0.269006 11.2687C-0.271188 13.9845 0.00605872 16.7994 1.06568 19.3576C2.12531 21.9157 3.91973 24.1022 6.22201 25.6406C8.13498 26.9188 10.3272 27.7018 12.6023 27.9301C13.3716 28.0073 14 27.3732 14 26.6C14 25.8268 13.3708 25.209 12.6036 25.1126C10.8833 24.8964 9.22985 24.2828 7.77761 23.3125C5.93578 22.0818 4.50025 20.3326 3.65255 18.2861C2.80485 16.2395 2.58305 13.9876 3.0152 11.815C3.44736 9.6424 4.51406 7.64675 6.0804 6.0804C7.64675 4.51405 9.6424 3.44736 11.815 3.0152C13.9876 2.58305 16.2395 2.80484 18.2861 3.65255C20.3326 4.50025 22.0818 5.93578 23.3125 7.77761C24.2828 9.22986 24.8964 10.8833 25.1126 12.6036C25.209 13.3708 25.8268 14 26.6 14Z",
            fill: colors2.spinColors[spinColor]
          }
        )
      ]
    }
  );
};

// src/components/base/Button.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
var Button = (_a) => {
  var _b = _a, {
    children,
    size,
    leftIcon,
    rightIcon,
    fullSize,
    variation = "primary",
    isLoading = false
  } = _b, rest = __objRest(_b, [
    "children",
    "size",
    "leftIcon",
    "rightIcon",
    "fullSize",
    "variation",
    "isLoading"
  ]);
  const iconSizes = {
    lg: "text-[28px]",
    md: "text-[24px]",
    sm: "text-[16px]"
  };
  const loadingSizes = {
    lg: "w-7 h-7",
    md: "w-6 h-6",
    sm: "w-4 h-4"
  };
  return /* @__PURE__ */ jsxs4(
    "button",
    __spreadProps(__spreadValues({
      className: clsx3(
        {
          "h-14 px-7": size === "lg",
          "h-12 px-5": size === "md",
          "h-10 px-4": size === "sm",
          "w-full": fullSize,
          "bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2 text-body-1-semibold": variation === "primary",
          "border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 text-body-2-medium": variation === "secondary",
          "text-brand-medium-2 hover:text-brand-dark focus:text-brand-pure disabled:text-gray-7 text-body-2-medium": variation === "tertiary",
          "disabled:!opacity-100": variation === "primary" && isLoading
        },
        `flex items-center justify-center gap-2 rounded-md transition-all duration-200 disabled:opacity-[0.4]`
      ),
      disabled: isLoading
    }, rest), {
      children: [
        leftIcon && /* @__PURE__ */ jsx5(Icon, { className: `icon-${leftIcon} ${iconSizes[size]}` }),
        isLoading && /* @__PURE__ */ jsx5(
          Loading,
          {
            className: loadingSizes[size],
            spinColor: variation === "primary" ? "black" : "green",
            elipseColor: variation === "primary" ? "success" : "gray"
          }
        ),
        children && /* @__PURE__ */ jsx5("p", { children }),
        rightIcon && /* @__PURE__ */ jsx5(Icon, { className: `icon-${rightIcon} ${iconSizes[size]}` })
      ]
    })
  );
};
Button.displayName = "Button";

// src/components/base/Chip.tsx
import clsx4 from "clsx";
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
var Chip = (_a) => {
  var _b = _a, {
    application = "on-white",
    size = "md",
    isSelected = false,
    isClosable = false,
    title
  } = _b, rest = __objRest(_b, [
    "application",
    "size",
    "isSelected",
    "isClosable",
    "title"
  ]);
  return /* @__PURE__ */ jsxs5(
    "button",
    __spreadProps(__spreadValues({
      className: clsx4(
        "flex cursor-pointer items-center justify-center gap-[6px] rounded-full",
        {
          "border-[1.3px] border-transparent-dark-3 text-gray-8": application === "on-white",
          "border-[1.3px] border-transparent-light-3 text-white": application === "on-dark",
          "hover:bg-transparent-dark-1": !isSelected && application === "on-white",
          "hover:bg-transparent-light-3": !isSelected && application === "on-dark",
          "border-[1.5px] !border-brand-medium-2 bg-brand-light-1 !text-body-2-medium text-brand-medium-2": isSelected && application === "on-white",
          "bg-white !text-body-2-medium !text-gray-8": isSelected && application === "on-dark",
          "h-8 px-4 text-body-3-regular": size === "sm",
          "h-11 px-[18px] text-body-2-regular": size === "md",
          "!pr-3": isClosable && isSelected
        }
      )
    }, rest), {
      children: [
        title,
        isClosable && isSelected && /* @__PURE__ */ jsx6(Icon, { className: "icon-close-sm text-[24px]" })
      ]
    })
  );
};

// src/components/base/IconButton.tsx
import { clsx as clsx5 } from "clsx";
import { jsx as jsx7 } from "react/jsx-runtime";
var IconButton = (_a) => {
  var _b = _a, {
    size,
    icon,
    variation = "primary",
    mode = "light",
    appearance = "square"
  } = _b, rest = __objRest(_b, [
    "size",
    "icon",
    "variation",
    "mode",
    "appearance"
  ]);
  const buttonSizes = {
    lg: "p-2",
    md: "p-[6px]",
    sm: "p-[6px]"
  };
  const iconSizes = {
    lg: "text-[40px]",
    md: "text-[32px]",
    sm: "text-[22px]"
  };
  const variations = {
    background: {
      primary: {
        light: "bg-gray-8 hover:bg-gray-7 focus:bg-black disabled:bg-gray-8",
        dark: "bg-white hover:bg-gray-3 focus:bg-gray-5"
      },
      secondary: {
        light: "bg-white border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2 disabled:bg-transparent-dark-1",
        dark: "border-[1.3px] border-transparent-light-3 hover:bg-transparent-light-1 focus:bg-transparent-light-2"
      },
      tertiary: {
        light: (
          // TODO remover token bg-brand-medium-2
          "bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2 disabled:bg-brand-medium-1"
        ),
        dark: "hover:bg-transparent-light-1 focus:bg-transparent-light-2"
      },
      quaternary: {
        light: "hover:bg-transparent-dark-1 focus:bg-transparent-dark-2",
        dark: ""
      }
    },
    iconColor: {
      primary: {
        light: "text-white",
        dark: "text-gray-8"
      },
      secondary: {
        light: "text-gray-7",
        dark: "text-white"
      },
      tertiary: {
        light: "text-black",
        dark: "text-white"
      },
      quaternary: {
        light: "text-gray-6",
        dark: ""
      }
    }
  };
  return /* @__PURE__ */ jsx7(
    "button",
    __spreadProps(__spreadValues({
      className: clsx5(
        "flex items-center justify-center transition-all duration-200 disabled:opacity-[0.4]",
        // Appearance
        appearance === "square" && size !== "sm" && "rounded-lg",
        appearance === "square" && size === "sm" && "rounded-md",
        appearance === "circle" && "rounded-full",
        // Size
        buttonSizes[size],
        // Variatons
        variations.background[variation][mode]
      )
    }, rest), {
      children: /* @__PURE__ */ jsx7(
        Icon,
        {
          className: `${icon} ${variations.iconColor[variation][mode]} ${iconSizes[size]}`
        }
      )
    })
  );
};
IconButton.displayName = "IconButton";

// src/components/base/NavButton.tsx
import clsx6 from "clsx";
import { Fragment, jsx as jsx8, jsxs as jsxs6 } from "react/jsx-runtime";
var NavButton = (_a) => {
  var _b = _a, {
    application = "on-white",
    kind = "back-full",
    size = "md"
  } = _b, rest = __objRest(_b, [
    "application",
    "kind",
    "size"
  ]);
  return /* @__PURE__ */ jsxs6(
    "button",
    __spreadProps(__spreadValues({
      type: "button",
      className: clsx6("group flex items-center transition-all duration-300", {
        "h-10 gap-[6px] pr-4 font-medium ": kind === "back-full",
        "text-gray-5 hover:text-gray-6": kind === "back-full" && application === "on-white",
        "text-white hover:text-gray-4 focus:text-gray-5": kind === "back-full" && application === "on-dark",
        "border-gray-3 hover:border-none hover:bg-transparent-dark-1 focus:border-none focus:bg-transparent-dark-2": ["back-single", "back-arrow", "close"].includes(kind) && application === "on-white",
        "border-transparent-light-1 hover:border-none hover:bg-transparent-light-1 focus:border-none focus:bg-transparent-light-2": ["back-single", "back-arrow", "close"].includes(kind) && application === "on-dark",
        "justify-center rounded-lg border ": [
          "back-single",
          "back-arrow",
          "close"
        ].includes(kind),
        "h-10 w-10": ["back-single", "back-arrow", "close"].includes(kind) && size === "md",
        "h-8 w-8": ["back-single", "back-arrow", "close"].includes(kind) && size === "sm"
      })
    }, rest), {
      children: [
        kind === "back-full" && /* @__PURE__ */ jsxs6(Fragment, { children: [
          /* @__PURE__ */ jsx8(Icon, { className: "icon-arrow-r rotate-180 text-gray-5 transition-all duration-300 group-hover:text-gray-6 text-[20px]" }),
          "Voltar"
        ] }),
        kind === "back-arrow" && /* @__PURE__ */ jsx8(
          Icon,
          {
            className: clsx6("rotate-180 icon-arrow-r", {
              "text-gray-5": application === "on-white",
              "text-gray-6": application === "on-dark",
              "text-[28px]": size === "md",
              "text-[22.4px]": size === "sm"
            })
          }
        ),
        kind === "back-single" && /* @__PURE__ */ jsx8(
          Icon,
          {
            className: clsx6("icon-chev-l text-gray-5", {
              "text-[28px]": size === "md",
              "text-[22.4px]": size === "sm"
            })
          }
        ),
        kind === "close" && /* @__PURE__ */ jsx8(
          Icon,
          {
            className: clsx6("icon-close-md text-gray-5", {
              "text-[28px]": size === "md",
              "text-[22.4px]": size === "sm"
            })
          }
        )
      ]
    })
  );
};

// src/components/base/StatusBadge.tsx
import clsx7 from "clsx";
import { jsx as jsx9, jsxs as jsxs7 } from "react/jsx-runtime";
var StatusBadge = ({
  variation = "neutral",
  fullWidth = false,
  title
}) => {
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: clsx7(
        "flex items-center rounded-full border border-gray-2 bg-white px-4 py-[5.5px]",
        fullWidth ? "w-full" : "w-fit"
      ),
      children: [
        /* @__PURE__ */ jsx9(
          "span",
          {
            className: clsx7(
              "inline-flex h-2 w-2 rounded-full",
              variation === "success" && "bg-brand-medium-2",
              variation === "warning" && "bg-warning-pure",
              variation === "danger" && "bg-danger-pure",
              variation === "neutral" && "bg-gray-5"
            )
          }
        ),
        /* @__PURE__ */ jsx9("span", { className: "pl-2 font-work-sans text-body-3-regular text-gray-8", children: title })
      ]
    }
  );
};

// src/components/base/StepperBar.tsx
import { useState as useState2 } from "react";
import clsx8 from "clsx";
import { jsx as jsx10, jsxs as jsxs8 } from "react/jsx-runtime";
var StepperBar = ({
  steps,
  currentStep = 1
}) => {
  const [currentStepBar, setCurrentStepBar] = useState2(currentStep);
  return /* @__PURE__ */ jsx10("ul", { className: "flex items-center gap-3", children: steps.map((step, index) => /* @__PURE__ */ jsxs8(
    "li",
    {
      className: clsx8("flex cursor-pointer items-center gap-3", {
        "text-brand-medium-2": currentStepBar > index + 1
      }),
      onClick: () => setCurrentStepBar(index + 1),
      children: [
        /* @__PURE__ */ jsx10(
          "span",
          {
            className: clsx8(
              "flex h-6 w-6 items-center justify-center rounded-full border border-gray-5 font-work-sans text-body-2-semibold text-gray-5",
              {
                "border-none bg-brand-pure": currentStepBar > index + 1,
                "border !border-brand-medium-2 !text-brand-medium-2": currentStepBar === index + 1
              }
            ),
            children: currentStepBar > index + 1 ? /* @__PURE__ */ jsx10(Icon, { className: "icon-check text-white text-[24px]" }) : index + 1
          }
        ),
        /* @__PURE__ */ jsx10(
          "span",
          {
            className: clsx8("font-work-sans text-body-2-medium text-gray-5", {
              "!text-brand-medium-2": currentStepBar >= index + 1
            }),
            children: step.title
          }
        ),
        index < steps.length - 1 && /* @__PURE__ */ jsx10(
          Icon,
          {
            className: clsx8("icon-chev-r text-gray-5 text-[16px]", {
              "!text-brand-medium-2": currentStepBar > index + 1
            })
          }
        )
      ]
    },
    index + 1
  )) });
};

// src/components/base/ToggleSwitch.tsx
import clsx9 from "clsx";
import { useState as useState3 } from "react";
import { jsx as jsx11, jsxs as jsxs9 } from "react/jsx-runtime";
var ToggleSwitch = ({
  label,
  labelDir = "left",
  description,
  disabled = false
}) => {
  const [isOn, setIsOn] = useState3(false);
  return /* @__PURE__ */ jsxs9(
    "div",
    {
      className: clsx9(
        "flex cursor-pointer items-center gap-3",
        labelDir === "left" && "justify-between"
      ),
      onClick: () => !disabled && setIsOn(!isOn),
      children: [
        labelDir === "left" && /* @__PURE__ */ jsxs9("div", { children: [
          /* @__PURE__ */ jsx11(
            "p",
            {
              className: clsx9(
                "text-body-2-regular",
                !disabled ? "text-gray-8" : "text-gray-5"
              ),
              children: label
            }
          ),
          description && /* @__PURE__ */ jsx11(
            "p",
            {
              className: clsx9(
                "font-nunito-sans text-body-3-regular",
                !disabled ? "text-gray-6" : "text-gray-5"
              ),
              children: description
            }
          )
        ] }),
        /* @__PURE__ */ jsx11(
          "div",
          {
            className: clsx9(
              "flex h-6 w-[42px] cursor-pointer items-center rounded-full px-[3px] transition duration-300",
              isOn && "justify-end bg-brand-medium-2",
              !disabled ? "bg-gray-4" : "bg-gray-3"
            ),
            children: /* @__PURE__ */ jsx11("div", { className: "h-[18px] w-[18px] rounded-full bg-white" })
          }
        ),
        labelDir === "right" && /* @__PURE__ */ jsx11("div", { children: /* @__PURE__ */ jsx11(
          "p",
          {
            className: clsx9(
              "text-body-3-regular ",
              !disabled ? "text-gray-8" : "text-gray-5"
            ),
            children: label
          }
        ) })
      ]
    }
  );
};
export {
  AtentionButton,
  AvatarProfile,
  Button,
  Chip,
  Icon,
  IconButton,
  Loading,
  NavButton,
  StatusBadge,
  StepperBar,
  ToggleSwitch
};
