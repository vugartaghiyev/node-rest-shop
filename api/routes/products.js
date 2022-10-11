import express from "express";
const router = express.Router();

import {Product} from '../models/product.js'

import mongoose from 'mongoose'

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products",
  }); 
});

router.post("/", (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  })

  product.save().then(console.log)

  res.status(201).json({
    createdProd: product,
    message: "Handling POST requests to /products",
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  Product.findById(id).exec().then((data) => {
    res.status(200).json(data)
  }).catch((error) => {
    res.status(500).json({error})
  })
});

router.patch("/:id", (req, res, next) => {
  const id = req.params.id;

  res.status(200).json({
    message: "Updated " + id,
  });
});

router.delete("/:id", (req, res, next) => {
  const id = req.params.id;

  res.status(200).json({
    message: "Deleted " + id,
  });
});

export default router;
