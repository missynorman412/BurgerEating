var express = require("express");
var router = express.Router();
//import the model (burger.js) to use its database functions
var express =  require('express');
var bodyParser = require('body-parser');
var PORT = process.env.PORT || 8080;
app.use(express.static("public")); //loads css and javascript (basically assets folder)
app.use(bodyParser.urlencoded({extended:true})); //bodyparser docs
app.use(bodyParser.json());
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({defaultLayout: "main"})); //using handlebars pointing to main
app.set("view engine", "handlebars");
var burger = require("./models/burger.js");
var routes = require("./controllers/burgers_controller.js");
app.use(routes); 
app.listen(PORT, function() {
    control.log("Listening on port" + PORT);
});
