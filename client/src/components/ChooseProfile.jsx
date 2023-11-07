import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import io from "socket.io-client";
import '../App.css';

const socket = io.connect("http://localhost:3001");

const generateRoomCode = () => {
  const length = 12;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return result;
}

function Profile() {
  // Room State
  const [room, setRoom] = useState("");
  const [usersInRoom, setUsersInRoom] = useState([]);

  // Generate a random code for the room
  const randomCode = generateRoomCode();

  // User State
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");

  const createRoom = () => {
    if (room !== "") {
      socket.emit("create_room", { room, username, role });
    }
  };

  useEffect(() => {

    setRoom(randomCode);

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
            <div className='w-full flex flex-col mb-8'>
              <label htmlFor="username" className='font-mont text-white text-lg mb-2'>Username</label>
              <input type="text" className='w-full px-5 py-2 bg-blue text-white text-lg font-mont rounded-2xl focus:outline-none' name='username' id='username' onChange={(event) => {
                setUsername(event.target.value);
              }} />
            </div>
            <div className='w-full flex flex-col mb-8'>
              <label htmlFor="role" className='font-mont text-white text-lg mb-2'>Role</label>
              <select className='block appearance-none w-full px-5 py-2 bg-green text-white text-lg font-mont rounded-2xl focus:outline-none focus:shadow-outline' name='role' id='role' onChange={(event) => {
                setRole(event.target.value);
              }} >
                <option value="player">Player</option>
                <option value="quizmaster">Quizmaster</option>
              </select>
            </div>
            <Link className='w-full px-5 py-3 bg-red text-white text-lg font-mont rounded-2xl focus:outline-none focus:shadow-outline' to={{
                pathname: `/room/${room}`,
                state: { room: room }
              }}>
              <button className='' onClick={createRoom}>Create Room</button>
            </Link>
          </div>
          {/* <h1 className='text-5xl text-white font-display'>{randomCode}</h1> */}
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
  );
}


export default Profile;
