import { Router, Request, Response } from 'express';
import { Item } from '../types/item';

const router = Router();
let items: Item[] = [];
let nextId = 1;

router.get('/', (req: Request, res: Response): void => {
  res.status(200).json(items);
});

router.post('/', (req: Request, res: Response): void => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({ error: 'Name is required' });
    return;
  }
  const newItem: Item = { id: nextId++, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

export default router;

