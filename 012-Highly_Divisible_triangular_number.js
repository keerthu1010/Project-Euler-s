//Highly divisible triangular number
let loop_count = 0;
let tri_num = 0;
outer: for(let i=5000; ;i++){
    loop_count++;
    if(loop_count==1){
        for(let k=1; k<=i; k++){
            tri_num += k;
        } 
    }else{
        tri_num += i;
    }

    factor_count = getFactorCount(tri_num);
    console.log(tri_num);
    console.log(factor_count);
    if(factor_count>500){
        console.log(tri_num);
        break outer;
    }
}
console.log("The final tri_num is"+tri_num);

/*function getFirstTriangularNumber(j){
    let sum = 0;
    for(let i=1; i<=j; i++){
        sum += i;
    }
    return sum;

}*/

function getFactorCount(j){
    let counter = 0;
    for(let i=1; i<=j; i++){
        if(j%i == 0){
            counter ++;
        }
    }
    return counter;
}