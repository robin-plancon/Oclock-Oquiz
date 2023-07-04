const CoreModel = require("./CoreModel");

class Question extends CoreModel {
  #question;
  #anecdote;
  #wiki;
  #levelId;
  #answerId;
  #quizId;

  constructor(question, anecdote, wiki, levelId, answerId, quizId) {
    super();
    this.#question = question;
    this.#anecdote = anecdote;
    this.#wiki = wiki;
    this.#levelId = levelId;
    this.#answerId = answerId;
    this.#quizId = quizId;
  }

  get question() {
    return this.#question;
  }

  set question(value) {
    if(typeof value !== "string") {
      throw new Error("La question doit être une chaîne de caractères");
    }
    this.#question = value;
  }

  get anecdote() {
    return this.#anecdote;
  }

  set anecdote(value) {
    if(typeof value !== "string") {
      throw new Error("L'anecdote doit être une chaîne de caractères");
    }
    this.#anecdote = value;
  }

  get wiki() {
    return this.#wiki;
  }

  set wiki(value) {
    if(typeof value !== "string") {
      throw new Error("Le lien wiki doit être une chaîne de caractères");
    }
    this.#wiki = value;
  }

  get levelId() {
    return this.#levelId;
  }

  set levelId(value) {
    if(typeof value !== "number") {
      throw new Error("L'id du niveau doit être un nombre");
    }
    this.#levelId = value;
  }

  get answerId() {
    return this.#answerId;
  }

  set answerId(value) {
    if(typeof value !== "number") {
      throw new Error("L'id de la réponse doit être un nombre");
    }
    this.#answerId = value;
  }

  get quizId() {
    return this.#quizId;
  }

  set quizId(value) {
    if(typeof value !== "number") {
      throw new Error("L'id du quiz doit être un nombre");
    }
    this.#quizId = value;
  }

  toString() {
    return `Question ${this.id} : ${this.question}`;
  }
}

module.exports = Question;