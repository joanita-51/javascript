function div (a,b){
    if(b==0){
    throw new RangeError("Can't divide by 0");
}
    return a/b;
}

let numbers = [10,40,0,20,50];

for(i=0; i<numbers.length; i++){
    let result;
    try{
        result = div(1000, numbers[i]);
    }catch(error){
        console.log(error);
    }

 console.log(result);
}