//Loads the express module
const express = require('express');
//creates our express server
const app = express();
const port = 3000;
/*CUSTOM Modules
*/
var input = require('./my_modules/getinput.js');
var info = require('./my_modules/info.js');

//Loads the handlebars module
const handlebars = require('express-handlebars');

var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json();
//var urlencodedParser = bodyParser.urlencoded({extended:false});

//
//var myinfo = require('./my_modules/info.js');
//

//set app to use handlebars engine
app.set('view engine', 'hbs');

//set handlebars config
app.engine('hbs',handlebars({
  layoutsDir:__dirname+'/views/layouts',
  extname: 'hbs',
  defultLayout: 'planB',
  partialsDir:__dirname + '/views/partials/'
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//Serves static files (we need this to import a css file)
app.use(express.static('public'));


//Routes
app.get('/', (req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars
  res.render('main',{layout : 'index'});
});

app.post('/',(req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars
  var fname =input.get_full(req.body.name)[0];
  var lname =input.get_full(req.body.name)[1];
  var email =input.get_value(req.body.email);
  var phone =input.get_value(req.body.phone);

  console.log(phone);

 res.render('main',{layout: 'index'});
});

//Route
app.get('/test', (req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars
  console.log("Got it!")
  res.render('planB',{layout : 'index'});
});
app.post('/test', (req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars
  console.log("Got it!")
  res.render('planB',{layout : 'index'});
});




//Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
