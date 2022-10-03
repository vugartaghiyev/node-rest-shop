import express from "express";
const router = express.Router();

router.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Handling GET requests to /products",
  });
});

router.post("/", (req, res, next) => {
  res.status(201).json({
    message: "Handling POST requests to /products",
  });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  if (id === "special") {
    res.status(200).json({
      message: "Your id is " + id,
    });
  }

  res.status(200).json({
    message: "inncorrect id " + id,
  });
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
