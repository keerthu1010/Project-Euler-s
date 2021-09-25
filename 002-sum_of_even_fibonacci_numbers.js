//Sum of even numbers of fibonacci series less than 4000000
let arr = [1, 1];
let sum=0;
while (arr[1]<=4000000)
{
    arr[1] = arr.shift() + arr[0];
    console.log(arr);
    if (arr[1]%2 == 0)
    {
        sum += arr[1];
    }
}
console.log(sum);