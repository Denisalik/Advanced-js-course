import React from "react";
import Auth from "../components/auth/Auth";
import Home from "../components/home/Home";
import { PathStrings } from "./urls";

// const AuthComponent = React.lazy(() => import("../components/auth/Auth"));
// const HomeComponent = React.lazy(() => import("../components/game/Home"));

const AuthComponent = Auth;
const HomeComponent = Home;

export const routes = [
  {
    path: PathStrings.AUTH,
    element: AuthComponent,
  },
  {
    path: PathStrings.HOME,
    element: HomeComponent,
  },
];
