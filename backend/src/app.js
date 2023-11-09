const express         = require('express');
const cors            = require('cors');
const app             = express();
require('dotenv').config();
const usersRouter = require('./routes/usersRouter');
const loginRouter = require('./routes/loginRouter');
const postRouter = require('./routes/postsRouter');
const commentRouter   = require('./routes/commentsRouter');
const reactionsRouter = require('./routes/reactionsRouter');

app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 8000);
app.use('/api', usersRouter);
app.use('/api/auth', loginRouter);
app.use('/api/posts', postRouter);
app.use('/api/comments', commentRouter);
app.use('/api/reaction', reactionsRouter);

module.exports = app;