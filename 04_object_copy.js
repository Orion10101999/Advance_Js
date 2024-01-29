/*
let obj = {
    name : 'peter'
}
console.log(obj)
let user = obj;     // by referece copy
user.name = "brush" 
console.log(user)
console.log(obj)

// value copy 

let x ='anil'
console.log(x);
let y = x       // value copy
y = 'Sidhu'
console.log(x);
console.log(y);


let obj = {
    name : 'peter'
}

console.log('obj',obj)

// let user = obj;     // by referece copy
//let user = Object.assign({},obj);     // by Shallow copy
let user = {...obj}     // by Shallow copy
user.name = "brush" 
console.log('user',user)
console.log('obj',obj)

*/

/*
let obj = {
    name : 'peter',
    address: {
        city:'Noida',
        state:'UP'
    },
    getData:function(){
        return "all data is here"
    }
}

console.log('obj',obj)
let user = {...obj}     // shallow copy 

user.address.city = "brush" 

console.log('user',user)
console.log('obj',obj)      // shallow copy city : brush


let obj = {
    name : 'peter',
    address: {
        city:'Noida',
        state:'UP'
    },
    getData:function(){
        return "all data is here"
    }
}

console.log('obj',obj)

let user = Object.assign({},obj);     // by Shallow copy

user.address.city = "brush" 

console.log('user',user)
console.log('obj',obj)      // shallow copy city : brush

*/
/*

let obj = {
    name : 'peter',
    address: {
        city:'Noida',
        state:'UP'
    },
    getData:function(){
        return "all data is here"
    }
    
}

console.log('obj',obj)
 
let user = JSON.parse(JSON.stringify(obj))  // Deep Copy

user.address.city = "sirsa" 

console.log('user',user)    // function and Date will not show 
console.log('obj',obj)      // city : sirsa , Deep Copy

*/

// lodash npm package or cdn
// <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js" integrity="sha512-WFN04846sdKMIP5LKNphMaWzU7YpMyCU245etK3g/2ARYbPK9Ub18eG+ljU96qKRCWh+quCY7yefSmlkQw1ANQ==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

let obj = {
    name : 'peter',
    address: {
        city:'Noida',
        state:'UP'
    },
    getData:function(){
        return "all data is here"
    }
    
}

console.log('obj',obj)
 
let user = _.cloneDeep(obj)  // Deep Copy

// In Deep copy memory location ki jagah value copy hoti hai

user.address.city = "sirsa" 

console.log('user',user)    // function and Date will not show 
console.log('obj',obj)      // city : sirsa , Deep Copy

// Deep copy for loop ke through ek ek key ko copy krke bhi kiya ja skta hai ultimatum
