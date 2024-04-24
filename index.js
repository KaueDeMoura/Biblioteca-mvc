const express = require('express');
const database = require('./src/config/database');

const UserApi = require('./src/api/user');
const PostApi = require('./src/api/post')

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send({ response: 'Hello World!' });
})
const userApi = new UserApi();

app.post('/login', userApi.login);
app.post('/users', userApi.criarUsuario);


app.use(userApi.validarToken);

app.get('/users', userApi.listarUsuario);
app.put('/users/:id', userApi.alterarUsuario);
app.delete('/users/:id', userApi.deletarUsuario);
const postApi = new PostApi();

app.get('/posts', postApi.listarPost);
app.post('/posts', postApi.criarPost);
app.put('/posts/:id', postApi.alterarPost);
app.delete('/posts/:id', postApi.deletarPost);




database.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });

