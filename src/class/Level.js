const CoreModel = require("./CoreModel");

class Level extends CoreModel {
  #name;

  constructor(name) {
    super();
    this.#name = name;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if(typeof value !== "string") {
      throw new Error("Le nom doit être une chaîne de caractères");
    }
    this.#name = value;
  }

  toString() {
    return `Niveau ${this.name}`;
  }
}

module.exports = Level;