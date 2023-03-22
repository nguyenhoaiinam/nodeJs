import express from "express";
import { create, getAll, getOne, remove, update } from "../controller/products";

const router = express.Router();

router.post("/products", create);
router.get("/products", getAll);
router.get("/products/:id", getOne);
router.delete("/products/:id", remove);
router.patch("/products/:id", update)


export default router;