const YifyAPIConnector = require('./yifyAPI');

const yifyAPIConnector = new YifyAPIConnector();

yifyAPIConnector.getMovieInfo('tt0133093')
    .then(console.log)
    .catch(console.err);