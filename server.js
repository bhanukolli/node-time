const http = require('http');

function process_request(req, res) {
  console.log("INcomming requet" + req.method + "" +req.url);
  var body = 'Thanks ! \n';
  var content_length = body.lenght;
  res.writeHead(200, {
    //'Content_Length' : content_length,
    'Content-Type' : 'text/json',
  });

  res.end(JSON.stringify({error: null data: {} }));
}

var s = http.createServer(process_request);

s.listen(8080);
