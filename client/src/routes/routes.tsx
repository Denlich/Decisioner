import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PollDetails from "../pages/PollDetailPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/polls/:id", element: <PollDetails /> },
    ],
  },
]);

export default router;
