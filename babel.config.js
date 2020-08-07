// babel.config.js
module.exports = {
  presets: [
    "@babel/preset-env",
    "@babel/preset-react"
  ],
  plugins: [
    "lodash",
    "babel-plugin-styled-components",
    [
      "@babel/plugin-proposal-class-properties",
      {
        loose: true
      }
    ]
  ],
  comments: false,
  sourceMaps: "inline",
  env: {
    build: {
      ignore: [
        "**/*.(test|spec).(t|j)sx?",
        "**/*.story.(t|j)sx",
        "__snapshots__",
        "__tests__",
        "__stories__"
      ]
    }
  },
  ignore: ["node_modules"]
};
