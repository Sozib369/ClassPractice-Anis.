//! 🛠 Personal Budget Tracker Challenge (Phase 4 - Arithmetic operators)
/*
📌 Challenge Requirements:
Use arithmetic operators (+, -, *, /, %) to:
- Calculate total expenses by summing multiple expenses such as rent, groceries, transport, entertainment.
- Apply tax deduction (e.g., 10% of income).
- Calculate savings percentage (e.g., 20% of remaining balance).
- Update console output to display the new calculations.
*/

const userName = prompt("Enter your Name = ");
const income = parseFloat(prompt("Enter your Income = "));

let rent = parseFloat(prompt("Rent = "));
let groceries = parseFloat(prompt("Groceries = "));
let transport =parseFloat(prompt("Transport = "));
let entertainment = parseFloat(prompt("Entertainment = "));

let totalExpenses = rent + groceries + transport + entertainment;

let deduction = income * 0.1;

let blance = income - ( totalExpenses + deduction);

let savings = blance / 20;

console.log("Name : "+userName);
console.log("💰 Total Income: "+income);
console.log("💸 Total Expenses : "+totalExpenses);
console.log("📉 Tax Deducted (10%): "+deduction);
console.log("💲 Net Income After Tax:"+blance);
console.log("💾 Savings (20% of balance):"+savings.toFixed(2));


/*
🎯 Expected Console Output:
📊 Personal Budget Tracker
User: John Doe
💰 Total Income: $5000
💸 Total Expenses: $2300
📉 Tax Deducted (10%): $500
💲 Net Income After Tax: $4500
🟢 Remaining Balance: $2200
💾 Savings (20% of balance): $440 
*/