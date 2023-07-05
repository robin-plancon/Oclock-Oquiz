const CoreModel = require('./CoreModel');

class Question extends CoreModel {
  question;
  anectode;
  wiki;

  constructor(obj) {
    super(obj);

    if (typeof obj.question !== "string") {
      throw new Error("Question question must be a string");
    }
    this.question = obj.question;

    if (typeof obj.anectode !== "string") {
      throw new Error("Question anectode must be a string");
    }
    this.anectode = obj.anectode;

    if (typeof obj.wiki !== "string") {
      throw new Error("Question wiki must be a string");
    }
    this.wiki = obj.wiki;
  }
}

module.exports = Question;