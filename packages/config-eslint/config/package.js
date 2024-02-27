const { Linter } = require("eslint");
const { ERROR } = require("./shared/values");

/** @type {Linter.Config} */
const config = {
    env: {
        browser: true,
        worker: true
    },
    ignorePatterns: [
        // modules
        "**/node_modules",
        // cache
        "**/.cache",
        "**/.eslintcache",
        // typescript config
        "**/tsconfig.json"
    ],
    parser: '@typescript-eslint/parser',
    plugins: [
        "this",
        "woke",
        "diff",
        "import",
        'autofix',
        "sonarjs",
        "no-loops",
        "no-secrets",
        "json-format",
        "optimize-regex",
        '@typescript-eslint',
        "simple-import-sort",
    ],
    extends: [
        "plugin:diff/diff",
        "plugin:jsonc/base",
        'eslint:recommended',
        "plugin:import/typescript",
        "plugin:import/recommended",
        "plugin:sonarjs/recommended",
        "plugin:optimize-regex/recommended",
        'plugin:@typescript-eslint/recommended'
    ],
    rules: {
        "woke/all": ERROR,
        "this/no-this": ERROR,
        "no-loops/no-loops": ERROR,
        "no-secrets/no-secrets": ERROR,
        "simple-import-sort/imports": ERROR,
        "simple-import-sort/exports": ERROR
    },
    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"]
        },
        "import/resolver": {
            "typescript": {
                "project": "./tsconfig.json",
            }
        }
    },
};

module.exports = config;