class CoreModel {
  #id;
  #createdAt;
  #updatedAt;

  constructor() {
    this.#id = null;
    this.#createdAt = null;
    this.#updatedAt = null;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    if(typeof value !== "number") {
      throw new Error("L'id doit être un nombre");
    }
    this.#id = value;
  }

  get createdAt() {
    return this.#createdAt;
  }

  set createdAt(value) {
    if(typeof value !== "string") {
      throw new Error("La date de création doit être une chaîne de caractères");
    }
    this.#createdAt = value;
  }

  get updatedAt() {
    return this.#updatedAt;
  }

  set updatedAt(value) {
    if(typeof value !== "string") {
      throw new Error("La date de modification doit être une chaîne de caractères");
    }
    this.#updatedAt = value;
  }

}

module.exports = CoreModel;