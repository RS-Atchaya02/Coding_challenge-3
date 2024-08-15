function IndexOfElement(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i; 
        }
    }
    return -1;
const myArray = [51, 23, 27, 34, 72, 3];
const targetElement = 72;

const index = IndexOfElement(myArray, targetElement);
console.log(index); // Output will be 4
