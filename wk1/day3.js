//Paul closure example - partner ex8
let listAllBands;
let bands = ['Weezer', 'Pixies', 'Sleigh Bells'];

let startProgram = function () {
  let bands = ['NOFX', 'Pennywise', 'Descendants'];
  let listBands = function () {
    for (let i = 0; i <bands.length; i++) {
      console.log(bands[i]);
    }
  }
  listAllBands = listBands;
}

startProgram();
listAllBands();
