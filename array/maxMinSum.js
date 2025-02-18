/**
 * Find the maximum possible sum and minimum possible sum
 * from a given array with 4 items of 5 items array.
 * 
 * input: [1,2,3,4,5]
 * output: 10 14
 */



const maxMinSum = (arr) => {
    const possibleSumArr = [];
    for (let i = 0; i < arr.length; i++) {
        const filterItemArr = arr.slice(0, i)
            .concat(arr.slice(i + 1));
        const singleSum = filterItemArr.reduce((acc, cur) => {
            acc = acc + cur
            return acc
        }, 0)
        possibleSumArr.push(singleSum)
    }
    const maxSum = Math.max(...possibleSumArr)
    const minSum = Math.min(...possibleSumArr)
    console.log(minSum, maxSum)
}
maxMinSum([1, 2, 3, 4, 5])