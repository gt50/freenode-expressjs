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
app.get('/',function(request, response){
    response.end(request.body.str.split('').reverse().join(''));
});
app.put('/message/:id', function(request, response){
    //console.log(request.params.id);
    //console.log(crypto.createHash('sha1').update(new Date().toDateString()).digest('hex'));
    response.end(crypto.createHash('sha1')
        .update(new Date().toDateString() + request.params.id).digest('hex'));
});
app.listen(process.argv[2]);