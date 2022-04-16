import { CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import "./index.css";
import theme from "./theme/theme";
import Wrapper from "./components/wrapper/Wrapper";

const App: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <Wrapper />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
