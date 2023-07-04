const CoreModel = require("./CoreModel");

class Answer extends CoreModel {
  #description;
  #questionId;

  constructor(description, questionId) {
    super();
    this.#description = description;
    this.#questionId = questionId;
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

  get questionId() {
    return this.#questionId;
  }

  set questionId(value) {
    if(typeof value !== "number") {
      throw new Error("L'id de la question doit être un nombre");
    }
    this.#questionId = value;
  }

  toString() {
    return `Réponse ${this.id} : ${this.description}`;
  }
}

module.exports = Answer;
