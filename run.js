const config = require('config');
const app = require('./src/app/server');

const host = config.get('server.host');
const port = config.get('server.port');


// Database sync connection
const db = require('./initialize/db');

db.connect();

app.listen(port, host, () => {
    console.log(`Listening on ${host}:${port}`);
});