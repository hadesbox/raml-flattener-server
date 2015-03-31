var flattener = require('flat-raml');

var http = require('http');

http.createServer(function(req, res) {

    srcFile = 'http://apiraml.digitalservices.es' + req.url

    console.log('will parse file http://apiraml.digitalservices.es' + req.url);

    try {

        flattener.asString(srcFile).done(function(ramlstring) {

            res.writeHead(200, {'Content-Type': 'text/plain' });

            res.end(ramlstring);

        })

    } catch (err) {
        document.getElementById("demo").innerHTML = err.message;
    }

}).listen(3500);
