/**
 * Provide the output to console

 var x = "good morning!";

 var f1 = function() {
x = "good afternoon";
};
 f1();
 console.log(x);
 // What is outputted to console?

 var f2 = function() {
var x = "good evening";
};
 f2();
 console.log(x);
 // What is outputted to console?
 */
var x = "good morning!";

var f1 = function() {
    x = "good afternoon";
};
f1();
console.log(x);
// What is outputted to console?
// good afternoon, f1 change the value of the global variable x

var f2 = function() {
    var x = "good evening";
};
f2();
console.log(x);
// good afternoon, the local variable x("good evening") is deleted by garbage collection after f2() completed.
// x refers to the global variable x = "good afternoon"