var db = require('./database/db');
var route=require('./routers/routes');

var express = require('express');
var cors = require('cors')

var app = express();

var bodyParser=require('body-parser')
app.use(bodyParser.json())
app.use(cors())

route.api(app)
const port = 5000;
app.listen(port,() => {
    db.dbConnection();
    
    console.log("server is listening on"+"--"+port);

});