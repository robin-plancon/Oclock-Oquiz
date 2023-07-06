const Tag = require('../models/Tag');
const User = require('../models/User');

async function testModels() {
  // === Get All Tags
  // On utilise une méthode statique
  // Pas besoin de créer un nouvel objet pour l'utiliser !
  const tags = await Tag.findAll();
  console.log(tags);


  // === Get One Tag
  const tag = await Tag.findById(5);
  console.log(tag);


  // === Create Tag
  const newTag = new Tag({ name: "Dev web" }); // Création d'un nouvel objet Tag
  await newTag.create(); // Save en DB (génère l'id et le met dans l'objet newTag)


  // === Delete Tag
  // On crée un tag pour préparer le test de suppression
  const newTagToDelete = new Tag({ name: "Dev Web2" }); /// création de l'objet
  await newTagToDelete.create(); // Inserion dans la DB
  console.log(newTagToDelete);

  // Je le supprime
  const isDeleted = await newTagToDelete.delete(); // Supprime le tag de la DB
  console.log(isDeleted);


  // == Update Tag
  tag.name = "storm"; // On modifie l'objet tag
  await tag.update(); // On repercute la modif en DB
  console.log(tag); // On log la modif

  // === Get All Users
  const users = await User.findAll();
  console.log(users);

  // === Get One User
  const user = await User.findById(1);
  console.log(user);

  // === Create User
  const newUser = new User({
    firstname: "Jean",
    lastname: "Bon",
    email: "jean.bon@oui.com",
    password: "1234",
  });
  await newUser.insert();

  // === Delete User
  const newUserToDelete = new User({
    firstname: "Jean",
    lastname: "Mauvais",
    email: "jean.mauvais@non.com",
    password: "1234",
  });
  await newUserToDelete.insert();
  console.log(newUserToDelete);

  const isDeletedUser = await newUserToDelete.delete();
  console.log(isDeletedUser);

  // === Update User
  user.firstname = "Michel";
  await user.update();
  console.log(user);
}

// testModels();

module.exports = testModels;
