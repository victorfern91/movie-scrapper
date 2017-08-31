const { get } = require('./common/rest-api');

class YifyAPIConnector {
    constructor() {
        this.urlPrefix = `https://yts.ag/api/v2`;
    }

    async getMovieList() {
        return await get(`${this.urlPrefix}/list_movies.json`);
    }

    /**
     * 
     * @param {String} imdbMovieCode 
     */
    async getMovieInfo(imdbMovieCode) {
        const requestData = await get(`${this.urlPrefix}/list_movies.json`, {
            data: {
                query_term: imdbMovieCode 
            }
        });

        const { id, imdb_code, title, rating, summary, background_image, large_cover_image, torrents} = requestData.data.movies[0]

        return {
            id,
            imdb_code,
            title,
            summary,
            background_image,
            cover_image: large_cover_image,
            torrents
        }
    }
}

module.exports = YifyAPIConnector;