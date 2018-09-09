const http = require('http');
const hostname = 'localhost';
const port = 8000;

const car = JSON.stringify({
  name: 'Porsche',
  model: '911',
  color: 'white'
});

http.createServer((request, response) => {
  response.header("Access-Control-Allow-Origin", "*"); //doesn't work
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.end(car);
}).listen(port, hostname, function (){
  console.log('Server running at http://' + hostname + ':' + port + '/');
});
