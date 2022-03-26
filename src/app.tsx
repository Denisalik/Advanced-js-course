import { Box } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { store } from "./redux/store";
import { paths, routes } from "./lib/routes";
import Loading from "./components/shared/Loading";

const App: React.FC = () => (
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#F5F5DC",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Routes>
            {routes.map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <React.Suspense fallback={<Loading />}>
                    <route.element />
                  </React.Suspense>
                }
              />
            ))}
            <Route
              path="*"
              element={
                <React.Suspense fallback={<Loading />}>
                  Home is first element in paths array
                  <Navigate to={paths[0].path} />
                </React.Suspense>
              }
            />
          </Routes>
        </Box>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export default App;
