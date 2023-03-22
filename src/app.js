import express, { Router } from "express";
import ProductsRouter from "./routes/products"
import mongoose from "mongoose";
import cors from "cors";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", ProductsRouter)

mongoose.connect('mongodb://127.0.0.1:27017/we17303')

export const viteNodeApp = app;