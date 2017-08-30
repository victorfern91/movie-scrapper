const fetch = require('node-fetch');

/**
 * API
 */
class API {
    constructor(protocol = 'http', domain) {
        this.protocol = protocol;
        this.domain = domain;
    }

    /**
     * 
     * @param {String} path 
     */
    async get(path) {
        const URL_PATH = `${this.protocol}://${this.domain}/${path}`;
        try {
            const response = await fetch(URL_PATH);
            const data = await response.json();
            
            return data;
        } catch (ex) {
            throw new Error(`[API] Error calling ${URL_PATH}`, ex.code);
        }        
    }
}

module.exports = API;