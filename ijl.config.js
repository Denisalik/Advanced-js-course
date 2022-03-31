const ESLintPlugin = require("eslint-webpack-plugin");
const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    mode: "development",
    plugins: [
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
        failOnError: true,
        failOnWarning: true,
      }),
    ],
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  navigations: {
    "lichessengine.main": "/lichessengine/",
    "lichessengine.auth": "/lichessengine/auth",
  },
  // features: {
  //   "lichessengine.main": {
  //     // add your features here in the format [featureName]: { value: string }
  //   },
  // },
  // config: {
  //   key: "value",
  // },
};
