const { DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseSequelize');

class Question extends Model {}

Question.init(
  {
    question: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    anecdote: {
      type: DataTypes.STRING,
    },
    wiki: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    tableName: 'question',
  }
);

module.exports = Question;