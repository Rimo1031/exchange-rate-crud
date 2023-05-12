const express = require("express");
const app = express();
const port = 3010;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Listening at port ${port}.\n`);
});
