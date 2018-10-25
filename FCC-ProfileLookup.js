//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
function lookUpProfile(name, prop){
// Only change code below this line
//Set variables
var nameList = '';
var propList;
var propString
//Get value for nameList to use later
for (var i = 0; i < contacts.length; i++){
    if (contacts[i].firstName === name){
        var x = i;//To use in next section
        nameList = contacts[i].firstName;
}
}

//Get value for propList to use later
for (let obj in contacts[x]){
    if (obj === prop){
        propList = contacts[x][prop];
    }
}
//Return appropriate values
if (nameList.length === 0){
    return console.log('No such contact');
}else if (propList.length === 0){
    return console.log('No such property');
}else{
    return console.log(propList);
}
// Only change code above this line
}
// Change these values to test your function
lookUpProfile("Kristian", "lastName");