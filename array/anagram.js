/**
 * collect the item made with similar alphabet
 * and store in child array
 */


// method:1 is given int is anagram or not
const checkAnagram = (str1, str2)=>{
    const sortStr1 = str1.split('').sort().join('');
    const sortStr2 = str2.split('').sort().join('');
    if (sortStr1.length === sortStr1.length){
        return sortStr1 === sortStr2
    }else{
        return false
    }
}
console.log(checkAnagram('name',"men"))




// method2: group similar anagram
const arr = ['eat', 'ate', 'tea', 'dream', 'mared']

const anagram = (arr)=>{
    let sortArr = arr.map((item)=>{
        return item.split('').sort().join('')
    })
    const groupedArr = Object.values(
        sortArr.reduce((acc, str) => {
            acc[str] = acc[str] || []
            acc[str].push(str)
            return acc
        },{})
    )
    console.log("sortArr", groupedArr)
}

// anagram(arr);