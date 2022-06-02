require("dotenv").config();

const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");

const express = require("express");

const app = express();

console.log(process.env);

const PORT = process.env.PORT || 4000;

app.use("/users", userRouter);
app.use("/images", imageRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
