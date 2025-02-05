/**
 * Find the distance between fisrt occure target alphabet
 * last occur target alphabet
*/

const targetAlphabet = (str, target)=>{
    const pureStr = str.replace(" ", "");
    const startIndx = pureStr.indexOf(target);
    const lastIdx = pureStr.lastIndexOf(target)
    const distance = lastIdx - startIndx;
    console.log("distance", distance)
}

targetAlphabet("My name is sartaj alam khan.", "a");