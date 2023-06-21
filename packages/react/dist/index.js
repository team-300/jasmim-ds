"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  AvatarProfile: () => AvatarProfile,
  Button: () => Button,
  Icon: () => Icon,
  IconButton: () => IconButton,
  Loading: () => Loading,
  NavButton: () => NavButton,
  StepperBar: () => StepperBar,
  ToggleSwitch: () => ToggleSwitch
});
module.exports = __toCommonJS(src_exports);

// src/components/base/AvatarProfile.tsx
var import_clsx = __toESM(require("clsx"));

// src/assets/placeholder.svg
var placeholder_default = "./placeholder-YWHXFBM2.svg";

// src/components/base/AvatarProfile.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var AvatarProfile = ({
  size = "sm",
  avatarName,
  avatarUrl = placeholder_default
}) => {
  const handleImageError = (event) => {
    const target = event.target;
    target.src = placeholder_default;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "img",
    {
      src: avatarUrl,
      className: (0, import_clsx.default)(
        "rounded-full border-gray-3",
        size === "sm" && "h-11 w-11 border",
        size === "lg" && "h-36 w-36 border-[2.91px]"
      ),
      alt: avatarName || "Avatar",
      onError: handleImageError
    }
  );
};
AvatarProfile.displayName = "AvatarProfile";

// src/components/base/Button.tsx
var import_clsx2 = require("clsx");

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
var import_jsx_runtime2 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
    "svg",
    {
      width: "28",
      height: "28",
      viewBox: "0 0 28 28",
      className: `animate-spin ${className}`,
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "path",
          {
            d: "M-6.8343e-07 14C-7.4779e-09 6.26801 6.26801 -3.80722e-06 14 -3.13127e-06C21.732 -2.45532e-06 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 -1.35938e-06 21.732 -6.8343e-07 14ZM25.2 14C25.2 7.81441 20.1856 2.8 14 2.8C7.81441 2.8 2.8 7.81441 2.8 14C2.8 20.1856 7.81441 25.2 14 25.2C20.1856 25.2 25.2 20.1856 25.2 14Z",
            fill: colors2.eliseColors[elipseColor]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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

// src/components/base/Icon.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Icon = (_a) => {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("i", __spreadValues({ className }, rest));
};
Icon.displayName = "Icon";

// src/components/base/Button.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "button",
    __spreadProps(__spreadValues({
      className: (0, import_clsx2.clsx)(
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
        leftIcon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { className: `icon-${leftIcon} ${iconSizes[size]}` }),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          Loading,
          {
            className: loadingSizes[size],
            spinColor: variation === "primary" ? "black" : "green",
            elipseColor: variation === "primary" ? "success" : "gray"
          }
        ),
        children && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { children }),
        rightIcon && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Icon, { className: `icon-${rightIcon} ${iconSizes[size]}` })
      ]
    })
  );
};
Button.displayName = "Button";

// src/components/base/IconButton.tsx
var import_clsx3 = require("clsx");
var import_jsx_runtime5 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    "button",
    __spreadProps(__spreadValues({
      className: (0, import_clsx3.clsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
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
var import_clsx4 = __toESM(require("clsx"));
var import_jsx_runtime6 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    "button",
    __spreadValues({
      type: "button",
      className: (0, import_clsx4.default)("group flex items-center transition-all duration-300", {
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
    }, rest)
  );
};

// src/components/base/StepperBar.tsx
var import_react = require("react");
var import_clsx5 = __toESM(require("clsx"));
var import_jsx_runtime7 = require("react/jsx-runtime");
var StepperBar = ({
  steps,
  currentStep = 1
}) => {
  const [currentStepBar, setCurrentStepBar] = (0, import_react.useState)(currentStep);
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("ul", { className: "flex items-center gap-3", children: steps.map((step, index) => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "li",
    {
      className: (0, import_clsx5.default)("flex cursor-pointer items-center gap-3", {
        "text-brand-medium-2": currentStepBar > index + 1
      }),
      onClick: () => setCurrentStepBar(index + 1),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "span",
          {
            className: (0, import_clsx5.default)(
              "flex h-6 w-6 items-center justify-center rounded-full border border-gray-5 font-work-sans text-body-2-semibold text-gray-5",
              {
                "border-none bg-brand-pure": currentStepBar > index + 1,
                "border !border-brand-medium-2 !text-brand-medium-2": currentStepBar === index + 1
              }
            ),
            children: currentStepBar > index + 1 ? (
              // <IconBase icon="check" className="text-white" size={24} />
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", {})
            ) : index + 1
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "span",
          {
            className: (0, import_clsx5.default)("font-work-sans text-body-2-medium text-gray-5", {
              "!text-brand-medium-2": currentStepBar >= index + 1
            }),
            children: step.title
          }
        ),
        index < steps.length - 1 && // <IconBase
        //   icon="chev-r"
        //   className={clsx('text-gray-5', {
        //     '!text-brand-medium-2': currentStepBar > index + 1,
        //   })}
        //   size={16}
        // />
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("i", {})
      ]
    },
    index + 1
  )) });
};

// src/components/base/ToggleSwitch.tsx
var import_clsx6 = __toESM(require("clsx"));
var import_react2 = require("react");
var import_jsx_runtime8 = require("react/jsx-runtime");
var ToggleSwitch = ({
  label,
  labelDir = "left",
  description,
  disabled = false
}) => {
  const [isOn, setIsOn] = (0, import_react2.useState)(false);
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(
    "div",
    {
      className: (0, import_clsx6.default)(
        "flex cursor-pointer items-center gap-3",
        labelDir === "left" && "justify-between"
      ),
      onClick: () => !disabled && setIsOn(!isOn),
      children: [
        labelDir === "left" && /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "p",
            {
              className: (0, import_clsx6.default)(
                "text-body-2-regular",
                !disabled ? "text-gray-8" : "text-gray-5"
              ),
              children: label
            }
          ),
          description && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "p",
            {
              className: (0, import_clsx6.default)(
                "font-nunito-sans text-body-3-regular",
                !disabled ? "text-gray-6" : "text-gray-5"
              ),
              children: description
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "div",
          {
            className: (0, import_clsx6.default)(
              "flex h-6 w-[42px] cursor-pointer items-center rounded-full px-[3px] transition duration-300",
              isOn && "justify-end bg-brand-medium-2",
              !disabled ? "bg-gray-4" : "bg-gray-3"
            ),
            children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "h-[18px] w-[18px] rounded-full bg-white" })
          }
        ),
        labelDir === "right" && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "p",
          {
            className: (0, import_clsx6.default)(
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AvatarProfile,
  Button,
  Icon,
  IconButton,
  Loading,
  NavButton,
  StepperBar,
  ToggleSwitch
});
