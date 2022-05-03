
var clr = ["red", "blue", "green", "yellow", "black"];
for (var i = 0; i < clr.length; i++) {
  console.log(clr[i]);
}
console.log("===========================");
var shoes = ["bata", "addidas", "reebok", "puma", "nike"];
for (var n of shoes) {
  console.log(n);
}
console.log("===========================");

var fruit = ["apple", "mango", "banana", "orange", "guava"];
for (var x in fruit) {
  console.log(fruit[x]);
}
console.log("===========================");

var laptop = ["hp", "lenovo", "asus", "apple"];
for (var i = 0; i < laptop.length; i++) {
  console.log(laptop[i]);
}
console.log("===========================");
// prime number without using function
var a = 11;
for (var i = 2; i <= a / 2; i++) {
  if (a % i == 0) console.log("not prime");
  else console.log("prime");
  break;
}
console.log("===========================");
//reverse of string
//named function
function rev() {
  var str = "Hemant";
  var rev = str.split("");
  var revarr = rev.reverse();
  var strrev = revarr.join("");
  console.log(strrev);
}
rev();
console.log("===========================");

//unnamed function
var z = function () {
  var str = "hello";
  var rev = str.split("");
  var revarr = rev.reverse();
  var strrev = revarr.join("");
  return strrev;
};
console.log(z());
console.log("===========================");

//Arrow function
var u = () => {
  var str1 = "Bangalore";
  var rev = str1.split("");
  var revarr = rev.reverse();
  var strrev = revarr.join("");
  return strrev;
};
console.log(u());
console.log("===========================");
//iife

(function () {
  var str3 = "Bat";
  var rev = str3.split("");
  var revarr = rev.reverse();
  var strrev = revarr.join("");
  console.log(strrev);
})();
console.log("===========================");
//second largest
function getSecondLargest(number) {
  var largest = number[0];
  var large;
  for (var i = 1; i < number.length; ++i) {
    if (number[i] > largest) {
      large = largest;
      largest = number[i];
    } else if (number[i] > large || typeof large === "undefined") {
      large = number[i];
    }
  }
  return large;
}
console.log(getSecondLargest([5, 1 - 2, 3]));

//ananymous function
var second = function (nums) {
  var largest = nums[0];
  var large;
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] > largest) {
      large = largest;
      largest = nums[i];
    } else if (nums[i] > large || typeof large === "undefined") {
      large = nums[i];
    }
  }
  return large;
};
console.log(second([5, 1 - 2, 3]));
//Arrow function
var z = (nums) => {
  var largest = nums[0];
  var large;
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] > largest) {
      large = largest;
      largest = nums[i];
    } else if (nums[i] > large || typeof large === "undefined") {
      large = nums[i];
    }
  }
  return large;
};
console.log(z([5, 1 - 2, 3]));
//iife
(function (nums) {
  var largest = nums[0];
  var large;
  for (var i = 1; i < nums.length; ++i) {
    if (nums[i] > largest) {
      large = largest;
      largest = nums[i];
    } else if (nums[i] > large || typeof large === "undefined") {
      large = nums[i];
    }
  }
  console.log(large);
})([5, 1 - 2, 3]);

//factorial

