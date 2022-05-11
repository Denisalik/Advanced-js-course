import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import theme from "../src/theme/theme";
import { store } from "../src/redux/store";

export const renderProviders = (children: React.ReactNode) => (
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <CssBaseline />
        {children}
      </BrowserRouter>
    </Provider>
  </ThemeProvider>
);
