const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");
const app = express();
const PORT = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  // private route
  res.status(403).send("Forbidden");
});

const blogs = require("./content/blogs.json");
app.get("/api/blogs", (req, res) => {
  res.send({ data: blogs });
});

const portfolios = require("./content/portfolios.json");
app.get("/api/portfolios", (req, res) => {
  res.send({ data: portfolios });
});
