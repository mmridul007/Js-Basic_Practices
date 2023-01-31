function odd_even(number){
    if(number%2==0){
        var result = number+' is Even';
    }
    else{
        var result = number+' is Odd';
    }
    return result;
}

console.log('The number: '+odd_even(41));