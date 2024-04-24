const Post = require('../model/post');
const User = require('../model/user');

class PostController {
    async criarPost(id_user, titulo, conteudo) {
        if (
            id_user === undefined
            || titulo === undefined
            || conteudo === undefined
        ) {

            throw new Error('Id, titulo e conteudo são obrigatórios');
        }

        const PostExistente = await Post.findOne({ where: { titulo, conteudo } });
        if (PostExistente) {
            throw new Error('Este Post já foi realizado!');
        }

        const user = await User.findByPk(id_user);
        if (!user) {
            throw new Error('Usuário não encontrado');
        }
        
        const post = await Post.create({id_user, titulo, conteudo });

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