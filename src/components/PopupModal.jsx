import React, { useEffect, useState } from 'react'
import './PopupModal.css'

const PopupModal = ( {showModal, selectedMovie, setShowModal, movieIdInfo, movieVideoInfo} ) => {

    const [genres, setGenres] = useState('');
    const [video, setVideo] = useState([]);

    const findGenres = () => {
            setGenres(movieIdInfo.genres.map(genre => genre.name).join(', '))
        }

    useEffect(() => {
        if (movieIdInfo.genres) {
            findGenres();
        }
    }, [movieIdInfo])
    
    useEffect(() => {
        if (movieVideoInfo.length) {
            setVideo(movieVideoInfo.filter(video => video.type === 'Trailer' && video.official === true
            ))
        }
    }, [movieVideoInfo]);
  
  return (
    <>
    <div className={`popup ${showModal ? "visible" : "notVisible"}`}>
            <h2>{selectedMovie.title}</h2>
            <button className='closeButton' onClick={() => setShowModal(false)}>x</button>

            <div className='leftAndRight'>
                <div className='left'></div>
                    <img src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`} alt={selectedMovie.title} />
                <div className='right'>
                    <p>Release Date: {selectedMovie.release_date}</p>
                    <p>Genres: {genres} </p>
                    <p>Run Time: {movieIdInfo.runtime} minutes</p>
                    <p>Overview: {selectedMovie.overview}</p>
                </div>
            </div>
            {video.length && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video[0].key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
      </div>
      <div className={`overlay ${showModal ? "visible" : "notVisible"}`}></div>
    </>
  ) 
}

export default PopupModal