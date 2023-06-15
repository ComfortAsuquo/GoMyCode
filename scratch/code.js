// var userName =prompt("what is your name?")
// console.log(userName)

// var x;
// console.log(Boolean(x));

// var x = 5;
// var y = "5";
// console.log(x != y);

//subtract numbers
// function subtractNumbers(a, b){
//     return(a-b);
// }
// var answer=subtractNumbers(10, 5);
// console.log(answer);

// var subtractNumbers= function(a, b){
//     return (a-b);
// }
// console.log(subtractNumbers(10, 9))

//change the function parameters if you need  
// var test =function (a, b) { 
//     // Write your code below this line  
// return (a/b);
// }
// console.log (test (10, 2));

// function greet(name){
//      return `Hello ${name.toUpperCase()}`
//     }

    // const greet = name => `Hello ${name.toUpperCase()}`

// var numbers = [19, 65, 1, 2, 6, 1, 9, 9, 2, 1]; 

// var sum = 0;
// var i = 0;
// do {
//     sum += numbers[i];
//     i += 1;
// } while ( i < numbers.length )

// console.log( 'The loop was executed ' + i + ' times' );

// function number (n){
// if(n>10){
//     console.log(`${n} is greater than 10`)
// }
// else if(n<10){
//     console.log(`${n} is less than 10`)
// }
// else if(n==10){
//     console.log(`${n} is equal to 10`)
// }
// }

// number(10);

// function daysOfTheWeek (day){
//         switch(day){
//         case 1:
//             console.log("day is Sunday");
//             break;
        
//         case 2:
//             console.log("day is Monday");
//             break;
        
//         case 3:
//             console.log("day is Tuesday");
//             break;
        
//         case 4:
//             console.log("day is Wednesday");
//             break;
        
//         case 5:
//             console.log("day is Thursday");
//             break;
        
//         case 6:
//             console.log("day is Friday");
//             break;
        
//         case 7:
//             console.log("day is Saturday");
//             break;
        
//         default:
//             console.log("Not a day");
//         }
//     }
    
//     daysOfTheWeek(1);

// var Tens = [10, 20, 30, 40, 50]
// var result=0

// for(i=0; i<Tens.length;i++){
//     result=result+Tens[i]
//     console.log(result);
// }

// var EmptyArray = []

// EmptyArray.push("item1");
// console.log(EmptyArray);

// EmptyArray.unshift("item2");
// console.log(EmptyArray);

// EmptyArray.shift();
// console.log(EmptyArray);

// EmptyArray.pop();
// console.log(EmptyArray);

// var comfort ={
//     Lastname: "Asuquo",
//     Gender: "Female",
//     Profession: "Undecided",
//     Dislikes: "Going to the office",
//     Hobby: function(){
//         return"I love to code, agba senior dev!";
//     }
// }
// console.log(comfort["Lastname"]);
// console.log(comfort.Gender);
// console.log(comfort["Profession"]);
// console.log(comfort.Dislikes);
// console.log(comfort.Hobby());

// comfort.location = "Lagos";
// comfort.height ="shorty";
// comfort.networth ="upcoming";
// comfort.race ="African";
// comfort.Lastname ="Emmanuel"

// delete comfort.Profession;
// delete comfort.race;

// console.log(comfort);

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
// function EvenOrOdd (n){
//     if(n%2==0){
//         return "Even"
//     }
//     else {
//         return "Odd"
//     }
// }

// console.log(EvenOrOdd (3))

//querySelector() returns the first element within the document that matches the specified selector or group of selectors. If no matches are found, null is returned.
// var Dom = document.querySelector('h1')
// console.log (Dom)

//getElementById() returns an object representing the element whose ID property matches the specified string.
var text = document.getElementById('text');

console.log(text)

//querySelectorAll() returns a static (not live) NodeList representing a list of the document's elements that match the specified group of selectors
var all = document.querySelectorAll('h3');
console.log(all);

//document.getElementsByClassName() returns child elements in an array belonging to the same classname
var classTexts = document.getElementsByClassName('text2');
console.log(classTexts)

//document.getElementsByTagName() returns elements which have the same tagname
var Tags = document.getElementsByTagName('h5');
console.log(Tags)

var element1 = text.getAttribute("id")
console.log (element1)

let touchMe = document.getElementById('touch')
touchMe.setAttribute('width','50px')
//adding style to a dom element
touchMe.style.backgroundColor ='red';
touchMe.removeAttribute('height')
console.log(touchMe)

//creating a new dom element
var newParagraph = document.createElement('p');

//create a new Text node
var newText = document.createTextNode('This is adding a text node to an exiating document');

//append new element to document
var newContent = document.getElementById('main');
document.body.appendChild(newParagraph,newContent);

//add event listener to button. Remove- btn.removeEventListener

function setAlert(){
    alert('Thanks for clicking me!')
}

var btn = document.querySelector('button')
btn.addEventListener('click',setAlert)

//listen to keyboard, mouse, form, window events
function logKey(event)
// {
//     log.textContent += " " + e.code;
// }

function validateForm(e) {
    e.preventDefault()
    var name = document.loginForm.name.value
    var password = document.loginForm.password.value
   if (name.length==0)
    return alert(`name is required`)
   if (password.length<5)
    return alert(`password length should more than 5`)
   }