function make_avg(number1, number2, number3){
    var avg =(number1+number2+number3)/3;
    return avg;

}
var result = make_avg(20,30,50);
console.log('The avarage is: '+result.toFixed(2));