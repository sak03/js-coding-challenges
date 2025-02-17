/**
 * Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
 */

// example
/**
 * arr = [1,1,0,-1,-1]
 * There are  elements, two positive, two negative and one zero. Their ratios are
 * 2/5=0.40000
 * 1/5=0.20000
 * 2/5=0.40000
 */

// solution
const plusMinus = (arr) => {
    let plusArr = [];
    let minusArr = [];
    let zeroArr = [];
    const arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        if (arr[i] > 0) {
            plusArr.push(arr[i])
        } else if (arr[i] < 0) {
            minusArr.push(arr[i])
        } else {
            zeroArr.push(arr[i])
        }
    }
    console.log("Plus Avg: ", plusArr.length / arrLength)
    console.log("Minus Avg: ", minusArr.length / arrLength)
    console.log("Zero Avg: ", zeroArr.length / arrLength)
    console.log("Plus Avg: ", plusArr, minusArr, zeroArr, arrLength)

}
plusMinus([1, 1, 0, -1, -1])