import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import '../App.css';
import { db } from '../firebase-config';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const Quiz = () => {
  const { category } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);
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
      // setCorrectAnswer(questions[currentQuestionIndex].rightAnswer);
    };

    getQuestions();
  }, [category, storage]);

  const handleNextQuestion = () => {
    // Check if the selected option is correct

    setCorrectAnswer(questions[currentQuestionIndex].rightAnswer);

    if (selectedOption === correctAnswer) {
      setCorrectAnswersCount((correctAnswersCount) => correctAnswersCount + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

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
        <div className='w-4/12 p-4'>
          <div className='w-full flex flex-col items-center mt-14'>
            {currentQuestionIndex < questions.length ? (
              <div>
                <h1 className='text-white text-3xl font-display'>
                  {questions[currentQuestionIndex].question}
                </h1>
                {questions[currentQuestionIndex].imageUrl && (
                  <img className='w-full my-5' src={questions[currentQuestionIndex].imageUrl} alt="Question" />
                )}
                <form className='w-full mt-7 flex flex-row flex-wrap'>
                  <label for="option1" className='w-1/2 pr-3'>
                    <input type="radio" name="option" id="option1" value={questions[currentQuestionIndex].option1} className='peer hidden w-full' onChange={() => setSelectedOption(questions[currentQuestionIndex].option1)}/>
                    <div className='w-full px-5 py-3 bg-blue text-white text-xl font-mont rounded-2xl mb-5 text-center peer-checked:bg-dark-blue cursor-pointer'>
                    {questions[currentQuestionIndex].option1}
                    </div>
                  </label>
                  <label for="option2" className='w-1/2 pl-3'>
                    <input type="radio" name="option" id="option2" value={questions[currentQuestionIndex].option2} className='peer hidden w-full' onChange={() => setSelectedOption(questions[currentQuestionIndex].option2)}/>
                    <div className='w-full px-5 py-3 bg-green text-white text-xl font-mont rounded-2xl mb-5 text-center peer-checked:bg-dark-green cursor-pointer'>
                    {questions[currentQuestionIndex].option2}
                    </div>
                  </label>
                  <label for="option3" className='w-1/2 pr-3'>
                    <input type="radio" name="option" id="option3" value={questions[currentQuestionIndex].option3} className='peer hidden w-full' onChange={() => setSelectedOption(questions[currentQuestionIndex].option3)}/>
                    <div className='w-full px-5 py-3 bg-yellow text-white text-xl font-mont rounded-2xl mb-5 text-center peer-checked:bg-dark-yellow cursor-pointer'>
                    {questions[currentQuestionIndex].option3}
                    </div>
                  </label>
                  <label for="option4" className='w-1/2 pl-3'>
                    <input type="radio" name="option" id="option4" value={questions[currentQuestionIndex].option4} className='peer hidden w-full' onChange={() => setSelectedOption(questions[currentQuestionIndex].option4)}/>
                    <div className='w-full px-5 py-3 bg-red text-white text-xl font-mont rounded-2xl mb-5 text-center peer-checked:bg-dark-red cursor-pointer'>
                    {questions[currentQuestionIndex].option4}
                    </div>
                  </label>
                </form>
                <button className='w-full px-5 py-3 bg-white text-gray text-xl font-mont rounded-2xl mb-5 text-center peer-checked:bg-dark-red cursor-pointer' onClick={handleNextQuestion}>Confirm Answer</button>
              </div>
            ) : (
              <h1 className='text-white text-xl'>Quiz Finished with {correctAnswersCount} question(s) out of {currentQuestionIndex} correct !</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
