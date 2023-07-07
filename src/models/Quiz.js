const { DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseSequelize');

class Quiz extends Model {}

Quiz.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'quiz',
  }
);

module.exports = Quiz;