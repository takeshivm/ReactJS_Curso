require('dotenv').config();

const app = require('./app');
require('./database');

async function main() {
    //await app.listen(4000)
    await app.listen(app.get('port'))
    console.log('Server on port 4000');    
}

main();