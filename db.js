const Sequelize = require('sequelize');

const conString = "postgres://postgres:vow@localhost:5432/films";

module.exports = new Sequelize(conString, {
    dialect: "postgres",
    host: "localhost",
})




