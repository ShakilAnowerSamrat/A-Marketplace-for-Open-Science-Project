import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import { SidebarWithLogo } from "../components/Dashboard/SidebarWithLogo";
import BarChartComponent from "../components/Dashboard/BarchartComponent";
import SignUp from "../components/Dashboard/SingUp";
import Login from "../components/Dashboard/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element:<SidebarWithLogo/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/dashboard/home",
        element: <div>Dashboard Home</div>,
      },
      {
        path: "/dashboard/barchart",
        element: <BarChartComponent/>,
      },
      {
        path: "/dashboard/login",
        element: <Login/>,
      },
      {
        path: "/dashboard/registration",
        element: <SignUp/>,
      },
    ],
  }
]);

export default router;
