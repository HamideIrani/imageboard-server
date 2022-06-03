const express = require("express");
const userRouter = require("./routers/user");
const imageRouter = require("./routers/image");
const authRouter = require("./routers/auth");

const app = express();
const PORT = process.env.PORT || 4000;

// middlewares
const jsonParser = express.json();
app.use(jsonParser);

// routers
app.use("/users", userRouter);
app.use("/images", imageRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
