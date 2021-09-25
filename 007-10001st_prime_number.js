//10001st Prime number
function isPrime(a){
    for (let i=2; i<a; i++){
        if (a%i==0){
            return false;
        }
    }
    return true;
}

let counter=0;
let prime=0;
for (let i=2; ; i++){
    if (isPrime(i)) {
        counter++;
        if (counter == 10001){
           console.log(i);
           break;
        }        
    } 
}