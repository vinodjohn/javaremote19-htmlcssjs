//alert("Hello, SDA!");

console.log("I may be a Front-end developer");

var fullName = "Vinod John";

console.log(fullName.length);
console.log(fullName);

let locationCity = "Tallinn";

const ZIPCODE = 72839;

let isActive = true;
let age = 32;
let salary = 4500.90;

// Comparison
let a = '5';
let b = 5;

if (a == b) {
    console.log("A is same value as B");    // value comparison
} else if(a === b ) {
    console.log("A is same value and type as B");  // value and type comparison
}


let arrayFruit = ["Apple", "Orange", "Mango"];
console.log(arrayFruit);

//Removes last fruit
arrayFruit.pop()
console.log(arrayFruit);

//Add new fruit
arrayFruit.push("Banana");
console.log(arrayFruit);

//JSON - JavaScript Object Notation
let student = {
    "name": "Vinod John",
    "age" : 20,
    "address": {
        "street": "Ulemiste",
        "city": "Tallinn",
        "zipcode": 157857
    },
    "joinDate": "2022-12-8",
    "active": true,
    "grade": 4.5
}

console.log(student);
console.log(student.name);
console.log(student.address);
console.log(student.address.city);
console.log(Object.keys(student));


//Array of JSON or JSON array
let students = [
    {
        "name": "Vinod John",
        "age" : 20,
        "address": {
            "street": "Ulemiste",
            "city": "Tallinn",
            "zipcode": 157857
        },
        "joinDate": "2022-12-8",
        "active": true,
        "grade": 4.5
    },
    {
        "name": "Mark Zukerberg",
        "age" : 24,
        "address": {
            "street": "Ulemiste",
            "city": "Tartu",
            "zipcode": 157857
        },
        "joinDate": "2022-12-8",
        "active": false,
        "grade": 4.5
    }
];

console.log(students);
console.log(students[1]);
console.log(students[0].joinDate);
students.forEach(s => console.log(s.name));


//FUNCTIONS
function isStudentPassed (student) {
    return student.grade > 3.5;
}

let studentPassResult = isStudentPassed(student);
console.log(student.name + "'s result: " + studentPassResult);


//Accessing HTMLs
let image = document.getElementById("image-block");
image.innerHTML = "<h2>Hellow!!!!</h2>";
console.log(image);


let liTags = document.getElementsByTagName("li");
console.log(liTags);

function showMeAlert() {
    alert("Contact me for emergency!");
}

function showAlert() {
    alert("This field is mandatory to be filled!");
}


//Arrow functions
const isStudentPassed2 = (student) => {
    return student.grade > 3.5
};

isStudentPassed2(student);



























