import js from "@eslint/js";
import globals from "globals";
import reactPlugin from "eslint-plugin-react";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    plugins: {
      react: reactPlugin,
    },
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // This explicitly allows the "<" token (JSX syntax)
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // This tells ESLint you are using React 17+ (where importing 'React' at the top isn't required)
      "react/react-in-jsx-scope": "off", 
    },
  },
];
