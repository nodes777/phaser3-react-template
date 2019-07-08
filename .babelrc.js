const presets = [
  [
    "@babel/env",
    {
      targets: {
        browsers: [">0.25%", "not ie 11", "not op_mini all"],
        node: "current"
      },
      modules: false
    }
  ],
  "@babel/preset-react"
];
const plugins = [
  "@babel/plugin-proposal-class-properties",
  "@babel/plugin-transform-modules-commonjs"
];

module.exports = { presets, plugins };
