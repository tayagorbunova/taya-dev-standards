const TOKEN_ONLY_PROPERTIES = [
  "/color$/",
  "background",
  "fill",
  "stroke",
  "font-size",
  "/^margin/",
  "/^padding/",
  "/gap$/",
];

const KEYWORDS_ALLOWED_WITHOUT_TOKENS = [
  "0",
  "auto",
  "none",
  "inherit",
  "initial",
  "unset",
  "currentColor",
  "transparent",
  "Highlight",
  "HighlightText",
  "Canvas",
  "CanvasText",
  "GrayText",
];

export default {
  extends: ["stylelint-config-recommended"],
  plugins: ["stylelint-declaration-strict-value"],
  rules: {
    "declaration-property-unit-allowed-list": {
      "font-size": ["rem"],
      "line-height": [],
    },
    "rule-selector-property-disallowed-list": {
      html: ["font-size"],
      ":root": ["font-size"],
    },
    "scale-unlimited/declaration-strict-value": [
      TOKEN_ONLY_PROPERTIES,
      {
        ignoreValues: KEYWORDS_ALLOWED_WITHOUT_TOKENS,
        ignoreFunctions: { "/color$/": false, background: false, fill: false, stroke: false },
      },
    ],
    "unit-disallowed-list": ["vh"],
    "declaration-property-value-disallowed-list": {
      transition: ["/\\ball\\b/"],
      "transition-property": ["all"],
      outline: ["none", "0"],
    },
    "property-disallowed-list": ["will-change"],
    "declaration-no-important": true,
  },
};
