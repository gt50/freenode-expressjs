var express = require('express');
var stylus = require('stylus');
var bodyparser = require('body-parser');
var crypto = require('crypto');
var app = express();
//app.use(express.static(process.argv[3]));
app.use(bodyparser.urlencoded({extended:false}));
//app.use(stylus.middleware(process.argv[3]));
//app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/search',function(request, response){
    //console.log(request.query);
    delete request.query.__proto__
    response.end(JSON.stringify(request.query));
});
app.listen(process.argv[2]);





// Write a route that extracts data from query string in the GET '/search' URL
// route, e.g. ?results=recent&include_tabs=true and then outputs it back to
// the user in JSON format.

// -------------------------------------------------------------------------------

// ## HINTS

// In Express.js to extract query string parameters, we can use:

//     req.query.NAME

// To output JSON we can use:

//     res.send(object)