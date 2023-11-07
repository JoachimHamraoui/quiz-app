import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import io from "socket.io-client";
import '../App.css';

function Room() {

  const socket = io.connect(`http://localhost:3001`);
  // Room State
  const { room } = useParams();
  const [usersInRoom, setUsersInRoom] = useState([]);

  // const {roomId} = useParams();

  // User State
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {


    socket.on("users_in_room", (users) => {
      setUsersInRoom(users);
    });


  }, []);

  return (
    <div className="App">
      <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className='w-2/6 p-4'>
          <div className='flex justify-center'>
            <h1 className='font-display text-8xl'>
              <span className='text-red'>K</span>
              <span className='text-yellow'>a</span>
              <span className='text-blue'>p</span>
              <span className='text-green'>ü</span>
              <span className='text-red'>t.</span>
            </h1>
          </div>
          <div className='w-full flex flex-col items-center mt-14'>
          <h1 className='text-white'>Users in Room:</h1>
      <ul>
        {usersInRoom.map((user, index) => (
          <li key={index} className='text-white'>{user}</li>
        ))}
      </ul>
      <h1 className='text-white mt-10'>{room}</h1>
        </div>
      </div>
    </div>
    </div>
  );
}


export default Room;
