// 1 ) Create a Simple Object
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
}

// 2 ) Accessing Object Properties
console.log(car.make, car.year);

// 3 ) Nested Objects
const person = {
  name: "Derrode",
  age: 25,
  address: {
    street: "7th lime-link street",
    city: "Accra",
    zip: "00233",
  }
}

// 4 ) Array of Objects
const students = [
  {
    name: "Derrode",
    age: 25,
    grade: "A",
    isEnrolled: true,
  },
  {
    name: "Desmond",
    age: 22,
    grade: "A",
    isEnrolled: true,
  },
  {
    name: "Susan",
    age: 24,
    grade: "B",
    isEnrolled: false,
  }
];

for(let i = 0; i < students.length; i++) {
  console.log(students[i].name, students[i].grade)
}


let library = [ 
  {
      author: 'Bill Gates',
      title: 'The Road Ahead',
      readingStatus: true,
  },
  {
      author: 'Steve Jobs',
      title: 'Walter Isaacson',
      readingStatus: true,
  },
  {
      author: 'Suzanne Collins',
      title:  'Mockingjay: The Final Book of The Hunger Games', 
      readingStatus: false,
  }
];


for(let i=0; i < library.length; i++) {
  console.log(library[i].readingStatus);
}





