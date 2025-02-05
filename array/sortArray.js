/**
 * Sort an array by both using inbuilt function and 
 * using loops
 */


const arr = [1,1,2,3,4,5,6,7,6,5,4,0,9];

// first method

const sortedArr = arr.sort((a,b)=> a - b)


console.log("Sorted Array: ", sortedArr)