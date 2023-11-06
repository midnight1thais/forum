const { Router } = require('express');

const router = Router();

const { 
    listPosts,
    newPost,
    findPost
} = require('../controllers/postsController')

router.get('/posts', listPosts);
router.post('/create', newPost);
router.post('/find_posts', findPost);

module.exports = router;