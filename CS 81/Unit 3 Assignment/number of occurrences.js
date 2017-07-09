/**
 * Problem 2:

 Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Output returned values to console.log(). Submit JS file.


 Sample arguments : 'w3resource.com', 'o'
 Expected output : 2
 */
// {
//     function counting(string,letter) {
//         if(letter.length!==1) throw new Error('second argument has to be a single letter');
//         let count = 0;
//         for(let i in string){
//             if (string[i]===letter) count++;
//         }
//         return count;
//     }
//     console.log(counting('w3resource.com', 'o' ));
//     console.log(counting('w3resource.com', 'os' ));
// }

{
    function counting(string,letter) {
        if(letter.length===1) {
            let count = 0;
            for(let i in string){
                if (string[i]===letter) count++;
            }
            return count;
        }
        else throw new Error('second argument has to be a single letter');
    }
    console.log(counting('w3resource.com', 'o' ));
    // console.log(counting('w3resource.com', 'os' ));
}