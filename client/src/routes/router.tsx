import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PollDetailsPage from "../pages/PollDetailsPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/polls/:id", element: <PollDetailsPage /> },
    ],
  },
]);

export default router;
