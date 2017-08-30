const YifyAPI = require('./yifyAPI');

const yifyAPI = new YifyAPI();

yifyAPI.getMovieList()
    .then(console.log)
    .catch(console.err);