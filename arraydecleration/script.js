
let arr = [1,2,3,4,5,6,7,8,9,10];
let arr2 = [...arr];
let arr3 = [...arr];
let arr4 = [7,6,4,1,2,9,10,8,3,5];
//let arr2 = new array();

arr.pop();
arr.push(0);
arr.splice(1, 8);
let slarr = arr2.slice(1,9);
arr2.shift();
arr2.unshift(0);
arr3.reverse();


let sortedarr = arr4.sort(function(a,b){
    return a-b; // assefor desending opposite themnding order 
})
