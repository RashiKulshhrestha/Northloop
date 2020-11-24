const express = require("express");
const finRouter = express.Router();

const finController = require("./Controller");

finRouter.get("/analysis",
    finController.getAnalysis()
    .then((data) => {
        response.send(data);
    })
    .catch((error) => {
        alert(error);
    })
);

finRouter.get("/news",
    finController.getNews()
    .then((data) => {
        response.send(data);
    })
    .catch((error) => {
        alert(error);
    })
);

module.exports = finRouter;