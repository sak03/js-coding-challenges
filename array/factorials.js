/**
 * Find the factorials of given integer
 * input: 4
 * output: 24
 */


// using recursion method
const factorial1 = (n)=>{
    if(n === 0 || n === 1){
        return 1
    }
    return n * factorial1(n-1)
}
console.log(factorial1(5))


// using loop method
const factorial2 = (n)=>{
    let fact = 1;
    if (n === 0 || n === 1) {
         fact = 1
    }else{
        for(let i = 2; i <= n; i++){
            fact *= i;
        }
    }
    return fact
}
console.log(factorial2(4))
