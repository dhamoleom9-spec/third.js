// 5. Given an array of numbers, use `map()` to create a new array where each number is squared.

let input = prompt("Enter numbers separated by commas:");
let arr = input.split(",").map(Number);

console.log(arr)

let newarr = arr.map(function(val){
    return val*val;
})

console.log(newarr)
