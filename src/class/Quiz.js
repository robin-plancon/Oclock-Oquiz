const CoreModel = require("./CoreModel");

class Quiz extends CoreModel {
  #title;
  #description;
  #userId;

  constructor(title, description, userId) {
    super();
    this.#title = title;
    this.#description = description;
    this.#userId = userId;
  }

  get title() {
    return this.#title;
  }

  set title(value) {
    if(typeof value !== "string") {
      throw new Error("Le titre doit être une chaîne de caractères");
    }
    this.#title = value;
  }

  get description() {
    return this.#description;
  }

  set description(value) {
    if(typeof value !== "string") {
      throw new Error("La description doit être une chaîne de caractères");
    }
    this.#description = value;
  }

  get userId() {
    return this.#userId;
  }

  set userId(value) {
    if(typeof value !== "number") {
      throw new Error("L'id de l'utilisateur doit être un nombre");
    }
    this.#userId = value;
  }

  toString() {
    return `Quiz ${this.title}`;
  }
}

module.exports = Quiz;