
var num1 = parseFloat(prompt("Enter first Number = "));
var num2 = parseFloat(prompt("Enter Second Number = "));
var num3 = parseFloat(prompt("Enter Third Number = "));

if(num1>num2 && num1>num3)
    console.log("Large Number = "+num1)
else if(num2 > num1 && num2 > num3 )
    console.log("Large Number = "+num2)
else
console.log("Large Number = "+num3)
