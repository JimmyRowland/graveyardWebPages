/**
 * Created by toor on 8/8/16.
 */
"use strict";
var lala = "lala"; //global
let gaga = "gaga"; // does not have a property

const  PI = 3.14;// can't be changed
function test(){
    var lala = "testlala";  //local
    let caca = "asfdhasg";  //local
    const E = 239485793287; // local
    return gaga;
}

function letTest() {
    let x = 1;
    if (true) {
        let x = 2;  // different variable
        console.log(x+" iflet");  // 2
    }
    console.log(x+" let");  // 1
}
function varTest() {
    var x = 1;
    if (true) {
        var x = 2;  // same variable!
        console.log(x+" ifvar");  // 2
    }
    console.log(x+" var");  // 2
}
varTest();
letTest();
console.log(test());
console.log(lala);
console.log(gaga);

// let will always be local variable in that block
let circleArea1 = (r) =>{
    return PI *r *r;
}
let circleArea2 = r => PI *r *r; //single variable syntax
console.log(circleArea1(2)==circleArea2(2));

console.log(`random text ${gaga+lala} some\ntext`);
console.log(`random text ${gaga+lala} some
text`);
var nums = [5,76,2];
var print_names = function() {
    for (var i=0; i<arguments.length; i++) console.log(arguments[i]);

}
function addNum(a,b,c){
    console.log(a+b+c);
}
addNum(...nums);

