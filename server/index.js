import express from "express";

const PORT = process.env.PORT || 8080;

const app = express();

app.listen(PORT, () => console.log(`App is listening on ${PORT}`));
