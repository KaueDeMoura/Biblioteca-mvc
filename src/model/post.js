const database = require('../config/database');

class Post {
    constructor() {
        this.model = database.define('posts', {
            id: {
                type: database.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.Sequelize.STRING
            },
            conteudo: {
                type: database.Sequelize.STRING
            },
            id_user: {
                type: database.Sequelize.STRING
            }

        });
    }
}

module.exports = (new Post).model;