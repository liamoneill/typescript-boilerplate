module.exports = {
  root: true,
  env: {
    node: true,
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "local", args: "none", varsIgnorePattern: "^_" },
    ],
  },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
};
