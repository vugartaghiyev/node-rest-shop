import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Here are the orders",
  });
});

router.post("/", (req, res, next) => {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity,
  };
  res.status(201).json({
    message: "Orders was created",
    order: order,
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(201).json({
    message: "Order",
    id: id,
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;
  res.status(201).json({
    message: "Order Deleted",
    id: id,
  });
});

export default router;
