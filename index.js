let celsius = 15;
let fahrenheit = (celsius * 9/5) + 32; 
console.log(`Температура у Фаренгейтах: ${fahrenheit}`);


let daysInMonth = 31; 
let hoursInMonth = daysInMonth * 24; 
let minutesInMonth = hoursInMonth * 60; 
console.log(`Годин у місяці: ${hoursInMonth}, хвилин у місяці: ${minutesInMonth}`);


let playerHealth = 100; 
let playerEnergy = 80;  
playerHealth -= 20; 
playerEnergy -= 15; 
console.log(`Рівень здоров'я: ${playerHealth}, рівень енергії: ${playerEnergy}`);


let purchaseAmount = 200; 
let discountedAmount = purchaseAmount * 0.9; 
console.log(`Сума зі знижкою: ${discountedAmount}`);


let floatNumber = 7.8; 
let roundedNumber = Math.floor(floatNumber); 
console.log(`Округлене число: ${roundedNumber}`);


let floatString = "3.14"; 
let parsedFloat = parseFloat(floatString); 
console.log(`Десяткове число: ${parsedFloat}`);


let intString = "42"; 
let parsedInt = parseInt(intString);
console.log(`Ціле число: ${parsedInt}`);


let number = 16; 
let squareRoot = Math.sqrt(number); 
console.log(`Квадратний корінь числа: ${squareRoot}`);


let integerValue = 123; 
let stringNumber = "456"; 
let convertedToInt = parseInt(stringNumber); 
let convertedToString = integerValue.toString(); 
console.log(`Перетворене ціле число: ${convertedToInt}, перетворене у рядок: ${convertedToString}`)