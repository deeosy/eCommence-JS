// // 1

// const myName = "Walter";
// let myAge = 19;
// const loveGames = true;
// const gameList = ['GOD-1','GOD-2','Space-Marine','Warframe'];
// console.log(myName, myAge, loveGames, gameList);

// // 2
// const x = 30;
// const y = 25;

// console.log(x > y);
// console.log(x < y);
// console.log(x == y);
// console.log(x != y);
// console.log(x >= y);
// console.log(x <= y);

// // 3

// const ghanaian = true;
// const age = 17;

// function eligible2Vote(ghanaian, age) {
//   if(ghanaian === true && age >= 18) {
//     console.log(`You'r ${age} years and a Ghanaian. You are eligible to vote.`);    
//   } else {
//     console.log(`You are not eligible to vote.`);
//   }
// }

// eligible2Vote(ghanaian,age);
// eligible2Vote(true,24);

// // 4

// const passScore = (Maths, English, Science) => {
//   if(Maths >= 50 && English >= 50 && Science >= 50) {
//     console.log('You passed all subjects.');
//   } else{
//     console.log(`You didn't meet the score mark.`);
//   }
// }

// passScore(70,89,68);

// // 5

// const numberRange = (num) =>{
//   if(num >= 10 && num <= 20) {
//     console.log(`${num} is within the range of 10 and 20.`);
//   } else{
//     console.log(`${num} is not within the range of 10 and 20.`);
//   }
// }

// numberRange(21)

// // 6

// for(let i = 10; i <= 20; i++) {
//   console.log(i);
// }

// // 7

// const colors = ['blue', 'orange', 'purple', 'yellow', 'green'];

// console.log(colors)


// // class work in progress code below
// const students = [
//   {name: "Desmond", age: 12,},
//   {name: "Walter", age: 32,},
//   {name: "Susan", age: 4,},
//   {name: "Hafsat", age: 98,},
//   {name: "Daniella", age: 1,},
//   {name: "Benson", age: 23,},
//   {name: "Priscilla", age: 78,},
//   {name: "Nana", age: 46,},
//   {name: "Rebecca", age: 67,},
//   {name: "Philip", age: 200,},
// ];


for (let i = 0; i < students.length; i++) {
  if(students[i].age>30 && students[i].age<40) {
    console.log(students[i]);
  }
}

let students = [
  {name: "Desmond", age: 12, gen: 23},
  {name: "Walter", age: 32, gen: 28},
  {name: "Susan", age: 4, gen: 28},
  {name: "Hafsat", age: 98, gen: 23},
  {name: "Daniella", age: 1, gen: 23},
  {name: "Benson", age: 23, gen: 28},
  {name: "Priscilla", age: 78, gen: 28},
  {name: "Nana", age: 46, gen: 23},
  {name: "Rebecca", age: 67, gen: 23},
  {name: "Philip", age: 200, gen: 28},
];


for(let i = 0; i < students.length; i++) {
  // console.log(students[i].gen);
  if (students[i].gen === 28) {
    console.log(students[i]);
  }

}









