const mongoose = require('mongoose');

//const URI = 'mongodb://localhost/mernstack'; //Conexión no muy seguro para un ambiente de trabajo real
console.log(process.env.MONGODB_URI);
const URI = process.env.MONGODB_URI ? process.env.MONGODB_URI :'mongodb://localhost/databasetest';
    
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('DB is connected');
});