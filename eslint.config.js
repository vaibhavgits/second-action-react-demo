import js from "@eslint/js";
import globals from "globals";

export default [
  js.configs.recommended, // Applies standard rules to your JS/JSX files
  {
    // This tells ESLint exactly which file extensions to look for inside your folders
    files: ["**/*.{js,jsx}"], 
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
    },
  },
];
