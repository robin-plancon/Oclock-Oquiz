const { DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseSequelize');

class Answer extends Model {}

Answer.init(
  {
    // on vient renseinger les attributs
    // pas besoin d'eimplément l'id, c'est géré par Sequelize
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'answer',
  }
);

module.exports = Answer;
