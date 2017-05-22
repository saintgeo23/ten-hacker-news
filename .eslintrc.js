module.exports = {
  extends: "airbnb-base",

  rules: {
    "no-console": "off",
    "no-shadow": "off",
    "no-param-reassign": "off",
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreUrls: true
      },
    ]
  },

  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
    },
  },

  globals: {
    window: true,
    Image: true,
  },

  plugins: [
    "html"
  ]
};
