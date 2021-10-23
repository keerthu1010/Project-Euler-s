//Factorial using recursion
let n = 5;

fact = getFactorial(n);
console.log(fact);

function getFactorial(num){
    if (num == 1){
        return 1;
    }
    fact = num * getFactorial(num -1);
    return fact;
}