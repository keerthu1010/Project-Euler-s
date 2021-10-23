//Lattice paths

//let num = prompt('Please give the matrix number (n*n)', 2);
num = 20;
moves = 2*num;

console.log(moves);
//The no. of combinations is given by (2n!/n!*n!)
no_of_combinations = fact(moves)/(fact(num)*fact(num));
console.log("There are "+no_of_combinations+" number of combinations in which the lattice path can be traversed");

//Factorial of a number
function fact(n){
    let pdt = 1;
    for(let i=n; i>=1; i--){
        pdt *=i;
    }
    console.log(pdt);
    return pdt;
}
    
