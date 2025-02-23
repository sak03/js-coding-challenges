/**
 * fin the missing no from an array of sequence interger
 * array contain only integer start from 1.
 * 
 * input: [1,2,4,6,8]
 * output: [3,5,7]
 */

const arr1 = [1, 2, 4, 6, 8]
const missingNumber = (arr)=>{
    let missingNumArr = [];
    for(let i = 1; i <= arr.length; i ++){
        if (!arr.includes(i)){
            missingNumArr.push(i)
        }
    }
    return missingNumArr
}
console.log(missingNumber(arr1))