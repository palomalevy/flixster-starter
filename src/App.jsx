import { useEffect, useState } from 'react'
import './App.css'
const ViteAPI = import.meta.env.VITE_API_KEY;
const ViteAUTH = import.meta.env.VITE_AUTH_KEY;
import './utils/fetchData';

const App = () => {
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
        <MovieCard/>
        {/* <LoadMoreExample/> */}
        
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
  const [pageNumber, setPageNumber] = useState(1);
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${ViteAPI}`)
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState([])

  return (
    // get movies from fetch data file
    // looping through movies using movies.map to get the props
    <div className="App-MovieCard">
      {movies.map((movie) => (
          <div key={movie.id} onClick={() => {
            console.log('click worked')
            setShowModal(true)
            setSelectedMovie(movie)
          }} className="App-MovieContainer">
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>Vote Average: {movie.vote_average}</p>
            </div>
          </div>
      ))}
      <div className={`popup ${showModal ? "visible" : "notVisible"}`}>
            <h2>{selectedMovie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            <p>Release Date: {selectedMovie.release_date}</p>
            <p>Overview: {selectedMovie.overview}</p>
            <button onClick={() => setShowModal(false)}>x</button>
      </div>
      <div className={`overlay ${showModal ? "visible" : "notVisible"}`}></div>
    </div>
  );
};
// MOVIE COMPONENT END
  
//LOAD MORE COMPONENT START

// const [pageNumber, setPageNumber] = useState(0);

// fetch (``)


//LOAD MORE COMPONENT END
export default App
