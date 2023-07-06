const User = require('../models/User');
const testModels = require('../dataMappers/test');

const mainController = {
  renderHomePage: async(req, res) => {
    const users = await User.findAll();
    console.log(users);
    await testModels();
    // res.render('home');
    res.send('ok');
  }
}; 

module.exports = mainController;