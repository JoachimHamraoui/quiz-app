import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from "react-router-dom";
import { io } from "socket.io-client";

import router from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById('root'));
const socket = io("http://localhost:3001");
export const socketContext = createContext();
root.render(
  <socketContext.Provider value={socket}>
    <RouterProvider router={router} />
  </socketContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
