module.exports = {
  overrides: [
    {
      files: ["**/*.{jsx,tsx}"],
      extends: ["plugin:react/recommended", "plugin:react-hooks/recommended"],
      parserOptions: {
        project: "./tsconfig.json",
      },
      rules: {
        "react/display-name": "off",
      },
    },
  ],
};
