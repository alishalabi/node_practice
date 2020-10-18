const express = require('express');
const app = express();
const exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


app.get('/', (req, res) => {
  res.render('home', { msg: "Handlebars are okay, I guess"})
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Listening on port 3000")
})
