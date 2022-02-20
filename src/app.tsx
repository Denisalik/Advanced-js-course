import { Box } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";

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
          {/* <Routes>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} element={(
                            <Suspense fallback={<Loading/>}>
                                <route.element/>
                            </Suspense>
                        )}/>
                    ))}

                    <Route path="*" element={(
                        <Suspense fallback={<Loading/>}>
                            Home is first element in paths array
                            <Navigate to={paths[0].path}/>
                        </Suspense>
                    )}/>
                </Routes> */}
        </Box>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

export default App;
