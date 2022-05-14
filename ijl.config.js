const ESLintPlugin = require("eslint-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const pkg = require("./package");

module.exports = {
  apiPath: "stubs/api",
  webpackConfig: {
    mode: "development",
    plugins: [
      new Dotenv(),
      new ESLintPlugin({
        extensions: ["ts", "tsx"],
        failOnError: true,
        failOnWarning: false,
      }),
    ],
    output: {
      publicPath: `/static/${pkg.name}/${process.env.VERSION || pkg.version}/`,
    },
  },
  navigations: {
    "LichessEngine.main": "/LichessEngine/home",
    "LichessEngine.auth": "/LichessEngine/auth",
    "LichessEngine.settings": "/LichessEngine/settings",
  },
  features: {
    "LichessEngine.main": {
      // add your features here in the format [featureName]: { value: string }
    },
  },
  config: {
    "LichessEngine.backendurl": "http://pongme-backend.herokuapp.com",
    "LichessEngine.backendport": "8080",
  },
};
