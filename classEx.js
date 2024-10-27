// 1

let sideA = 5;
let sideB = 6;
let sideC = 7;

let s = (sideA+sideB+sideC)/2;
console.log(s);
let area = Math.sqrt(s*(s-sideA)*(s-sideB)*(s-sideC))
console.log(area);

// 2
for(let i = 1; i<=20; i++) {
  console.log(i);
}

// 3
const arr = [1,'myname', true, 'sam']

for(let i=0; i<arr.length;i++) {
  console.log(arr[i]);
}

// 4
console.log(arr[3]);

// 5
  let a= 30;
  let b = 40;
  
if(a>b) {
  console.log('yes');
} else{
  console.log('no')
}

if(a<b) {
  console.log('yes');
} else{
  console.log('no')
}

if(a>=b) {
  console.log('yes');
} else{
  console.log('no')
}

if(a<=b) {
  console.log('yes');
} else{
  console.log('no')
}

if(a!==b) {
  console.log('yes');
} else{
  console.log('no')
}

console.log(a!==b && a!=b);
console.log(a!=b || a!==b);
console.log(a==b || a<b);
console.log(a<b || a!=b);
console.log(a>b && b>a);

