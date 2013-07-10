var express = require('express');

var message = fs.readFile('/bitstarter/index.html', function (err, data) {
if (err) throw err;
console.log(data);
});

var buf = new Buffer(256)

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(buf.toString('utf8', 0, message));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
