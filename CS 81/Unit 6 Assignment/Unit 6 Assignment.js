/**
 * Problem #1

 Create an Object constructor function called BankAcct with the properties acctNum, acctOwner, checkBalance, saveBalance, acctType.

 Define a BankAcct.prototype method called checkTransfer() that accepts a amount as an argument. The method should check if the amount + checkBalance is greater than 0 before setting a new checkBalance amount.


 */
// {   'use strict';
//     class BankAcct{
//         constructor(acctNum,acctOwner,checkBalance,saveBalance,acctType){
//             this.acctNum=acctNum;
//             this.acctOwner=acctOwner;
//             this.checkBalance=checkBalance;
//             this.saveBalance=saveBalance;
//             this.acctType=acctType;
//         }
//         checkTransfer(amount){
//             if((amount + this.checkBalance)>0) this.checkBalance+=amount;
//             else console.log('insufficient fund');
//         }
// }
// let foo=new BankAcct('123456','bar',404,503,'checking');
//     foo.checkTransfer(10);
//     console.log(foo);
//     foo.checkTransfer(-503);
//     console.log(checkGivenProperty(foo,'acctType'));
//     console.log(checkGivenProperty(foo,'checkTransfer'));
// }
//
// {
//     'use strict';
//
//     let _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
//
//     function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
//
//     let BankAcct = function () {
//         function BankAcct(acctNum, acctOwner, checkBalance, saveBalance, acctType) {
//             _classCallCheck(this, BankAcct);
//
//             this.acctNum = acctNum;
//             this.acctOwner = acctOwner;
//             this.checkBalance = checkBalance;
//             this.saveBalance = saveBalance;
//             this.acctType = acctType;
//         }
//
//         _createClass(BankAcct, [{
//             key: 'checkTransfer',
//             value: function checkTransfer(amount) {
//                 if (amount + this.checkBalance > 0) this.checkBalance += amount;else console.log('insufficient fund');
//             }
//         }]);
//
//         return BankAcct;
//     }();
//
//     let foo = new BankAcct('123456', 'bar', 404, 503, 'checking');
//     foo.checkTransfer(10);
//     console.log(foo);
//     foo.checkTransfer(-503);
// }

{
    'use strict';
    let BankAcct = function (acctNum, acctOwner, checkBalance, saveBalance, acctType) {
            this.acctNum = acctNum;
            this.acctOwner = acctOwner;
            this.checkBalance = checkBalance;
            this.saveBalance = saveBalance;
            this.acctType = acctType;
    };
    BankAcct.prototype.checkTransfer=function(amount){
        if (amount + this.checkBalance > 0) this.checkBalance += amount;else console.log('insufficient fund');
    };

    let foo = new BankAcct('123456', 'bar', 404, 503, 'checking');
    foo.checkTransfer(10);
    console.log(foo);
    foo.checkTransfer(-503);
}

// Problem #2
//
// Write a JavaScript function to check if an object contains given property. Create a function checkGivenProperty() that accepts a object and a property name as arguments and return true or false.
//
//     Tip 1: Use hasOwnProperty.call()
//
// Tip 2: First create an object with properties , then use hasOwnProperty.call() to check for a given property.
function checkGivenProperty(obj,property){
    return hasOwnProperty.call(obj,property);
}

{
    'use strict';
    let BankAcct = function (acctNum, acctOwner, checkBalance, saveBalance, acctType) {
        this.acctNum = acctNum;
        this.acctOwner = acctOwner;
        this.checkBalance = checkBalance;
        this.saveBalance = saveBalance;
        this.acctType = acctType;
    };
    BankAcct.prototype.checkTransfer=function(amount){
        if (amount + this.checkBalance > 0) this.checkBalance += amount;else console.log('insufficient fund');
    };

    let foo = new BankAcct('123456', 'bar', 404, 503, 'checking');
    foo.checkTransfer(10);
    console.log(foo);
    foo.checkTransfer(-503);
    console.log(checkGivenProperty(foo,'acctType'));
    console.log(checkGivenProperty(foo,'checkTransfer'));
}