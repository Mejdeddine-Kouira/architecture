const express = require("express");
const bodyParser = require("body-parser");
const ErrorService = require("./services/errorService");
const app = express();

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/architecture", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("db connected");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require("./routes");

app.use("/api/user", routes.userRoute);
app.use("/api/product", routes.productRoute);

app.use(ErrorService);

app.listen(3501, () => {
  console.log("http://localhost:3501");
});
