var express = require("express");
var app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

app.options("*", cors());
app.use(cors());

app.get("/", function (req, res) {
  res.send({
    Output: "Hello World!",
  });
});

app.post("/", function (req, res) {
  res.send({
    Output: "Hello World!",
  });
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
