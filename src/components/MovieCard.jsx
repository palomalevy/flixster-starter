import { useEffect, useState } from "react";
import PopupModal from "./PopupModal";

const MovieCard = ({movies, handleClick}) => {

  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})
   
  const toggleClick = () => {
    handleClick()
  };

//   const movieId = data.results[0].id;
  return (
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
              <button className='favoriteButton'>⭐</button>
            </div>
          </div>
      ))}
      <PopupModal
        setShowModal={setShowModal}
        selectedMovie={selectedMovie}
        showModal={showModal}
      />
      <button className="loadButton" type="button" onClick={toggleClick}>Load More</button>
    </div>
  );
};

export default MovieCard;