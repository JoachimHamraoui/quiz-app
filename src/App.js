import './App.css';
import io from "socket.io-client";
import { useEffect, useState} from "react";
import ChooseProfile from "./components/Profile"

const socket = io.connect("http://localhost:3001");

function App() {

  return (
       <div className="App">
          <ChooseProfile />
        </div>
  );
}


export default App;
