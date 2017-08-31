const fetch = require('node-fetch');
const { isString, isObject } = require('lodash');

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

    return isString(queryString)  ? `?${queryString}` : ''; 
}

async function request(url, params) {
    let path = url;
    try {
        if (params.method === 'GET' && isObject(params.data)) {
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