const Tag = require('./Tag');
const User = require('./User');
const Quiz = require('./Quiz');
const Question = require('./Question');
const Level = require('./Level');
const Answer = require('./Answer');

// On définit les associations entre les tables

// Un quiz a un auteur
Quiz.belongsTo(User, { foreignKey: 'user_id', as: 'author' });
// Un auteur peut avoir écrit plusieurs quiz
User.hasMany(Quiz, { foreignKey: 'user_id', as: 'quizzes' });

// Un quiz a plusieurs questions
Quiz.hasMany(Question, { foreignKey: 'quiz_id', as: 'questions' });
// Une question appartient à un quiz
Question.belongsTo(Quiz, { foreignKey: 'quiz_id', as: 'quiz' });

// Un niveau a plusieurs questions
Level.hasMany(Question, { foreignKey: 'level_id', as: 'questions' });
// Une question à un niveau
Question.hasOne(Level, { foreignKey: 'level_id', as: 'level' });

// Une question a plusieurs réponses
Question.hasMany(Answer, { foreignKey: 'question_id', as: 'answers' });
// Une réponse appartient à une question
Answer.belongsTo(Question, { foreignKey: 'question_id', as: 'question' });

// Une réponse est la bonne réponse d'une question
Question.belongsTo(Answer, { foreignKey: 'answer_id', as: 'good_answer' });
// Une réponse peut être la bonne réponse de plusieurs questions
Answer.hasOne(Question, { foreignKey: 'answer_id', as: 'validate_answer' });

// Un quiz a plusieurs tags
Quiz.belongsToMany(Tag, {
  through: 'quiz_has_tag',
  as: 'tags',
  foreignKey: 'quiz_id',
  otherKey: 'tag_id',
});
// Un tag appartient à plusieurs quiz
Tag.belongsToMany(Quiz, {
  through: 'quiz_has_tag',
  as: 'quizzes',
  foreignKey: 'tag_id',
  otherKey: 'quiz_id',
});


module.exports = { Tag, User, Quiz, Question, Level, Answer };