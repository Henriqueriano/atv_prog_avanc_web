const express = require("express");
const bodyParser = require("body-parser");
var path = require('path');
const app = express();
const appRoutes = require("./routes/app.js");
const hbs = require('hbs');
const port = 80;
hbs.registerHelper('dateFormat', require('handlebars-dateformat'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

// Configuração do CORS 
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use('/', appRoutes);
app.listen(port, () => console.log(`Escutando na porta: ${port}!`))
module.exports = app;
 