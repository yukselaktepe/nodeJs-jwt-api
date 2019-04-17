var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.urlencoded({ extended: false }))
app.use(bodyParser.json());

require('./app_server/routers/routeManager')(app);

app.listen(5555);