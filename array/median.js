/**
 * median
 */

const medianValue = (arr)=>{
    const arrLength = arr.length;
    const sortedArr = arr.sort((a, b) => a - b)
    let medianVal;
    if (arrLength % 2 !== 0) {
        medianVal = arr[((arrLength + 1) / 2)-1]
    } else {
        const sumVal = arr[(arrLength - 1) / 2] + arr[(arrLength + 1) / 2]
        medianVal = sumVal / 2
    }
    console.log(medianVal)
    return medianVal
}

medianValue([1,2,3,4])