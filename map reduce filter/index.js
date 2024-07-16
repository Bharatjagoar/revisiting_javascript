const arr = [8,12,41,99,3,74,2,21,14,19]


let art=arr.filter(check)

function check(number){
    return number>20
}


const mapping = function (num){
    return 0
}

art = arr.map(mapping)

console.log(art)


const arr3 = [5,4,8,6,2,1,3,7]

let value = arr3.reduce(add) 

console.log(value)


function add(num1,num2){
    return num1+num2
}