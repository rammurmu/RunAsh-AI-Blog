const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/posts');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api', postRoutes);

module.exports = app;
