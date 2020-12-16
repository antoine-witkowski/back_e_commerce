let app = require('express')();
app.set('view engine', 'ejs');
let bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));

 
app.get('/', (request, response) => {
  response.render('pages/index');
});
 
app.post('/', (request, response) => {
  let name = request.body.name; 
  if (name === undefined || name === '') {
    response.render('pages/index', { message:"Vous n'avez pas entré de nom" });
  } else {
    response.render('pages/index', { message: name + " a bien été enregistré" });
  }
  response.redirect('/');
});

app.listen(8090);