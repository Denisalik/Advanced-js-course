import React from "react";
import Auth from "../components/auth/Auth";
import Home from "../components/home/Home";
import Modal from "../components/home/Modal";
import { PathStrings } from "./urls";

// const AuthComponent = React.lazy(() => import("../components/auth/Auth"));
// const HomeComponent = React.lazy(() => import("../components/game/Home"));

export const routes = [
  {
    path: PathStrings.AUTH,
    element: Auth,
  },
  {
    path: PathStrings.HOME,
    element: Home,
  },
  {
    path: PathStrings.SETTINGS,
    element: Modal,
  },
];
