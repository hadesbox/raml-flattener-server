# What is this

This repo contains a set of two tools,  flat.js is a CLI tool to FLATTEN a locally uncompressed file, while the index.js is a server that will listen for raml paths and will try to fetch them, generate them and return the flatten RAML.

# To install simply

```
$ npm install

```

# Running
To run the cli

```
$ ./flat.js pathtofile.raml
```

to start the server

```
$ node index.js
```