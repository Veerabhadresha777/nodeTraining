// run `node index.js` in the terminal

const http = require('http');
const port = 8080;
const urlget = require('./helper');
http
  .createServer(function (request, response) {
    if (request.url === '/file1') {
      console.log('veera here');
    }
    const url = urlget(request.url);
    console.log(url);
    console.log('I am Alive', port);
    response.write('Hi Veera');
    response.end;
  })
  .listen(port);
