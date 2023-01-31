function findOddSum(numbers){
    var result = 0;
    for(var i = 0; i<numbers.length; i++){
        if(numbers[i]%2 !=0){
            result += numbers[i];
        }
    }
    return result;
}

var array = [5,7,8,10,45,30];
console.log(findOddSum(array));