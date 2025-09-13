//The maximum value 
function Max(arr) {
    let num = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > num) {
            num = arr[i];
        }
    }
    return num;	
}
const num1 = [1,2,3,4,5];
const result = Max(num1);
console.log(`The Max value in the array is: ${result}`);

//By using for each
const array = [1, 5, 2, 8, 3];
let max1 = array[0];

array.forEach(a => {
    if (a > max1) {
        max1 = a;
    }
});
console.log("Max value :", max1);

//by sorting
function Max3(arr) {
    arr.sort((a, b) => a - b); 
    return arr[arr.length - 1];
}
let arr = [10, 1, 2, 8];
console.log(`The Max value is : ${Max3(arr)}`);