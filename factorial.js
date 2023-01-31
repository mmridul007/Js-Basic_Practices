function factorial(number){
    var result =1; 
    for(var i=1; i<=number; i++){
        result *= i;
    }
    return result;
}

console.log('Factorial: '+factorial(6));