//Create a function that filters out negative numbers

let numbers = [-3, -2, -1, 0, 1, 2, 3];
numbers = numbers.filter(function (x) {
    return x > 0
});

console.log(numbers);