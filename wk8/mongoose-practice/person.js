const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/peopleDB');

const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstName: {type: String, required: true},
  lastName: String,
  age: {type: Number, min: [10, 'too young!']}
});

const Person = mongoose.model('Person', personSchema);

let david = new Person({ firstName: "David", lastName: "Smith", age: 25 });
let paul = new Person({ firstName: "Paul", lastName: "Stanley", age: 33 });
let caitlin = new Person({ firstName: "Caitlin", lastName: "Stanley", age: 33 });
let bob = new Person({ firstName: "Bob", lastName: "Cohen", age: 30});
bob.save();

david.save();
paul.save();
caitlin.save();

let john = new Person({firstName: "John", lastName: "Jenkins", age: 18});

john.save((err, person) => {
  if (err) {
    console.log(err);
  } else {
    console.log(person);
  }
});

// Now you try. Connect to a DB called beersDB. Create a new shema called beerSchema that takes a name (string), abv (number), and style (string).
// Then, create a Beer model out of it and create an instance of our model and save it. Lastly, verify it worked using the commands we know in mongo shell!

//this should've been in a new db

const beerSchema = new Schema({
  name: String,
  abv: Number,
  style: String
})

const Beer = mongoose.model('Beer', beerSchema);

let fatTire = new Beer({name:'Fat Tire', abv:5, style:'Belgian'});

fatTire.save();

Person.find({age: 18}, (err, result) => {
  if (err) { return console.error(err); }
  console.log(result);
})
