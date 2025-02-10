/**
 * collect the item made with similar alphabet
 * and store in child array
 */


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

anagram(arr);