import { useEffect, useState } from "react";
import io from "socket.io-client";
import '../App.css';

const Quizmaster = () => {

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
            <h1 className="text-white font-display text-3xl">Quizmaster</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizmaster;
