//Collatz sequence
let max_seq_counter = 0;
let coll_num = 0;
for(let i=5; i<=1000000; i++){
    counter = 0;
    console.log("Num = "+i);
    j=i;
    while(j>1){
        if(j%2==0){
            counter++;
            j = j/2;
        }
        else{
            counter++;
            j = 3*j+1;
        }
        console.log(j);
    }
    counter++;
    if(counter > max_seq_counter){
        max_seq_counter = counter;
        coll_num = i;
    }
    console.log("Counter = "+counter);    
}
console.log("Maximum Sequence Length = "+max_seq_counter);
console.log("Number that gives longest Collatz sequence = "+coll_num);
