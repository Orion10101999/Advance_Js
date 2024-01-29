let obj = {
    name : 'Anil',
    10:"this is a number key in obj",
    true:"this is a boolean key in obj"
}

let data = new Map([
    ['name',"Sam"],
    [10,"this is a number key in map"],
    [true,"this is a boolean key in map"]
])

// console.log(obj.10);
// console.log(obj.key);

obj.city = "Noida"
data.set('city','Noida')
data.set('name','Anil')
data.delete(true)

/*

console.log(data.size);
console.log(data.has(true));

console.log(data.keys());
console.log(data.values());
console.log(data.get(10));
console.log(data);
console.log(obj);


data.forEach((value,key)=>{
    console.log(key,value);
    
})

for (const x of data) {
    console.log(x);
    
}

for (const [k,v] of data) {
    console.log(v);
    
}
data.set({},"this is Object Type")
*/

data.set(()=>{},"this is Arrow Function  Type")
console.log( typeof data);
