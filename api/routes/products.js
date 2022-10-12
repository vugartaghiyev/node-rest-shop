import express from "express";
const router = express.Router();

import { Product } from "../models/product.js";

import mongoose from "mongoose";

router.get("/", (req, res, next) => {
  Product.find()
    .exec()
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error,
      });
    });
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price,
  });

  product.save().then(console.log);

  res.status(201).json({
    createdProd: product,
    message: "Handling POST requests to /products",
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findById(id)
    .exec()
    .then((data) => {
      if (data) res.status(200).json(data);
      else
        res.status(404).json({
          message: "No valid entry found for provided id.",
        });
    })
    .catch((error) => {
      res.status(500).json({ error });
    });
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;

  // update is not working
  Product.updateMany(
    { _id: id },
    {
      $set: {
        name: req.body.name,
        price: req.body.price,
      },
    }
  )
    .exac()
    .then((data) => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({
        error,
      });
    });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  Product.remove({
    _id: id,
  })
    .exec()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(500).json({
        error,
      });
    });
});

export default router;
