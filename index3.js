//! 🛠 Personal Budget Tracker Challenge (Phase 4 - Arithmetic operators)
/*
📌 Challenge Requirements:
Use arithmetic operators (+, -, *, /, %) to:
- Calculate total expenses by summing multiple expenses such as rent, groceries, transport, entertainment.
- Apply tax deduction (e.g., 10% of income).
- Calculate savings percentage (e.g., 20% of remaining balance).
- Update console output to display the new calculations.
*/

/*
🎯 Expected Console Output:
📊 Personal Budget Tracker
User: John Doe
💰 Total Income: 30,000 bd
💸 Total Expenses: 14,000
📉 Tax Deducted (10%): 
💲 Net Income After Tax: 
🟢 Remaining Balance: 
💾 Savings (20% of balance):
*/

const userName = "MD SOZIB ISLAM";
const income = 100000;

let rent = 7000;
let groceries = 3000;
let transport = 1000;
let entertainment = 1000;

let totaExpenses = rent + groceries + transport + entertainment;

let Deducted = income * 0.1;

let remaining =  income - totaExpenses;

let Savings = remaining / 20 ;


console.log("🎯 Expected Console Output:");
console.log("📊 Personal Budget Tracker");
console.log("User :" +userName);
console.log("Total income : "+ income);
console.log("💸Total Expenses : "+totaExpenses);
console.log("📉 Tax Deducted (10%) :"+Deducted);
console.log("🟢 Remaining Balance : "+remaining);
console.log("Savings (20% of balance) :"+Savings);