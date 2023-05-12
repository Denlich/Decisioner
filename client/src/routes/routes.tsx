import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PollDetails from "../pages/PollDetailPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/polls/:id", element: <PollDetails /> },
]);

export default router;
