const { Linter } = require("eslint");
const { ERROR, OFF, WARN } = require("./shared/values");

/** @type {Linter.Config} */
const config = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:diff/diff",
    "plugin:jsonc/base",
    "plugin:import/typescript",
    "plugin:import/recommended",
    "plugin:sonarjs/recommended",
    "plugin:optimize-regex/recommended",
    "eslint:recommended",
    "plugin:qwik/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2021,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [
    "this",
    "woke",
    "import",
    "autofix",
    "sonarjs",
    "no-loops",
    "no-secrets",
    "json-format",
    "optimize-regex",
    "simple-import-sort",
    "@typescript-eslint",
    "write-good-comments",
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": OFF,
    "@typescript-eslint/explicit-module-boundary-types": OFF,
    "@typescript-eslint/no-inferrable-types": OFF,
    "@typescript-eslint/no-non-null-assertion": OFF,
    "@typescript-eslint/no-empty-interface": OFF,
    "@typescript-eslint/no-namespace": OFF,
    "@typescript-eslint/no-empty-function": OFF,
    "@typescript-eslint/no-this-alias": OFF,
    "@typescript-eslint/ban-types": OFF,
    "@typescript-eslint/ban-ts-comment": OFF,
    "prefer-spread": OFF,
    "no-case-declarations": OFF,
    "no-console": OFF,
    "qwik/valid-lexical-scope": OFF,
    "@typescript-eslint/no-unused-vars": [ERROR],
    "@typescript-eslint/consistent-type-imports": WARN,
    "import/no-unresolved": [
      ERROR,
      { ignore: ["@qwik-city-plan", "@qwik-client-manifest"] },
    ],

    // ----
    "no-secrets/no-secrets": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
    },
  },
}

module.exports = config;