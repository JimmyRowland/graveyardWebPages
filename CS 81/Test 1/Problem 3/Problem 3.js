/**
 var myQuote="He who laughs, lasts.";

 Give the value of each of the following expressions:
 a. myQuote.toUpperCase()
 b. myQuote.indexOf("a")
 c. myQuote.indexOf("@", 1)
 d. myQuote.indexOf("who")
 e. myQuote.indexOf("a", 10)
 f. myQuote.lastIndexOf("a")
 g. myQuote.lastIndexOf("a", 7)
 h. myQuote.lastIndexOf("a", 10)
 i. myQuote.charAt(7)
 j. myQuote.charAt(myQuote.length)
 k. myQuote.charAt(myQuote.length - 3)
 */
var myQuote="He who laughs, lasts.";
var array=[
'myQuote.toUpperCase()',
'myQuote.indexOf("a")',
'myQuote.indexOf("@", 1)',
'myQuote.indexOf("who")',
'myQuote.indexOf("a", 10)',
'myQuote.lastIndexOf("a")',
'myQuote.lastIndexOf("a", 7)',
'myQuote.lastIndexOf("a", 10)',
'myQuote.charAt(7)',
'myQuote.charAt(myQuote.length)',
'myQuote.charAt(myQuote.length - 3)'];

for (let i in array){
    console.log(`${array[i]} => ${eval(array[i])}`);
}

// console.log(typeof(myQuote.charAt(myQuote.length)));
// myQuote.toUpperCase() => HE WHO LAUGHS, LASTS.
// myQuote.indexOf("a") => 8
// myQuote.indexOf("@", 1) => -1
// myQuote.indexOf("who") => 3
// myQuote.indexOf("a", 10) => 16
// myQuote.lastIndexOf("a") => 16
// myQuote.lastIndexOf("a", 7) => -1
// myQuote.lastIndexOf("a", 10) => 8
// myQuote.charAt(7) => l
// myQuote.charAt(myQuote.length) =>(empty string)
// myQuote.charAt(myQuote.length - 3) => t