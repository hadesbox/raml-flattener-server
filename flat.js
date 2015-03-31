#!/usr/bin/env node

var flattener = require('flat-raml');

console.log(process.argv[2])

if(process.argv[2]){
    srcFile = process.argv[2]
}
else{
    console.log("Invalid syntax, please provide a valid RAML file.")
    console.log("usage: ./flat.js file.raml")
    process.exit(-1)
}

try {
    flattener.asString(srcFile).done(function(ramlstring) {
        console.log(ramlstring);
    })

} catch (err) {
    console.log("Error crítico:", err)
}
