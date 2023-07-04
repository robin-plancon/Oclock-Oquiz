const CoreModel = require("./CoreModel");

class User extends CoreModel {
  #email;
  #password;
  #firstname;
  #lastname;

  constructor(email, password, firstname, lastname) {
    super();
    this.#email = email;
    this.#password = password;
    this.#firstname = firstname;
    this.#lastname = lastname;
  }

  get email() {
    return this.#email;
  }

  set email(value) {
    if(typeof value !== "string") {
      throw new Error("L'email doit être une chaîne de caractères");
    }
    this.#email = value;
  }

  get password() {
    return this.#password;
  }

  set password(value) {
    if(typeof value !== "string") {
      throw new Error("Le mot de passe doit être une chaîne de caractères");
    }
    this.#password = value;
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

  get lastname() {
    return this.#lastname;
  }

  set lastname(value) {
    if(typeof value !== "string") {
      throw new Error("Le nom doit être une chaîne de caractères");
    }
    this.#lastname = value;
  }

  toString() {
    return `Utilisateur ${this.firstname} ${this.lastname}`;
  }
}

module.exports = User;