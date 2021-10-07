//Largest prime factor of a num
//let num = prompt("Enter a number to find its greatest prime factor:",0);
/*function isPrime(a){
    for (let i=2; i<a; i++){
        if (a%i==0){
            return false;
        }
    }
    return true;
}*/

/*outer:for (let i=Math.round(Math.sqrt(num)); i>1; i--){
    if (num%i==0 && (isPrime(i))){
        console.log(i);
        break outer;
    }
}*/
num = 56;
prime_array = getPrimeList(num);
console.log(prime_array[prime_array.length-1]);

function getPrimeList(num){
max_p = Math.round(Math.sqrt(num));
num_arr=[];
new_arr=[];
for(let i=1; i<=num; i++){
    num_arr[i-1] = i;
}

for(let i=1; i<=max_p; i++){
    currValue = num_arr[i];
    if(currValue!=0){
        for(let j=i+1; j<=num-Array.length; j++){
            if(num_arr[j]%currValue == 0){
                num_arr[j] = 0;
            }

        }

    }

}

for(let i=1; i<=num_arr.length; i++){
    if (num_arr[i]!=0){
        new_arr.push(num_arr[i]);
        console.log (num_arr[i]);
    }
}
return new_arr;
}