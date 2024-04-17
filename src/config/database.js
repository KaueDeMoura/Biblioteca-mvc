const Sequelize = require('sequelize');

const database = new Sequelize(
    'biblioteca_mvc',
    'root',
    '',
    { host: 'localhost', dialect: 'mysql' }
)

module.exports = database;