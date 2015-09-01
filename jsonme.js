var express = require('express');
var stylus = require('stylus');
var bodyparser = require('body-parser');
var crypto = require('crypto');
var app = express();
var fs = require('fs');
var data = JSON.parse(fs.readFileSync(process.argv[3], 'utf8'));
app.use(bodyparser.urlencoded({extended:false}));
//app.use(stylus.middleware(process.argv[3]));
//app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/books',function(request, response){
    console.log(process.argv[3]);
    response.end(JSON.parse(data));
});
app.listen(process.argv[2]);



//  JSON ME
//  Exercise 8 of 8

// Write a server that reads a file, parses it to JSON and outputs the content
// to the user.

// The port is passed in process.argv[2].  The file name is passed in process.argv[3].

// Respond with:

//     res.json(object)

// Everything should match the '/books' resource path.

// -------------------------------------------------------------------------------

// ## HINTS

// For reading, there's an fs module, e.g.,

//     fs.readFile(filename, callback)

// While the parsing can be done with JSON.parse:

//     object = JSON.parse(string)