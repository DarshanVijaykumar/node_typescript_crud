import express from "express";
import dotenv from "dotenv";

import routes from "./routes/shoppingItem.route";

dotenv.config();

const app = express();

const port = process.env.PORT || 3000;
app.use(express.json());
app.use("/", routes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
