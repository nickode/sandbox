var express = require("express");
var path = require('path');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
    host:'localhost',
    user:'nickode',
    password:'passKey09',
    database:'test'
});

connection.connect(function(err){
    if(err){throw err;}
    console.log('connected as id ' + conneciton.threadId);
    
});



app.get('/', function(req, res){
    res.sendFile(path.join(__dirname + '/content/login.html'));
});



var port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log("Up and running. Listening on " + port);
});