/**
 *  Unit 3: Assignment

 Problem 1:

 The previous chapter introduced the standard function Math.max() that returns its largest argument. We can do that ourselves now. Write a function max() that takes three arguments and returns their maximum. Submit JS file.

 // Your code here. Output as follows.

 console.log(max(0, 10, 100));
 // → 100
 console.log(max(0, -10, -100));
 // → -0
 */
{
    function max(...args){
        let maxNumber=args[0];
        for(let i in args){
            maxNumber= args[i]>maxNumber ? args[i] : maxNumber;
        }
        return maxNumber;
    }
    console.log(max(0, 10, 100));
    console.log(max(0, -10, -100));
    console.log(max(0, -10, -100,1950));

}
