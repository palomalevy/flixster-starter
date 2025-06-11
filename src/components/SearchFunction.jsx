import React, { useState } from 'react'


const SearchFunction = () => {
//     const [selectedMovie, setSelectedMovie] = useState();
//     const [mode, setMode] = useState('now_playing');
//     const [selectedMovieId, setSelectedMovieID] = useState();
    const [userInput, setUserInput] = useState('')

//     const fetchMovies = async (page, search = '') => {
//     const apiKey = meta.env.VITE_API_KEY;
//     const url = `https://api.themoviedb.org/3/movie/popular?api_key=${ViteAPI}&page=${pageNum}`;
//     const searchURL = 'https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${apiKey}&page=${currentPage}'
//     const response = await fetch(url);
//     const data = await response.json();
//     const movies = data.results;
//     // setMovies(movies);
// };

return (
    <div classNames='buttons'>
        <input type='text' placeholder='Search for movies' value={userInput}/>
        <button className='Clear'>Clear</button>
    </div>
    
)

};

export default SearchFunction

