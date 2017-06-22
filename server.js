const http = require('http');
      fs = require('fs');

function load_album_list (callback){
  fs.readdir("albums", (err, files) => {
    if (err) {
      callback(err);
    }else {
      var only_dirs = [];

      var iterator = (index) => {
        if (index == files.length) {
          callback(null, only_dirs);
          return;
        }
        fs.stat("albums/" + files[index], (err, stats) => {
          if (stats.isDirectory()) {
            only_dirs.push(files[index]);
          }
          iterator(index + 1);
        });

      };
      iterator(0);
    }
  })
}
function handle_incomming_request(req, res) {
  console.log("INcomming requet" + req.method + "" +req.url);
  var body = 'Thanks ! \n';
  var content_length = body.lenght;

  load_album_list((err, albums) => {
    if (err) {
      res.writeHead(500, {'Content-Type' : 'application/json',});
      res.end(JSON.stringify({code: "Cant load albums" ,
                              message: err.message }));

    }else {
      var output = { error: null, data: {albums: albums}};
      res.writeHead(200, {'Content-Type' : 'application/json',});
      res.end(JSON.stringify({output}) + "\n");
    }
  })
    //res.writeHead(200, {
    //'Content_Length' : content_length,
    //    'Content-Type' : 'application/json',
    //  });
    //res.end(JSON.stringify({error: null ,data: {} }));
}

var s = http.createServer(handle_incomming_request);

s.listen(8080);
