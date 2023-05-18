const express = require("express");

const server = express();
server.use(express.json()); //json isteklerini destekler.

server.get("/", (req, res) => {
  res.send("Server is up and running!...");
});

module.exports = server;
