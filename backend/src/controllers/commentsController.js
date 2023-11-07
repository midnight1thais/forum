// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Função que retorna todos usuários no banco de dados
async function listComments(request, response) {
    const query = "SELECT * FROM comments WHERE `post_id` = ?";
    
    const params = [request.params.post_id];

    // Executa a ação no banco e valida os retornos para o cliente que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {            
            if (results) {                
                response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Comentários encontrados.`,
                    data: results
                });
            } else {
                response
                    .status(404)
                    .json({
                        success: false,
                        message: `Comentários não encontrados. Verifique o ID informado`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro ao buscar os comentários.",
                error: e
            });
        }
    });
}


// Função que cria um novo post
async function newComment(request, response) {
    const values = [
        request.body.descricao,
        request.body.idUser,
        request.body.idPost,
    ];

    const query = "INSERT INTO comments (descricao, user_id, post_id) VALUES (?, ?, ?)";

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