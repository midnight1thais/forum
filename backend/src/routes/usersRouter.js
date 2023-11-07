const { Router } = require('express');
const router = Router();
const { listUsers, storeUser, listUserInfos } = require('../controllers/usersController')

router.get('/users', listUsers);
router.post('/user/create', storeUser);
router.get('/user/information/:id', listUserInfos);

module.exports = router;