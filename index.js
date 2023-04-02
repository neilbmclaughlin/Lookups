const http = require('http');
const url = require('url');
const capitals = require('./capitals.json')
const hostname = '127.0.0.1';
const port = 3000;

function getCapitalMessage (country) {
  return `The capital of ${country} is ${capitals[country]}`
}

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');

   const parsedUrl = url.parse(req.url);
   const country = parsedUrl.pathname.replace(/^\//, '');
   const message = getCapitalMessage(country);
   res.end(message);
});

server.listen(port, hostname, () => {
   console.log(capitals)
   console.log(`Server running at http://${hostname}:${port}/`);
});
