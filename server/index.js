import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import router from "./router/router.js";

const PORT = process.env.PORT || 8080;
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api", router);

const start = async (req, res) => {
  try {
    await mongoose
      .connect(process.env.MONGODB)
      .then(() => console.log("Connected to db..."))
      .catch((err) => console.log("Couldn't connect to db...", err));

    app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start();
