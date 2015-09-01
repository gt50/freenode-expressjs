var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({extended:false}));
app.set('views', process.argv[3]);
app.set('view engine', 'jade');
app.post('/form',function(request, response){
    response.end(request.body.str.split('').reverse().join(''));
});
app.listen(process.argv[2]);


// ✓ Submission results match expected

// # PASS

// Your solution to GOOD OLD FORM passed!

// Here's the official solution in case you want to compare notes:

// ────────────────────────────────────────────────────────────────────────────────
//     var express = require('express')
//     var bodyParser = require('body-parser')
//     var app = express()
    
//     app.use(bodyParser.urlencoded({extended: false}))
    
//     app.post('/form', function(req, res) {
//       res.send(req.body.str.split('').reverse().join(''))
//     })
    
//     app.listen(process.argv[2])

// ────────────────────────────────────────────────────────────────────────────────