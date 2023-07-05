// dans ce fichier on gère la connection à la base de données

// 1. require le module pg
const { Client } = require('pg');

// 2. créer un client
const client = new Client(); // pas besoin de préciser, PG va chercher tout seul les infos dans le .env

// 3. connecter le client
client.connect();

// 4. exporter le client connecté
module.exports = client;