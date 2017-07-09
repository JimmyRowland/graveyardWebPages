/**
 * Created by toor on 7/2/17.
 */
// Explain each line of this code:

    var str = '{"foo": "bar"}'; // Create variable str, and pass the string value '{"foo": "bar"}' into str;

console.log(str.foo); // print out foo property of String Object str, which does not exist. 'undefined' is printed out.

var obj = JSON.parse(str); // create a variable obj. JSON.parse() converts str into an object described by str, and then passes it to obj.

console.log(obj.foo); // print out foo property of the obj in the console. bar