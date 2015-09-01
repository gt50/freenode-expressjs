var express = require('express');
var app = express();
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.get('/home',function(request, response){
    response.render('index', {date: new Date().toDateString()});
});
app.listen(process.argv[2]);


// ✓ Submission results match expected

// # PASS

// Your solution to JADE passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var express = require('express')
//     var app = express()
//     app.set('view engine', 'jade')
//     app.set('views', process.argv[3])
//     app.get('/home', function(req, res) {
//       res.render('index', {date: new Date().toDateString()})
//     })
//     app.listen(process.argv[2])

// ────────────────────────────────────────────────────────────────────────────────