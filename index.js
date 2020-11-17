const express = require('express');
var extensions = require('require-all')({
    dirname: __dirname + '/src',
    filter: /index.js$/,
    recursive: true
});

extensions = Object.entries(extensions);
extensions = extensions.map(ext => {
    return ext[1]["index.js"];
});

// console.log('extensions=' + JSON.stringify(extensions));

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname + '/src'));

app.get('/', function (req, res) {
    // res.setHeader('Access-Control-Allow-Origin', '*');
    res.send(JSON.stringify(extensions));
});

app.listen(20120);
