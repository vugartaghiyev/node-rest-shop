import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";

import productsRouter from "./api/routes/products.js";
import ordersRouter from "./api/routes/orders.js";

const app = express();

app.use(morgan("dev"));
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use("/products", productsRouter);
app.use("/orders", ordersRouter);

app.use((req, res, next) => {
  const error = new Error("Not found.");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

export default app;
