var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// todo: Set up template engine
app.set('view engine', 'ejs');


// todo: Static files
// app.use('/assets', express.static('./public'));
app.use(express.static('./public'));

// todo: Fire controller
todoController(app);

// todo: listen to port
app.listen(8000, '127.0.0.1');
console.log('You are listening to port 127.0.0.1:8000');