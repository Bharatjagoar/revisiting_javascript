function add(a,b,func){
    const result = a+b
    func(result)
    
}   


const show = (res)=>{console.log("this is result ::",res)}


add(48,12,show)



const subtract = (a,b)=>{
    const result = a-b
    return ()=>{console.log(result)}
}

result = subtract(48,42)
result()