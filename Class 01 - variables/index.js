//Variavel é um espaço da memoria que armaneza dados

let firstName = "Mayara"; //string
let age = 18; //number
let student = true; //booleans

console.log("Hello, firstName");
console.log("You are", age, "years old");
console.log("Student:", student);

document.getElementById("p1").innerHTML = "Hello " + firstName;
document.getElementById("p2").innerHTML = "You are " + age + " years old";
document.getElementById("p3").innerHTML = "Student: " + student;