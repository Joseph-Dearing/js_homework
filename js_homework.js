/* Problem one adding variables together*/
var numb = 4;
    numb2 = 4;
console.log(numb+numb2)
/*Problem two multidimensional arrays*/
var honda = ["Accord", "Civic"];
var telsa = ["Model 3", "Model S"];
var cars = [honda, telsa];
var cars = [ [ "Accord", "Civic"], ["Model 3, Model S"]]
console.log(cars [0][1]);
console.log(cars [1][0]);
/*Problem three making a scipt that checks is less or greater then 100*/
var num = 100;
if (num < 99) {
    alert ("Your number is less than 99");
} else  {
    alert ("Your number, " + num + ", is greater than 99")
}
/*problem four trying to run the script and then changing the variables value.
"After I ran the script it alerted the user that their number 100 was greater then 99.
I then changed the variables value to 98 which alerted the user that it was less then 99*/

/*problem five trying to check if a string stored in a variable is the same as another string*/
var word = "car";
if (word == "car") {
    alert("Your word is car")
}  else {
    alert("Your word is not car, its " + word)
}
/*problem number 6 declaring a function that takes a name as argument and posts it to the console*/
function someName(numberOne, otherNumber){
    return numberOne + 4 + otherNumber;
}
console.log(someName(4, 4));
/*number 7 declaring a function that is taking no agruments*/
function alertName(somePersonsName){
    return alert(somePersonsName);
}
alertName("Joe");
/*number 8 declare a function that depending upon which virtual 'door'
was entered tells the user that they have gotten a prize*/


function prizes() {
    var stop = false;

    while (stop == false) {
        var door = prompt();
        if (door == 2) {
            alert("wrong door");
        } else if(door ==4 ) {
            alert("right door");
            stop = true;
        } else {
            alert("wrong door");
        }
    }
}

prizes();