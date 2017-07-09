/**
 * 2. Password

 Submit passwd.html and external JavaScript code passwdScript.js

 Write a while loop to be used to test a password. The password is "secret" and the code within the loop is executed until the user inputs the correct password.

 Tip: Use the prompt() function to accept user password
 */

(()=>{
    const password = prompt('Please set up your password');
    let userInput = prompt('Please enter your password');
    function *foo() {
        while(userInput!=password){
            userInput = prompt('Wrong password, please try again');
        }
        yield;
        alert("correct password");
    }

    let it = foo();
    it.next();
    it.next();
})();