/**
 * Remove duplicate elemnets from an array
 */


const arry = [1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 9]

// method:1, by set method
const uniqueArr1 = (arr)=>{
    const uniqueVal = [...new Set(arr)]
    return uniqueVal
}
const result1 = uniqueArr1(arry);
// console.log("result1", result1)

const uniqueArr2 = (arr)=>{
    const newArr = []
    for (let i = 0; i < arr.length; i ++){
       if (!newArr.includes(arr[i])){
           newArr.push(arr[i]); 
       }
   }
    return newArr
}
const result2 = uniqueArr2(arry);
console.log("result2", result2)

