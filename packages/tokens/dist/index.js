"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  colors: () => colors,
  fontSizes: () => fontSizes
});
module.exports = __toCommonJS(src_exports);

// src/colors.ts
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

// src/font-sizes.ts
var fontSizes = {
  "display-1": [
    "5.5rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "display-2": [
    "4.5rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "display-3": [
    "3.5rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "heading-1": [
    "3rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "heading-2": [
    "2.5rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "heading-3": [
    "2rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "title-medium": [
    "1.625rem",
    {
      lineHeight: "150%",
      fontWeight: 500,
      letterSpacing: 0
    }
  ],
  "title-semibold": [
    "1.625rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "subtitle-regular": [
    "1.375rem",
    {
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: 0
    }
  ],
  "subtitle-medium": [
    "1.375rem",
    {
      lineHeight: "150%",
      fontWeight: 500,
      letterSpacing: 0
    }
  ],
  "subtitle-semibold": [
    "1.375rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "body-1-regular": [
    "1.125rem",
    {
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: 0
    }
  ],
  "body-1-medium": [
    "1.125rem",
    {
      lineHeight: "150%",
      fontWeight: 500,
      letterSpacing: 0
    }
  ],
  "body-1-semibold": [
    "1.125rem",
    {
      lineHeight: "130%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "body-2-regular": [
    "1rem",
    {
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: 0
    }
  ],
  "body-2-medium": [
    "1rem",
    {
      lineHeight: "150%",
      fontWeight: 500,
      letterSpacing: 0
    }
  ],
  "body-2-semibold": [
    "1rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "body-3-regular": [
    "0.875rem",
    {
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: 0
    }
  ],
  "body-3-medium": [
    "0.875rem",
    {
      lineHeight: "150%",
      fontWeight: 500,
      letterSpacing: 0
    }
  ],
  "body-3-semibold": [
    "0.875rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ],
  "small-regular": [
    "0.75rem",
    {
      lineHeight: "150%",
      fontWeight: 400,
      letterSpacing: 0
    }
  ],
  "small-medium": [
    "0.75rem",
    {
      lineHeight: "150%",
      fontWeight: 500,
      letterSpacing: 0
    }
  ],
  "small-semibold": [
    "0.75rem",
    {
      lineHeight: "150%",
      fontWeight: 600,
      letterSpacing: 0
    }
  ]
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  fontSizes
});
