import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
import SampleToast from "../shared/sampleToast/SampleToast.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/sampletoast",
        element: <SampleToast />,
      },
    ],
  },
]);

export default router;
