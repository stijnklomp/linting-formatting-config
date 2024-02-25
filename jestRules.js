module.exports = {
  overrides: [
    {
      files: ["**/*test.[jt]s?(x)"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      rules: {
        "jest/prefer-expect-assertions": "off",
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "warn",
        "jest/no-identical-title": "warn",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "warn",
      },
    },
  ],
};
