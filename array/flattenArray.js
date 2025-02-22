/**
 * Write a function to flatten a nested array in JavaScript.
 */

const arrs = [1,2,[4,5,6,[1,2]],[5,8,0,[4,5]],[5,7,0,[8,9,[3,5]]]]

// method 1: using flat
const flattenArr1 = (arr)=>{
    const flatArr = arr.flat(Infinity)
    console.log("Result1: ", flatArr)
}
// flattenArr1(arrs)

// method 2: usng reduce
const flattenArr2 = (arr) => {
    const flatArr = arr.reduce((acc, cur)=>{
        const val = acc.concat(Array.isArray(cur) ? flattenArr2(cur) : cur);
        return val
    },[])
    return flatArr
}
const Result2 = flattenArr2(arrs)
// console.log("Result2: ", Result2)

// method 3: for loop method
const flattenArr3 = (arr)=>{
    let newArr = [];
    const recurFn = (inputArr)=>{
        for (let i = 0; i < inputArr.length; i ++){
            if (Array.isArray(inputArr[i])){
                recurFn(inputArr[i])
            }else{
                newArr.push(inputArr[i])
            }
        }
     }
    recurFn(arr)
    return newArr
}
const result3 = flattenArr3(arrs);
console.log("result3", result3)
