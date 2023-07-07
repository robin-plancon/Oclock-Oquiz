const { DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseSequelize');

class Level extends Model {}

Level.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    tableName: 'level',
  }
);

module.exports = Level;