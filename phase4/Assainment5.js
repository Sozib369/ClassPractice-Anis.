  //! 🛠 Personal Budget Tracker Challenge (Phase 5 - conditional control statement)
/*
📌 Challenge Requirements:
Use if,else, relational operators:

Use if-else conditions to categorize the user’s financial status based on savings:

Excellent: If savings ≥ $1000
Good: If savings are between $500 - $999
Needs Improvement: If savings are between $100 - $499
Critical: If savings < $100
Use if-else conditions to determine if the user is overspending:

Show a warning if expenses are greater than income.
Enhance Console Output to display the user’s financial health status.
*/

const userName = prompt("Enter your Name : ");
const Income = prompt("Enter your Income : ");

let rent = parseFloat(prompt("Rent : "));
let groceries = parseFloat(prompt("Groceries : "));
let transport = parseFloat(prompt("Transport : "));
let entertainment = parseFloat(prompt("Entertainment : "));

const totalExpenses = rent + groceries + transport + entertainment ;

const Tex = Income * 0.1;

const blance = Income - (totalExpenses + Tex);

const savings = blance / 20;

// Show a Warning if expenses are greater than income.

let finalstage = '';

if(Income>=2000){
    finalstage = '💰 Excellent! You are saving well!';
}else if(Income>=1000){
    finalstage = 'Good';
}else if (Income>=500){
    finalstage = 'Improvement';
}else{
    finalstage = "Critical";
}

//Worning if expenses are greater than income
let  overspendingMessage = '';
if(totalExpenses < Income ){
    overspendingMessage = ' ⚠️ Warning: You are spending more than your income!';
}

console.log(`User : ${userName}`);
console.log(`💰 Total Income: ${Income} bd`);
console.log(`💸 Total Expenses: ${totalExpenses} bd`);
console.log(`📉 Tax Deducted (10%):${Tex.toFixed(2)} bd`);
console.log(` Net Income After Tax: ${blance} bd`);
console.log(`💾 Savings (20% of balance):${savings} bd`);
console.log(finalstage);
if(overspendingMessage){
    console.log(overspendingMessage);
}

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

// '⚠️ Warning: You are spending more than your income!';