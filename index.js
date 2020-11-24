const express = require("express");
const finRouter = require("./Finance/Router");
const app = express();

app.use("/finance",finRouter);
const port = process.env.PORT || 5000;

app.listen(port, () => `Server running on port ${port} 🔥`);