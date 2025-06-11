
function SortBy() {
  return (
    <div>
      <select className="sortByButton" name='Sort By'>
        <option value='Sort By:'>Sort By</option>
        <option value='A-Z'>Ttile (A-Z)</option>
        <option value='Date'>Newest</option>
        <option value='Rating'>Rating</option>
      </select>
    </div>
  )
};

export default SortBy;