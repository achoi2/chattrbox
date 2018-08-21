const WS = require('ws');

let ws = new WS.Server({ port: 3001 });

ws.on('connection', client => {
    console.log('Hey there! Someone connnected');
    client.on('message', message => {
        ws.clients.forEach(connection => {
            connection.send(message);
        });
    });
});
