//Largest prime factor of a num
let num = prompt("Enter a number to find its greatest prime factor:",0);
function isPrime(a){
    for (let i=2; i<a; i++){
        if (a%i==0){
            return false;
        }
    }
    return true;
}

outer:for (let i=Math.round(Math.sqrt(num)); i>1; i--){
    if (num%i==0 && (isPrime(i))){
        console.log(i);
        break outer;
    }
}