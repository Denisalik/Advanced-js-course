import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Background from "../home/Background/Background";
import { routes } from "../../lib/routes";
import { PathStrings } from "../../lib/urls";
import Loading from "../shared/Loading";
import { useAppActions } from "../../lib/hooks";

const Wrapper: React.FC = () => {
  const { saveToken } = useAppActions();
  React.useEffect(() => {
    const token = localStorage.getItem("token");
    const exp = localStorage.getItem("exp");
    if (token && exp && new Date(exp) > new Date()) saveToken(token);
    if (exp && new Date(exp) <= new Date()) {
      localStorage.removeItem("token");
      localStorage.removeItem("exp");
    }
  }, []);
  return (
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
  );
};

export default Wrapper;
