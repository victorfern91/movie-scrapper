const API = require('./api');

class YifyAPI extends API {
    constructor() {
        super('https', 'yts.ag');
        this.urlPrefix = `api/v2`;
    }

    async getMovieList() {
        return await this.get(`${this.urlPrefix}/list_movies.json`);
    }
}

module.exports = YifyAPI;