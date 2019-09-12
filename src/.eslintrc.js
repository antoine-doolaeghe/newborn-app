module.exports = {
  extends: ["eslint-config-airbnb", "eslint-config-prettier"],
  plugins: ["react", "jsx-a11y", "jest"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    "jest/globals": true
  },
  rules: {
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "react/destructuring-assignment": 0,
    "react/jsx-filename-extension": 0,
    "react/forbid-prop-types": 0,
    "react/require-default-props": 1,
    "react/prop-types": 1,
    "react/jsx-one-expression-per-line": 0,
    "react/jsx-indent": 0,
    "react/jsx-wrap-multilines": [
      "error",
      { declaration: false, assignment: false }
    ],
    "react/sort-comp": 0,
    "react/no-access-state-in-setstate": 1,
    "react/no-array-index-key": "warn",
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "warn",
    "jest/no-identical-title": "warn",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
    "jsx-a11y/interactive-supports-focus": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-static-element-interactions": "warn",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/click-events-have-key-events": "warn",
    "jsx-a11y/no-noninteractive-element-interactions": "warn",
    "prefer-destructuring": [
      "error",
      {
        array: false,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ],
    "class-methods-use-this": "warn",
    "no-prototype-builtins": 0,
    "no-plusplus": 0,
    "no-nested-ternary": 0,
    "func-names": 0,
    "no-shadow": 0,
    "no-restricted-globals": 0,
    camelcase: 0,
    radix: 0,
    "no-param-reassign": "warn",
    eqeqeq: "warn",
    "consistent-return": "warn",
    "no-lonely-if": "warn"
  },
  settings: {
    "import/resolver": {
      alias: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  }
};
