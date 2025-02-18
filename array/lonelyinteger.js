/**
 * find the item which is present only one time in the array
 * 
 * input: [1,2,3,4,3,2,1]
 * output: 4
 */

const lonelyinteger = (a)=>{
    const distrucArr = a.reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1
        return acc
    }, {});
    const destructObjArr = Object.entries(distrucArr)
    const filterArr = destructObjArr.filter((item)=>{
        return item[1] === 1
    })
    const filterArr0 = filterArr.flat(1)
    console.log(filterArr0[0]);

    const asd = a.reduce((acc, num) => acc ^ num, 0);
    console.log(asd);

}
lonelyinteger([0,0,1,2,1])