/**
 * Reverse the string using an fund=ction
 */

const reverseStr = (str)=>{
    const val = str.split('').reverse().join('');
    console.log("Reverse String of ", str, " is ", val)
}

reverseStr('name');