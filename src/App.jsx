import { useEffect, useState } from 'react'
import './App.css'
const ViteAPI = import.meta.env.VITE_API_KEY;
const ViteAUTH = import.meta.env.VITE_AUTH_KEY;
import './utils/fetchData.js'

console.log(ViteAPI);
console.log(ViteAUTH);

// get movies from fetch data file
// looping through movies using movies.map to get the props
const App = () => {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
        <MovieCard/>
    </div>
  )
}
// header component
const Header = () => {
  return (
    <>
      <h1>Flixster</h1>
      <SearchForm/>
      <SortBy/>
    </>
  )
}

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-input" type="text" placeholder="Enter city name" />
      <button className="search-button" type="submit">Search</button>
    </form>
  )
}

function SortBy() {
  return (
    <div>
      <select name='Sort By'>
        <option value='A-Z'>A-Z</option>
        <option value='Date'>Date</option>
        <option value='Rating'>Rating</option>
      </select>
    </div>
  )
}

// movie card component
const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ViteAPI}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div className="App-MovieCard">
      {movies.map((movie) => (
        <div className="App-MovieContainer">
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            {/* <p>{movie.overview}</p> */}
            <p>Release Date: {movie.release_date}</p>
            <p>Vote Average: {movie.vote_average}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
      
    
export default App
