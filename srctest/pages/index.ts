import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const LoginPage = lazy(() => import("./LoginPage"));
const SinglePage = lazy(() => import("./SinglePacient"));

export { HomePage, LoginPage, SinglePage };
