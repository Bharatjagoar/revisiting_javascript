function greet(){
    return "hello world"
}


greet.val=456




const arr = [1,2,3,5,6]

// console.log(arr.__proto__)
// console.log(Array.prototype);
console.log(arr.__proto__.__proto__)
console.log(Object.prototype)


// arr has the prototype of array , array has the prototype of object and object does not have any refference to prototype
const object = {
    city:"delhi",
    getdet:function(){
        console.log("i love "+this.city)
    }
}


const obj={
    fname:"bharat",
    lname:"jagoar"
}
obj.__proto__ = object
console.log(obj.fname)
console.log(obj.city)//check it in browser 

// this is the classic expample of prototypal inheritence in javascript, not only this it can access the methods
//of the above level see the example below
//so prototypal inheritence is nothing but chaining from one object (say string , array ,etc) 
// to object`s prototype etc

obj.getdet()