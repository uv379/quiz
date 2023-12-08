import React from 'react'

const NextQuestion = ({handleNext}) => {
  return (
    <div>
        <button onClick={handleNext}>Next</button>
    </div>
  )
}

export default NextQuestion