const express = require("express");
const fs = require("fs");
const path = require("path");
// const cors = require("cors");
const app = express();
const PORT = 3001;

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});
