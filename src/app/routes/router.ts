import { createBrowserRouter } from "react-router-dom";
import { HomePage, LoginPage, CarsPage } from "../../pages";
import LayoutPage from "../../pages/Layout";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/",
    Component: LayoutPage,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      { path: "cars", Component: CarsPage },
    ],
  },
]);
