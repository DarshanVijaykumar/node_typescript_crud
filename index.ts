import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;

require("dotenv").config();

app.get("/", (req: any, res: { send: (arg0: string) => void }) => {
  res.send("Hello World!!!");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
