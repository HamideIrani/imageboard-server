const { Router } = require("express");
const User = require("../models").user;

const router = new Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.findAll();
    res.send(users);
  } catch (e) {
    console.log(e.message);
  }
});

module.exports = router;
