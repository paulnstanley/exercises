//Returns a particular data attribute for a p
var clicked = function () {
  alert($(this).data().sauce); //where sauce = data name
}

$('p').on('click', clicked);


//Append to Li
var clicked = function () {
   var input = $('#my-input').val();
   $('.students').append('<li>' + input + '</li>');
};

$('button').on('click', clicked);

//Remove from Li
var clicked = function () {
   $(this).remove();
};

$('li').on('click', clicked);

//alert input from input field
var clicked = function () {
  console.log($('#my-input').val());
}

$('button').on('click', clicked);

//css selection
$('h1').css('color', 'blue');
$('.red-div').css('color', 'red');
$('li').eq('0').css('color', 'green');
$('li').eq('1').css('color', 'pink');
$('#brown-div').css('color', 'brown');

//solution for add/remove to Li
var clicked = function () {
   var input = $('#my-input').val();
   $('.students').append('<li>' + input + '</li>');
   $('li').on('click', removeIt); //this is the key: before we couldn't
   //select dynamically added elements because they didn't exist before
   //this ran the first time.  by adding it to this loop, it re-binds
   //the new li items.  //this is hacky, probably a better way to do it.
};

$('button').on('click', clicked);

var removeIt = function () {
   $(this).remove();
};

$('li').on('click', removeIt);
