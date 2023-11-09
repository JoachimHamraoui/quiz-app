import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';

function Profile() {

  
  useEffect(() => {

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
          <Link className='w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5 text-center' to="/quizmaster" >
                  Quizmaster
            </Link>
            <Link className='w-full px-5 py-3 bg-green text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5 text-center' to="/player" >
                  Play
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Profile;
