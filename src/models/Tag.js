const { DataTypes, Model } = require('sequelize');
const sequelize = require('../databaseSequelize');

class Tag extends Model {}

Tag.init(
  {
    // on vient renseinger les attributs
    // pas besoin d'eimplément l'id, c'est géré par Sequelize

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'tag',
  }
);

module.exports = Tag;
