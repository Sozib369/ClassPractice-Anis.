
let num = parseFloat(prompt("Enter your Number = "));

if (num>100 || num<0)
    
    console.log("Invalid marks");
else if(num >=80 && num<=100 )
    console.log("A+");
else if(num>=75 && num<=79 )
    console.log("A");
else if(num>=70 && num<=74)
    console.log("A-");
else if(num>=65 && num<=69)
    console.log("B+");
else if(num>=60 && num<=64)
    console.log("B-");
else if(num>=50 && num<=58)
    console.log("C");
else if(num>=33 && num<=49)
    console.log("D");
else 
    console.log("F");
