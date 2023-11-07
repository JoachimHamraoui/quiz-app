import React from "react";
import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import Room from "../components/Room";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/room/:id",
    element: <Room />,
  }
]);

export default router;
