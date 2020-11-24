const AnalysisAPI = require("../RapidApis/Analysis");
const RapidapiClient = require("../RapidApis/ApiClient");
const NewsAPI = require("../RapidApis/News");

const getAnalysis = () => {
    return new RapidapiClient(
        AnalysisAPI.method,
        AnalysisAPI.URL,
        AnalysisAPI.queryParams,
        AnalysisAPI.requestHeaders
    )
    .callApi()
    .then((apiData) => {
        return(apiData);
    })
    .catch((error) => {
        throw new Error ("Analysis API failed.");
    })
}

const getNews = () => {
    return new RapidapiClient(
        NewsAPI.method,
        NewsAPI.URL,
        NewsAPI.queryParams,
        NewsAPI.requestHeaders
    )
    .callApi()
    .then((apiData) => {
        return(apiData);
    })
    .catch((error) => {
        throw new Error ("News API failed.");
    })
}

const finController = {
    getAnalysis,
    getNews
}

module.exports = finController;