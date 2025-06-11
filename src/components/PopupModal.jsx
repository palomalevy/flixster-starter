import React from 'react'

const PopupModal = ( {showModal, selectedMovie, setShowModal} ) => {
  return (
    <>
    <div className={`popup ${showModal ? "visible" : "notVisible"}`}>
            <h2>{selectedMovie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
            <p>Release Date: {selectedMovie.release_date}</p>
            <p>Overview: {selectedMovie.overview}</p>
            <button onClick={() => setShowModal(false)}>x</button>
      </div>
      <div className={`overlay ${showModal ? "visible" : "notVisible"}`}></div>
    </>
  ) 
}

export default PopupModal