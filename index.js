// requiring dependencies
var express = require('express');
var mustache = require('mustache-express');

// app specific variables
var app = express();
var port = 3000;
var harryPotterController = require('./controllers/harrypotter_controller');
var housesController = require('./controllers/houses_controller');

// configuring mustache to be our view engine
app.engine('html', mustache());
app.set('view engine', 'html');

app.set('views', __dirname + '/views');

// set up home route
app.get('/', function(request, response){
  response.render('./index');
})
// set up additional routes:
app.use('/houses', housesController);
// set up additional routes:
app.use('/students', harryPotterController);

// set up our app to listen to a port
app.listen(port, function() {
  console.log(`App is listening on port ${port}`);
})