// var viewCartButton = document.getElementsByClassName('view-cart')[0];
// var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
//
// viewCartButton.addEventListener('click', function () {
//   shoppingCart.classList.toggle('show');
// });
//
//
// var buybox = document.getElementsByClassName('buybox');
//
// var products = document.getElementsByClassName('products')[0];
//
//
// var elementIsClicked = false;
//
// function clickHandler(){
//   elementIsClicked = true;
//   // console.log('clicked!')
// }
//
// products.addEventListener('click', function (arr) {
//   if (arr.target.classList.contains('add-to-cart')) {
//     clickHandler.call();
//   }
// });


var viewCartButton = document.getElementsByClassName('view-cart')[0];
var shoppingCart = document.getElementsByClassName('shopping-cart')[0];
var products = document.getElementsByClassName('products')[0];

var cart = [];

viewCartButton.addEventListener('click', function () {
  if (shoppingCart.classList.contains('show')) {
    shoppingCart.className = 'shopping-cart';
  } else {
    shoppingCart.className += ' show';
  }
});

products.addEventListener('click', function (e) {
  if (e.target.classList.contains('add-to-cart')) {
    var itemName = e.target.closest('.item').getAttribute('data-name');
    var itemPrice = e.target.closest('.item').getAttribute('data-price');

    var product = {
      name: itemName,
    };

    cart.push(product);
  }
});

var renderCart = function () {
  var cartList = document.getElementsByClassName('cart-list')[0];

  while(cartList.hasChildNodes()) {
    cartList.removeChild(cartList.firstChild);
  }

  var items = '';

  for (var i = 0; i < cart.length; i++) {
    items += '<div>' + cart[i].name
      + ' - $' + cart[i].price + '</div>';
  }

  cartList.innerHTML = items;
};
