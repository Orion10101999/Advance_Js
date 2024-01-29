/*
let data = 10;
Number.prototype.customFun= function(f){
    console.log(this);
    console.log(f);
    console.log(f(this));
    return  "Hello return"
}

console.log(data.customFun(x=>x*5));

*/


let data2 = [2,6,8,9,10]

Array.prototype.customFun = function (x){
    let result = []
    for(let i = 0 ; i<this.length ; i++){
        result.push(x(this[i]));
    }
    return result
}

let output = data2.customFun(x=>x*10)
console.log(output);