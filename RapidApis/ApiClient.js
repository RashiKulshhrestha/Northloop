const dotenv = require("dotenv");
const axios = require ("axios");

dotenv.config();

(function() {
    if(!process.env.x_rapidapi_key){
        throw new Error("Rapid API Key is missing.");
    }
})();

class RapidApiClient{
    constructor(method, uri, queryParams, requestHeaders){
        this.requestObject = {
            "method" : method,
            "url" : uri,
            "params": queryParams,
            "headers" : requestHeaders
        }
    }

    callApi(){
        this.requestObject.headers['x-rapidapi-key'] = process.env.x_rapidapi_key;

        return axios(this.requestObject)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw new Error (`Rapid Api Failed. ${error}`);
        })
    }
}

module.exports = RapidApiClient