module.exports = {
  extends: ["react-app", "react-app/jest", "prettier"],
  plugins: ["prettier", "simple-import-sort", "unused-imports"],
  rules: {
    "prettier/prettier": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",
  },
};
