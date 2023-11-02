const connection = require('../config/db');

async function commentsByPostId(request, response) {

    const query = 
    " SELECT u.name, c.id, c.description, DATE_FORMAT(c.created_at, '%d/%m/%Y %H:%i:%s') as data_criacao, c.user_id " +
    " FROM comments c, users u" +
    " WHERE c.post_id = ? and c.user_id = u.id ";

    const params = Array(
        request.params.post_id
    );
    
    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de comentarios.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storeComment(request, response) {    
    const params = Array(
        request.body.description,
        request.body.idUser,        
        request.body.idPost
    );

    const query = 'INSERT INTO comments(description,user_id,post_id) values(?,?,?);';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Comentário cadastrado.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a ação. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }        
    })
}

module.exports = {
    commentsByPostId,
    storeComment
}