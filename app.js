import express from "express";
import productsRouter from "./api/routes/products.js";

const app = express();

app.use("/products", productsRouter);

export default app;
