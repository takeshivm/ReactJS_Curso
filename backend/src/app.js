// npm run dev para inciar el servidor

const express = require('express');
const cors = require('cors');
const app = express();

// settings
app.set('port', process.env.PORT || 4000); 



// middlewares
app.use(cors());
app.use(express.json()); // Con esto el servidor soportará formatos json y strings



// routes
app.get('/users', (req, res) => res.send('Users routes'));
app.get('/notes', (req, res) => res.send('Notes routes'));



module.exports = app;