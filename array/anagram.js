const arr = ['eat', 'ate', 'tea', 'dream', 'mared']

const anagram = (arr)=>{
    const sortArr = arr.map((item)=>{
        return item.split('').sort().join('')
    })
    console.log("sortArr", sortArr)
}

anagram(arr);