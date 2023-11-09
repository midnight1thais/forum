const { Router } = require('express');

const router = Router();

const { 
    listPosts,
    newPost,
    findPost
} = require('../controllers/postsController')

router.get('/posts', listPosts);
router.post('/create', newPost);
router.get('/find/:post_id', findPost);

module.exports = router;