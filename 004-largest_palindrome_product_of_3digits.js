//Largest palindrome product of 3 digits
let greatestPal=0;
outer:for (let i=999; i>99; i--){
    for (let j=999; j>99; j--){
        pdt = i*j;
        let rev = parseInt(pdt.toString().split('').reverse().join(''))
        if (pdt==rev && pdt>greatestPal){
            greatestPal=pdt;
        }

    }
}
console.log(greatestPal);