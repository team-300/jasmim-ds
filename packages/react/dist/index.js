"use strict";
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Button: () => Button
});
module.exports = __toCommonJS(src_exports);

// src/components/base/Button.tsx
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "button",
    __spreadProps(__spreadValues({
      className: (0, import_clsx.clsx)(
        {
          "h-14 px-7": size === "lg",
          "h-12 px-5": size === "md",
          "h-10 px-4": size === "sm",
          "h-8 px-3": size === "tn",
          "w-full": fullSize,
          "bg-brand-pure hover:bg-brand-medium-1 focus:bg-brand-medium-2": variation === "primary",
          "border-[1.3px] border-transparent-dark-3 hover:bg-transparent-dark-1 focus:bg-transparent-dark-2": variation === "secondary",
          "text-brand-medium-2 hover:text-brand-dark focus:text-brand-pure disabled:text-gray-7": variation === "tertiary",
          "disabled:!opacity-100": variation === "primary" && isLoading
        },
        `flex items-center justify-center gap-2 rounded-md font-semibold transition-all duration-200 disabled:opacity-[0.4]`
      ),
      disabled: isLoading
    }, rest), {
      children: [
        leftIcon && leftIcon,
        children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children }),
        rightIcon && rightIcon
      ]
    })
  );
};
Button.displayName = "Button";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button
});