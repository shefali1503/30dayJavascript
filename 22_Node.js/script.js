//This line imports the createServer function from Node.js's built-in HTTP module.
// const { createServer } = require('node:http');

import { createServer } from 'node:http';

const hostname = '127.0.0.1';// localhost
const port = 3000;//3000 is a commonly used port for local development servers.


//This sets up your server to handle HTTP requests:
// req is the incoming request object.
// res is the outgoing response object.
// Inside the handler:
// res.statusCode = 200: Sets the response status to OK (HTTP 200).
// res.setHeader('Content-Type', 'text/plain'): Informs the browser you're sending plain text.
// res.end('Hello World'): Ends the response and sends "Hello World" to the client.
const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'html');
  res.end('<h1>Hello world</h1>');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// This tells the server to listen on localhost:3000.
// When it starts, it logs:
// Server running at http://127.0.0.1:3000/