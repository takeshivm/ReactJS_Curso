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
    //app.get('/api/users', (req, res) => res.send('Users routes'));
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))



module.exports = app;