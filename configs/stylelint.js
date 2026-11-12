const COLOR_PROPERTIES = ["/^(?!--).*color$/", "background", "fill", "stroke"];

const SPACING_PROPERTIES = ["font-size", "/^margin/", "/^padding/", "/^(?!--).*gap$/"];

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

const MAX_NESTING = 6;

function parenthesized(depth) {
  const inner = depth > 1 ? `[^()]|${parenthesized(depth - 1)}` : "[^()]";

  return String.raw`\((?:${inner})*\)`;
}

const PARENTHESIZED = parenthesized(MAX_NESTING);

const TOKEN = String.raw`-?var(?=\(\s*--)${PARENTHESIZED}`;

const FUNCTION = String.raw`(?!-?var\()[\w-]+${PARENTHESIZED}`;

const KEYWORD = KEYWORDS_ALLOWED_WITHOUT_TOKENS.join("|");

function allowOnly(properties, parts) {
  const part = `(?:${parts.join("|")})`;
  const value = new RegExp(String.raw`^${part}(?:\s+${part})*$`);

  return Object.fromEntries(properties.map((property) => [property, [value]]));
}

export default {
  extends: ["stylelint-config-recommended"],
  rules: {
    "declaration-property-unit-allowed-list": {
      "font-size": ["rem"],
      "line-height": [],
    },
    "rule-selector-property-disallowed-list": {
      html: ["font-size"],
      ":root": ["font-size"],
    },
    "declaration-property-value-allowed-list": [
      {
        ...allowOnly(COLOR_PROPERTIES, [TOKEN, KEYWORD]),
        ...allowOnly(SPACING_PROPERTIES, [TOKEN, FUNCTION, KEYWORD]),
      },
      {
        message: (property, value) => `Expected a design token for "${property}", not "${value}"`,
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
    "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global"] }],
  },
};
