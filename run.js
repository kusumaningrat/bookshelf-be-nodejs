const app = require('./app/server');
const config = require('config');

const host = config.get('server.host');
const port = config.get('server.port');

// Database sync connection
const db = require('./db/init');

db.connect();

app.listen(port, host, () => {
    console.log(`Listening on ${host}:${port}`);
});