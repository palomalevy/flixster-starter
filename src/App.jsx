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
      {/* <MovieCard/> */}
      <Header/>
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
const MovieCard = (props) => {
  return (
    <div className='MovieCard'>
      <h2>Movie Title: {props.original_title} </h2>
    </div>
  )
}
export default App
