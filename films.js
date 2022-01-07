const { Sequelize } = require('sequelize');

const db = require('./db') 

const films = db.define(`films`, {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: Sequelize.STRING(),
      allowNull: false,
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
      isBefore: '2021-12-1',
    },
    format: {
      type: Sequelize.STRING,
      allowNull: false,
      equals: 'VHS' || 'DVD' || 'Blu-Ray',
    },
    actors: {
      type: Sequelize.ARRAY(Sequelize.STRING),
      allowNull: false,
    },
  },
)

module.exports = films; 