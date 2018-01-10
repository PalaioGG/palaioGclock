var express = require('express');
var moment = require('moment');

var app = express();

app.set('port', (process.env.PORT || 3000));

app.use(express.static('public'));

app.post('/test', function(req, res) {
  console.log('app post')

  var sec = moment().seconds()
  res.status(200).send({data: sec});
})

app.listen(app.get('port'), function(req, res) {
  console.log('Node Clock up and running');
})
