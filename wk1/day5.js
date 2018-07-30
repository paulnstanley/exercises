//Vehicle class constructor example
// var Vehicle = function (x, y, speed) {
//   this.model = x;
//   this.color = y;
//   this.speed = speed;
// };
//
// var car = new Vehicle('Porsche 911', 'White', 170);
//
// console.log(car);

//Vehicle class step/protoype example
var Vehicle = function (x, y, speed) {
  this.x = x;
  this.y = y;
  this.speed = speed;
};

Vehicle.prototype.step = function() {
  this.x = this.x + this.speed * this.randomStep();
  this.y = this.y + this.speed * this.randomStep();
}

Vehicle.prototype.randomStep = function() {
  if (Math.random() < 0.5) {
    return -1;
  } else {
    return 1;
  }
}

var car = new Vehicle(5, 5, 10);

console.log(car);
