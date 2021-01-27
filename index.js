//Loads the express module
const express = require('express');
//creates our express server
const app = express();
const port = 3000;
/*CUSTOM Modules
*/
var input = require('./my_modules/utilities/getinput.js');
var info = require('./my_modules/info.js');

//fetch
const fetch = require('node-fetch');

//Loads the handlebars module
const handlebars = require('express-handlebars');

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({extended:false});

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

//Serves static files (we need this to import a css file)
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

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



//Route
app.get('/login', (req, res) =>{
  //serves the body of page or mainhandlebars to container aka indexhandlebars

  res.render('planB',{layout : 'index'});
});
app.post('/login',(req, res) =>{
    var getWelcome = req.body.fname;
    res.render('planB',{layout: 'index',getWelcome});
});



//Make the app listen to port 3000
app.listen(port, () => console.log(`App listening to port ${port}`));
