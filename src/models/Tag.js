const CoreModel = require('./CoreModel');
const dbClient = require('../database');

class Tag extends CoreModel {
  name;

  constructor(obj) {
    super(obj); // On passe l'obj au CoreModel pour qu'il puisse initialiser l'id
    this.name = obj.name;
  }

  //! Les méthode statiques sont ratachées à la classe et non à l'objet
  // Ce qui veut dire qu'on peut les utiliser sans avoir à faire une nouvelle instance de classe
  // ? Y'a besoin d'infos d'instance dans la méthode ? (utilisation du this)
  //* OUI => Méthode normale
  //* NON => Méthode statique
  static async findAll() {
    try {
      const results = await dbClient.query('SELECT * FROM "tag"');

      // On prépare un tableau pour accueilir des objet Tag
      const tags = [];

      results.rows.forEach((row) => {
        // Pour chaque entrée de la DB, on instancie un nouveau Tag
        const tag = new Tag(row);
        // Qu'on rajoute dans la tableau
        tags.push(tag);
      });

      // On retroune le tableau contenant les objets Tag
      // Chaque objet va contenir les infos provenant de la DB
      return tags;
    } catch (error) {
      console.log(error);
    }
  }

  // Pas besoin du mot clé this dans la mtéhode, du coup => statique
  static async findById(id) {
    try {
      const result = await dbClient.query('SELECT * FROM "tag" WHERE id = $1', [id]); // Req préparée
      const rawTag = result.rows[0];
  
      if (!rawTag) { return null; }
  
      // On crée un nouveau Tag avec les données de la DB
      // On on le retourne
      return new Tag(rawTag);
    } catch (error) {
      console.log(error);
    }
  }

  // Cette méthode sera appelée pour créer une entrée en DB
  async create() {
    try {
      // On déclenche un requ SQL pour l'insertion et elle nous retourne le nouvel id 
      const result = await dbClient.query('INSERT INTO tag ("name") VALUES ($1) RETURNING "id"', [this.name]);

      // Si l'insertion ne se passe pas bien
      if (result.rowCount === 0) { // rowCount nous permet d'avoir le nb de lignes affectées par la req SQL
        throw new Error("INSERT Tag did not return any id");
      }

      // Si l'insertion se passe bien, on a recup le nouvel id
      // Et on va pouvoir le mettre dans l'objet courant
      this.id = result.rows[0].id;

      // Typique d'Active Record : On retourne l'instance courante (avec les infos insérée en DB)
      return this;
    } catch (error) {
      console.log(error);
    }
  }

  // Cette méthode sera appelée pour supprimer une entrée de la DB
  async delete() {
    try {
      console.log(this);
      const result = await dbClient.query('DELETE FROM "tag" WHERE id = $1', [this.id]);

      if (result.rowCount === 0) {
        throw new Error("DELETE tag operation did not affected any row");
      }

      return true;
    } catch (error) {
      console.log(error);
    }
  }

  // Cette méthode sera appelée pour mettre à jour une entrée en DB
  async update() {
    try {
      console.log(this);
      const result = await dbClient.query(
        'UPDATE "tag" SET "name" = $1 WHERE "id" = $2',
        [this.name, this.id]
      );

      if (result.rowCount === 0) {
        throw new Error("UPDATE tag operation did not affected any row");
      }

      return this;
    } catch (error) {
      console.log(error);
    }
  }
}

// Objectif d'utilisation de la méthode create
// const dataFromFormulaire = { name: "mouhfyzeg" }; // Recup les infos depuis un formulaire
// const newTag = new Tag(dataFromFormulaire); // Création d'un nouvel objet Tag
// console.log(newTag); // N'a pas d'id
// newTag.create(); // Save en DB
// console.log(newTag); // A son id



module.exports = Tag;







// const CoreModel = require('./coreModel');

// class Tag extends CoreModel {
//   name;

//   constructor(obj) {
//     super(obj); // On passe l'obj au CoreModel pour qu'il puisse initialiser l'id
//     this.name = obj.name;
//   }
// }

// module.exports = Tag;