const NewsAPI = {
    "method" : "GET",
    "URL" : "https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/get-news",
    "queryParams" : {
        "category": "TSLA",
        "region": "US"
    },
    "requestHeaders" : {
        "x-rapidapi-key": "7e06d67a87msha3dc010c9dae7b7p16a2f5jsn5a5e74d3a802",
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        "useQueryString": true
    }
}

module.exports = NewsAPI;