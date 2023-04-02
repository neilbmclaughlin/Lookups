const http = require('http');
const url = require('url');
const capitals = require('./capitals.json')
const hostname = '127.0.0.1';
const port = 3000;

function getCapitalMessage (country) {
   const capital = capitals[country?.toLowerCase()] 
   if (capital) {
      return `The capital of ${capitalise(country)} is ${capitalise(capital)}`
   }
   return `The capital of ${capitalise(country)} is not known`
}

function capitalise(sentence) {
   return sentence.split(" ")
     .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
     .join(" ");
}

const server = http.createServer((req, res) => {
   res.statusCode = 200;
   res.setHeader('Content-Type', 'text/plain');

   const query = url.parse(req.url, true).query;
   const message = getCapitalMessage(query.country);
   res.end(message);
});

server.listen(port, hostname, () => {
   console.log(capitals)
   console.log(`Server running at http://${hostname}:${port}/`);
});