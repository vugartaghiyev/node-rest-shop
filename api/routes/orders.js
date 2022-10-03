import express from "express";

const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Here are the orders",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Orders was created",
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
