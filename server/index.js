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

const dataPath = path.join(__dirname, "content");

app.get("/api/blogs", (req, res) => {
  const blogs = JSON.parse(
    fs.readFileSync(path.join(dataPath, "blogs.json"), "utf-8")
  );

  res.send({ data: blogs });
});

app.get("/api/portfolios", (req, res) => {
  const portfolios = JSON.parse(
    fs.readFileSync(path.join(dataPath, "portfolios.json"), "utf-8")
  );

  res.send({ data: portfolios });
});
