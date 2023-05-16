import { Navigate, createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PollDetailsPage from "../pages/PollDetailsPage";
import Layout from "../components/Layout";
import PrivateRoutes from "./PrivateRoutes";
import LoginPage from "../pages/AuthPages/LoginPage";
import RegistrationPage from "../pages/AuthPages/RegistrationPage";
import PollCreate from "../pages/PollCreate";

const router = createBrowserRouter([
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          { path: "/", element: <HomePage /> },
          { path: "/polls/:id", element: <PollDetailsPage /> },
          { path: "/polls/create", element: <PollCreate /> },
        ],
      },
    ],
  },
  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
