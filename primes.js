//Sum of multiples of 3 or 5 less than 1000
let sum=0;
for(let i=1; i<1000; i++){
    if(i%3==0 | i%5==0){
     sum += i;
    }
}
console.log(sum);

//Sum of even numbers of fibonacci series less than 4000000
let arr = [1, 1];
let sum=0;
while(arr[1]<=4000000)
{
    arr[1]=arr.shift()+arr[0];
    console.log(arr);
    if(arr[1]%2==0)
    {
        sum += arr[1];
    }
}
console.log(sum);

//Largest prime factor of a num
let num = prompt("Enter a number to find its greatest prime factor:",0);
function isPrime(a){
    for(let i=2; i<a; i++){
        if(a%i==0){
            return false;
        }
    }
    return true;
}

outer:for(let i=Math.round(Math.sqrt(num)); i>1; i--){
    if(num%i==0 && (isPrime(i))){
        console.log(i);
        break outer;
    }
}

//Largest palindrome product of 3 digits
let greatestPal=0;
outer:for (let i=999; i>99; i--){
    for (let j=999; j>99; j--){
        pdt = i*j;
        let rev = parseInt(pdt.toString().split('').reverse().join(''))
        if(pdt==rev && pdt>greatestPal){
            greatestPal=pdt;
        }

    }
}
console.log(greatestPal);

//Difference between the sum of the squares and the square of the sum of 1st 100 nat numbers
let sum=0;
let sumSq=0;
for (i=1; i<=100; i++){
    sum += i;
    sumSq += i*i;
}
console.log(Math.round(sumSq - sum*sum));

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


//Sum of adjacent 13 digits
let num = "7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450";
let num_arr = num.split('');
console.log(num_arr.length);
const pdt_13num = (prevValue, currValue) => prevValue * currValue;
let max_pdt=0;
let max_arr;
for (let i=0; i<988; i++){
        sub_arr = num_arr.slice(i, i+13);
        curr_pdt = sub_arr.reduce(pdt_13num);
        if (curr_pdt > max_pdt){
            max_pdt = curr_pdt;
            max_arr = sub_arr;
        }
    }
console.log(max_pdt);
console.log(max_arr);

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
let sum=0;
for (let i=0; i<=2000000; i++){
    if (isPrime(i)) {
        sum += i;
    }
}
console.log(sum);
