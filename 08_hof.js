let data = 10;
Number.prototype.customFun= function(f){
    console.log(this);
    console.log(f);
    console.log(f(this));
    return  "Hello return"
}

console.log(data.customFun(x=>x*5));