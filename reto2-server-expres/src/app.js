const express = require('express');
const cors = require('cors');
const userRouter = require('./router/user.router');

const app = express();

app.use(cors());
app.use(express.json());
app.use(userRouter);

app.set('port', process.env.PORT || 3000);

module.exports = app;