let arr = [1,2,3,4,5,6,7,8,9,10];
let [a,b,c,d,e,f,g,h,i,j] = arr;

for(let i = 0; i <= arr.length; i++){
    console.log(arr[i])
}

arr.forEach(function(val) {
        console.log(val);
});

let newarr = arr.map(function(val){
    if(val > 5) return val // give undefined value if not satisfy the condition
});

let newarr2 = arr.filter(function(val){
    if(val > 5) return val // not give undefined value
})

let newarr3 = arr.reduce(function(accumulator, val){

    return accumulator + val;
}, 0)