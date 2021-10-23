//Sum of all primes below 2000000
function isPrime(a){
    for (let i=2; i<a; i++){
        if (a%i==0){
            return false;
        }
    }
    console.log(a);
    return true;
}
/*let sum=0;
for (let i=0; i<=2000000; i++){
    if (isPrime(i)) {
        sum += i;
    }
}
console.log(sum);*/

let res =fact(5);
console.log(res);