//first partner codepen:
var items = [
  { item: "cheese", price: 15 },
  { item: "arak", price: 68 },
  { item: "hummus", price: 15 },
  { item: "pita", price: 5 }
]

// Write a for loop here that loops through
// the items array, creates a template for each
// item, and appends it to the items div.

var source = $('#store-template').html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
// var newHTML = template({item: items.item, price: item.price});

// append our new html to the page
// $('.items').append(newHTML);

for (i=0; i<items.length; i++) {
  var newHTML = template({item: items[i].item, price: items[i].price});
  $('.items').append(newHTML);
};
