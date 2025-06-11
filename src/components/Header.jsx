import SearchFunction from "./SearchFunction"
import SortBy from "./SortBy"

const Header = () => {
  return (
    <div className="App-header">
      <h1>Flixster</h1>
      <SearchFunction/>
      <SortBy/>
    </div>
  )
}

export default Header