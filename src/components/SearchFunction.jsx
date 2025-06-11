import React, { useEffect, useState } from 'react'


// SEARCH FORM COMPONENT START
// function SearchForm( {onQueryChange} ) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredMovies, setFilteredMovies] = useState([]);
// }
// SEARCH FORM COMPONENT END
const SearchFunction = ({fetchMovies}) => {
    // const [selectedMovie, setSelectedMovie] = useState();
    // const [mode, setMode] = useState('now_playing');
    // const [selectedMovieId, setSelectedMovieID] = useState();
    const [userInput, setUserInput] = useState('')

    const handleTextChange = (event) => {
        console.log('trying to change')
        const {value} = event.target
        setUserInput(value)
    }
    // useEffect(() => {
    //     fetchMovies(1, 'lilo');
    // }, []);

    // const fetchMovies = async (currentPage, search = '') => {
    //     const ViteAPI = import.meta.env.VITE_API_KEY;
    //     // const url = `https://api.themoviedb.org/3/movie/popular?api_key=${ViteAPI}&page=${pageNum}`;
    //     const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${ViteAPI}&query=${search}&page=${currentPage}`;
    //     const response = await fetch(searchURL);
    //     const data = await response.json();
    //     const movies = data.results;
    //     setSelectedMovie(movies);
    // };

return (
    <div className='buttons'>
        <input onChange={handleTextChange} type='text' placeholder='Search for movies' value={userInput}/>
        <button onClick={() => fetchMovies(1, userInput)} className='Submit'>Submit</button>
        <button className='Clear'>Clear</button>
    </div>
)

};

export default SearchFunction

