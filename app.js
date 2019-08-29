var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

var api = '/api/whoami';

app.get(api, function(req, res, next) {
  var language = req.acceptsLanguages();
  var software = req.get('User-Agent');
  var ipadress = req.ip;

  res.json({'ipadress': ipadress, 'language': language, 'software': software});
});


app.listen(3000, function() {
  console.log("working");
});