import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

import { addItem, readItems, updateItem } from "../models/shoppingItem.model";

export const apiAddItem = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newItem = { id: uuidv4(), name };
    const response = addItem(newItem);
    res.status(201).json(response);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const apiReadItems = (req: Request, res: Response) => {
  try {
    const response = readItems();
    res.status(200).json(response);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const apiUpdateItem = (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const id = req.params.id;
    const response = updateItem(id, name);
    console.log(response);
    res.status(204).json(response);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};
