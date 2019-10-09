// write a function that takes an array of numbers and returns an array with each number doubled.

// Ex:  
// Input[1,2,3]
// Output [2,4,6]

// input [-1,-2,-3]
// output [-2,-4,-6]
console.log("HELLO WORLD");


// what i tried
var doubled = [1, 2, 3];
function maps(integers) {
    return integers.concat.apply([],
        integers.map(function (n) {
            return [n * 2]
        }));
};


// inclass example
var double = function (array) {
    var newArr = [];
    for (var i = 0; i < array.length; i++) {
        const newNum = array[i] * 2;
        newArr.push(newNum);
    }
    return newArr;
}

var myList = [1, 2, 3];
var myList2 = [-1, -2, -3];

console.log(double(myList));
console.log(double(myList2));