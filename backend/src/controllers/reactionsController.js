const connection = require('../config/db');

async function reactionsByPostId(request, response) {

    const query = "SELECT sum(case when type = 'LIKE' and post_id = ? then 1 else 0 end) AS likes, " +
    "sum(case when type = 'DESLIKE' and post_id = ? then 1 else 0 end) AS deslikes FROM reactions;";

    const params = Array(
        request.params.post_id,
        request.params.post_id
    );
    console.log(params)
    connection.query(query, params, (err, results) => {        
        if (results) {
            response
                .status(200)
                .json({
                    success: true,
                    message: `Sucesso! Reações por post.`,
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

async function storeReaction(request, response) {
        
    const params = Array(        
        request.body.postId,        
        request.body.comment_id ? request.body.comment_id : null,
        request.body.userId,        
    );

    const query = 'INSERT INTO reactions(post_id,comment_id,user_id) values(?,?,?);';

    connection.query(query, params, (err, results) => {
        if (results) {
            response
                .status(201)
                .json({
                    success: true,
                    message: `Sucesso! Reação cadastrada.`,
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
    storeReaction,
    reactionsByPostId
}