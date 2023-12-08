
import { useState } from 'react';
// import './App.css';
import Question from './components/Question';
import PreviousQuestion from './components/PreviousQuestion';
import NextQuestion from './components/NextQuestion';
import QuizResult from './components/QuizResult';

// There are 5 questions in the Quiz. One 
// question is shown at a time to the student. 
// For Each question, he can choose maximum two of the 4 
// available choices A, B, C, D. One of the option will be 
// right or in some cases 2 of the options might be right. 
// Provide next or previous buttons so that the student can go forward or backward using them. No Previous button for first
//  question. While displaying the 5th question, show a submit button. When the submit button is pressed, just show score

function App() {
  const questions = [
    {
      id: 1,
      text: 'Question 1: What is your Name?',
      options: ['A. uddhav', 'B. Mohan', 'C. Mohit', 'D. Rohan'],
      type: "multi",
      correctOptions: 1,
    },
    {
      id: 2,
      text: 'Question 2: What is your family name?',
      options: ['A. Mandal', 'B. Biswas', 'C. Roy', 'D. Mondol'],
      type: "multi",
      correctOptions: 2,
    },
    {
      id: 3,
      text: 'Question 3: What is your family name?',
      options: ['A. Mandal', 'B. Biswas', 'C. Roy', 'D. Mondol'],
      type: "multi",
      correctOptions: 3,
    },
    {
      id: 4,
      text: 'Question 4: What is your family name?',
      options: ['A. Mandal', 'B. Biswas', 'C. Roy', 'D. Mondol'],
      type: "multi",
      correctOptions: 1,
    },
    {
      id: 5,
      text: 'Question 5: What is your family name?',
      options: ['A. Mandal', 'B. Biswas', 'C. Roy', 'D. Mondol'],
      type: "multi",
      correctOptions: 2,
    },
    {
      id: 6,
      text: 'Question 6:  Write about 100 words ?',
      options: [],
      type: "disc",
      correctOptions: 2,
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOptions, setSelectedOptions] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [allQuetions, setAllQuestion] = useState([])
  const [inputItem, setInputItem] = useState("")
  const handelOptionSelect = (option, value) => {
    setSelectedOptions(option)

    if (option > 0) {
      let updateValue = []
      updateValue = [[questions[currentQuestion].text] + " : " + value]
      setAllQuestion(pre => ([
        ...pre,
        ...updateValue
      ]))

    }
  }
  const handelInputChange = (value) => {
    setInputItem(value)
  }

  const handleNext = () => {
    updateScore()
    if (inputItem !== "") {
      let updateValue = []
      updateValue = [[questions[currentQuestion].text] + " : " + inputItem]
      setAllQuestion(pre => ([
        ...pre,
        ...updateValue
      ]))

    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
      setSelectedOptions(0)
    } else {
      setShowResult(true)
    }
  }
  const handlePrevious = () => {
    setCurrentQuestion((prev) => prev - 1)
  }
  const updateScore = () => {
    if (selectedOptions === questions[currentQuestion].correctOptions) {
      setScore(score + 1)
    }
  }
  const startAgain = () => {
    setShowResult(false)
    setCurrentQuestion(0)
    setSelectedOptions(0)
    setScore(0)
  }
  return (
    <div className="App">
      {showResult ? (<QuizResult score={score} totalScore={questions.length} startAgain={startAgain} allQuetions={allQuetions} />) :
        <div>
          <Question questions={questions} currentQuestion={currentQuestion} selectedOptions={selectedOptions} handelOptionSelect={handelOptionSelect} handelInputChange={handelInputChange} />
          {currentQuestion > 0 && <PreviousQuestion handlePrevious={handlePrevious} />}
          {currentQuestion < questions.length - 1 && <NextQuestion handleNext={handleNext} />}
          {currentQuestion === questions.length - 1 && <button onClick={handleNext}>Submit</button>}

        </div>
      }

    </div>
  );
}

export default App;
