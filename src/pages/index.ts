import { lazy } from "react";

const HomePage = lazy(() => import("./HomePage"));
const LoginPage = lazy(() => import("./LoginPage"));
const CarsPage = lazy(() => import("./CarsPage"));

export { HomePage, LoginPage, CarsPage };
