import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../App.css';
import { db } from '../firebase-config';

const Player = () => {

  const [questions, setQuestions] = useState([]);

  const questionsCollectionRef = collection(db, 'quizzes');
  useEffect(() => {

    const getQuestions = async () => {
      const data = await getDocs(questionsCollectionRef);
      setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    console.log(questions)

    getQuestions();

  }, [])

  return (
    <div className="App">
      <Link to='/' className="w-full fixed flex justify-center mt-8">
            <h1 className='font-display text-4xl'>
              <span className='text-red'>K</span>
              <span className='text-yellow'>a</span>
              <span className='text-blue'>p</span>
              <span className='text-green'>ü</span>
              <span className='text-red'>t.</span>
            </h1>
        </Link>
      <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className='p-4 sm:w-11/12 md:w-2/6'>
          <div className='w-full flex flex-col items-center mt-14'>
            {questions.map((item) => {
                  return (
                      <Link className='w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5 text-center' to={`/player/quiz/${item.title}`} >{item.title}</Link>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Player;
