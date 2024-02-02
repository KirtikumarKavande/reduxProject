let str="I am Kirtikumar"
function concatFunc(str) {
return str.split(" ").join("")
}
function repeatTwoTimes(str){
    return str.repeat(2)
}
function upperCase(str){
    return str.toUpperCase()
}
console.log(upperCase(repeatTwoTimes(concatFunc(str))))
