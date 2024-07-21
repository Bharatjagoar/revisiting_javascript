console.log("Fda")



// function add(...para){
//     console.log(arguments)
//     console.log(para)
// }

//hoisting not possible  
const add = (...name)=>{
    console.log(name)
}
add(1,2,3,4,5,6,78,9)



// this keyword reffer to global object
const obj = {
    value : 456,
    show: ()=>{
        console.log(this.value)
    }
}

obj.show()