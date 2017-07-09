/**
 *  Explain Automatic Type Conversion in JavaScript.
 *  JavaScript is a loosely typed language.
 *  Implicit coercion can happen when one variable need to be converted to another type to complete an operation.
 *  For example, if() and while () expression will convert the non-boolean parameter into boolean.
 *  '',0,NaN, null, undefined, and false are evaluated as false. others as true.
 *  == != operators allow coercion but === !== do not allow coercion.
 *
 *  When an operation is performed on a primitive type variable, the variable automatically converted into its corresponding object type.
 *
 *
 */
var primitiveString = 'string';
console.log(primitiveString.length); // primitiveString is coerced into String object.

var a =[1,2,3];
var b ='1,2,3';
console.log(a==b,a.join(',')); //a is converted into a.join(',')

var c =33;
var d = '34';
var e = 'foo';
console.log(c<d,e>c,e<c); // d is converted into number 34, e is converted into NaN.




