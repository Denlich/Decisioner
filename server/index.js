import express from "express";
import mongoose from "mongoose";

import router from "./router/router.js";

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use("/api", router);

const start = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://denlich:gjauPuZjDRH6Bu25@cluster0.kvxy8v7.mongodb.net/?retryWrites=true&w=majority"
      )
      .then(() => console.log("Connected to db..."))
      .catch((err) => console.log("Couldn't connect to db...", err));

    app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
