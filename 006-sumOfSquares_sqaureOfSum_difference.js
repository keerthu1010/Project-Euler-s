//Difference between the sum of the squares and the square of the sum of 1st 100 nat numbers
/*let sum=0;
let sumSq=0;
for (i=1; i<=100; i++){
    sum += i;
    sumSq += i*i;
}
console.log(Math.round(sumSq - sum*sum));*/

let n = 100;
sumOfSquares = (n(n+1)(2n+1))/6;
squareOfSum = (n(n+1)/2)^2;
console.log(Math.round(sumOfSquares - squareOfSum));