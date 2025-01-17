const http = require('http');

const hostname = '127.0.0.1'; // Localhost
const port = 3000; // Port to run the app

// Create a simple HTTP server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World! Welcome to my Node.js App!\n');
});

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
