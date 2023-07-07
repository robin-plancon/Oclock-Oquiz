const dotenv = require('dotenv');
dotenv.config();
const { Tag, User, Question, Answer, Quiz, Level } = require('./src/models');

async function testTag() {
  // Test des méthodes pour le modèle Tag
  const newTag = await Tag.create({
    name: 'Sequelize',
  });

  console.log(`Le nouveau Tag à l'ID : ${newTag.id}. Il a été génére automatiquement par la DB`);

  const oldTags = await Tag.findAll({ raw: true });
  console.log('tags', oldTags);

  const deletedTag = await Tag.destroy({
    where: {
      name: 'Sequelize',
    },
  });

  console.log(deletedTag); // retourne le nombre de lignes affectuées

  const tags = await Tag.findAll({ raw: true });
  console.log('tags', tags);
}

async function testUser() {
	// Test des méthodes pour le modèle User
	const newUser = await User.create({
		email: 'test@mail.com',
		password: 'test',
		firstname: 'Jean-claude',
		lastname: 'Van Damme',
	});
	console.log(`Le nouvel User à l'ID : ${newUser.id}. Il a été génére automatiquement par la DB`);

	const oldUsers = await User.findAll({ raw: true });
	console.log('users', oldUsers);

	const updatedUser = await User.update(
		{
			lastname: 'Duss',
		},
		{
			where: {
				id: newUser.id,
			},
		}
	);
	console.log(updatedUser); // retourne le nombre de lignes affectuées
	const searchNewUser = await User.findByPk(newUser.id, { raw: true });
	console.log('searchNewUser', searchNewUser);

	const deletedUser = await User.destroy({
		where: {
			id: newUser.id,
		},
	});

	console.log(deletedUser); // retourne le nombre de lignes affectuées

	const users = await User.findAll({ raw: true });
	console.log('users', users);
}

async function testAssociation() {
	// const question = await Question.findByPk(1, {
	// 	include: [
	// 		{
	// 			model: Answer,
	// 			as: 'answers',
	// 		},
	// 		"good_answer",
	// 	],
	// });
	// console.log(JSON.stringify(question, null, 4));

	// const userQuizzes = await User.findByPk(1, {
	// 	include: [
	// 		"quizzes"
	// 	],
	// });
	// console.log(JSON.stringify(userQuizzes, null, 4));

	const allQuizzes = await Quiz.findAll({
		include: [
			"tags",
			"author"
		],
	});
	console.log(JSON.stringify(allQuizzes, null, 4));
}

// testTag();
// testUser();
testAssociation();
