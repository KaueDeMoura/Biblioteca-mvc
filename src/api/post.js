const PostController = require('../controller/post');

class UserApi {
    async criarPost(req, res) {
        const titulo = req.body.nome
        const conteudo = req.body.email;
        const controller = new postController();

        try {
            const post = await controller.criarPost(titulo, conteudo);
            return res.status(201).send(post);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async alterarPost(req, res) {
        const { id } = req.params;
        const { titulo, conteudo } = req.body;
        const controller = new PostController();

        try {
            const post = await controller.alterarPost(Number(id), titulo, conteudo);
            return res.status(200).send(post);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async deletarPost(req, res) {
        const { id } = req.params;
        const controller = new PostController();

        try {
            await controller.deletarPost(Number(id));
            return res.status(204).send();
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }

    async listarPost(req, res) {
        const controller = new PostController();

        try {
            const posts = await controller.listarPosts();
            return res.status(200).send(posts);
        } catch (error) {
            return res.status(400).send({ error: error.message })
        }
    }
}

module.exports = UserApi;