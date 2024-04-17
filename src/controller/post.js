const Post = require('../model/post');

class PostController {
    async criarPost(titulo, conteudo) {
        if (
            titulo === undefined
            || conteudo === undefined
        ) {
            loggerController.createLog('error', 'titulo e conteudo são obrigatórios');
            throw new Error('titulo e conteudo são obrigatórios');
        }

        // INSERT INTO users (nome, email, senha) VALUES (nome, email, senha);
        const post = await Post
            .create({ titulo, conteudo});
        loggerController.createLog('success', 'Post adicionado com sucesso');

        return post;
    }

    async alterarPost(id, titulo, conteudo) {
        if (
            id === undefined
            || titulo === undefined
            || conteudo === undefined
        ) {
            loggerController.createLog('error', 'Id, nome, email e senha são obrigatórios');
            throw new Error('Id, nome, email e senha são obrigatórios');
        }

        const post = await this.buscarPorId(id);

        post.nome = nome;
        post.email = email;
        
        // UPDATE users SET nome = nome, email = email, senha = senha WHERE id = id;
        post.save();
        loggerController.createLog('success', 'Usuário alterado com sucesso');

        return post;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            loggerController.createLog('error', 'Id é obrigatório');
            throw new Error('Id é obrigatório');
        }

        const post = await Post.findByPk(id);

        if (!post) {
            loggerController.createLog('error', 'Usuário não encontrado');
            throw new Error('Usuário não encontrado');
        }

        return post;
    }

    async deletarPost(id) {
        if (id === undefined) {
            loggerController.createLog('error', 'Id do Post é obrigatório');
            throw new Error('Id do Post é obrigatório');
        }

        const post = await this.buscarPorId(id);

        post.destroy();
        loggerController.createLog('success', 'Usuário deletado com sucesso');
    }

    async listarPost() {
        loggerController.createLog('success', 'Listando posts');
        return Post.findAll();
    }
}

module.exports = new PostController();