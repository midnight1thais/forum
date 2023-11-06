// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Função que retorna todos usuários no banco de dados
async function listPosts(request, response) {
    connection.query('SELECT * FROM posts', (err, results) => { 
        try {  
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de posts com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os posts.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}


// Função que cria um novo post
async function newPost(request, response) {
    const values = [
        request.body.post_name,
        request.body.post_descricao,
        request.body.userPost_id
    ];

    const query = "INSERT INTO posts (post_name, post_descricao, userPost_id) VALUES (?, ?, ?)";

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        response.status(201).json({
            success: true,
            message: "Sucesso! Post criado",
            data: results
        });
    } catch (err) {
        response.status(400).json({
            success: false,
            message: "Não foi possível criar o post",
            query: query,
            sqlMessage: err.sqlMessage
        });
    }
}

async function findPost(request, response) {
    // Preparar o comando de execução no banco
    const query = "SELECT * FROM posts WHERE `post_id` = ?";
    
    // Recuperar credenciais informadas
    const params = [request.body.article_id];

    // Executa a ação no banco e valida os retornos para o cliente que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results.length > 0) {                
                const user = {
                    post_id: results[0].article_id,
                    post_name: results[0].post_name,
                    post_descricao: results[0].post_descricao,
                    userPost_id: results[0].userPost_id,
                    create_at: results[0].create_at
                };
                
                response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Post encontrado.`,
                    data: user
                });
            } else {
                response
                    .status(404)
                    .json({
                        success: false,
                        message: `Post não encontrado. Verifique o ID informado`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar o post.",
                error: e
            });
        }
    });
}


module.exports = {
    listPosts,
    newPost,
    findPost
}