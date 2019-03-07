const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const router = require("./router");
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:auth/auth", { useNewUrlParser: true });

app.use(morgan("combined"));
app.use(bodyParser.json({ type: "*/*" }));

const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port, () => {
  console.log("listening on port", port);
});
