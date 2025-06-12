import React, { useEffect, useState } from 'react'


// SEARCH FORM COMPONENT START

const SearchFunction = ({fetchMovies, onClearing}) => {
    const [userInput, setUserInput] = useState('')

    const handleTextChange = (event) => {
        const {value} = event.target
        setUserInput(value)
    }
    
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            fetchMovies(1, userInput)
        };
    };

    const handleReset = () => {
        setUserInput('');
        onClearing();
    }

    return (
        <div className='buttons'>
            <input  type='text' onChange={handleTextChange} onKeyDown={handleKeyDown} placeholder='Search for movies' value={userInput}/>
            <button onClick={() => fetchMovies(1, userInput)} className='Submit'>Submit</button>
            <button onClick={handleReset} className='Clear'>Clear</button>
        </div>
        )
};

export default SearchFunction;

// SEARCH FORM COMPONENT END