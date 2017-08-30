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
     * Async fu
     * 
     * @param {String} path 
     */
    async get(path) {
        try {
            const response = await fetch(`${this.protocol}://${this.domain}/${path}`);
            const data = await response.json();
            
            return data;
        } catch (ex) {
            throw new Error('[API] badum tss!', ex.code);
        }        
    }
}

module.exports = API;