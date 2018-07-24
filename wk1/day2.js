// Exercise 1
var convertWeight = function (kilos) {
  // write your code here!
  var pounds = (kilos * 2.20462);
  return pounds;
};

console.log(convertWeight(80));

//Exercise 2
var convertWeight = function (number, unit) {
  // write your code here!
  var converted;
  if (unit === "pounds") {
    converted = (number / 2.20462);
    return (number + " " + unit + " is " + converted + " kilos");
  } else {
    if (unit === "kilos") {
      converted = (number * 2.20462);
      return (number + " " + unit + " is " + converted + " pounds");
    } else {
      return "Enter pounds or kilos, please.";
    }
  }
}

console.log(convertWeight(100, "pounds"));

//Exercise 3
Math.roundTo = function (number, positions) {
  // your code here
  console.log(Math.round(number * Math.pow(10, positions)) / Math.pow(10, positions));
}

Math.roundTo(10.123456789, 5);

// Exercise 4
// Already incorporated into Exercise 2
//
// Exercise 5
function calcAge (currentYear, birthYear) {
  return currentYear - birthYear;
}

var age = calcAge(2018, 1985);
console.log(age);

//Exercise 6
function calcAge (currentYear, birthYear) {
  var year1 = currentYear - birthYear;
  var year2 = year1 - 1;
  return ("You are either " + year1 + " or " + year2 + ".");
}

var age = calcAge(2018, 1985);
console.log(age);

//Exercise 7
//Breaks down with large numbers - how to test for larger primes?
function isPrime(num) {
  if ((num % 2 == 0) || (num % 3 == 0) || (num % 5 == 0) || (num % 7 == 0)) {
    console.log(num + " is not prime");
  } else {
    console.log(num + " is prime");
  }
}

isPrime(97);
