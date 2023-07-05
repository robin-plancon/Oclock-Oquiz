const CoreModel = require('./CoreModel');

class Quiz extends CoreModel {
  title;
  description;

  constructor(obj) {
    super(obj);

    if (typeof obj.title !== "string") {
      throw new Error("Quiz title must be a string");
    }
    this.title = obj.title;

    if (typeof obj.description !== "string") {
      throw new Error("Quiz description must be a string");
    }
    this.description = obj.description;
  }
}

// const newQuiz = new Quiz({ id: 14, title: "toto", description: "coucou" });
// console.log(newQuiz.id);

module.exports = Quiz;