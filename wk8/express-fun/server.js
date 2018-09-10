const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (request,response) => {
  response.render('index');
});

// app.get('/names', (request, response) => {
//   response.send(`Hello ${request.query.name}`);
// });

// app.get('/names', (request, response) => {
//   response.render('myNamesView', {name: 'Paul'});
// });

app.get('/names', (request, response) => {
  response.render('myNamesView', {name: 'Paul', lastName: 'Stanley'});
});

app.get('/person/:firstname/:lastname', (request, response) => {
  response.send(`Hello ${request.params.firstname} ${request.params.lastname}!`);
});

app.get('/lastname/:lastname', (request, response) => {
  response.send(`Your last name is ${request.params.lastname}`)
})

app.listen(8000);
