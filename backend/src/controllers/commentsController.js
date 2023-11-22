// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Função que retorna todos usuários no banco de dados
async function listComments(request, response) {
    const postId = request.params.commentPost_id;
  
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM comments WHERE commentPost_id = ?', [postId], (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to return user informations.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else if (results.length > 0) {
        response.status(200).json({
          success: true,
          message: 'Success in returning user informations.',
          data: results
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return user informations. User not found.`,
        });
      }
    });
}


async function newComment(request, response) {
    console.log("Novo comentário recebido:", request.body);

    const values = [
        request.body.comment_descricao,
        request.body.commentUser_id,
        request.body.commentPost_id,
    ];

    const query = "INSERT INTO comments (comment_descricao, commentUser_id, commentPost_id) VALUES (?, ?, ?)";

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, values, (err, results) => {
                if (err) {
                    console.error('Erro no banco de dados:', err);
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });

        console.log("Comentário criado com sucesso:", results);
        response.status(201).json({
            success: true,
            message: "Sucesso! Comentário criado",
            data: results
        });
    } catch (err) {
        response.status(400).json({
            success: false,
            message: "Não foi possível criar o comentário",
            query: query,
            sqlMessage: err.sqlMessage
        });
    }
}


module.exports = {
    listComments,
    newComment,
}