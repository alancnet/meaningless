var express = require('express'),
    expressRest = require('express-rest');

var server = express(),
    rest = expressRest(server);

 

server.use(express.static('./www'));

var listener = server.listen(process.env.PORT, process.env.IP);
var addr = listener.address().address,
    port = listener.address().port;
if (addr === '0.0.0.0') addr = '127.0.0.1';
console.info('Express listening on http://' + addr + ':' + port);
