import React from "react";
import App from "../App";

import { createBrowserRouter } from "react-router-dom";
import Player from "../components/Player";
import Quizmaster from "../components/Quizmaster";
import Quiz from "../components/Quiz"
import CreateQuestions from "../components/CreateQuestions"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/player",
    element: <Player />,
  },
  {
    path: "/player/quiz/:category",
    element: <Quiz />,
  },
  {
    path: "/quizmaster",
    element: <Quizmaster />,
  },
  {
    path: "/quizmaster/:category",
    element: <CreateQuestions />,
  }
]);

export default router;
