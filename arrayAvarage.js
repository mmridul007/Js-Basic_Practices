function make_avg(array){
    var countIndex =0;
    var count =0;
    for(var i =0; i<array.length ; i++){
        count += array[i];
        countIndex++; 
    }
    var average = count / countIndex;
    return average;
}

var array=[20,30,40,50,60];
var result = make_avg(array);
console.log('Avarage is : '+result);