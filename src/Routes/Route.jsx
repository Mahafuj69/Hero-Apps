import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import MainLayout from "../Layouts/MainLayout";
import Error404 from "../Errors/Error404";
import Installation from "../Pages/Installation";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement:<Error404></Error404>,
    children:[
       {
    index:true,
    element: <Home />,
  },
  {
    path: "/Apps",
    element: <Apps />,
  },
  {
    path: "/Installation",
    element: <Installation />,
  },
    ]
  },
 
]);

export default router