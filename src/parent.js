import React, { useState } from 'react'
import ChildA from './components/ChildA'
import ChildB from './components/ChildB'

const parent = () => {
    const [selectedOption,setSelectedOption] = useState()

    const handleSelect = (option) =>{
        setSelectedOption(option);
    }
  return (
    <div className='parent'>
<h2>Selecte Option: {selectedOption}</h2>
    <ChildA onSelect={handleSelect}/>
    <ChildB onSelect={handleSelect}/>
    </div>
  )
}

export default parent