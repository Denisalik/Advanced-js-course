import React from "react";

enum PathStrings {
  HOME = "/",
  AUTH = "/auth",
}

interface Home {
  path: PathStrings.HOME;
}

interface Auth {
  path: PathStrings.AUTH;
}

type Path = (Home | Auth) & { name: string };

export const paths: Path[] = [
  {
    path: PathStrings.HOME,
    name: "Home",
  },
  {
    path: PathStrings.AUTH,
    name: "Auth",
  },
];

const AuthComponent = React.lazy(() => import("../components/auth/Auth"));
const HomeComponent = React.lazy(() => import("../components/game/Home"));
export const routes = [
  {
    path: PathStrings.HOME,
    element: HomeComponent,
  },
  {
    path: PathStrings.AUTH,
    element: AuthComponent,
  },
];
