const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const bcrypt = require("bcrypt");
const User = require("../models").user;

const router = new Router();

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (email == "" || password == "") {
      res.status(400).send({
        message: "Please supply a valid email and password",
      });
    }

    // find a user with this email
    const user = await User.findOne({
      where: {
        email: email,
      },
    });

    if (!user) return res.status(400).send("Incorrect credentials1");

    // check if passwords match
    const match = bcrypt.compareSync(password, user.password);

    if (!match) {
      return res.status(400).send("Incorrect credentials2");
    }

    // if they match, we create a token and send it back
    const token = toJWT({ userId: user.id });
    console.log("token", token);

    res.send({ message: "Congrats you are logged in!", token });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
