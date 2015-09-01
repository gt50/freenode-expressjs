var port = process.argv[2];
var express = require('express');
var app = express();
app.get('/home', function(request, response){
    response.end('Hello World!');
});
app.listen(port);




// ✓ Submission results match expected

// # PASS

// Your solution to HELLO WORLD! passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var express = require('express')
//     var app = express()
//     app.get('/home', function(req, res) {
//       res.end('Hello World!')
//     })
//     app.listen(process.argv[2])

// ────────────────────────────────────────────────────────────────────────────────