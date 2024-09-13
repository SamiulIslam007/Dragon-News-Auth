import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/LoginPage/Login";
import Register from "../pages/RegisterPage/Register";
import SampleToast from "../shared/sampleToast/SampleToast.jsx";
import NewsDetails from "../pages/NewsDetails/NewsDetails.jsx";
import PrivateRoutes from "./PrivateRoutes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/news.json"),
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <NewsDetails />
          </PrivateRoutes>
        ),
        loader: () => fetch("/news.json"),
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
