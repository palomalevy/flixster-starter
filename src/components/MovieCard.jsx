import { useEffect, useState } from "react";
import PopupModal from "./PopupModal";

const MovieCard = ({movies, handleClick}) => {

  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState({})
  const [likedMovies, setLikedMovies] = useState([])
  const [movieIdInfo, setMovieIdInfo] = useState({});
  const [movieVideoInfo, setMovieVideoInfo] = useState([]);
   
    useEffect(() => {
        if (selectedMovie.id) {
            fetchMovieData(selectedMovie.id)
            fetchVideoData(selectedMovie.id)
        };
    }, [selectedMovie]);
  
  const toggleClick = () => {
        handleClick();
    };

    const fetchMovieData = async (movieID) => {
        const idURL = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(idURL);
        const data = await response.json();
        const movieIdInfo = data;
        setMovieIdInfo(movieIdInfo)
    };

    const fetchVideoData = async (movieID) => {
        const videoIdURL = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(videoIdURL);
        const data = await response.json();
        const movieVideoInfo = data;
        setMovieVideoInfo(movieVideoInfo.results);
    };
    
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
                    <button 
                        className='favoriteButton'
                        onClick={() => {
                            if (likedMovies.includes(movie.id)) {
                                setLikedMovies(likedMovies.filter(id => id != movie.id));
                            } else {
                                setLikedMovies([...likedMovies, ...movie]);
                            }
                        }}
                        >
                            {likedMovies.includes(movie.id) ? '⭐' : '🌟'}
                        </button>
                    </div>
                </div>
            ))}
            <PopupModal
                setShowModal={setShowModal}
                selectedMovie={selectedMovie}
                showModal={showModal}
                movieIdInfo={movieIdInfo}
                movieVideoInfo={movieVideoInfo}
            />
            <button className="loadButton" type="button" onClick={toggleClick}>Load More</button>
        </div>
    );
};

export default MovieCard;