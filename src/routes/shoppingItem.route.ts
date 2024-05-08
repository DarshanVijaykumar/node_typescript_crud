import express from "express";
const routes = express.Router();

import {
  apiAddItem,
  apiReadItems,
  apiUpdateItem,
} from "../controllers/shoppingItem.controller";

routes.get("/shopping-list", apiReadItems);
routes.post("/shopping-list", apiAddItem);
routes.put("/shopping-list/:id", apiUpdateItem);

export default routes;
