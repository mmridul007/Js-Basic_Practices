function multiply(number1,number2){
    let result = number1 * number2;
    return result;
}

let total = multiply(20,10);
console.log('Multiply result is: '+total);

function penAmount(price){
    let penPrice = 5;
    console.log("Each Pen Price is: "+penPrice);
    console.log("Total Taka: "+price);
    let amount = price/penPrice;
    return amount;
}

let totalPen= penAmount(200);
console.log('Total Pen will be: '+totalPen);