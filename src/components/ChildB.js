import React from 'react'

const ChildB = ({onSelect}) => {
  return (
    <div className='child2'>
        <h2>Child Componet 2</h2>
        <button onClick={() => onSelect("Option 2")}>Option 2</button>
    </div>
  )
}

export default ChildB