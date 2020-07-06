import React, {useState} from 'react'

const Numbers = () => {
    //destructure of an array
    const [numbers, setNumbers ]=useState(['one', 'two', 'three'])
    const [letters, setLetters ]=useState(['a', 'b', 'c'])
    const addNumber = () => {
        setNumbers([...numbers,'four'])
    }
        return (
            <div>
                <h1>Numbers</h1>
                {numbers.map( num=> {
                    return <h4>{num}</h4>
                })}
                <button onClick={addNumber}>Add a number</button>
            </div>
        )
}

export default Numbers