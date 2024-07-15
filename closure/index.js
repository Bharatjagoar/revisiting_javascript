function outer(){
    var fname ="bharat"
    function inner(){
        console.log(fname)
    }
    return inner
}

const func = outer()
func()