import React from 'react'

const Question = ({ questions, currentQuestion, selectedOptions, handelOptionSelect ,handelInputChange}) => {
    return (
        <div>
            <h2>
                {questions[currentQuestion].text}
            </h2>
            {questions[currentQuestion].type === "disc" ?
                <input type="text" onChange={(e) => handelInputChange(e.target.value)}/> :
                <ul>
                    {questions[currentQuestion].options.map((option, i) => (
                        <li key={i}>
                            <label>
                                <input type='checkbox'
                                    checked={selectedOptions == i + 1}
                                    onChange={() => handelOptionSelect(i + 1, option)}
                                />
                                {option}
                            </label>
                        </li>
                    ))}
                </ul>
            }

        </div>

    )
}

export default Question