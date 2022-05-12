module.exports = {
  getConfig() {
    // eslint-disable-next-line global-require
    return require("./ijl.config").config;
  },
  getNavigations() {
    // eslint-disable-next-line global-require
    return require("./ijl.config").navigations;
  },
};
