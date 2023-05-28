const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./utils/database");
const cors = require("cors");
const app = express();
const path= require('path');

app.use(bodyParser.json({ extended: false }));

app.use(cors());

const productRoutes = require("./routers/products");

app.use(productRoutes);
app.use(express.static(path.join(__dirname,'public')))

sequelize
  .sync()
  .then()
  .catch((err) => console.log(err));

app.listen(3000);