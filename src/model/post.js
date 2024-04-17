const database = require('../config/database');

class Post {
    constructor() {
        this.model = database.db.define('posts', {
            id: {
                type: database.db.Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            titulo: {
                type: database.db.Sequelize.STRING
            },
            conteudo: {
                type: database.db.Sequelize.STRING
            }

        });
    }
}

module.exports = (new Post).model;