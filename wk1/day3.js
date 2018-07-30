// //Paul closure example - partner ex8
// let listAllBands;
// let bands = ['Weezer', 'Pixies', 'Sleigh Bells'];
//
// let startProgram = function () {
//   let bands = ['NOFX', 'Pennywise', 'Descendants'];
//   let listBands = function () {
//     for (let i = 0; i <bands.length; i++) {
//       console.log(bands[i]);
//     }
//   }
//   listAllBands = listBands;
// }
//
// startProgram();
// listAllBands();
//
// //

// Compose Exercise
function compose (target, source) {
  var err = 'Must be an object';

  if (typeof target !== 'object') {
    throw err;
  } else {
    for (var i = 0; i < arguments.length; i++) {
      var arg = arguments[i];
      if (typeof arg === 'object') {
        for (var key in arg) {
          target[key] = arg[key];
        }
      } else {
        throw err;
      }
    }
  return target;
  }
}

console.log(compose({},{1:2, 3:4}));
