const API = require('./api');

const yifyAPI = new API('https', 'yts.ag');

yifyAPI.get('/api/v2/list_msssovies.json')
    .then(console.log)
    .catch(console.err);