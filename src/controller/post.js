const Post = require('../model/post');

class PostController {
    async criarPost(titulo, conteudo) {
        if (
            titulo === undefined
            || conteudo === undefined
        ) {

            throw new Error('titulo e conteudo são obrigatórios');
        }
        
        const post = await Post.create({ titulo, conteudo });

        return post;
    }

    async alterarPost(id, titulo, conteudo) {
        if (
            id === undefined
            || titulo === undefined
            || conteudo === undefined
        ) {
            throw new Error('Titulo e conteudo são obrigatórios');
        }

        const post = await this.buscarPorId(id);

        post.titulo = titulo;
        post.conteudo = conteudo;

        post.save();
        return post;
    }

    async buscarPorId(id) {
        if (id === undefined) {
            throw new Error('Id é obrigatório');
        }

        const post = await Post.findByPk(id);

        if (!post) {
            throw new Error('Post não encontrado');
        }

        return post;
    }

    async deletarPost(id) {
        if (id === undefined) {
            throw new Error('Id do Post é obrigatório');
        }
        const post = await this.buscarPorId(id);

        post.destroy();
    }

    async listarPost() {
        return Post.findAll();
    }
}

module.exports = PostController;