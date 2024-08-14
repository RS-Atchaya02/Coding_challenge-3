function countDivisible(arr, num) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % num === 0) {
      count++;
    }
  }
  return count;
}
let arr = [1, 2, 3, 4, 5, 6];
let num = 2;
console.log(countDivisible(arr, num)); 

// Output: 3(2, 4, 6 are divisible by 2
