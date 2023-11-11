import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';
import { db } from '../firebase-config';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Quiz = () => {

  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const storage = getStorage();

  useEffect(() => {
    const getQuestions = async () => {
      const questionsCollectionRef = collection(db, `quizzes/${category}/questions`);
      const data = await getDocs(questionsCollectionRef);

      const questionsData = await Promise.all(
        data.docs.map(async (doc) => {
          const questionData = doc.data();

          // Assuming you have an 'imageRef' field in your Firestore document
          if (questionData.imageRef) {
            const imageUrl = await getDownloadURL(ref(storage, questionData.imageRef));
            return { ...questionData, id: doc.id, imageUrl };
          } else {
            return { ...questionData, id: doc.id };
          }
        })
      );

      setQuestions(questionsData);
    };

    getQuestions();
  }, [category, storage]);


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
                        {item.imageUrl && <img src={item.imageUrl} alt="Question" />}
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
