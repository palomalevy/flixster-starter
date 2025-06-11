import { useEffect, useState } from "react";
import PopupModal from "./PopupModal";
const ViteAPI = import.meta.env.VITE_API_KEY;

const MovieCard = () => {
  const [movies, setMovies] = useState([]);
  const [pageNum, setPageNum] = useState(1)
  
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ViteAPI}&page=${pageNum}`)
      .then(response => response.json())
      .then(data => setMovies([...movies, ...data.results]))
  }, [pageNum]);

   const handleClick = () => {
      setPageNum((pageNum) => {return pageNum + 1})
    }

  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})
   
  return (
    // get movies from fetch data file
    // looping through movies using movies.map to get the props
    <div className="App-MovieCard">
      {movies.map((movie) => (
          <div key={movie.id} onClick={() => {
            setShowModal(true)
            setSelectedMovie(movie)
          }} className="App-MovieContainer">
            <div>
              <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>Vote Average: {movie.vote_average}</p>
              <p>Add to Favorites:
                 <button className='favoriteButton'>⭐</button>
              </p>
            </div>
          </div>
      ))}
      <PopupModal
        setShowModal={setShowModal}
        selectedMovie={selectedMovie}
        showModal={showModal}
      />
      <button className="loadButton" type="button" onClick={handleClick}>Load More</button>
    </div>
  );
};

export default MovieCard;