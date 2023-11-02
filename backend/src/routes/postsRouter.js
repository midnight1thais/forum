const { Router } = require('express');
const router = Router();
const { listPosts, storePost } = require('../controllers/postsController')

router.get('/posts', listPosts);
router.post('/post/create', storePost);

module.exports = router;