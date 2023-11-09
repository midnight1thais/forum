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
    const postId = request.params.post_id; // Extrair o post_id dos parâmetros da URL
    console.log("Post ID:", postId);
  
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM posts WHERE post_id = ?', [postId], (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to return post informations.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else if (results.length > 0) {
        response.status(200).json({
          success: true,
          message: 'Success in returning post informations.',
          data: results[0]
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return post informations. Post not found.`,
        });
      }
    });
  }


module.exports = {
    listPosts,
    newPost,
    findPost
}