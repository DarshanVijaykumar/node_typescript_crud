import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

let shoppingList = [];

export const addItem = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newItem = { id: uuidv4(), name };
    shoppingList.push(newItem);
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
