const app = require('./express');
const http = require('http').Server(app);
const socketio = require('./socketio');

socketio.listen(app);

const PORT = 5050;
http.listen(PORT, () => {
  console.log('server is listening on port: {}', PORT);
});
