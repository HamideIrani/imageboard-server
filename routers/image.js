const { Router } = require("express");
const Image = require("../models").image;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const images = await Image.findAll();
    res.send(images);
  } catch (e) {
    console.log(e.message);
  }
});

router.post("/", async (req, res) => {
  try {
    const { title, url } = req.body;

    const newImage = await Image.create({ title, url });

    res.send(newImage);
  } catch (e) {
    console.log(e.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const imageId = req.params.id;

    const oneImage = await Image.findByPk(imageId);

    if (!oneImage) {
      return res.status(404).send("Image not found");
    }

    res.send(oneImage);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
