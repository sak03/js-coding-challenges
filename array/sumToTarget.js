/**
 * Find the sum of 2 items equals to target value
 * return items in array
 * 
 * First Senario
 * inpur arr: [1, 2, 3, 7, 5]
 * input target: 12 
 * output: [ 3, 4 ]
 * 
 * second senario
 * inpur arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * input target: 15 
 * output: [ 4, 9 ]
 */


// Method 1
const findIndexSum = (arr, target) => {
    let sumArr = [] // store all possible sum with their index valuse
    for (let i = 0; i < arr.length; i++) {
        let fistVal = arr[i];
        for (let j = 0; j < arr.length; j++) {
            const sumVal = fistVal + arr[j]
            sumArr.push([i, j, sumVal]);
        }
    }

    // filter with containing target values only
    const filterArr = sumArr.filter((item) => {
        return item[2] === target
    })

    // getting final results 
    if (filterArr.length > 0) {
        console.log("Result: ", [filterArr[0]?.[0], filterArr[0]?.[1]])
    } else {
        console.log("Result: ", -1)
    }
}

findIndexSum([1, 2, 3, 7, 5], 12)
findIndexSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15)
findIndexSum([7, 8, 9, 10], 9)