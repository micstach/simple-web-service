var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.send(req.headers.host + req.originalUrl);
});

app.get('/add/:x/:y', function (req, res) {
    console.log(`Input params: x=${req.params.x}, y=${req.params.y}`);
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    res.send(`${x+y}`);
})

app.listen(3000, function () {
    console.log('Server is running, CTRL+C to stop');
});