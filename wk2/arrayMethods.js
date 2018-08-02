var users = [
    { id: 15, name: 'Bob' },
    { id: 23, name: 'Jimbo' },
    { id: 35, name: 'Cathy' }]


// instead of this:
// for (var i = 0; i < users.length; i++) {
//   console.log(users[i]);
// }

 // this:
users.forEach(function (names) {
  console.log('saving', names.name);
});


///////////////////////////////////////////////////////////////////

var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 }
];

var volumes = [];


boxes.forEach(function (each) {
  volumes.push(each.length * each.width * each.height);
});

///////////////////////////////////////////////////////////////////

var boxes = [
  { length: 10, width: 15, height: 20 },
  { length: 15, width: 20, height: 25 },
  { length: 20, width: 25, height: 30 },
  { length: 25, width: 30, height: 35 },
  { length: 30, width: 35, height: 40 }
];


var lengths = boxes.map(function (each) {
  return each.length;
});

///////////////////////////////////////////////////////////////////

var users = [
  { id: 1, name: 'Bob', email: 'bob@gmail.com' },
  { id: 2, name: 'Cindy', email: 'cindy@gmail.com' },
  { id: 3, name: 'Susan', email: 'susan@gmail.com' },
  { id: 4, name: 'Sarah', email: 'sarah@gmail.com' },
  { id: 5, name: 'Tim', email: 'tim@gmail.com' }
];

var pluck = function (array, property) {
  return array.map(function (userIndex) { // return array.map
    return userIndex[property];           // return the property
  })
};

pluck(users, 'email'); // returns ['bob@gmail.com', `cindy@gmail.com`, `susan@gmail.com`, `sarah@gmail.com`, `tim@gmail.com` ];


///////////////////////////////////////////////////////////////////


var languages = ['JavaScript', 'Ruby', 'Java', 'Python', 'C', 'Swift'];

// filter with arrow function
var shortLanguages = languages.filter(thing => thing.length <= 4);

///////////////////////////////////////////////////////////////////

var shoes = [
  { name: 'Nike', price: 200 },
  { name: 'Red Wings', price: 250 },
  { name: 'Vans', price: 50 },
  { name: 'Converse', price: 60 },
  { name: 'Reebok', price: 130 },
  { name: 'New Balance', price: 75 },
  { name: 'Adidas', price: 95 },
  { name: 'Keds', price: 40 },
  { name: 'Crocs', price: 35 }
];

var cost = shoes.reduce(function (accumulator, shoe) {
  return accumulator += shoe.price;
}, 0); // price

cost // returns 935, the sum
