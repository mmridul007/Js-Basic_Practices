var mobile = {
    name: 'Iphone',
    model: '13 Pro Max',
    soc: 'Bionic A15',
    price: 144
}

console.log(mobile);
mobile.price= 160;
console.log(mobile);

var properties = Object.keys(mobile);
var propertyValue = Object.values(mobile);

console.log(properties);
console.log(propertyValue);