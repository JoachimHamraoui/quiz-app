import { useEffect, useState } from "react";
import { collection, getDocs, firestore, addDoc, doc, setDoc, collection as subcollection } from 'firebase/firestore';
import { storage } from "../firebase-config";
import { ref, uploadBytes } from "firebase/storage";
import io from "socket.io-client";
import { Link, useParams } from "react-router-dom";
import '../App.css';
import { db } from '../firebase-config';
import {v4} from "uuid";

const Quizmaster = () => {

const {category} = useParams();

  const [question, setQuestion] = useState('');
  const [option1, setOption1] = useState('');
  const [option2, setOption2] = useState('');
  const [option3, setOption3] = useState('');
  const [option4, setOption4] = useState('');
  const [rightAnswer, setRightAnswer] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [imagePath, setImagePath] = useState('');

  const uploadImage = () => {
    if (imageUpload == null) return;
    setImagePath(`images/${imageUpload.name + v4()}`)
    const imageRef = ref(storage, imagePath);
    uploadBytes(imageRef, imageUpload).then(() => {
      alert("Question has been added");
    });
  }

  const addDocCollection = async () => {

    try {
      // Reference to the 'quizzes' collection
    const quizzesCollectionRef = collection(db, 'quizzes');

    // Reference to the specific 'quizzes' document based on the category
    const specificQuizDocRef = doc(quizzesCollectionRef, category);

    // Create an empty 'questions' subcollection within the specific 'quizzes' document
    const questionsCollectionRef = collection(specificQuizDocRef, 'questions');

    // Add a new document to the 'questions' subcollection with the provided data
    const newDocRef = doc(questionsCollectionRef);

    uploadImage();

    // Set data for the new document
    await setDoc(newDocRef, {
      question: question,
      option1: option1,
      option2: option2,
      option3: option3,
      option4: option4,
      rightAnswer: rightAnswer,
      imageRef: imagePath
    });

    setQuestion('');
    setOption1('');
    setOption2('');
    setOption3('');
    setOption4('');
    setRightAnswer('');
    setImageUpload(null);


        // Create an empty 'questions' subcollection within the new document
        //   const questionsCollectionRef = collection(newDocRef, 'questions');
        // No need to add a document to the subcollection;
    
      console.log('Document and empty questions collection added with ID: ', newDocRef.id);
    } catch (error) {
      console.error('Error creating document: ', error);
    }

  }

  useEffect(() => {

  }, []);

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
      <div className='w-full h-screen bg-black flex flex-col items-center justify-center'>
        <div className='p-4 sm:w-11/12 md:w-2/6'>
          <div className='w-full flex flex-col items-center mt-14'>
            <div className="w-full flex flex-col">
              <h1 className="text-white font-display text-3xl mb-5">Create questions for {category} quiz</h1>
             <div>
              <input className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" type="text" placeholder="Question" onChange={(event => {
                setQuestion(event.target.value);
              })}/>
              <input className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" type="text" placeholder="Option 1" onChange={(event => {
                setOption1(event.target.value);
              })}/>
              <input className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" type="text" placeholder="Option 2" onChange={(event => {
                setOption2(event.target.value);
              })}/>
              <input className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" type="text" placeholder="Option 3" onChange={(event => {
                setOption3(event.target.value);
              })}/>
              <input className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" type="text" placeholder="Option 4" onChange={(event => {
                setOption4(event.target.value);
              })}/>
            <select className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" id="rightAnswer" value={rightAnswer} onChange={(event => {
                setRightAnswer(event.target.value);
              })}>
              <option value={`${option1}`}>{option1}</option>
              <option value={`${option2}`}>{option2}</option>
              <option value={`${option3}`}>{option3}</option>
              <option value={`${option4}`}>{option4}</option>
            </select>
            <input className="w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5" type="file" placeholder="Upload an image" onChange={(event => {
                setImageUpload(event.target.files[0]);
              })}/>
              <button onClick={addDocCollection} className="w-full px-5 py-3 bg-green text-white text-xl font-mont rounded-2xl focus:outline-none focus:shadow-outline mb-5">Add Question</button>
             </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quizmaster;
