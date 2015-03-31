var flattener = require('flat-raml');

var http = require('http');

http.createServer(function(req, res) {


    if(req.url == "/favicon.ico"){

        res.writeHead(200, {'Content-Type': 'text/plain' });

        res.end("Skiping this file");
        
        return;

    }

    srcFile = 'http://apiraml.digitalservices.es' + req.url

    console.log('will parse file http://apiraml.digitalservices.es' + req.url);

    try {

        flattener.asString(srcFile).done(function(ramlstring) {

            res.writeHead(200, {'Content-Type': 'text/plain' });

            res.end(ramlstring);

        })

    } catch (err) {
        console.log("Critical error:", err)

            res.writeHead(200, {'Content-Type': 'text/plain' });

            res.end("Critical error");

    }

}).listen(3500);
