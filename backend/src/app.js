const express         = require('express');
const cors            = require('cors');
const app             = express();
require('dotenv').config();
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postsRouter');
const commentRouter   = require('./routes/commentsRouter');
const reactionsRouter = require('./routes/reactionsRouter');
const findUserRouter = require('./routes/findUserRoutes.js')

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3333);
app.use('/api', usersRouter);
app.use('/api/auth', loginRouter);
app.use('/api/posts', postRouter);
app.use('/api', commentRouter);
app.use('/api/reaction', reactionsRouter);
app.use('api/user', findUserRouter)

module.exports = app;