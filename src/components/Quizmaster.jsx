import { useEffect, useState } from "react";
import { collection, getDocs, firestore, addDoc, doc, setDoc, collection as subcollection } from 'firebase/firestore';
import io from "socket.io-client";
import { Link } from "react-router-dom";
import '../App.css';
import { db } from '../firebase-config';

const Quizmaster = () => {

  const [quizName, setQuizName] = useState('');

  const addDocCollection = async () => {

    try {
      const quizzesCollectionRef = collection(db, 'quizzes');

  // Create a new document in the 'quizzes' collection
  const newDocRef = doc(quizzesCollectionRef, quizName);

  // Set data for the new document
  await setDoc(newDocRef, {
    title: quizName,
  });

  // Create an empty 'questions' subcollection within the new document
  const questionsCollectionRef = collection(newDocRef, 'questions');
  // No need to add a document to the subcollection;
    
      console.log('Document and empty questions collection added with ID: ', newDocRef.id);
    } catch (error) {
      console.error('Error creating document: ', error);
    }

  }

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
            <div className="w-full flex flex-col">
              <h1 className="text-white font-display text-3xl mb-5">Create a new quiz?</h1>
             <div>
              <input className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" type="text" placeholder="Quiz" onChange={(event => {
                setQuizName(event.target.value);
              })}/>
              <button onClick={addDocCollection} className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5">
               <Link to={`/quizmaster/${quizName}`}>
                Create Quiz
               </Link>
              </button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizmaster;
