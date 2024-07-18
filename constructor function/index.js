function user(fname,lname){
    this.fname=fname
    this.lname= lname
}


const u1 = new user("bharat","jagoar")
const u2 = new user("ram","siya")
console.log(u1.lname)
console.log(this)