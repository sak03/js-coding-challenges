/**
 * Remove duplicate elemnets from an array
 */

const uniqueArr = (arr)=>{
    const uniqueVal = [...new Set(arr)]
    console.log("Result", uniqueVal)
}

uniqueArr([1,1,2,2,3,4,4,5,5,6,9])