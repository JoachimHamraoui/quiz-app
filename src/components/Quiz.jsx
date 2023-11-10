import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';
import { db } from '../firebase-config';

const Quiz = () => {

    const {category} = useParams();

  const [questions, setQuestions] = useState([]);

  const questionsCollectionRef = collection(db, `quizzes/${category}/questions`);
  useEffect(() => {

    const getQuestions = async () => {
      const data = await getDocs(questionsCollectionRef);
      setQuestions(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    console.log(`quizzes/${category}/questions`);

    getQuestions();
    console.log(category);

  }, [])

  return (
    <div className="App">
      <div className="w-full fixed flex justify-center mt-8">
            <h1 className='font-display text-4xl'>
              <span className='text-red'>K</span>
              <span className='text-yellow'>a</span>
              <span className='text-blue'>p</span>
              <span className='text-green'>ü</span>
              <span className='text-red'>t.</span>
            </h1>
        </div>
      <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className='w-2/6 p-4'>
          <div className='w-full flex flex-col items-center mt-14'>
            {questions.map((item) => {
                  return (
                    <div>
                        <h1 className='text-white text-xl text-display'>{item.question}</h1>
                        <button className='text-white'>{item.option1}</button>
                        <button className='text-white'>{item.option2}</button>
                        <button className='text-white'>{item.option3}</button>
                        <button className='text-white'>{item.option4}</button>
                    </div>
                  )
                })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
