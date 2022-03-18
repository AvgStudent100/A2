num =5;
let isPrime=true;
if (num>1){
    for(let i=2;i<num;i++){
        if(num%i==0){
            isPrime=false;
            break;
        }
    }
if (isPrime){
    console.log(num,"Is a prime number")
}
else{
    console.log(num,"Is a composite num")
}
}
