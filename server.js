import { createServer } from 'http';
import express from 'express';

// Import sockets file
import initSockets from './sockets';

const app = express();
const server = createServer(app);

// Setting up the port
app.set('port', process.env.PORT || 5000);

// Listening to server
server.listen(app.get('port'), () =>
  console.log(`server running on port ${app.get('port')}...`)
);

initSockets(server);
