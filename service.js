var express = require('express')
var app = express()

app.get('/add/:x/:y', function (req, res) {
    var x = parseInt(req.params.x);
    var y = parseInt(req.params.y);
    res.send(`${x+y}`);
})

app.listen(3000, function () {
    console.log('Server is running, CTRL+C to stop');
});