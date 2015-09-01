var port = process.argv[2];
var filename = process.argv[3];
var express = require('express');
var app = express();
app.use(express.static(filename));
app.listen(port);



// ✓ Submission results match expected

// # PASS

// Your solution to STATIC passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var path = require('path')
//     var express = require('express')
//     var app = express()
    
//     app.use(express.static(process.argv[3]||path.join(__dirname, 'public')));
    
//     app.listen(process.argv[2])

// ────────────────────────────────────────────────────────────────────────────────