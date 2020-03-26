import express from 'express';
import { getTransactions, deleteTransactions, postTransactions } from "../controllers/transactions.controller";

const router = express.Router();

router
  .route('/')
  .get(getTransactions)
  .post(postTransactions);

router
  .route('/:id')
  .delete(deleteTransactions);

export default router;
