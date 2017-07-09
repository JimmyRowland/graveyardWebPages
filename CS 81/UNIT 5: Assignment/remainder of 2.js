/**
 * Problem #2

 Modify the below code to print the numbers that have a remainder of 2 when divided by 3 for the number 0 - 50. Sample code below from Chapter 5 of Eloquent JavaScript Textbook.



 function unless(test, then) {

if (!test) then();

}

 function repeat(times, body) {

for (var i = 0; i < times; i++) body(i);

}

 repeat(3, function(n) {

unless(n % 2, function() {

console.log(n, "is even");

});

});
 */

function unless(test, then) {

    if (test) then();

}

function repeat(times, body) {

    for (var i = 0; i < times; i++) body(i);

}

repeat(51, function(n) {

    unless(n % 3 === 2, function() {

        console.log(n, "has a remainder of 2");

    });

});