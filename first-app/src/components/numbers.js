import React, {useState, useEffect} from 'react'

const Numbers = () => {
    //destructure of an array
    const [numbers, setNumbers ]=useState(['one', 'two', 'three'])
    const [letters, setLetters ]=useState(['a', 'b', 'c'])
    const addNumber = () => {
        setNumbers([...numbers,'four'])
    }
    // listens for states changes and component mount
    useEffect(() => {
        console.log('our use effect trigers only on numbers')
    }, [numbers])
    const addLetter = () => {
        setLetters([...letters,'f'])
    }
        return (
            <div>
                <h1>Numbers</h1>
                {numbers.map( num=> {
                    return <h4>{num}</h4>
                })}
                <button onClick={addNumber}>Add a number</button>
                {letters.map( letter=> {
                    return <h4>{letter}</h4>
                })}
                <button onClick={addLetter}>Add a letter</button>
            </div>
        )
}

export default Numbers