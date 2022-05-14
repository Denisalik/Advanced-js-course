import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Background from "../home/Background/Background";
import { routes } from "../../lib/routes";
import { PathStrings } from "../../lib/urls";
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
            // @ts-ignore
            path={route.path}
            element={<route.element />}
          />
        ))}
        <Route
          path="*"
          // @ts-ignore
          element={<Navigate to={PathStrings.AUTH} />}
        />
      </Routes>
    </Background>
  );
};

export default Wrapper;
