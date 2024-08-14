function Positive(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      return false;
    }
  }
  return true;
}
let arr=[54, 45,3,2]
console. log (Positive(arr))
