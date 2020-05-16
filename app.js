var express = require("express");
var app = express();
const cors = require("cors");
const router = express.Router();
const PORT = process.env.PORT || 5000;

const CREATE_CHECKOUT_SESSION_ROUTE = "/api/payment/create-checkout-session";
const checkJwt = (req, res, next) => next();

app.options("*", cors());
app.use(cors());

router.post(CREATE_CHECKOUT_SESSION_ROUTE, checkJwt, async (req, res) => {
  return res.send({ data: "some data" });
});

app.use(router);

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
