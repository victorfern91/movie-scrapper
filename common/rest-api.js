const fetch = require('node-fetch');

/**
 * 
 * @param {Object} params 
 * @returns {String}
 * @private
 */
function getQueryUrl(params) {
    const queryString = Object.keys(params)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key]))
    .join('&');

    return queryString.length > 0  ? `?${queryString}` : ''; 
}

async function request(url, params) {
    let path = url;
    try {
        if (params.method === 'GET' && params.data) {
            path += getQueryUrl(params.data)
        }
        const response = await fetch(path);
        const data = await response.json();
        
        return data;
    } catch (ex) {
        throw new Error(`[API] Error calling ${path}`, ex.code);
    }
}

module.exports = {
    get: (url, params) => request(url, Object.assign({ method: 'GET' }, params))
};