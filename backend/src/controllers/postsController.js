const connection = require('../config/db');

async function listPosts(request, response) {
    const query = 'SELECT p.*, (SELECT count(r.post_id) FROM reactions r WHERE r.post_id = p.id ) as likes, ' + 
    ' (SELECT count(c.post_id) FROM comments c WHERE c.post_id = p.id ) as comments ' +
    ' FROM posts p ' + 
    ' GROUP BY p.id ORDER BY p.id DESC';

    connection.query(query, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Lista de posts.`,
                    data: results
                });
        } else {
            response
                .status(400)
                .json({
                    success: false,
                    message: `Não foi possível realizar a remoção. Verifique os dados informados`,
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    })
}

async function storePost(request, response) {    
    const params = Array(
        request.body.post,
        request.body.userId,        
    );
    
    const query = 'INSERT INTO posts(description,user_id) values(?,?);';

    connection.query(query, params, (err, results) => {        
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Post cadastrado.`,
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
    listPosts,
    storePost
}