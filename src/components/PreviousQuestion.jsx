import React from 'react'

const PreviousQuestion = ({handlePrevious}) => {
  return (
    <div>
        <button onClick={handlePrevious}>Previous</button>
    </div>
  )
}

export default PreviousQuestion