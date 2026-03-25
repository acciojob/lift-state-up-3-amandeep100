import React from 'react'

const ChildA = ({onSelect}) => {
  return (
    <div className='child1'>
        <h2>Child component 1</h2>
        <button onClick = {() => onSelect ("Option 1")}>Option 1</button>
    </div>
  )
}

export default ChildA