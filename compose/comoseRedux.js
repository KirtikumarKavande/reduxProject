import { compose } from "redux";
let str = "I am Kirtikumar";
function concatFunc(str) {
  return str.split(" ").join("");
}
function repeatTwoTimes(str) {
  return str.repeat(2);
}
function upperCase(str) {
  return str.toUpperCase();
}
let composeFunction = compose(concatFunc, repeatTwoTimes, upperCase);
console.log(composeFunction(str));
