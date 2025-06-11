import { useEffect, useState } from 'react'
import './App.css'
const ViteAUTH = import.meta.env.VITE_AUTH_KEY;
import './utils/fetchData';
import Header from './components/Header';
import MovieCard from './components/MovieCard';

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


// SEARCH FORM COMPONENT START
function SearchForm( {onQueryChange} ) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
}
// SEARCH FORM COMPONENT END


  

export default App
