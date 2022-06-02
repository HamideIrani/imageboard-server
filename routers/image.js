const { Router } = require("express");
const Image = require("../models").image;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const users = await Image.findAll();
    res.send(images);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
