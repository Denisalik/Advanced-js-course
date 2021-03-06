import React from "react";
import ReactDom from "react-dom";

import App from "./app";

export default () => <App />;
// @ts-ignore
export const mount = Component => {
  ReactDom.render(<Component />, document.getElementById("app"));

  if (module.hot) {
    module.hot.accept("./app", () => {
      ReactDom.render(<App />, document.getElementById("app"));
    });
  }
};

export const unmount = () => {
  // @ts-ignore
  ReactDom.unmountComponentAtNode(document.getElementById("app"));
};