function factorial(n) {
  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    return n * factorial(n - 1);
  }
}
console.log(factorial(4));
//
var c = function (n) {
  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    return n * factorial(n - 1);
  }
};
console.log(c(4));
//
var c1 = (n) => {
  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    return n * factorial(n - 1);
  }
};
console.log(c1(4));
//
(function (n) {
  //base case
  if (n == 0 || n == 1) {
    return 1;
    //recursive case
  } else {
    console.log(n * factorial(n - 1));
  }
})(4);
//fibonaci
function fibonacci(n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
var n = 10;
var series = new Array(n);
series.fill(0);
for (let i = 1; i <= n; i++) {
  series[i - 1] = fibonacci(i);
}
console.log(series);
//
var B = function (n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
var n = 10;
var series = new Array(n);
series.fill(0);
for (let i = 1; i <= n; i++) {
  series[i - 1] = fibonacci(i);
  // return series;
}
console.log(series);
//
var z = (n) => {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
};
var n = 10;
var series = new Array(n);
series.fill(0);
for (let i = 1; i <= n; i++) {
  series[i - 1] = fibonacci(i);
}
console.log(series);
//
(function (n) {
  if (n == 1) return 0;
  if (n == 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
});
var n = 10;
var series = new Array(n);
series.fill(0);
for (let i = 1; i <= n; i++) {
  series[i - 1] = fibonacci(i);
}
console.log(series);
console.log("==============================");
//for each
var numberarr = [134, 214, 325, , 6, 54724, 2, 613];
numberarr.forEach((val, indx) => {
  console.log(`the value at index is : ${val}`);
});
var numberarr = [1, 2, 3, 5, 345, 63, 43, 23];
numberarr.forEach((val, indx) => {
  console.log(`the value at index is : ${val}`);
});
var cararr = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
cararr.forEach((val, indx) => {
  console.log(`the value at index is : ${val}`);
});
var bikearr = ["suzuki", "hOnda", "bajaj", "tvs"];
numberarr.forEach((val, indx) => {
  console.log(`the value at index is : ${val}`);
});
var numberarr = [134, 214, 325, , 6, 54724, 2, 613];
numberarr.forEach((val, indx) => {
  console.log(`the value at index is : ${val}`);
});
console.log("==============================");

//push
var numberarr = [134, 214, 325, 6, 54724, 2, 613];
console.log(numberarr);
var res = numberarr.push(34);
console.log(res);
console.log(numberarr);

var numberarr = [134, 214, 325, 6, 54724, 2, 613];
console.log(numberarr);
var res = numberarr.push(-34);
console.log(res);
console.log(numberarr);

var numberarr = [134, 214, 325, 6, 54724, 2, 613];
console.log(numberarr);
var res = numberarr.push(34234, 66);
console.log(res);
console.log(numberarr);

var numberarr = [134, 214, 325, 6, 54724, 2, 613];
console.log(numberarr);
var res = numberarr.push(0, 1, 4, 5);
console.log(res);
console.log(numberarr);
console.log("==============================");

//pop
var fruit = ["apple", "mango", "banana", "orange", "guava"];
// console.log(fruit);
var res = fruit.pop();
// console.log(res);
console.log(fruit);

var fruit = ["apple", "mango", "banana", "orange", "guava"];
console.log(fruit);
var res = fruit.pop("orange");
console.log(res);
console.log(fruit);

var fruit = ["apple", "mango", "banana", "orange", "guava"];
console.log(fruit);
var res = fruit.pop("mango");
console.log(res);
console.log(fruit);

var fruit = ["apple", "mango", "banana", "orange", "guava"];
console.log(fruit);
var res = fruit.pop("banana");
console.log(res);
console.log(fruit);
console.log("==============================");

//shift
var fruit = ["apple", "mango", "pinapple", "orange", "guava", "kiwi"];
console.log(fruit.shift());
console.log(fruit);

var fruit = ["apple", "mango", "pinapple", "orange", "guava", "kiwi"];
console.log(fruit.shift("mango"));
console.log(fruit);

var fruit = ["apple", "mango", "pinapple", "orange", "guava", "kiwi"];
console.log(fruit.shift("pinapple"));
console.log(fruit);

var fruit = ["apple", "mango", "pinapple", "orange", "guava", "kiwi"];
console.log(fruit.shift("guava"));
console.log(fruit);

var fruit = ["apple", "mango", "pinapple", "orange", "guava", "kiwi"];
console.log(fruit.shift("orange"));
console.log(fruit);

console.log("==============================");
//unshift
var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.unshift("apple"));
console.log(exoticfruit);

var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.unshift("guava"));
console.log(exoticfruit);
var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.unshift("chikoo"));
console.log(exoticfruit);
var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.unshift("banana"));
console.log(exoticfruit);
var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.unshift("orange"));
console.log(exoticfruit);

console.log("===================================");
//include
var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.includes("kiwi"));

var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.includes("mango"));

var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.includes("banana"));

var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.includes("salak"));

var exoticfruit = [
  "kiwi",
  "dragonfruit",
  "pear",
  "akebi",
  "salak",
  "jackfruit",
];
console.log(exoticfruit.includes("jackfruit"));

//splice
var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var modified = car.splice(0, 2, "buggatti", "Tata");
console.log("modified value", modified);
console.log(" modified ", car);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var modified = car.splice(0, 2, "buggatti", "Tata");
console.log("modified value", modified);
console.log(" modified ", car);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var modified = car.splice(0, 2, "buggatti", "Tata");
console.log("modified value", modified);
console.log(" modified ", car);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var modified = car.splice(0, 2, "buggatti", "Tata");
console.log("modified value", modified);
console.log(" modified ", car);
console.log("========================================");
//slice
var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var slicedelemnet = car.slice(0, 4);
console.log("slicede aray", slicedelemnet);
console.log("initail array/modified array", car);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var slicedelemnet = car.slice(0, 4);
console.log("slicede aray", slicedelemnet);
console.log("initail array/modified array", car);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var slicedelemnet = car.slice(0, 4);
console.log("slicede aray", slicedelemnet);
console.log("initail array/modified array", car);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var slicedelemnet = car.slice(0, 4);
console.log("slicede aray", slicedelemnet);
console.log("initail array/modified array", car);

//isArray
var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var check = Array.isArray(car);
console.log(check);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var check = Array.isArray(car);
console.log(check);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var check = Array.isArray(car);
console.log(check);

var car = ["bentely", "ford", "skoda", "Ferrari", "Maruti"];
var check = Array.isArray(car);
console.log(check);
console.log("=============================");

//random number
var startinRange = 100//window.prompt("min: ");
var endingRange = 200//window.prompt("max: ");
var check = Math.round(Math.random() * endingRange);
if (check < startinRange) {
  console.log(check + startinRange);
} else {
  console.log(check);
}

var a = [1, 3, 4, 65, 36, 78, 99,[453, 23576, 547, 536, 8, 579, 467],[, 365, 567, 57, 3568, 69, 578, 856, 7, 34, 562, 4, 6, 34]]
var check1 = a.flat();
console.log(check1);
console.log(a);