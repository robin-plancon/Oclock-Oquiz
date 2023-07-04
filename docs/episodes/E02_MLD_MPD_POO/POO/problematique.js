/**
 * Imaginons qu'on ait envi de créer des objets pour représenter des personnages
 * On va créer un premier objet avec des propriétés et méthodes
 * Si on a besoin de faire 10 autres perso, bah on va créer 10 autres objets avec les même propriétés et méthodes...
 * 
 * 
 */

/**
 * Création d'un objet Personnage
 * @param {string} lastname - Nom du personnage
 * @param {string} firstname - Prénom du personnage
 * @param {number} age - Age du personnage
 * @param {string} house - Maison du personnage
 * @param {boolean} student - Est-ce que le personnage est un étudiant ?
 * 
 * @method presentation - Méthode qui permet de présenter le personnage
 */
class Personnage {
  constructor(lastname, firstname, age, house, student) {
    this.#lastname = lastname;
    this.#firstname = firstname;
    this.#age = age;
    this.#house = house;
    this.#student = student;
  }

  get lastname() {
    return this.#lastname;
  }

  set lastname(value) {
    if(typeof value !== "string") {
      throw new Error("Le nom doit être une chaîne de caractères");
    }
    this.#lastname = value;
  }

  get firstname() {
    return this.#firstname;
  }

  set firstname(value) {
    if(typeof value !== "string") {
      throw new Error("Le prénom doit être une chaîne de caractères");
    }
    this.#firstname = value;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if(typeof value !== "number") {
      throw new Error("L'âge doit être un nombre");
    }
    this.#age = value;
  }

  get house() {
    return this.#house;
  }

  set house(value) {
    if(typeof value !== "string") {
      throw new Error("La maison doit être une chaîne de caractères");
    }
    this.#house = value;
  }

  get student() {
    return this.#student;
  }

  set student(value) {
    if(typeof value !== "boolean") {
      throw new Error("La valeur doit être un booléen");
    }
    this.#student = value;
  }
  
  presentation() {
    console.log(`Bonjour, je m'appelle ${this.firstname} ${this.lastname}, j'ai ${this.age} ans et je suis à ${this.house}`);
  }
}

const harry = new Personnage("Potter", "Harry", 29, "Gryffondor", true);
harry.presentation();
const hermione = new Personnage("Granger", "Hermione", 29, "Gryffondor", true);
const ron = new Personnage("Weasley", "Ron", 29, "Gryffondor", true);
const drago = new Personnage("Malfoy", "Drago", 29, "Serpentard", true);
const voldemort = new Personnage("Voldemort", "Tom Elvis Jedusor", 71, "Serpentard", false);