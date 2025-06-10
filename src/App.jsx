import { useEffect, useState } from 'react'
import './App.css'
const ViteAPI = import.meta.env.VITE_API_KEY;
const ViteAUTH = import.meta.env.VITE_AUTH_KEY;
import './utils/fetchData.js'

console.log(ViteAPI);
console.log(ViteAUTH);

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
// HEADER COMPONENT START
const Header = () => {
  return (
    <div className="App-header">
      <h1>Flixster</h1>
      <SearchForm/>
      <SortBy/>
    </div>
  )
}

function SearchForm() {
  return (
    <form className="search-form">
      <input className="search-input" type="text" placeholder="Search for movies" />
      <button className="search-button" type="submit">Search</button>
      <button className="clear-button" type="submit">Clear</button>
    </form>
  )
}

function SortBy() {
  return (
    <div>
      <select className="sortByButton" name='Sort By'>
        <option value='Sort By:'>Sort By</option>
        <option value='A-Z'>A-Z</option>
        <option value='Date'>Release Date</option>
        <option value='Rating'>Rating</option>
      </select>
    </div>
  )
}
// HEADER COMPONENT END
// MOVIE COMPONENT START
const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ViteAPI}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  // const openModal = () => { 
  //   console.log('hello') 
  // }

  // const [movieModal, setMovieModal] = useState(false)
  // const visible = () => setMovieModal(true)
  // const notVisible = () => setMovieModal(false)

  return (
    // get movies from fetch data file
    // looping through movies using movies.map to get the props
    <div className="App-MovieCard">
      {movies.map((movie) => (
        // <>
          <div className="App-MovieContainer">
            <div key={movie.id}>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>Vote Average: {movie.vote_average}</p>
            </div>
          </div>
          /* <div className={`popup ${modalVisible ? {visible} : {notVisible}}`}>
            <h2>{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            <p>Release Date: {movie.release_date}</p>
            <p>Overview: {movie.overview}</p>
          </div>
        </> */
      ))}
    </div>
  );
};
// MOVIE COMPONENT END
    
export default App
