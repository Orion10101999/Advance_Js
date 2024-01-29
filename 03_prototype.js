/*
let student = {
    name : 'Anil',
    lastName : 'Sidhu',
    birth : 2000,
    getFullName : function(){
        return this.name + " " + this.lastName
    },
    getAge : function(){
        let age = new Date().getFullYear().this.birth
        return age
    },
}
console.log(student.getFullName());
*/

let users = {
    getFullName:function () {
        return this.name + " " + this.lastName
    },
    getAge:function(){
        let age = new Date().getFullYear()-this.birth
        return age
    }
    
}
/*

let student = {
    name : "Anil",
    lastName: "Sidhu",
    birth: 2000,
    getAge:users.getAge,
    getFullName:users.getFullName
}
let teacher = {
    name : "Jaipal",
    lastName: "Sharma",
    birth:1980,
    getAge:users.getAge,
    getFullName:users.getFullName
}
*/ 


/*
let student = {
    name : "Anil",
    lastName: "Sidhu",
    birth: 2000,
}
let teacher = {
    name : "Jaipal",
    lastName: "Sharma",
    birth:1980,

}
student.__proto__ = users
teacher.__proto__ = users
*/

console.log(student.getFullName());
console.log(student.getAge());
console.log(teacher.getFullName());
console.log(teacher.getAge());


