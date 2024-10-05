const express = require('express');
const userRoutes = require('./routes/userRoutes');
const noteRoutes = require('./routes/noteRoutes');
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.use(userRoutes);
app.use(noteRoutes);

module.exports = app;