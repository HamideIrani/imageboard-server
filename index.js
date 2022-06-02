require("dotenv").config();
const express = require("express");

const app = express();

console.log(process.env);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
