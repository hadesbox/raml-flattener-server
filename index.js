var raml = require('raml-parser');

var http = require('http');

http.createServer(function(req, res) {

    srcFile = 'http://apiraml.digitalservices.es' + req.url

    console.log('will parse file http://apiraml.digitalservices.es' + req.url);

    var flattener = require('flat-raml');

    flattener.asString(srcFile).done(function(ramlstring) {

        
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(ramlstring);

    })

}).listen(3500);
