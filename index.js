//Loads the express module
const express = require('express');
//creates our express server
const app = express();
const port = 3000;
/*CUSTOM Modules
*/
var input = require('./my_modules/getinput.js');
var info = require('./my_modules/info.js');

//fetch
const fetch = require('node-fetch');

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

//remember to read about async
async function getQuote(){
      const rand = Math.floor(Math.random()*10);
      const res = await fetch('https://quotesondesign.com/wp-json/wp/v2/posts/?orderby=rand',{method:"GET"});
      const json=await res.json();
      return json[rand].content.rendered;
   }
//Routes
app.get('/', (req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars
  getQuote().then(quote=>{
    quote= quote.replace("<p>","");
    quote= quote.replace("</p>","");
    res.render('main',{layout : 'index',quote});
  });
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
app.get('/signin', (req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars
console.log(getQuote());
  res.render('planB',{layout : 'index', quote:getQuote()});
});




app.post('/test', (req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars
  console.log("Got it!")
  res.render('planB',{layout : 'index'});
});




//Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
