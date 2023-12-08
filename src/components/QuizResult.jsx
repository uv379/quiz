import React from 'react'

const QuizResult = (props) => {
  console.log(typeof props.allQuetions)
  const all = props?.allQuetions
  return (
    <div>
      <h2>QuizResult</h2>
      {/* <div>
            Your Score : {props.score}
        </div>
        <div>
            Total Score : {props.totalScore}
        </div> */}
      <div>
        {all.map((item, index) => {
          console.log(item, "itme====")
          return (
            <>
              <li>
                {item}
              </li>
            </>
          )
        }

        )}
      </div>
      <button onClick={props.startAgain}>Start Again</button>
    </div>
  )
}

export default QuizResult