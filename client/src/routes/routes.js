import { BrowserRouter } from 'react-router-dom';
import App from "../App"

const router = BrowserRouter([
    {
      path: "/",
      element: <App />,
    }
    // {
    //   path: "/player/:nameQuiz",
    //   element: <Quiz />,
    // },
  ]);
  
  export default router;
  