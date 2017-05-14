var express     = require("express");
var app         = express();
var bodyParser  = require("body-parser");
var morgan      = require('morgan');
var config      = require("./config");
var router      = require("./app/router");

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

 app.use("/", router);

app.listen(config.port, function() {
    console.log("Listening on port " + config.port);
});
