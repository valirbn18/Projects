// function outerFunction(param1, param2) {
//   let outerParameter = "I am an outer parameter";
//   console.log(outerParameter);
//   function innerFunction(param1, param2) {
//     let innerParameter = outerParameter;
//     console.log(innerParameter);
//     outerParameter = "New Value";
//     console.log(outerParameter);
//   }
//   innerFunction(12, 22);
// }
// outerFunction(2, 3);
// innerFunction();

// function calculate(a) {
//   return function sum(b) {
//     return a + b;
//   };
// }

// console.log(calculate(4)(5));
var array = [
  { firstName: "Jimmy", age: 50 },
  { firstName: "Mircea", age: 29 },
  { firstName: "Alin", age: 22 },
  { firstName: "ionut", age: 47 },
  { firstName: "Maria", age: 24 },
  { firstName: "Alina", age: 28 },
  { firstName: "Dana", age: 17 },
  { firstName: "Rebeca", age: 30 },
  { firstName: "Marietta", age: 19 },
  { firstName: "Andreea", age: 23 }
];
function media() {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i].age;
  }
  return sum / array.length;
}
media();

var personalData = [
  {
    firstName: "Mihai",
    lastName: "Alexandru",
    fullName: function(firstName, lastName){

        console.log("fullName.this");
    }
    
  }
];,
  {
    firstName: "Maria",
    lastName: "Alina"
    fullName: function(firstName, lastName){

        console.log("this");
    }
    console.log("this");
  },

  {
    firstName: "Delia",
    lastName: "Fantas"
    fullName: function(firstName, lastName){

        console.log("this");
    }
    console.log("this");
  }
];


let calculator = {
    a:0,
    b:0,
    read: function(){
        this.a=parseInt(prompt("Enter first number", 0));
        this.b=parseInt(prompt("Enter first number", 0));
    },
    sum: function(){
        return this.a + this.b;

    },
    inmultire: function(){
        return this.a * this.b;
    }

};
calculator.read();
alert(calculator.sum());
alert(calculator.inmultire());