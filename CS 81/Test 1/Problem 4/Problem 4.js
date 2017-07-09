/**
 * Write a JavaScript function that accepts a string as a parameter and counts the number of vowels (aeiouAEIOU) within the string.

 Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.

 Sample Data and output:
 Example string: 'The quick brown fox'
 Expected Output: 5

 Hint: vowel_list.indexOf(str1[x]) !== -1
 */

function countingVowels(string) {
    if(typeof string!=='string') throw error('type error');
    let vowels='aeiouAEIOU';
    let counter =0;
    for(let i in string){
        if (vowels.includes(string[i])) counter++;
    }
    return counter;

}
console.log(countingVowels('The quick brown fox' ));
console.log(countingVowels('Hello world, welcome to the universe.' ));