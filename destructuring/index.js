console.log("hello")


const arr = [4,5,68,9,1212]
const [first,...next] = arr
console.log(next)



//object destructuring

let obj = {
    a:"bharat",
    b:"kumar",
    c:"jagoar",
    d:"software engineer ar google"
}

var {a,b,c,d}=obj


console.log(a,b,c,d)

let obj2 = {
    a:"ashima",
    b:"kumar",
    c:"jagoar",
}

var {a,b,c,d="fsafsafda"}=obj2
// default value can be given 

console.log(a,b,c,d)


// in object destructuring exactly same name is to be used as of properties name
const objec = {
    fname:"fdsa",
    sname:"popopopop"
}

// Object destructuring at function pararmeters 

const display=({fname})=>{
    console.log(fname)
}

display(objec)