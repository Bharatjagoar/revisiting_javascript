console.log("before check");


const promise = new Promise((res,rej)=>{
    setTimeout(() => {
        res({user:"bharat",lname:"jagoar"})    
    }, 5000);
})



function check(){
    console.log("before promise");
    promise
    .then((Response)=>{
        console.log(Response)
        return Response.user
    })
    .then((res)=>console.log(res))
    .catch((err)=>{
        console.log(err)
    })
    console.log("after promise");
}

check()
console.log("after check")



// when promises are handle using using a function it does not suspend the execution of the function like await
// control skips the line where the promises are handles USING .THEN .CATCH METHODS
