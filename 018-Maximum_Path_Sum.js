//Maximum path sum
/*let data = `1
2 3
4 5 6`*/

let data = `75
95 64
17 47 82
18 35 87 10
20 04 82 47 65
19 01 23 75 03 34
88 02 77 73 07 63 67
99 65 04 28 06 16 70 92
41 41 26 56 83 40 80 70 33
41 48 72 33 47 32 37 16 94 29
53 71 44 65 25 43 91 52 97 51 14
70 11 33 28 77 73 17 78 39 68 17 57
91 71 52 38 17 14 91 43 58 50 27 29 48
63 66 04 68 89 53 67 30 73 16 69 87 40 31
04 62 98 27 23 09 70 98 73 93 38 53 60 04 23`;

//Composing the data into an array of arrays
data = data.split('\n');
for(let i=0; i<data.length; i++){
    data[i] = data[i].split(' ').map(x => +x)
}
console.log(data);

//using a global variable - Recursion
let sum = 0;
let max_sum = 0;
getSum(0, 0, sum, data.length);
console.log(max_sum);

function getSum(i, j, sum, n){
    if(i==n-1){
        sum  = sum+data[i][j];
        if(sum>max_sum){
            max_sum = sum;
        }
    }
    if (i<n) {
        getSum(i+1, j, sum+data[i][j], n);
        getSum(i+1, j+1, sum+data[i][j], n);
    }
}

//without a global variable
maximum_sum = getSum(0, 0, data.length);
console.log(maximum_sum);

function getSum(i, j, n){
    if(i==n-1){
        return data[i][j];
    }
    let max_sum = 0;
    let sum =0;
    if (i<n) {
        sum = data[i][j] + getSum(i+1, j, n);
        if (sum>max_sum){
            max_sum = sum;
        }
        sum = 0;
        sum = data[i][j] + getSum(i+1, j+1, n);
        if (sum>max_sum){
            max_sum = sum;
        }
    }
    return max_sum;
}




