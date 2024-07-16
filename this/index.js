const  obj = {
    obj:45,
    obj2:569,
    get : function(){
        console.log(this.obj)
    }
}


function windows10pro(){
    let fname = "bharat jagoar"
    const thisIllustration=()=>{
        console.log(this.fname)
    }
    thisIllustration()
    //in normal function this reffers to window object
}



obj.get()
// thisIllustration()
windows10pro()