const Sequelize = require("sequelize");
const sequelize = new Sequelize("seller_admin", "root", "", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;