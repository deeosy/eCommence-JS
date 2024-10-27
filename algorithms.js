// let candles = [20,2,7,5,3,5,8,3,19]


// function birthdayCakeCandles(candles) {
//   // Write your code here
//   for (let i =0; i < candles.length; i++) {
//       for(let x =0; x < candles.length - 1; x++) {
//          if  (candles[x] > candles[x + 1]) {
//              let y = candles[x];
//              candles[x] = candles[x + 1];
//              candles[x + 1] = y;
//          } 
//         //  console.log(candles); shows the bubble sorted arrays from lowest to highest,
//       }
//   }
//     let lastNum = (candles.length-1); // will save the last value in the array which will be the higest candle
//     console.log(candles[lastNum]);
// }

// birthdayCakeCandles(candles);

// const nums = [5, 7, 6, 9, 8, 3, 2, 1, 0];
// // const arr = [   5,     7,     6,     9,     8,    3,    2,    1,    0];
// //                 x     x + 1
// const bubbleSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let x = 0; x < arr.length - 1; x++) {
//       if (arr[x] > arr[x + 1]) {
//         let y = arr[x];
//         arr[x] = arr[x + 1];
//         arr[x + 1] = y;
//       }
// console.log(arr);

//     }    
//   }
//   let lastNum = (arr.length-1);
//   console.log(arr[lastNum]);
// };
// bubbleSort(nums);


// let candles = [20,2,7,5,3,5,8,3,19,20,20]
// function birthdayCakeCandles(candles) {
//   // Write your code here

//     let highestCandle = Math.max(...candles);
//     console.log(highestCandle);
//     let count = candles.filter(candle => candle === highestCandle).length;
//     return count;
    
   
// }

// birthdayCakeCandles(candles)

function fibonacci(n) {
  const fib = [0,1]     // big O (1)

  for(let i =2; i < n; i++) {
    fib[i] = fib[i-1] + fib[i-2];    // big O (n)
    // console.log(fib[i])
  }
  return fib;       // big O (1)
}

// console.log(fibonacci(7));


function factorial(n) {
  let fac = 1;
  for(let i = 2; i <= n; i++) {
    fac = fac * i;
  }
  console.log(fac);
}



factorial(5)