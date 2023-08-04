// IMPORTS FROM PACKAGES
const express = require("express");
const mongoose = require("mongoose");

// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");

// INIT
const PORT = 3000;
const app = express();
const DB =
  "mongodb+srv://fuadyahya2008:yahya2008@cluster0.2usxtl4.mongodb.net/?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(authRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Connected at port ${PORT}`);
});

// "0.0.0.0" localhost in android
// localhost -> 127.0.0.1
