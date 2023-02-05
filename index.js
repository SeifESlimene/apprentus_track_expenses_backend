const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const expenseRoute = require("./routes/expense.route.js");

app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));

app.get("/", (req, res) => {
  res.status(200).send({ msg: "Hello Server" });
});

app.get("/:expense", (req, res) => {
  res.send({ expense: req.params.expense });
});

app.use("/api/v1/", expenseRoute);

const connection = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

if (connection) {
  console.log("Successfully Connected To Database");
} else {
  console.log("There Is An Error!");
}

if (process.env.NODE_ENV === "production") {
  app.use(express.static(""));
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening On http://localhost:${port}`);
});
