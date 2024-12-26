const express = require("express");
const bodyParser = require("body-parser");
const path = require("node:path");
const indexRouter = require("./routes/indexRouter");

const app = express();

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", indexRouter);
app.listen(PORT);
