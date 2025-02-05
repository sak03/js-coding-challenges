/**
 * Sort an array by both using inbuilt function and 
 * using loops
 */


const arr = [1, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 0, 9];

// first method
const sortedArr = arr.sort((a, b) => a - b)
console.log("Sorted Arr: ", sortedArr)

// second method
const sortedArray = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp
            }
        }
    }
    return arr
}

console.log("Sorted Array: ", sortedArray(arr))
