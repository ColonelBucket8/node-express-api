import express from "express";

import {
  getCartList,
  getCart,
  deleteCart,
  createCart,
  updateCart,
} from "../controllers/carts.js";

const router = express.Router();

router.get("/", getCartList);

router.get("/:id", getCart);

router.post("/", createCart);

router.delete("/:id", deleteCart);

router.patch("/:id", updateCart);

export default router;
