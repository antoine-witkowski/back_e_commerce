
let express = require('express');
let path = require('path');
let bodyParser = require("body-parser");

let app = express();

//app.set('view engine', 'ejs');



app.use(bodyParser.urlencoded({ extended: true }));

 
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname + '/../client/src/components/Pages/Edit.vue'));
});

/*
app.post('/', (request, response) => {
  let name = request.body.name; 
  if (name === undefined || name === '') {
    response.render('pages/index', { message:"Vous n'avez pas entré de nom" });
  } else {
    response.render('pages/index', { message: name + " a bien été enregistré" });
  }
  response.redirect('/');
});
*/
/*
app.get('/', (request, response) => {
    response.render('src/views/index.vue');
});
*/
app.listen(8090);
