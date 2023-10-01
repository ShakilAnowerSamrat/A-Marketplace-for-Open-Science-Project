import {
      createBrowserRouter,
      RouterProvider,
    } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
  
    
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
    ]);
    
    export default router;