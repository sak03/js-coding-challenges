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
    console.log("Result2: ", flatArr)
    return flatArr
}
const Result2 = flattenArr2(arrs)
console.log("Result2: ", Result2)
