require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
  define: {
    // Permet de définir des options pour tous les modèles et toutes les tables

    timestamps: true, // gestion automatique des timastamps sur les champs createdAt et updatedAt
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    underscored: true, //Passe le noms des champs de camelCase en snake_case
  }
});

async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully');
  } catch (e) {
    console.log('Unable to connect to the DB', e);
  }
}

testConnection();

module.exports = sequelize;
