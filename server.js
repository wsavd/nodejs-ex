//  OpenShift sample Node application
var express = require('express'),
    app     = express(),
    morgan  = require('morgan');

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function(req, res) {
  
    res.json('Hello YouTube!');
  
  });

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);
