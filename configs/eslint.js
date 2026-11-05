import js from "@eslint/js";
import prettier from "eslint-config-prettier/flat";
import checkFile from "eslint-plugin-check-file";
import { importX } from "eslint-plugin-import-x";
import tseslint from "typescript-eslint";

const TYPESCRIPT_FILES = ["**/*.{ts,tsx}"];

export default [
  js.configs.recommended,

  prettier,

  ...tseslint.configs.recommendedTypeChecked.map((config) => ({
    ...config,
    files: TYPESCRIPT_FILES,
  })),

  {
    files: TYPESCRIPT_FILES,
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    rules: {
      "@typescript-eslint/no-use-before-define": [
        "error",
        { functions: true, classes: true, variables: true },
      ],
    },
  },

  {
    plugins: {
      "check-file": checkFile,
      "import-x": importX,
    },
    settings: {
      "import-x/parsers": { "@typescript-eslint/parser": [".ts", ".tsx"] },
    },
    rules: {
      curly: ["error", "all"],
      "no-nested-ternary": "error",
      "import-x/no-cycle": "error",
      "check-file/filename-naming-convention": [
        "error",
        { "**/*.{ts,tsx,js,mjs}": "KEBAB_CASE" },
        { ignoreMiddleExtensions: true },
      ],
      "check-file/folder-naming-convention": ["error", { "**/": "KEBAB_CASE" }],
    },
  },
];
