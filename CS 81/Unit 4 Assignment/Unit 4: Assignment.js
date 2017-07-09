/**
 Problem #1

 Write a simple JavaScript program that join all elements of the following array into a string.
 Sample array : myFaceBookFriends = ["John", "Paul", "Mary", "Tony", "Joan"];


 Expected Output:
 "John and Paul and Mary and Tony and Joan"
 Hint: Array Method join() http://www.w3schools.com/jsref/jsref_join.asp (Links to an external site.)Links to an external site.
 */
{
    let myFaceBookFriends = ["John", "Paul", "Mary", "Tony", "Joan"];
    console.log(myFaceBookFriends.join(' and '));
}

/**
 Problem #2

 Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

 Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

 console.log(range(1, 10));
 //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(sum(range(1, 10)));
 // 55


 */
{
    function range(start, end){
        return Array.from(new Array(end-start+1), (n,i) => i+start );
    }
    console.log(range(1,10));
    function sum(array){
        return array.reduce((sum,value)=>{return sum+value},0)
    }
    console.log(sum(range(1, 10)));
}
/**
 Problem #3

 Write a script that creates objects for people named Ani, Sipho, Tuulia, Aolani, Hiro, and Xue, such that:

 Tuulia is the mother of Sipho.
 Ani and Sipho are married.
 The children of Ani and Sipho are, in order, Aolani, Hiro, and Xue.
 Define each of the person objects with as many of the following properties as you can fill in: name, mother, father, spouse, and children. The childrenproperty should have an array value. Also create a method for the person object that allows the spouse property to be changed.

 Hint: http://www.w3schools.com/js/tryit.asp?filename=tryjs_create_object3 (Links to an external site.)Links to an external site.

 console.log(sipho.mother);
 // tuulia
 ani.changeSpouse("mars");
 console.log(ani.spouse);
 // mars

 */
{

    function person(name,mother,father,spouse,children){
        'use strict';
        function changeProperty(property) {
            return (propertyValue) =>{obj[property]=propertyValue;};
        }
        let obj = {
            name:name,
            mother:mother,
            father:father,
            spouse:spouse,
            children:children,
            // test:()=>{return obj['name']},
            changeSpouse:changeProperty('spouse'),
            changeMother:changeProperty('mother'),
            changeFather:changeProperty('father'),
            changeName:changeProperty('name'),
            changeChildren:changeProperty('children'),

            newWife:(motherInLaw,fatherInLaw)=>{let wife = person(spouse,motherInLaw,fatherInLaw,name,children);
                wife.newChild=(childName,childSpouse,grandChild)=>{return person(childName,spouse,name,childSpouse,grandChild);};
                wife.existingChild=(childNameIndex,childSpouse,grandChild)=>{return person(children[childNameIndex],spouse,name,childSpouse,grandChild);};
                return wife;
            },
            newHusband:(motherInLaw,fatherInLaw)=>{return person(spouse,motherInLaw,fatherInLaw,name,children);},


        };
        return obj;
    }
    // let random=person('1','2','3','4','5');
    // let random2=person('5','2','3','4','5');
    // random.changeSpouse('spouse');
    // console.log(random.spouse);
    // console.log(random2.test());
    // let sipho=person('sipho','tuulia','ani',);
    let tuulia=person('Tuulia','','','',['Sipho']);
    let sipho=person('Sipho','Tuulia','','Ani',['Aolani','Hiro','Xue']);
    let ani=sipho.newWife('','');
    let aolani=ani.existingChild(0,'','');
    let Hiro=ani.existingChild(1,'','');
    let Xue=ani.existingChild(2,'','');
    // console.log(ani,sipho,tuulia,aolani,Hiro,Xue);
    console.log(sipho.mother);
    ani.changeSpouse("mars");
    console.log(ani.spouse);
    // console.log(ani,sipho,tuulia,aolani,Hiro,Xue);
}