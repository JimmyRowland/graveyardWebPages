/**
 * Put the below data in a JSON formatted array where each individual is its own object. Then write code that will print each person's first letter of their first name and last name (example: msmith)



 firstName: Mike lastName: Smith

 firstName: Anna lastName: House

 firstName: Mark lastName: McDonald
 */

var data=[
    {firstName: 'Mike', lastName: 'Smith'},

    {firstName: 'Anna', lastName: 'House'},

    {firstName: 'Mark' ,lastName: 'McDonald'}
];

function printName(data){
    for(let i in data){
        console.log((data[i].firstName[0]+data[i].lastName).toLowerCase())
    }

}
printName(data);