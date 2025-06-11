const now_playing_url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_AUTH_KEY}`
  }
};

// const data =     fetch(url, options)
//         .then(res => res.json())
//         .then(json => console.log(json))
//         .catch(err => console.error(err));

function fetchMovies(url, options) {
    fetch(url, options)
    .then(res => res.json())
    .then((json) => {
        console.log(json)
        return json})
    .catch(err => console.error(err));
};
  
const data = fetchMovies(now_playing_url, options);
console.log("this is the data:", data);

//     