import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Background from "./components/home/Background/Background";
import { store } from "./redux/store";
import { routes } from "./lib/routes";
import { PathStrings } from "./lib/urls";
import Loading from "./components/shared/Loading";
import "./index.css";
import theme from "./theme/theme";

const App: React.FC = () => (
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <BrowserRouter>
          <CssBaseline />
          <Background>
            <Routes>
              {routes.map(route => (
                <Route
                  key={route.path}
                  path={route.path as unknown as string}
                  element={
                    // <React.Suspense fallback={<Loading />}>
                    <route.element />
                    // </React.Suspense>
                  }
                />
              ))}
              <Route
                path="*"
                element={
                  // <React.Suspense fallback={<Loading />}>
                  <Navigate to={PathStrings.AUTH as unknown as string} />
                  // </React.Suspense>
                }
              />
            </Routes>
          </Background>
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

export default App;
