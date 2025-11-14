// . Use `filter()` to get only even numbers from an array.

let input = prompt("enter an arry")
let array = input.split(",").map(Number)
console.log(array)






let newarr = array.filter(function(val){
    return val%2 === 0;
})
console.log(newarr)