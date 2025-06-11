import { useEffect, useState } from 'react'
import './App.css'
import './utils/fetchData';
import Header from './components/Header';
import MovieCard from './components/MovieCard';
import SearchFunction from './components/SearchFunction';

const App = () => {    
  const [movies, setMovies] = useState([]);    
  const [pageNum, setPageNum] = useState(1)

  const handleClick = () => {
    console.log('i was here')
      setPageNum((pageNum) => {return pageNum + 1})
    };

  const ViteAPI = import.meta.env.VITE_API_KEY;
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${ViteAPI}&page=${pageNum}`)
      .then(response => response.json())
      .then(data => setMovies([...movies, ...data.results]))
  }, [pageNum]);

    const fetchMovies = async (currentPage, search = '') => {
      console.log("search term:", search)
      const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=${ViteAPI}&query=${search}&page=${currentPage}`;
      const response = await fetch(searchURL);
      const data = await response.json();
      const movies = data.results;
      console.log("movies:", movies)
      setMovies(movies);
    };

  return (
    <div className="App">
      <header>
        <Header/>
        <SearchFunction fetchMovies={fetchMovies}/>
      </header>
        <MovieCard movies={movies} handleClick={handleClick}/>
    </div>
  )
}


  

export default App
