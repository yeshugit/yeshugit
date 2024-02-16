var express = require('express');
var app = express();
var path = require('path')
var router = require('./admin/routes')

// view engine setup
app.set('views',path.join(__dirname,'admin/views'))
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'admin/public')));

app.use('/',router)

const port = process.env.port || 8000 

//app.listen(port, () => {console.log("Listening: http://0.0.0.0:8000")})