function findLeapYear(years){
    var leapYear = [];
    for(var i = 0; i<years.length; i++){
        
        if((years[i]%4 == 0 && years[i]%100 != 0 ) || (years[i] % 400 == 0)){
            leapYear.push(years[i]);
        }
        
    }
    return leapYear;
}

var array = [2022,2023,2024,2025,2026,2027,2028];
console.log(findLeapYear(array));