// 7. Use `reduce()` to find the total salary from an array of numbers `[1000, 2000, 3000]`.

let array = [1000, 2000, 3000]
console.log(array)

let newarr = array.reduce(function(acc, val){
    return acc + val;
}, 0)

console.log(newarr)