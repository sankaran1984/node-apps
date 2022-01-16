const http = require('http');
const port = process.env.PORT || 3000;
const sessions = require('./sessions.json');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, {'contentType':'text/html'});
        res.write('<h1>Welcome sankaran to nodejs world</h1>');
        res.write('<p>my first nodejs app</p>');
    } else if (req.url === '/api/sessions') {
        res.writeHead(200, {'contentType':'application/json'});
        res.write(JSON.stringify(sessions));
    } else {
        res.writeHead(404, {'contentType':'text/plain'});
        res.write(`404 Not Found: '${req.url}'`);
    }

    res.end();
});

server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});