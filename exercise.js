// const scores = [83, 78, 94, 92, 63];

// let total = 0;
// for (let i = 0; i < scores.length; i++){
//     total += scores[i];
// }

// let average = total / scores.length;

// console.log(average);

// var num = -5;
// function getOpposite(num) {
//     console.log(-num);
// }
// var result = getOpposite(num)

// celcius to Fahrenheit

// let celcius = 10;

// let fahernheit = (celcius)=> {
//     return celcius * 33.5
// // }

// var a = 'guvi';

// console.log(a.split('').join('  '));
// console.log(...a);

// var arr1 = [1, 2, 3, 4, 5];
// var arr2 = [6, 7, 8, 9, 0];

// let arr = [...arr1, ...arr2];

// console.table(arr);

// const obj = {
//     fname: 'Vidhya',
//     lname: 's'
// };

// const obj2 = obj;

// console.log(obj2);

// console.log(obj.fname);

// function add(a, b,...rest) {
//     console.log(a, b);
//     console.log(rest);
// }
// add(1, 2, 3, 4, 5, 6, 7, 8, 9);

// class Uber {
//     constructor(distance, rate, waitingTime) {
//         this.distance = distance;
//         this.rate = rate;
//         this.waitingTime = waitingTime;
//     }
//     getRideDetails() {
//         return (`The Distance of the ride is ${this.distance} with a rate of ${this.rate} and the waiting period will be ${this.waitingTime}`)
//     }
//     getPrice() {
//         let price = ((this.distance * 30) + (5 * this.waitingTime));
//         return price;
//     }
//     setDistance(dist) {
//         this.distance = dist;
//     }
// }

// const cab = new Uber(50, 1500, 5);

// let distance = 40;
// const cab1 = new Uber(50, 1500, 5);
// cab1.setDistance(43);
// console.log(cab1.getRideDetails());
// console.log(cab1.getPrice());

// class Person {
//     constructor(fname, lname, age, gender, education, occupation, livingArea, maritalStatus, skill, bloodGroup) {
//         this.fname = fname;
//         this.lname = lname;
//         this.age = age;
//         this.gender = gender;
//         this.education = education;
//         this.occupation = occupation;
//         this.livingArea = livingArea;
//         this.maritalStatus = maritalStatus;
//         this.skill = skill;
//         this.bloodGroup = bloodGroup;
//     }
//     getPersonalDetails() {
//         return (`My name is ${(this.fname+" "+this.lname)} I'm ${this.age} years old, I'm a straight ${this.gender},
//         my education qualification is ${this.education}, my occupation is ${this.occupation}, I'm living in ${this.livingArea}, I'm a ${this.maritalStatus} person,
//         I'm skillful in ${this.skill}, my blood group is ${this.bloodGroup}`)
//     }
// }

// const employee1 = new Person("Yogeshwaran", "Rathinam", "23", "male", "Diploma in Mechanical", "Machine Programmer", "Chennai Thoraipakkam", "Unmarried", "Full Stack Web Development", "O+");

// console.log(employee1.getPersonalDetails())

// let input = '13 1';
  
// let spli = input.split(' ');

// let result = function() {
//     if (spli[0] > spli[1]) {
//         return spli[0];
//     } else {
//         return spli[1];
//     }
// }

// console.log(result());

// let a = 1;
// let b = 2;
// let c = a + b;

// console.log(c)

// let input = 6;
// let table = [];
//  for (let i=1; i<input+1; i++){
//      if(input===0){
//          console.log('Null');
//           }
//      let x = i * 9;
//      table.push(x);
//  }
// console.log(table.join(' '));


//  let arr = [];
//  for (let i = 0; i < 5; i++) {
//    let x = Math.floor(Math.random() * 10);
//    arr.push(x);
// //    console.log(x);
//  }
//  const len = arr.length;
//  const commaArray = arr.map((x, i) => i < len - 1 ? x + ',' : x);
//  console.log(...commaArray);

let arr = [1, 2, 3, 4, 5, 6,3,2,4,51,31,31];

let sum = arr.reduce((acc, curr) => acc + curr);

console.log(sum);

let odd = arr.filter((elements) => elements % 2 != 0);
console.log(odd);

console.log(arr);

let result = arr.map (function(element){
    return element * 2;
})

let result1 = arr.map((element) => element * 2);

console.log(result.join(' '));
console.log(result1.join(' '));

var student = [
    {
        name: 'Dhayakar',
        marks: 80
    },
    {
        name: 'Yogeshwaran',
        marks : 49
    },
    {
        name: 'Balaji',
        marks: 89
    }
]

let add = student.reduce((acc,curr)=> acc+curr.marks,0)

console.log(Math.floor(add / student.length)+'%');


let more = student.filter(elements => elements.marks > 50); 
console.log(more);

// let increase = student.map(a => a.marks + 10);

// console.log(increase);

// let newArray = student.map(Number);

// console.log(newArray)

// let ar = [1, 23, 45, 43, 21, 85];

// let res = ar.map((element) => Math.floor(Math.sqrt(element))).join(' ');


// console.log((res));

// let num = Number.isInteger(12);

// console.log(num)

